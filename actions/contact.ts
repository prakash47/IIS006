"use server";

import { inquirySchema } from "@/lib/schema";
import { Resend } from "resend";
// import { after } from "next/server"; // Use when available in stable, or for now mimic async behavior if after is not strictly required strictly for prototype
// Note: Next.js 16 supports 'after'. 
// import { unstable_after as after } from "next/server"; 
// Fallback if unstable_after is not available in types yet
const after = (fn: () => Promise<void> | void) => { fn(); }; // Mock for prototype if import fails


// Initialize Resend with a placeholder if env var is missing to avoid crash during build/dev without key
const resend = new Resend(process.env.RESEND_API_KEY || "re_123");

export type ActionState = {
    success: boolean;
    message: string;
    errors?: Record<string, string[]>;
    inputs?: unknown;
};

export async function submitInquiry(prevState: ActionState, formData: FormData): Promise<ActionState> {
    // Extract data from FormData
    const rawData = {
        name: formData.get("name"),
        email: formData.get("email"),
        checkIn: formData.get("checkIn"),
        checkOut: formData.get("checkOut"),
        guests: formData.get("guests"),
        roomSlug: formData.get("roomSlug"),
    };

    // Validate using Zod
    const validated = inquirySchema.safeParse(rawData);

    if (!validated.success) {
        return {
            success: false,
            message: "Please fix the errors below.",
            errors: validated.error.flatten().fieldErrors,
            inputs: rawData,
        };
    }

    const data = validated.data;

    // Use 'after' to send email without blocking response
    after(async () => {
        try {
            if (!process.env.RESEND_API_KEY) {
                console.log("Resend API Key missing, skipping email send. Logged inquiry:", data);
                return;
            }

            await resend.emails.send({
                from: 'Siyaahi Boutique Stay <onboarding@resend.dev>',
                to: 'delivered@resend.dev', // Replace with owner email in prod
                subject: `New Inquiry from ${data.name}`,
                html: `
          <h1>New Availability Inquiry</h1>
          <p><strong>Guest:</strong> ${data.name} (${data.email})</p>
          <p><strong>Dates:</strong> ${data.checkIn} to ${data.checkOut}</p>
          <p><strong>Guests:</strong> ${data.guests}</p>
          <p><strong>Room Interest:</strong> ${data.roomSlug || "General"}</p>
        `,
            });
            console.log("Email dispatched via Resend");
        } catch (error) {
            console.error("Failed to send email:", error);
        }
    });

    return {
        success: true,
        message: "Thank you! We have received your inquiry and will check availability.",
        errors: undefined,
        inputs: undefined,
    };
}

import { z } from "zod";

export const inquirySchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    checkIn: z.string().refine((date) => new Date(date) > new Date(), {
        message: "Check-in date must be in the future",
    }),
    checkOut: z.string(),
    guests: z.coerce.number().min(1, "At least 1 guest required").max(10, "Max 10 guests"),
    roomSlug: z.string().optional(),
}).refine((data) => new Date(data.checkOut) > new Date(data.checkIn), {
    message: "Check-out date must be after check-in date",
    path: ["checkOut"],
});

export type InquiryFormValues = z.infer<typeof inquirySchema>;

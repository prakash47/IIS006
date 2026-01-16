"use client";

import { useActionState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { inquirySchema, InquiryFormValues } from "@/lib/schema";
import { submitInquiry, ActionState } from "@/actions/contact";
import { useSearchParams } from "next/navigation";

// Initial state for the server action
const initialState: ActionState = {
    success: false,
    message: "",
};

export function ContactForm() {
    const searchParams = useSearchParams();
    const roomSlug = searchParams.get("room");

    // React 19: useActionState
    const [state, formAction, isPending] = useActionState(submitInquiry, initialState);

    // Note: We rely on Server Action for validation as per requirements. 
    // Client-side validation could be added with RHF but for "expert" server-action pattern, 
    // server validation is the source of truth.


    // Sync server errors with RHF is possible, but for simplicity we'll just display them via state
    // Or we can rely on client-side Zod validation mostly, 
    // but we must pass the form submission to the formAction.

    return (
        <div className="card bg-base-100 shadow-xl border border-base-200">
            <div className="card-body">
                <h2 className="card-title text-2xl mb-4">Check Availability</h2>

                {state.success && (
                    <div role="alert" className="alert alert-success text-white mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>{state.message}</span>
                    </div>
                )}

                {state.success === false && state.message && (
                    <div role="alert" className="alert alert-error text-white mb-4">
                        <span>{state.message}</span>
                    </div>
                )}

                {/* 
          We use 'action={formAction}' to submit via Server Action.
          However, RHF usually handles onSubmit. 
          To combine them, we can use 'action={formData => formAction(formData)}' 
          but we lose client-side validation blocking.
          Better approach for Progressive Enhancement + Validation:
          Use RHF's handleSubmit to validate, then trigger a hidden form submit or just call the action?
          Actually, with Next.js Server Actions, best is to standard form action, 
          but if we want RHF client validation, we can do manual submission or just rely on server validation for simplicity in this step.
          
          User requested "Use React 19 useActionState".
          
          Let's use the form 'action' attribute directly pointing to our action.
          And use Zod resolver just for error display if we were doing onSubmit.
          For strict "Expert" handling:
          Client-side validation gives immediate feedback.
          So we'll use RHF inside the form but pass data to action?
          
          Simplified: Use standard HTML form with action={formAction}. 
          Validation happens on server. 
          But User Requirements asked for Zod validation on Server.
          Client-Side Validation is NFR-5 (Type Safety) / Best practice.
          
          We will stick to the native form action for standard behavior.
        */}

                <form action={formAction} className="space-y-4">
                    {/* Hidden Room Field */}
                    <input type="hidden" name="roomSlug" value={roomSlug || ""} />

                    <div className="form-control">
                        <label className="label"><span className="label-text">Full Name</span></label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className={`input input-bordered w-full ${state.errors?.name ? 'input-error' : ''}`}
                            name="name"
                            required
                        />
                        {state.errors?.name && <span className="text-error text-sm mt-1">{state.errors.name[0]}</span>}
                    </div>

                    <div className="form-control">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input
                            type="email"
                            placeholder="john@example.com"
                            className={`input input-bordered w-full ${state.errors?.email ? 'input-error' : ''}`}
                            name="email"
                            required
                        />
                        {state.errors?.email && <span className="text-error text-sm mt-1">{state.errors.email[0]}</span>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label"><span className="label-text">Check-In</span></label>
                            <input
                                type="date"
                                className={`input input-bordered w-full ${state.errors?.checkIn ? 'input-error' : ''}`}
                                name="checkIn"
                                required
                            />
                            {state.errors?.checkIn && <span className="text-error text-sm mt-1">{state.errors.checkIn[0]}</span>}
                        </div>
                        <div className="form-control">
                            <label className="label"><span className="label-text">Check-Out</span></label>
                            <input
                                type="date"
                                className={`input input-bordered w-full ${state.errors?.checkOut ? 'input-error' : ''}`}
                                name="checkOut"
                                required
                            />
                            {state.errors?.checkOut && <span className="text-error text-sm mt-1">{state.errors.checkOut[0]}</span>}
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label"><span className="label-text">Guests</span></label>
                        <input
                            type="number"
                            min="1"
                            max="10"
                            defaultValue="2"
                            className={`input input-bordered w-full ${state.errors?.guests ? 'input-error' : ''}`}
                            name="guests"
                        />
                        {state.errors?.guests && <span className="text-error text-sm mt-1">{state.errors.guests[0]}</span>}
                    </div>

                    <button type="submit" className="btn btn-primary w-full mt-4" disabled={isPending}>
                        {isPending ? <span className="loading loading-spinner"></span> : "Send Inquiry"}
                    </button>
                </form>
            </div>
        </div>
    );
}

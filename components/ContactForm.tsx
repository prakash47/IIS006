"use client";

import { useActionState } from "react";
import { submitInquiry, ActionState } from "@/actions/contact";
import { useSearchParams } from "next/navigation";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

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

    return (
        <div className="space-y-6">
            {state.success && (
                <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800">
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                    <span>{state.message}</span>
                </div>
            )}

            {state.success === false && state.message && (
                <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-red-800">
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                    <span>{state.message}</span>
                </div>
            )}

            <form action={formAction} className="space-y-5">
                {/* Hidden Room Field */}
                <input type="hidden" name="roomSlug" value={roomSlug || ""} />

                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name
                    </label>
                    <input
                        type="text"
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent ${state.errors?.name ? "border-red-500" : "border-slate-200"
                            }`}
                        name="name"
                        required
                    />
                    {state.errors?.name && (
                        <span className="text-red-500 text-sm mt-1">{state.errors.name[0]}</span>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="john@example.com"
                        className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent ${state.errors?.email ? "border-red-500" : "border-slate-200"
                            }`}
                        name="email"
                        required
                    />
                    {state.errors?.email && (
                        <span className="text-red-500 text-sm mt-1">{state.errors.email[0]}</span>
                    )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Check-In
                        </label>
                        <input
                            type="date"
                            className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent ${state.errors?.checkIn ? "border-red-500" : "border-slate-200"
                                }`}
                            name="checkIn"
                            required
                        />
                        {state.errors?.checkIn && (
                            <span className="text-red-500 text-sm mt-1">{state.errors.checkIn[0]}</span>
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Check-Out
                        </label>
                        <input
                            type="date"
                            className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent ${state.errors?.checkOut ? "border-red-500" : "border-slate-200"
                                }`}
                            name="checkOut"
                            required
                        />
                        {state.errors?.checkOut && (
                            <span className="text-red-500 text-sm mt-1">{state.errors.checkOut[0]}</span>
                        )}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                        Number of Guests
                    </label>
                    <input
                        type="number"
                        min="1"
                        max="10"
                        defaultValue="2"
                        className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent ${state.errors?.guests ? "border-red-500" : "border-slate-200"
                            }`}
                        name="guests"
                    />
                    {state.errors?.guests && (
                        <span className="text-red-500 text-sm mt-1">{state.errors.guests[0]}</span>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 font-bold rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                    disabled={isPending}
                >
                    {isPending ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending...
                        </>
                    ) : (
                        "Send Inquiry"
                    )}
                </button>
            </form>
        </div>
    );
}

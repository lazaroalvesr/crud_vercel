'use client';

import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";
import { createTodo } from "./actions";

const initialState = {
    message: null,
}

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button type="submit" aria-disabled={pending}>
            ADD
        </button>
    )
}

export function AddForm() {
    const [state, formAction] = useFormState(createTodo, initialState)

    return (
        <form action={formAction}>
            <label htmlFor="todo">Entre </label>
            <input type="text" className="text-black" id="todo"
                name="todo" required
            />
            <SubmitButton />
            <p aria-live="polite" className="sr-only">
                {state?.message}
            </p>
        </form>
    )
}
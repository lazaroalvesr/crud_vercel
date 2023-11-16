'use client';

import React, { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";
import { deleteTodo } from "./actions";


const initialState = {
    message: null,
}

function DeleteButton() {
    const { pending } = useFormStatus();

    return (
        <button type="submit" aria-disabled={pending}>
            DELETE
        </button>
    )
}

export function DeleteForm() {
    const [state, formAction] = useFormState(deleteTodo, initialState)

    return (
        <form action={formAction}>
            <input type="hidden" name="id" value={id} />
            <input type="hidden" name="todo" value={todo} />
            <DeleteButton />
            <p aria-live="polite" className="sr-only" role="status">
                {state?.message}
            </p>
        </form>
    )
}
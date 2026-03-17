import { FieldErrors } from 'react-hook-form';

/**
 * Iterates through a list of field names and displays the first validation error encountered.
 *
 * @param errors - React Hook Form's error object.
 * @param fieldOrder
 */
export function showErrorMessage(errors: FieldErrors, fieldOrder: string[]) {
    for (const field of fieldOrder) {
        const fieldError = errors[field];

        if (fieldError?.message) {
            alert(String(fieldError.message));

            return;
        }
    }
}
/**
 * ✅ ENTELECHIA INVARIANT ENGINE — Canonical Errors
 *
 * Standard error classes for invariant violations.
 */
/**
 * Invariant Violation Error
 *
 * Thrown when an invariant check fails.
 */
export declare class InvariantViolationError extends Error {
    readonly invariantId: string;
    readonly category: string;
    readonly code: string;
    readonly context: Record<string, any>;
    constructor(invariantId: string, category: string, code: string, message: string, context?: Record<string, any>);
}
/**
 * Invariant Not Found Error
 *
 * Thrown when attempting to enforce a non-existent invariant.
 */
export declare class InvariantNotFoundError extends Error {
    readonly invariantId: string;
    constructor(invariantId: string);
}
/**
 * Invariant Collision Error
 *
 * Thrown when attempting to register an invariant with an existing ID.
 */
export declare class InvariantCollisionError extends Error {
    readonly invariantId: string;
    constructor(invariantId: string);
}
//# sourceMappingURL=errors.d.ts.map
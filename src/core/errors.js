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
export class InvariantViolationError extends Error {
    invariantId;
    category;
    code;
    context;
    constructor(invariantId, category, code, message, context = {}) {
        super(message);
        this.name = 'InvariantViolationError';
        this.invariantId = invariantId;
        this.category = category;
        this.code = code;
        this.context = context;
        Object.setPrototypeOf(this, InvariantViolationError.prototype);
    }
}
/**
 * Invariant Not Found Error
 *
 * Thrown when attempting to enforce a non-existent invariant.
 */
export class InvariantNotFoundError extends Error {
    invariantId;
    constructor(invariantId) {
        super(`Invariant ${invariantId} not found in registry`);
        this.name = 'InvariantNotFoundError';
        this.invariantId = invariantId;
        Object.setPrototypeOf(this, InvariantNotFoundError.prototype);
    }
}
/**
 * Invariant Collision Error
 *
 * Thrown when attempting to register an invariant with an existing ID.
 */
export class InvariantCollisionError extends Error {
    invariantId;
    constructor(invariantId) {
        super(`Invariant ${invariantId} already exists in registry`);
        this.name = 'InvariantCollisionError';
        this.invariantId = invariantId;
        Object.setPrototypeOf(this, InvariantCollisionError.prototype);
    }
}
//# sourceMappingURL=errors.js.map
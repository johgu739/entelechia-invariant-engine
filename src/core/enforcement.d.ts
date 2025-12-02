/**
 * ✅ ENTELECHIA INVARIANT ENGINE — Enforcement
 *
 * Core enforcement logic for invariants.
 */
import type { InvariantContext } from './types';
/**
 * Enforce an invariant
 *
 * @param invariantId - Full invariant ID (e.g. "UI_SCROLL.F82")
 * @param node - DOM node to check (optional)
 * @param context - Additional context
 * @throws InvariantViolationError if invariant fails
 * @throws InvariantNotFoundError if invariant doesn't exist
 */
export declare function enforceInvariant(invariantId: string, node?: HTMLElement | null, context?: InvariantContext): void;
/**
 * Check an invariant (non-throwing)
 *
 * Returns true if invariant passes, false otherwise.
 */
export declare function checkInvariant(invariantId: string, node?: HTMLElement | null, context?: InvariantContext): boolean;
//# sourceMappingURL=enforcement.d.ts.map
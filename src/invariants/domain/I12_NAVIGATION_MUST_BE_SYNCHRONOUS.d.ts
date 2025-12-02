/**
 * ✅ ENTELECHIA INVARIANT ENGINE — I12: Navigation Must Be Synchronous
 *
 * CATEGORY: DOMAIN_LOGIC
 * ENFORCEMENT: DURING_NAVIGATION
 *
 * Telos: Navigation must be synchronous, not async.
 * Navigation should not await promises or async operations.
 * This ensures deterministic navigation behavior.
 *
 * Enforcement:
 * - Prevents async navigation (await in navigation code)
 * - Ensures navigation is synchronous
 */
import type { InvariantDefinition } from '../../core/types';
export declare const I12_NAVIGATION_MUST_BE_SYNCHRONOUS: InvariantDefinition;
//# sourceMappingURL=I12_NAVIGATION_MUST_BE_SYNCHRONOUS.d.ts.map
/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F3: Router Guard Deterministic
 *
 * CATEGORY: DOMAIN_LOGIC
 * ENFORCEMENT: DURING_ROUTER_GUARD
 *
 * Telos: Router guard must be deterministic - no async work, no network calls.
 * Router guard should use cached data (snapshot) only.
 *
 * Enforcement:
 * - Prevents async work in router guard
 * - Prevents network calls in router guard
 * - Ensures router guard uses cached data only
 */
import type { InvariantDefinition } from '../../core/types';
export declare const F3_ROUTER_GUARD_DETERMINISTIC: InvariantDefinition;
//# sourceMappingURL=F3_ROUTER_GUARD_DETERMINISTIC.d.ts.map
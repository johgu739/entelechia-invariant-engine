/**
 * ✅ ENTELECHIA INVARIANT ENGINE — I15: No Navigation In Callbacks
 *
 * CATEGORY: DOMAIN_LOGIC
 * ENFORCEMENT: DURING_CALLBACK_EXECUTION
 *
 * Telos: Navigation must not happen in callbacks (event handlers, promise callbacks, etc.).
 * Navigation should happen in effects or explicit event handlers, not in nested callbacks.
 * This ensures deterministic navigation timing.
 *
 * Enforcement:
 * - Prevents navigation in callbacks (promise callbacks, nested handlers, etc.)
 * - Ensures navigation happens in effects or explicit event handlers
 */
import type { InvariantDefinition } from '../../core/types';
export declare const I15_NO_NAVIGATION_IN_CALLBACKS: InvariantDefinition;
//# sourceMappingURL=I15_NO_NAVIGATION_IN_CALLBACKS.d.ts.map
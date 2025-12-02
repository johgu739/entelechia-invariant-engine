/**
 * ✅ ENTELECHIA INVARIANT ENGINE — A1: Auth No Hard Navigations
 *
 * CATEGORY: DOMAIN_LOGIC
 * ENFORCEMENT: DURING_AUTH_FLOW
 *
 * Telos: No hard navigations (window.location.href) after login or during auth flows.
 * Must use SPA navigation (router.navigate) to preserve WebSocket connections and SPA state.
 *
 * Enforcement:
 * - Prevents window.location.href usage after login
 * - Ensures SPA navigation is used instead
 */
import type { InvariantDefinition } from '../../core/types';
export declare const A1_AUTH_NO_HARD_NAVIGATIONS: InvariantDefinition;
//# sourceMappingURL=A1_AUTH_NO_HARD_NAVIGATIONS.d.ts.map
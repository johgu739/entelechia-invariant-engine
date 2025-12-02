/**
 * ✅ ENTELECHIA INVARIANT ENGINE — A2: Auth SPA Identity Preservation
 *
 * CATEGORY: DOMAIN_LOGIC
 * ENFORCEMENT: DURING_AUTH_FLOW
 *
 * Telos: SPA identity must be preserved during auth flows.
 * No hard reloads (window.location.reload) that would destroy SPA state.
 * WebSocket connections and React state must be preserved.
 *
 * Enforcement:
 * - Prevents hard reloads during auth flows
 * - Ensures SPA state is preserved
 */
import type { InvariantDefinition } from '../../core/types';
export declare const A2_AUTH_SPA_IDENTITY_PRESERVATION: InvariantDefinition;
//# sourceMappingURL=A2_AUTH_SPA_IDENTITY_PRESERVATION.d.ts.map
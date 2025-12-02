/**
 * ✅ ENTELECHIA INVARIANT ENGINE — A11: Auth Settle Timeout
 *
 * CATEGORY: DOMAIN_LOGIC
 * ENFORCEMENT: AFTER_AUTH_REQUEST
 *
 * Telos: Auth state must settle within a timeout period.
 * If auth state does not settle within the timeout, the system must handle it gracefully.
 * This ensures deterministic auth state transitions.
 */
import type { InvariantDefinition } from '../../core/types';
export declare const A11_AUTH_SETTLE_TIMEOUT: InvariantDefinition;
//# sourceMappingURL=A11_AUTH_SETTLE_TIMEOUT.d.ts.map
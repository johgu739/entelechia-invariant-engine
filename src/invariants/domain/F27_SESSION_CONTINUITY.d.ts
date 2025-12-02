/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F27: Session Continuity
 *
 * CATEGORY: DOMAIN_LOGIC
 * ENFORCEMENT: DURING_AUTH_FLOW
 *
 * Telos: Session expiration must be handled gracefully without 401 spam.
 * When session expires, the system must prevent multiple failed requests.
 * This ensures user experience is not degraded by repeated 401 errors.
 *
 * Enforcement:
 * - Prevents multiple requests after session expiry (has401Spam check)
 * - Ensures graceful handling of expired sessions
 * - Tracks request count after expiry to detect spam patterns
 */
import type { InvariantDefinition } from '../../core/types';
export declare const F27_SESSION_CONTINUITY: InvariantDefinition;
//# sourceMappingURL=F27_SESSION_CONTINUITY.d.ts.map
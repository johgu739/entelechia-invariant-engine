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
import { InvariantViolationError } from '../../core/errors';
export const F27_SESSION_CONTINUITY = {
    category: 'DOMAIN_LOGIC',
    code: 'F27',
    name: 'Session Continuity',
    description: 'Session expiration must be handled gracefully without 401 spam. When session expires, the system must prevent multiple failed requests.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const has401Spam = context.has401Spam;
        const requestCountAfterExpiry = context.requestCountAfterExpiry;
        const hasGracefulHandling = context.hasGracefulHandling;
        const sessionState = context.sessionState;
        const sourceComponent = context.sourceComponent;
        // If 401 spam detected (multiple requests after expiry), that's a violation
        if (has401Spam === true) {
            throw new InvariantViolationError('DOMAIN_LOGIC.F27', 'DOMAIN_LOGIC', 'F27', `F27_SESSION_CONTINUITY violation: 401 spam detected. ${requestCountAfterExpiry || 0} requests made after session expiry. Session expiration must be handled gracefully without repeated 401 errors.`, {
                has401Spam: true,
                requestCountAfterExpiry: requestCountAfterExpiry || 0,
                hasGracefulHandling,
                sessionState,
                sourceComponent,
                source: context.sourceFile || 'unknown',
            });
        }
        // If request count after expiry exceeds threshold (spam pattern), that's a violation
        if (requestCountAfterExpiry !== undefined && requestCountAfterExpiry > 1) {
            throw new InvariantViolationError('DOMAIN_LOGIC.F27', 'DOMAIN_LOGIC', 'F27', `F27_SESSION_CONTINUITY violation: ${requestCountAfterExpiry} requests made after session expiry. Session expiration must be handled gracefully without repeated 401 errors.`, {
                has401Spam: true,
                requestCountAfterExpiry,
                hasGracefulHandling,
                sessionState,
                sourceComponent,
                source: context.sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=F27_SESSION_CONTINUITY.js.map
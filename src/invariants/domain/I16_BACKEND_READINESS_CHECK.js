/**
 * ✅ ENTELECHIA INVARIANT ENGINE — I16: Backend Readiness Check
 *
 * CATEGORY: DOMAIN_LOGIC
 * ENFORCEMENT: BEFORE_AUTH_REQUEST
 *
 * Telos: Backend readiness must be checked before making auth requests.
 * Prevents "Load failed" errors on refresh when backend is starting up.
 * This follows Stripe/Apple standard: health check before auth requests.
 */
import { InvariantViolationError } from '../../core/errors';
export const I16_BACKEND_READINESS_CHECK = {
    category: 'DOMAIN_LOGIC',
    code: 'I16',
    name: 'Backend Readiness Check',
    description: 'Backend readiness must be checked before making auth requests. Prevents "Load failed" errors on refresh when backend is starting up.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const isCheckingReadiness = context.isCheckingReadiness;
        const backendReady = context.backendReady;
        const timeout = context.timeout;
        const waitTime = context.waitTime;
        const maxWaitTime = context.maxWaitTime;
        const sourceComponent = context.sourceComponent;
        // If readiness check is being performed, that's good - no violation
        if (isCheckingReadiness === true) {
            return;
        }
        // If backend is ready, that's good - no violation
        if (backendReady === true) {
            return;
        }
        // If timeout occurred, that's a violation (backend not ready)
        if (timeout === true) {
            throw new InvariantViolationError('DOMAIN_LOGIC.I16', 'DOMAIN_LOGIC', 'I16', `I16_BACKEND_READINESS_CHECK violation: Backend not ready after timeout (${waitTime}ms / ${maxWaitTime}ms). Auth requests must wait for backend readiness.`, {
                timeout: true,
                waitTime,
                maxWaitTime,
                sourceComponent,
                source: context.sourceFile || 'unknown',
            });
        }
        // If backendReady is explicitly false and no timeout occurred, that's a violation
        // TypeScript: After checking timeout === true above, timeout can only be false | undefined here
        if (backendReady === false && (timeout === false || timeout === undefined)) {
            throw new InvariantViolationError('DOMAIN_LOGIC.I16', 'DOMAIN_LOGIC', 'I16', 'I16_BACKEND_READINESS_CHECK violation: Backend readiness check failed. Auth requests must wait for backend readiness.', {
                backendReady: false,
                sourceComponent,
                source: context.sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=I16_BACKEND_READINESS_CHECK.js.map
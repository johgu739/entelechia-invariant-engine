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
import { InvariantViolationError } from '../../core/errors';
export const A11_AUTH_SETTLE_TIMEOUT = {
    category: 'DOMAIN_LOGIC',
    code: 'A11',
    name: 'Auth Settle Timeout',
    description: 'Auth state must settle within a timeout period. If auth state does not settle within the timeout, the system must handle it gracefully.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const authSettled = context.authSettled;
        const timeoutExceeded = context.timeoutExceeded;
        const settleTime = context.settleTime;
        const maxSettleTime = context.maxSettleTime;
        const sourceComponent = context.sourceComponent;
        // If timeout exceeded, that's a violation
        if (timeoutExceeded === true) {
            throw new InvariantViolationError('DOMAIN_LOGIC.A11', 'DOMAIN_LOGIC', 'A11', `A11_AUTH_SETTLE_TIMEOUT violation: Auth state did not settle within timeout (${settleTime}ms / ${maxSettleTime}ms). Auth state must settle deterministically.`, {
                timeoutExceeded: true,
                settleTime,
                maxSettleTime,
                sourceComponent,
                source: context.sourceFile || 'unknown',
            });
        }
        // If auth not settled and no timeout exceeded, check if settle time exceeds max
        // TypeScript: After checking timeoutExceeded === true above, timeoutExceeded can only be false | undefined here
        if (authSettled === false && (timeoutExceeded === false || timeoutExceeded === undefined) && settleTime !== undefined && maxSettleTime !== undefined) {
            if (settleTime > maxSettleTime) {
                throw new InvariantViolationError('DOMAIN_LOGIC.A11', 'DOMAIN_LOGIC', 'A11', `A11_AUTH_SETTLE_TIMEOUT violation: Auth state settle time (${settleTime}ms) exceeds maximum (${maxSettleTime}ms). Auth state must settle within timeout.`, {
                    authSettled: false,
                    settleTime,
                    maxSettleTime,
                    sourceComponent,
                    source: context.sourceFile || 'unknown',
                });
            }
        }
    },
};
//# sourceMappingURL=A11_AUTH_SETTLE_TIMEOUT.js.map
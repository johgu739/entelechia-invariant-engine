/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F9: Unauthorized Redirect
 *
 * CATEGORY: DOMAIN_LOGIC
 * ENFORCEMENT: ON_AUTH_CHECK
 *
 * When a user is unauthorized, they MUST be redirected immediately.
 * No partial rendering, no flash of protected content.
 */
import { InvariantViolationError } from '../../core/errors';
export const F9_UNAUTHORIZED_REDIRECT = {
    category: 'DOMAIN_LOGIC',
    code: 'F9',
    name: 'Unauthorized Redirect',
    description: 'When a user is unauthorized, they MUST be redirected immediately. No partial rendering, no flash of protected content.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const unauthorizedAccessDetected = context.unauthorizedAccessDetected;
        const redirectExecuted = context.redirectExecuted;
        const redirectDelay = context.redirectDelay;
        const sourceComponent = context.sourceComponent;
        const sourceFile = context.sourceFile;
        if (unauthorizedAccessDetected === true && redirectExecuted !== true) {
            throw new InvariantViolationError('DOMAIN_LOGIC.F9', 'DOMAIN_LOGIC', 'F9', 'F9 violation: Unauthorized access detected but redirect not executed. User must be redirected immediately.', {
                unauthorizedAccessDetected: true,
                redirectExecuted: false,
                source: sourceComponent || sourceFile || 'unknown',
            });
        }
        if (unauthorizedAccessDetected === true && redirectDelay !== undefined && redirectDelay > 0) {
            throw new InvariantViolationError('DOMAIN_LOGIC.F9', 'DOMAIN_LOGIC', 'F9', `F9 violation: Unauthorized redirect delayed by ${redirectDelay}ms. Redirect must be immediate.`, {
                unauthorizedAccessDetected: true,
                redirectExecuted: true,
                redirectDelay,
                source: sourceComponent || sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=F9_UNAUTHORIZED_REDIRECT.js.map
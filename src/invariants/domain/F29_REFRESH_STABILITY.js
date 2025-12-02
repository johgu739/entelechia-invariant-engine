/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F29: Refresh Stability
 *
 * CATEGORY: DOMAIN_LOGIC
 * ENFORCEMENT: RUNTIME
 */
import { InvariantViolationError } from '../../core/errors';
export const F29_REFRESH_STABILITY = {
    category: 'DOMAIN_LOGIC',
    code: 'F29',
    name: 'Refresh Stability',
    description: 'Ensures refresh token stability - refresh token must not be invalidated during refresh operation unless explicitly required (e.g., security rotation).',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const refreshTokenInvalidated = context.refreshTokenInvalidated;
        const invalidatedReason = context.invalidatedReason;
        const isSecurityRotation = context.isSecurityRotation;
        const sourceComponent = context.sourceComponent;
        if (refreshTokenInvalidated === true && isSecurityRotation !== true) {
            throw new InvariantViolationError('DOMAIN_LOGIC.F29', 'DOMAIN_LOGIC', 'F29', `F29_REFRESH_STABILITY violation: Refresh token was invalidated during refresh operation without security rotation. Reason: ${invalidatedReason || 'unknown'}`, {
                refreshTokenInvalidated: true,
                invalidatedReason,
                isSecurityRotation: false,
                sourceComponent,
                source: context.sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=F29_REFRESH_STABILITY.js.map
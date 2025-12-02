/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F45: Auth-Persistence-First-Frame
 *
 * CATEGORY: SYSTEM_STATE
 * ENFORCEMENT: ON_FIRST_RENDER
 */
import { InvariantViolationError } from '../../core/errors';
export const F45_AUTH_PERSISTENCE_FIRST_FRAME = {
    category: 'SYSTEM_STATE',
    code: 'F45',
    name: 'Auth-Persistence-First-Frame',
    description: 'Auth state must be persisted and available on first frame. No auth check delay on page reload.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const authNotAvailableOnFirstFrame = context.authNotAvailableOnFirstFrame;
        const hasPersistedAuth = context.hasPersistedAuth;
        if (authNotAvailableOnFirstFrame && hasPersistedAuth) {
            throw new InvariantViolationError('SYSTEM_STATE.F45', 'SYSTEM_STATE', 'F45', 'F45 violation: Auth state not available on first frame when persisted auth exists. Must load persisted auth synchronously.', {
                authNotAvailableOnFirstFrame,
                hasPersistedAuth,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=F45_AUTH_PERSISTENCE_FIRST_FRAME.js.map
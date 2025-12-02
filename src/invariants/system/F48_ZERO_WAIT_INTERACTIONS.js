/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F48: Zero-Wait-Interactions
 *
 * CATEGORY: SYSTEM_STATE
 * ENFORCEMENT: ON_DEMAND
 */
import { InvariantViolationError } from '../../core/errors';
export const F48_ZERO_WAIT_INTERACTIONS = {
    category: 'SYSTEM_STATE',
    code: 'F48',
    name: 'Zero-Wait-Interactions',
    description: 'User interactions must never wait for network or async operations. All interactions must be immediate and responsive.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const interactionWaitsForNetwork = context.interactionWaitsForNetwork;
        const interactionWaitsForAsync = context.interactionWaitsForAsync;
        if (interactionWaitsForNetwork || interactionWaitsForAsync) {
            throw new InvariantViolationError('SYSTEM_STATE.F48', 'SYSTEM_STATE', 'F48', 'F48 violation: User interaction waits for network or async operation. Interactions must be immediate.', {
                interactionWaitsForNetwork,
                interactionWaitsForAsync,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=F48_ZERO_WAIT_INTERACTIONS.js.map
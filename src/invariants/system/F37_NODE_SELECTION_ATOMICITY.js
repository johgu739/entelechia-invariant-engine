/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F37: Node-Selection-Atomicity
 *
 * CATEGORY: SYSTEM_STATE
 * ENFORCEMENT: BEFORE_ROUTE_RESOLUTION
 */
import { InvariantViolationError } from '../../core/errors';
export const F37_NODE_SELECTION_ATOMICITY = {
    category: 'SYSTEM_STATE',
    code: 'F37',
    name: 'Node-Selection-Atomicity',
    description: 'Node selection updates must be atomic - no intermediate states. Selection must update synchronously with navigation.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const hasIntermediateSelectionState = context.hasIntermediateSelectionState;
        const selectionUpdateAsync = context.selectionUpdateAsync;
        if (hasIntermediateSelectionState || selectionUpdateAsync) {
            throw new InvariantViolationError('SYSTEM_STATE.F37', 'SYSTEM_STATE', 'F37', 'F37 violation: Non-atomic node selection update detected. Selection must update synchronously.', {
                hasIntermediateSelectionState,
                selectionUpdateAsync,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=F37_NODE_SELECTION_ATOMICITY.js.map
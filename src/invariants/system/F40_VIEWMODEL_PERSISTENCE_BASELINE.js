/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F40: ViewModel-Persistence-Baseline
 *
 * CATEGORY: SYSTEM_STATE
 * ENFORCEMENT: ON_FIRST_RENDER
 */
import { InvariantViolationError } from '../../core/errors';
export const F40_VIEWMODEL_PERSISTENCE_BASELINE = {
    category: 'SYSTEM_STATE',
    code: 'F40',
    name: 'ViewModel-Persistence-Baseline',
    description: 'ViewModel must use persisted baseline if available. Persisted ViewModel must be loaded synchronously before first render.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const viewModelUsesNetworkBeforePersisted = context.viewModelUsesNetworkBeforePersisted;
        const hasPersistedViewModel = context.hasPersistedViewModel;
        const nodeId = context.nodeId;
        if (viewModelUsesNetworkBeforePersisted && hasPersistedViewModel && nodeId) {
            throw new InvariantViolationError('SYSTEM_STATE.F40', 'SYSTEM_STATE', 'F40', `F40 violation: ViewModel uses network before persisted baseline for node ${nodeId}. Must use persisted ViewModel first.`, {
                viewModelUsesNetworkBeforePersisted,
                hasPersistedViewModel,
                nodeId,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=F40_VIEWMODEL_PERSISTENCE_BASELINE.js.map
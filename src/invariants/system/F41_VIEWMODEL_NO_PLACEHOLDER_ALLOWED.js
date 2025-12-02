/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F41: ViewModel-No-Placeholder-Allowed
 *
 * CATEGORY: SYSTEM_STATE
 * ENFORCEMENT: ON_FIRST_RENDER
 */
import { InvariantViolationError } from '../../core/errors';
export const F41_VIEWMODEL_NO_PLACEHOLDER_ALLOWED = {
    category: 'SYSTEM_STATE',
    code: 'F41',
    name: 'ViewModel-No-Placeholder-Allowed',
    description: 'ViewModel must never show placeholder if persisted ViewModel exists. Placeholders are only allowed when no persisted data is available.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const showsPlaceholder = context.showsPlaceholder;
        const hasPersistedViewModel = context.hasPersistedViewModel;
        const nodeId = context.nodeId;
        if (showsPlaceholder && hasPersistedViewModel && nodeId) {
            throw new InvariantViolationError('SYSTEM_STATE.F41', 'SYSTEM_STATE', 'F41', `F41 violation: ViewModel shows placeholder for node ${nodeId} when persisted ViewModel exists. Must use persisted ViewModel.`, {
                showsPlaceholder,
                hasPersistedViewModel,
                nodeId,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=F41_VIEWMODEL_NO_PLACEHOLDER_ALLOWED.js.map
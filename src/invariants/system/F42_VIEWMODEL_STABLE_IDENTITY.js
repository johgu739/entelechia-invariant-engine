/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F42: ViewModel-Stable-Identity
 *
 * CATEGORY: SYSTEM_STATE
 * ENFORCEMENT: AFTER_TRANSITION_COMPLETE
 */
import { InvariantViolationError } from '../../core/errors';
export const F42_VIEWMODEL_STABLE_IDENTITY = {
    category: 'SYSTEM_STATE',
    code: 'F42',
    name: 'ViewModel-Stable-Identity',
    description: 'ViewModel must maintain stable identity across transitions. No remount or identity change when switching between nodes.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const viewModelIdentityChanged = context.viewModelIdentityChanged;
        const viewModelRemounted = context.viewModelRemounted;
        if (viewModelIdentityChanged || viewModelRemounted) {
            throw new InvariantViolationError('SYSTEM_STATE.F42', 'SYSTEM_STATE', 'F42', 'F42 violation: ViewModel identity changed or remounted during transition. Must maintain stable identity.', {
                viewModelIdentityChanged,
                viewModelRemounted,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=F42_VIEWMODEL_STABLE_IDENTITY.js.map
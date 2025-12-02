/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F59: Layout Teleology Invariant
 *
 * CATEGORY: UI_LAYOUT
 * ENFORCEMENT: BEFORE_ROUTE_RESOLUTION
 */
import { InvariantViolationError } from '../../core/errors';
export const F59_LAYOUT_TELEOLOGY_INVARIANT = {
    category: 'UI_LAYOUT',
    code: 'F59',
    name: 'Layout Teleology Invariant',
    description: 'Metaphysical invariant ensuring FORM (layout), ACT (router navigation), and STATE (SystemStateView) are aligned. FORM must be present before ACT or STATE. ACT must not run without correct FORM. STATE must never be consumed outside correct FORM.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const formPresent = context.formPresent;
        const actRunsWithoutForm = context.actRunsWithoutForm;
        const stateConsumedOutsideForm = context.stateConsumedOutsideForm;
        const routerResolvesWithoutFrameIdentity = context.routerResolvesWithoutFrameIdentity;
        const workspaceViewMountsBeforeLayout = context.workspaceViewMountsBeforeLayout;
        const systemStateViewConsumedBeforeLayoutVerified = context.systemStateViewConsumedBeforeLayoutVerified;
        if (formPresent === false && (actRunsWithoutForm === true || stateConsumedOutsideForm === true)) {
            throw new InvariantViolationError('UI_LAYOUT.F59', 'UI_LAYOUT', 'F59', 'F59_LAYOUT_TELEOLOGY_INVARIANT violation: FORM (layout) not present before ACT (router navigation) or STATE (SystemStateView). FORM must be present first.', {
                formPresent: false,
                actRunsWithoutForm,
                stateConsumedOutsideForm,
                routerPath: context.routerPath || 'unknown',
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
        if (actRunsWithoutForm === true) {
            throw new InvariantViolationError('UI_LAYOUT.F59', 'UI_LAYOUT', 'F59', 'F59_LAYOUT_TELEOLOGY_INVARIANT violation: ACT (router navigation) runs without correct FORM (layout). ACT must not run without FORM.', {
                actRunsWithoutForm: true,
                routerPath: context.routerPath || 'unknown',
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
        if (stateConsumedOutsideForm === true) {
            throw new InvariantViolationError('UI_LAYOUT.F59', 'UI_LAYOUT', 'F59', 'F59_LAYOUT_TELEOLOGY_INVARIANT violation: STATE (SystemStateView) consumed outside correct FORM (layout). STATE must not be consumed outside FORM.', {
                stateConsumedOutsideForm: true,
                routerPath: context.routerPath || 'unknown',
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
        if (routerResolvesWithoutFrameIdentity === true) {
            throw new InvariantViolationError('UI_LAYOUT.F59', 'UI_LAYOUT', 'F59', 'F59_LAYOUT_TELEOLOGY_INVARIANT violation: Router resolves route without verifying frame identity. Router must verify frame identity BEFORE resolving route.', {
                routerResolvesWithoutFrameIdentity: true,
                routerPath: context.routerPath || 'unknown',
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
        if (workspaceViewMountsBeforeLayout === true) {
            throw new InvariantViolationError('UI_LAYOUT.F59', 'UI_LAYOUT', 'F59', 'F59_LAYOUT_TELEOLOGY_INVARIANT violation: WorkspaceView mounts before layout. Layout must be mounted BEFORE WorkspaceView mounts.', {
                workspaceViewMountsBeforeLayout: true,
                routerPath: context.routerPath || 'unknown',
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
        if (systemStateViewConsumedBeforeLayoutVerified === true) {
            throw new InvariantViolationError('UI_LAYOUT.F59', 'UI_LAYOUT', 'F59', 'F59_LAYOUT_TELEOLOGY_INVARIANT violation: SystemStateView consumed before layout is verified. SystemStateView must not be consumed until layout is verified.', {
                systemStateViewConsumedBeforeLayoutVerified: true,
                routerPath: context.routerPath || 'unknown',
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=F59_LAYOUT_TELEOLOGY_INVARIANT.js.map
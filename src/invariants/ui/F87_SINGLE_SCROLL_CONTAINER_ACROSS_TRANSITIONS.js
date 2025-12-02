/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F87: Single Scroll Container Across Transitions
 *
 * CATEGORY: UI_SCROLL
 * ENFORCEMENT: ON_NAVIGATION
 */
import { InvariantViolationError } from '../../core/errors';
export const F87_SINGLE_SCROLL_CONTAINER_ACROSS_TRANSITIONS = {
    category: 'UI_SCROLL',
    code: 'F87',
    name: 'Single Scroll Container Across Transitions',
    description: 'Scroll container must not change during route transitions. Scroll position must be preserved. No scroll container remounts during transitions.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const scrollContainerChanged = context.scrollContainerChanged;
        const scrollPositionLost = context.scrollPositionLost;
        const scrollContainerRemounted = context.scrollContainerRemounted;
        const multipleScrollContainersDuringTransition = context.multipleScrollContainersDuringTransition;
        const fromRoute = context.fromRoute;
        const toRoute = context.toRoute;
        const routerPath = context.routerPath;
        if (scrollContainerChanged === true) {
            throw new InvariantViolationError('UI_SCROLL.F87', 'UI_SCROLL', 'F87', 'F87 violation: Scroll container changed during route transition. Scroll container identity must remain constant.', {
                scrollContainerChanged: true,
                fromRoute,
                toRoute,
                routerPath,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
        if (scrollPositionLost === true) {
            throw new InvariantViolationError('UI_SCROLL.F87', 'UI_SCROLL', 'F87', 'F87 violation: Scroll position lost during route transition. Scroll position must be preserved.', {
                scrollPositionLost: true,
                fromRoute,
                toRoute,
                routerPath,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
        if (scrollContainerRemounted === true) {
            throw new InvariantViolationError('UI_SCROLL.F87', 'UI_SCROLL', 'F87', 'F87 violation: Scroll container remounted during route transition. Scroll container must not remount.', {
                scrollContainerRemounted: true,
                fromRoute,
                toRoute,
                routerPath,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
        if (multipleScrollContainersDuringTransition === true) {
            throw new InvariantViolationError('UI_SCROLL.F87', 'UI_SCROLL', 'F87', 'F87 violation: Multiple scroll containers detected during transition. Only one primary scroll container must exist.', {
                multipleScrollContainersDuringTransition: true,
                fromRoute,
                toRoute,
                routerPath,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=F87_SINGLE_SCROLL_CONTAINER_ACROSS_TRANSITIONS.js.map
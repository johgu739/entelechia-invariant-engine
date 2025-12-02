/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F82: Single Scroll Container
 *
 * CATEGORY: UI_SCROLL
 * ENFORCEMENT: AFTER_LAYOUT_COMMIT
 *
 * Telos: Only one element in the entire UI may scroll.
 * The scroll-surface is part of FORM, not STYLE.
 */
import { InvariantViolationError } from '../../core/errors';
export const F82_SINGLE_SCROLL_CONTAINER = {
    category: 'UI_SCROLL',
    code: 'F82',
    name: 'Single Scroll Container',
    description: 'Only one element in the entire UI may scroll. Scroll-surface is part of FORM, not STYLE.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const scrollContainerCount = context.scrollContainerCount;
        const multipleScrollContainers = context.multipleScrollContainers;
        const ancestorOverflowHiddenWithoutHeight = context.ancestorOverflowHiddenWithoutHeight;
        const competingScrollContexts = context.competingScrollContexts;
        const scrollableChildInScrollableParent = context.scrollableChildInScrollableParent;
        const scrollContainerIds = context.scrollContainerIds;
        const routePath = context.routerPath;
        // ✅ FIX: Only violate if >1 scroll containers, not if 0 (0 is valid during initial render)
        if (multipleScrollContainers === true || (scrollContainerCount !== undefined && scrollContainerCount > 1)) {
            throw new InvariantViolationError('UI_SCROLL.F82', 'UI_SCROLL', 'F82', `F82_SINGLE_SCROLL_CONTAINER violation: Multiple scroll contexts detected. Found ${scrollContainerCount} scroll containers. Only one scroll container allowed.`, {
                multipleScrollContainers: true,
                scrollContainerCount,
                scrollContainerIds,
                routePath,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
        // ✅ FIX: If exactly 0 scroll containers, this is OK (may be initial render or non-scrollable route)
        // Only warn in development, don't throw error
        if (scrollContainerCount === 0 && import.meta.env?.DEV) {
            console.debug('[F82] No scroll container detected (may be initial render or non-scrollable route)');
        }
        if (ancestorOverflowHiddenWithoutHeight === true) {
            throw new InvariantViolationError('UI_SCROLL.F82', 'UI_SCROLL', 'F82', 'F82_SINGLE_SCROLL_CONTAINER violation: Ancestor of scroll container uses overflow: hidden without fixed height. This breaks scroll purity.', {
                ancestorOverflowHiddenWithoutHeight: true,
                routePath,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
        if (competingScrollContexts === true) {
            throw new InvariantViolationError('UI_SCROLL.F82', 'UI_SCROLL', 'F82', 'F82_SINGLE_SCROLL_CONTAINER violation: Competing scroll contexts detected inside flex parents. Only one scroll context allowed.', {
                competingScrollContexts: true,
                routePath,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
        if (scrollableChildInScrollableParent === true) {
            throw new InvariantViolationError('UI_SCROLL.F82', 'UI_SCROLL', 'F82', 'F82_SINGLE_SCROLL_CONTAINER violation: Scrollable child detected inside scrollable parent. No nested scroll containers allowed.', {
                scrollableChildInScrollableParent: true,
                routePath,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=F82_SINGLE_SCROLL_CONTAINER.js.map
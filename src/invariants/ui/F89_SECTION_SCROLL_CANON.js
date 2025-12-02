/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F89: Section Scroll Canon
 *
 * CATEGORY: UI_SCROLL
 * ENFORCEMENT: AFTER_LAYOUT_COMMIT
 */
import { InvariantViolationError } from '../../core/errors';
export const F89_SECTION_SCROLL_CANON = {
    category: 'UI_SCROLL',
    code: 'F89',
    name: 'Section Scroll Canon',
    description: 'Ensures exactly one scroll container per major section. No conditional scroll logic, no expanding children inside scroll containers.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const sectionScrollContainerCount = context.sectionScrollContainerCount;
        const hasConditionalScrollLogic = context.hasConditionalScrollLogic;
        const hasExpandingChildrenInScrollContainer = context.hasExpandingChildrenInScrollContainer;
        const sectionName = context.sectionName;
        if (sectionScrollContainerCount !== undefined && sectionScrollContainerCount !== 1) {
            throw new InvariantViolationError('UI_SCROLL.F89', 'UI_SCROLL', 'F89', `F89 violation: Section "${sectionName || 'unknown'}" has ${sectionScrollContainerCount} scroll containers. Exactly one scroll container per section required.`, {
                sectionScrollContainerCount,
                sectionName,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
        if (hasConditionalScrollLogic === true) {
            throw new InvariantViolationError('UI_SCROLL.F89', 'UI_SCROLL', 'F89', 'F89 violation: Conditional scroll logic detected. No conditional scroll logic allowed.', {
                hasConditionalScrollLogic: true,
                sectionName,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
        if (hasExpandingChildrenInScrollContainer === true) {
            throw new InvariantViolationError('UI_SCROLL.F89', 'UI_SCROLL', 'F89', 'F89 violation: Expanding children detected inside scroll container. No expanding children allowed in scroll containers.', {
                hasExpandingChildrenInScrollContainer: true,
                sectionName,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=F89_SECTION_SCROLL_CANON.js.map
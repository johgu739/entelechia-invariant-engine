/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F005: Form Single Scroll Container
 *
 * CATEGORY: UI_FORM
 * ENFORCEMENT: ON_FORM_RENDER
 *
 * Telos: Forms must have exactly one scroll container.
 * Multiple scroll containers cause competing scroll contexts and user confusion.
 * FORM: Single scroll region (flex-1 min-h-0 overflow-y-auto). ACT: User scrolls one region. STATE: Scroll position maintained correctly.
 */
import { InvariantViolationError } from '../../core/errors';
export const F005_FORM_SINGLE_SCROLL = {
    category: 'UI_FORM',
    code: 'F005',
    name: 'Form Single Scroll Container',
    description: 'Forms must have exactly one scroll container. Multiple scroll containers cause competing scroll contexts and user confusion.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        // Placeholder - must not throw
        // Runtime enforcement will be implemented later
        const scrollContainerCount = context.scrollContainerCount;
        const expectedCount = 1;
        if (scrollContainerCount !== undefined && scrollContainerCount !== expectedCount) {
            throw new InvariantViolationError('UI_FORM.F005', 'UI_FORM', 'F005', `F005 violation: Form has ${scrollContainerCount} scroll containers, expected ${expectedCount}. Forms must have exactly one scroll container.`, {
                scrollContainerCount,
                expectedCount,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=F005_FORM_SINGLE_SCROLL.js.map
/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F004: Form Canonical Padding
 *
 * CATEGORY: UI_FORM
 * ENFORCEMENT: ON_FORM_RENDER
 *
 * Telos: Form containers must use canonical padding: 24px horizontal, 16px vertical.
 * Canonical padding ensures visual consistency with rest of UI.
 * FORM: PADDING.X (24px), PADDING.Y (16px). ACT: Form renders with canonical padding. STATE: Visual consistency maintained.
 */
import { InvariantViolationError } from '../../core/errors';
export const F004_FORM_CANONICAL_PADDING = {
    category: 'UI_FORM',
    code: 'F004',
    name: 'Form Canonical Padding',
    description: 'Form containers must use canonical padding: 24px horizontal, 16px vertical. Canonical padding ensures visual consistency with rest of UI.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        // Placeholder - must not throw
        // Runtime enforcement will be implemented later
        const paddingLeft = context.paddingLeft;
        const paddingRight = context.paddingRight;
        const paddingTop = context.paddingTop;
        const paddingBottom = context.paddingBottom;
        const expectedX = 24;
        const expectedY = 16;
        if (paddingLeft !== undefined && paddingRight !== undefined) {
            const paddingXCorrect = Math.abs(paddingLeft - expectedX) <= 1 && Math.abs(paddingRight - expectedX) <= 1;
            if (!paddingXCorrect) {
                throw new InvariantViolationError('UI_FORM.F004', 'UI_FORM', 'F004', `F004 violation: Form horizontal padding is ${paddingLeft}px/${paddingRight}px, expected ${expectedX}px. Form containers must use canonical padding.`, {
                    paddingLeft,
                    paddingRight,
                    expectedX,
                    source: context.sourceComponent || context.sourceFile || 'unknown',
                });
            }
        }
        if (paddingTop !== undefined && paddingBottom !== undefined) {
            const paddingYCorrect = Math.abs(paddingTop - expectedY) <= 1 && Math.abs(paddingBottom - expectedY) <= 1;
            if (!paddingYCorrect) {
                throw new InvariantViolationError('UI_FORM.F004', 'UI_FORM', 'F004', `F004 violation: Form vertical padding is ${paddingTop}px/${paddingBottom}px, expected ${expectedY}px. Form containers must use canonical padding.`, {
                    paddingTop,
                    paddingBottom,
                    expectedY,
                    source: context.sourceComponent || context.sourceFile || 'unknown',
                });
            }
        }
    },
};
//# sourceMappingURL=F004_FORM_CANONICAL_PADDING.js.map
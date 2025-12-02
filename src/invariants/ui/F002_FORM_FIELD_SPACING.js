/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F002: Form Field Spacing Law
 *
 * CATEGORY: UI_FORM
 * ENFORCEMENT: ON_FORM_RENDER
 *
 * Telos: Fields within sections must use consistent spacing (16px vertical between fields).
 * Field grouping spacing ensures visual rhythm and readability.
 * FORM: Canonical spacing grid (16px Y). ACT: Fields render with consistent spacing. STATE: Visual rhythm maintained.
 */
import { InvariantViolationError } from '../../core/errors';
export const F002_FORM_FIELD_SPACING = {
    category: 'UI_FORM',
    code: 'F002',
    name: 'Form Field Spacing Law',
    description: 'Fields within sections must use consistent spacing (16px vertical between fields). Field grouping spacing ensures visual rhythm and readability.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        // Placeholder - must not throw
        // Runtime enforcement will be implemented later
        const fieldSpacing = context.fieldSpacing;
        const expectedSpacing = 16;
        if (fieldSpacing !== undefined && Math.abs(fieldSpacing - expectedSpacing) > 1) {
            throw new InvariantViolationError('UI_FORM.F002', 'UI_FORM', 'F002', `F002 violation: Field spacing is ${fieldSpacing}px, expected ${expectedSpacing}px. Fields must use consistent spacing within sections.`, {
                fieldSpacing,
                expectedSpacing,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=F002_FORM_FIELD_SPACING.js.map
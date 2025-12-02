/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F65: UI Formal Integrity
 *
 * CATEGORY: UI_FORM
 * ENFORCEMENT: ON_FIRST_RENDER
 *
 * All pages must declare their FORM explicitly.
 * If any view lacks FORM → THROW.
 */
import { InvariantViolationError } from '../../core/errors';
export const F65_UI_FORMAL_INTEGRITY = {
    category: 'UI_FORM',
    code: 'F65',
    name: 'UI Formal Integrity',
    description: 'All pages must declare their FORM explicitly. If any view lacks FORM → THROW.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const hasFormDeclaration = context.hasFormDeclaration;
        const form = context.form;
        if (hasFormDeclaration === false || !form) {
            throw new InvariantViolationError('UI_FORM.F65', 'UI_FORM', 'F65', 'F65 violation: View lacks FORM declaration. All views must declare their FORM explicitly.', {
                hasFormDeclaration,
                form,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=F65_UI_FORMAL_INTEGRITY.js.map
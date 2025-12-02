/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F001: Form Section Ordering Correctness
 *
 * CATEGORY: UI_FORM
 * ENFORCEMENT: ON_FORM_RENDER
 *
 * Telos: Form sections must appear in the order defined by formSchemas.defaultSections.
 * Section ordering ensures logical flow and user comprehension.
 * FORM: Canonical section order in metadata. ACT: Sections render in defined order. STATE: Form structure matches metadata exactly.
 */
import { InvariantViolationError } from '../../core/errors';
export const F001_FORM_SECTION_ORDERING = {
    category: 'UI_FORM',
    code: 'F001',
    name: 'Form Section Ordering Correctness',
    description: 'Form sections must appear in the order defined by formSchemas.defaultSections. Section ordering ensures logical flow and user comprehension.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        // Placeholder - must not throw
        // Runtime enforcement will be implemented later
        const sectionOrder = context.sectionOrder;
        const expectedOrder = context.expectedSectionOrder;
        if (sectionOrder && expectedOrder && JSON.stringify(sectionOrder) !== JSON.stringify(expectedOrder)) {
            throw new InvariantViolationError('UI_FORM.F001', 'UI_FORM', 'F001', 'F001 violation: Form sections are not in the correct order. Sections must match formSchemas.defaultSections order.', {
                sectionOrder,
                expectedOrder,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=F001_FORM_SECTION_ORDERING.js.map
/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F66: Geometric Identity
 *
 * CATEGORY: UI_LAYOUT
 * ENFORCEMENT: ON_FIRST_RENDER
 *
 * All components must register and match geometrySignature.
 *
 * Note: This invariant requires uiFormRegistry which may need to be passed
 * via context or imported separately in the consuming application.
 */
import { InvariantViolationError } from '../../core/errors';
export const F66_GEOMETRIC_IDENTITY = {
    category: 'UI_LAYOUT',
    code: 'F66',
    name: 'Geometric Identity',
    description: 'All components must register and match geometrySignature.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const componentId = context.componentId;
        const realmId = context.realmId;
        const actualGeometry = context.actualGeometry;
        const verification = context.verification;
        if (!componentId || !realmId) {
            return; // Skip if context incomplete
        }
        if (actualGeometry && verification && !verification.matches) {
            throw new InvariantViolationError('UI_LAYOUT.F66', 'UI_LAYOUT', 'F66', `F66 violation: Geometry signature mismatch for ${componentId}`, {
                componentId,
                realmId,
                differences: verification.differences,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=F66_GEOMETRIC_IDENTITY.js.map
/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F104: Hierarchy Descent Law
 *
 * CATEGORY: UI_TYPOGRAPHY
 * ENFORCEMENT: AFTER_LAYOUT_COMMIT
 */
import { InvariantViolationError } from '../../core/errors';
export const F104_HIERARCHY_DESCENT_LAW = {
    category: 'UI_TYPOGRAPHY',
    code: 'F104',
    name: 'Hierarchy Descent Law',
    description: 'Typographic hierarchy must match navigation hierarchy. Global nav label weight ≥ section nav > node tabs > inline text. No violation of descending emphasis.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const hierarchyViolations = context.hierarchyViolations;
        if (hierarchyViolations && hierarchyViolations.length > 0) {
            throw new InvariantViolationError('UI_TYPOGRAPHY.F104', 'UI_TYPOGRAPHY', 'F104', 'F104 violation: Hierarchy descent violations detected. Typographic hierarchy must match navigation hierarchy: Global nav ≥ section nav > node tabs > inline text.', {
                hierarchyViolations,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=F104_HIERARCHY_DESCENT_LAW.js.map
/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F95: Spatial Transition Integrity
 *
 * CATEGORY: UI_TYPOGRAPHY
 * ENFORCEMENT: AFTER_LAYOUT_COMMIT
 */
import { InvariantViolationError } from '../../core/errors';
export const F95_SPATIAL_TRANSITION_INTEGRITY = {
    category: 'UI_TYPOGRAPHY',
    code: 'F95',
    name: 'Spatial Transition Integrity',
    description: 'Movement must be minimal and hierarchical. Allowed: Vertical shift ≤2px, Icon scale ≤1.02. Disallowed: Horizontal sliding, TranslateX jumps, Scaling affecting layout.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const spatialViolations = context.spatialViolations;
        if (spatialViolations && spatialViolations.length > 0) {
            throw new InvariantViolationError('UI_TYPOGRAPHY.F95', 'UI_TYPOGRAPHY', 'F95', 'F95 violation: Spatial transition violations detected. Movement must be minimal: vertical shift ≤2px, icon scale ≤1.02. No horizontal sliding or layout-affecting scaling.', {
                spatialViolations,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=F95_SPATIAL_TRANSITION_INTEGRITY.js.map
/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F96: Motion Hierarchy Alignment
 *
 * CATEGORY: UI_TYPOGRAPHY
 * ENFORCEMENT: AFTER_LAYOUT_COMMIT
 */
import { InvariantViolationError } from '../../core/errors';
export const F96_MOTION_HIERARCHY_ALIGNMENT = {
    category: 'UI_TYPOGRAPHY',
    code: 'F96',
    name: 'Motion Hierarchy Alignment',
    description: 'Motion must slow down as the hierarchy ascends. Global nav: 180-200ms, Section sidebar: 150ms, Node tabs: 120ms.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const motionHierarchyViolations = context.motionHierarchyViolations;
        if (motionHierarchyViolations && motionHierarchyViolations.length > 0) {
            throw new InvariantViolationError('UI_TYPOGRAPHY.F96', 'UI_TYPOGRAPHY', 'F96', 'F96 violation: Motion hierarchy violations detected. Motion must slow down as hierarchy ascends: Global nav (180-200ms) > Section sidebar (150ms) > Node tabs (120ms).', {
                motionHierarchyViolations,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=F96_MOTION_HIERARCHY_ALIGNMENT.js.map
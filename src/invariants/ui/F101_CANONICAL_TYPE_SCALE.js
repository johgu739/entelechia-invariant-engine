/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F101: Canonical Type Scale
 *
 * CATEGORY: UI_TYPOGRAPHY
 * ENFORCEMENT: AFTER_LAYOUT_COMMIT
 */
import { InvariantViolationError } from '../../core/errors';
export const F101_CANONICAL_TYPE_SCALE = {
    category: 'UI_TYPOGRAPHY',
    code: 'F101',
    name: 'Canonical Type Scale',
    description: 'Enforce canonical type scale: Title (text-xl font-semibold), Section Header (text-sm font-semibold tracking-wide), Primary Text (text-sm font-medium), Secondary Text (text-sm text-gray-500), Tertiary Text (text-xs text-gray-400).',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const typeScaleViolations = context.typeScaleViolations;
        if (typeScaleViolations && typeScaleViolations.length > 0) {
            throw new InvariantViolationError('UI_TYPOGRAPHY.F101', 'UI_TYPOGRAPHY', 'F101', 'F101 violation: Canonical type scale violations detected. All text must use approved semantic levels with correct Tailwind classes.', {
                typeScaleViolations,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=F101_CANONICAL_TYPE_SCALE.js.map
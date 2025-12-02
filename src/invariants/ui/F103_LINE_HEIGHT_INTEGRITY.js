/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F103: Line Height Integrity
 *
 * CATEGORY: UI_TYPOGRAPHY
 * ENFORCEMENT: AFTER_LAYOUT_COMMIT
 */
import { InvariantViolationError } from '../../core/errors';
export const F103_LINE_HEIGHT_INTEGRITY = {
    category: 'UI_TYPOGRAPHY',
    code: 'F103',
    name: 'Line Height Integrity',
    description: 'All lines must use stable line-height (e.g. leading-5 or leading-6) consistent across semantic levels. No element may visually "float" due to misaligned line-height.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const lineHeightViolations = context.lineHeightViolations;
        if (lineHeightViolations && lineHeightViolations.length > 0) {
            throw new InvariantViolationError('UI_TYPOGRAPHY.F103', 'UI_TYPOGRAPHY', 'F103', 'F103 violation: Line height integrity violations detected. All lines must use stable line-height consistent across semantic levels.', {
                lineHeightViolations,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=F103_LINE_HEIGHT_INTEGRITY.js.map
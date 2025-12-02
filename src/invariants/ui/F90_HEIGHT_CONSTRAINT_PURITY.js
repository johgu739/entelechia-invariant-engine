/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F90: Height Constraint Purity
 *
 * CATEGORY: UI_SCROLL
 * ENFORCEMENT: AFTER_LAYOUT_COMMIT
 */
import { InvariantViolationError } from '../../core/errors';
export const F90_HEIGHT_CONSTRAINT_PURITY = {
    category: 'UI_SCROLL',
    code: 'F90',
    name: 'Height Constraint Purity',
    description: 'Detects layout violations where height constraints break scroll. No h-full in scroll regions, flex children must have min-h-0, natural-height regions must not break scroll.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const hFullInScrollRegion = context.hFullInScrollRegion;
        const flexChildWithoutMinH0 = context.flexChildWithoutMinH0;
        const naturalHeightBreaksScroll = context.naturalHeightBreaksScroll;
        if (hFullInScrollRegion === true) {
            throw new InvariantViolationError('UI_SCROLL.F90', 'UI_SCROLL', 'F90', 'F90 violation: h-full detected in scroll region. No h-full may be applied to children of scroll containers.', {
                hFullInScrollRegion: true,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
        if (flexChildWithoutMinH0 === true) {
            throw new InvariantViolationError('UI_SCROLL.F90', 'UI_SCROLL', 'F90', 'F90 violation: Flex child expands without min-h-0. Flex children must have min-h-0 to prevent infinite growth.', {
                flexChildWithoutMinH0: true,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
        if (naturalHeightBreaksScroll === true) {
            throw new InvariantViolationError('UI_SCROLL.F90', 'UI_SCROLL', 'F90', 'F90 violation: Natural-height region breaks scroll. Natural-height regions must not break scroll behavior.', {
                naturalHeightBreaksScroll: true,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=F90_HEIGHT_CONSTRAINT_PURITY.js.map
/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F69: Cross-View Cognitive Continuity
 *
 * CATEGORY: UI_HIERARCHY
 * ENFORCEMENT: AFTER_LAYOUT_COMMIT
 */
import { InvariantViolationError } from '../../core/errors';
export const F69_CROSS_VIEW_COGNITIVE_CONTINUITY = {
    category: 'UI_HIERARCHY',
    code: 'F69',
    name: 'Cross-View Cognitive Continuity',
    description: 'Navigation must maintain cognitive continuity across views. No jarring layout shifts, no remounting of stable elements, no loss of context.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const hasLayoutShift = context.hasLayoutShift;
        const stableElementRemounted = context.stableElementRemounted;
        const contextLost = context.contextLost;
        if (hasLayoutShift === true) {
            throw new InvariantViolationError('UI_HIERARCHY.F69', 'UI_HIERARCHY', 'F69', 'F69 violation: Layout shift detected during navigation. Navigation must maintain visual continuity.', {
                hasLayoutShift: true,
                source: context.sourceComponent || context.sourceFile || 'unknown',
                routerPath: context.routerPath || 'unknown',
            });
        }
        if (stableElementRemounted === true) {
            throw new InvariantViolationError('UI_HIERARCHY.F69', 'UI_HIERARCHY', 'F69', 'F69 violation: Stable element remounted during navigation. Stable elements must not remount.', {
                stableElementRemounted: true,
                source: context.sourceComponent || context.sourceFile || 'unknown',
                routerPath: context.routerPath || 'unknown',
            });
        }
        if (contextLost === true) {
            throw new InvariantViolationError('UI_HIERARCHY.F69', 'UI_HIERARCHY', 'F69', 'F69 violation: Context lost during navigation. Navigation must preserve context.', {
                contextLost: true,
                source: context.sourceComponent || context.sourceFile || 'unknown',
                routerPath: context.routerPath || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=F69_CROSS_VIEW_COGNITIVE_CONTINUITY.js.map
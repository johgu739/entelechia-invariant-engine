/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F80: Layout No Void States
 *
 * CATEGORY: UI_LAYOUT
 * ENFORCEMENT: BEFORE_COMPONENT_MOUNT
 */
import { InvariantViolationError } from '../../core/errors';
export const F80_LAYOUT_NO_VOID_STATES = {
    category: 'UI_LAYOUT',
    code: 'F80',
    name: 'Layout No Void States',
    description: 'No route may present a structurally void screen. Even during loading, full FORM must be present (global header, domain sidebar, content frame). Loading states may change CONTENT but must not destroy FRAME.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const layoutVoidState = context.layoutVoidState;
        const sidebarMissing = context.sidebarMissing;
        const headerMissing = context.headerMissing;
        const contentFrameMissing = context.contentFrameMissing;
        const routePath = context.routerPath;
        if (layoutVoidState === true) {
            throw new InvariantViolationError('UI_LAYOUT.F80', 'UI_LAYOUT', 'F80', 'F80_LAYOUT_NO_VOID_STATES violation: Layout is in void state. Full FORM (header, sidebar, content frame) must always be present, even during loading.', {
                layoutVoidState: true,
                routePath,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
        if (sidebarMissing === true) {
            throw new InvariantViolationError('UI_LAYOUT.F80', 'UI_LAYOUT', 'F80', 'F80_LAYOUT_NO_VOID_STATES violation: Sidebar is missing. Domain sidebar must always be present, even during loading.', {
                sidebarMissing: true,
                routePath,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
        if (headerMissing === true) {
            throw new InvariantViolationError('UI_LAYOUT.F80', 'UI_LAYOUT', 'F80', 'F80_LAYOUT_NO_VOID_STATES violation: Header is missing. Global header must always be present, even during loading.', {
                headerMissing: true,
                routePath,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
        if (contentFrameMissing === true) {
            throw new InvariantViolationError('UI_LAYOUT.F80', 'UI_LAYOUT', 'F80', 'F80_LAYOUT_NO_VOID_STATES violation: Content frame is missing. Content frame must always be present, even during loading.', {
                contentFrameMissing: true,
                routePath,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=F80_LAYOUT_NO_VOID_STATES.js.map
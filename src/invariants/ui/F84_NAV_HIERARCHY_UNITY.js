/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F84: Navigation Hierarchy Unity
 *
 * CATEGORY: UI_HIERARCHY
 * ENFORCEMENT: AFTER_LAYOUT_COMMIT
 */
import { InvariantViolationError } from '../../core/errors';
export const F84_NAV_HIERARCHY_UNITY = {
    category: 'UI_HIERARCHY',
    code: 'F84',
    name: 'Navigation Hierarchy Unity',
    description: 'Enforce three-tier navigation hierarchy: GlobalHeader → DomainSidebar → NodeDetailHeader. GlobalHeader spans full width at top, ViewportHost below header, domain sidebar only in workspace routes.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const tier1Present = context.tier1Present;
        const tier2Present = context.tier2Present;
        const tier3Present = context.tier3Present;
        const headerAtTop = context.headerAtTop;
        const viewportBelowHeader = context.viewportBelowHeader;
        const headerSpansFullWidth = context.headerSpansFullWidth;
        const _nodeDetailHeaderWithoutDomainSidebar = context.nodeDetailHeaderWithoutDomainSidebar;
        const _domainSidebarOutsideWorkspace = context.domainSidebarOutsideWorkspace;
        const routerPath = context.routerPath;
        if (tier1Present === false && routerPath !== '/login') {
            throw new InvariantViolationError('UI_HIERARCHY.F84', 'UI_HIERARCHY', 'F84', 'F84 violation: Tier 1 (GlobalHeader) missing. GlobalHeader must be present in all routes except login.', {
                tier1Present: false,
                routerPath,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
        if (tier2Present === true && routerPath && !routerPath.startsWith('/workspace')) {
            throw new InvariantViolationError('UI_HIERARCHY.F84', 'UI_HIERARCHY', 'F84', 'F84 violation: Tier 2 (Domain Sidebar) appears outside workspace routes. Domain sidebar must only appear in /workspace/* routes.', {
                tier2Present: true,
                routerPath,
                domainSidebarOutsideWorkspace: _domainSidebarOutsideWorkspace,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
        if (tier3Present === true && tier2Present === false) {
            throw new InvariantViolationError('UI_HIERARCHY.F84', 'UI_HIERARCHY', 'F84', 'F84 violation: Tier 3 (NodeDetailHeader) appears without Tier 2 (Domain Sidebar). NodeDetailHeader requires domain sidebar context.', {
                tier3Present: true,
                tier2Present: false,
                nodeDetailHeaderWithoutDomainSidebar: _nodeDetailHeaderWithoutDomainSidebar,
                routerPath,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
        if (headerAtTop === false) {
            throw new InvariantViolationError('UI_HIERARCHY.F84', 'UI_HIERARCHY', 'F84', 'F84 violation: GlobalHeader not at top. Header must be at y=0 or very close.', {
                headerAtTop: false,
                routerPath,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
        if (viewportBelowHeader === false) {
            throw new InvariantViolationError('UI_HIERARCHY.F84', 'UI_HIERARCHY', 'F84', 'F84 violation: ViewportHost not below header. ViewportHost must be positioned below GlobalHeader.', {
                viewportBelowHeader: false,
                routerPath,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
        if (headerSpansFullWidth === false) {
            throw new InvariantViolationError('UI_HIERARCHY.F84', 'UI_HIERARCHY', 'F84', 'F84 violation: GlobalHeader does not span full width. Header must span entire viewport width.', {
                headerSpansFullWidth: false,
                routerPath,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=F84_NAV_HIERARCHY_UNITY.js.map
/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F79: Domain Layout Identity
 *
 * CATEGORY: UI_LAYOUT
 * ENFORCEMENT: BEFORE_ROUTE_RESOLUTION
 */
import { InvariantViolationError } from '../../core/errors';
export const F79_DOMAIN_LAYOUT_IDENTITY = {
    category: 'UI_LAYOUT',
    code: 'F79',
    name: 'Domain Layout Identity',
    description: 'Each domain has its own canonical layout FORM (sidebar, header, content geometry). Navigating into a domain must mount that domain\'s layout shell, not reuse another domain\'s layout.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const domainLayoutMismatch = context.domainLayoutMismatch;
        const workspaceComponentInDevtools = context.workspaceComponentInDevtools;
        const devtoolsComponentInWorkspace = context.devtoolsComponentInWorkspace;
        const sidebarFromWrongDomain = context.sidebarFromWrongDomain;
        const headerFromWrongDomain = context.headerFromWrongDomain;
        const routePath = context.routerPath;
        const expectedDomain = context.expectedDomain;
        const actualDomain = context.actualDomain;
        if (domainLayoutMismatch === true) {
            throw new InvariantViolationError('UI_LAYOUT.F79', 'UI_LAYOUT', 'F79', `F79_DOMAIN_LAYOUT_IDENTITY violation: Domain layout mismatch. Expected domain: ${expectedDomain}, Actual domain: ${actualDomain}. Each domain must use its own layout shell.`, {
                domainLayoutMismatch: true,
                expectedDomain,
                actualDomain,
                routePath,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
        if (workspaceComponentInDevtools === true) {
            throw new InvariantViolationError('UI_LAYOUT.F79', 'UI_LAYOUT', 'F79', 'F79_DOMAIN_LAYOUT_IDENTITY violation: Workspace component mounted in Devtools domain. Workspace components must not mount in Devtools layout.', {
                workspaceComponentInDevtools: true,
                routePath,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
        if (devtoolsComponentInWorkspace === true) {
            throw new InvariantViolationError('UI_LAYOUT.F79', 'UI_LAYOUT', 'F79', 'F79_DOMAIN_LAYOUT_IDENTITY violation: Devtools component mounted in Workspace domain. Devtools components must not mount in Workspace layout.', {
                devtoolsComponentInWorkspace: true,
                routePath,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
        if (sidebarFromWrongDomain === true) {
            throw new InvariantViolationError('UI_LAYOUT.F79', 'UI_LAYOUT', 'F79', 'F79_DOMAIN_LAYOUT_IDENTITY violation: Sidebar from wrong domain is present. Each domain must have its own sidebar.', {
                sidebarFromWrongDomain: true,
                routePath,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
        if (headerFromWrongDomain === true) {
            throw new InvariantViolationError('UI_LAYOUT.F79', 'UI_LAYOUT', 'F79', 'F79_DOMAIN_LAYOUT_IDENTITY violation: Header from wrong domain is present. Each domain must have its own header.', {
                headerFromWrongDomain: true,
                routePath,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=F79_DOMAIN_LAYOUT_IDENTITY.js.map
/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F57: Frame Purity Enforced
 *
 * CATEGORY: UI_LAYOUT
 * ENFORCEMENT: BEFORE_COMPONENT_MOUNT
 *
 * Structural invariant ensuring frame integrity.
 */
import { InvariantViolationError } from '../../core/errors';
export const F57_FRAME_PURITY_ENFORCED = {
    category: 'UI_LAYOUT',
    code: 'F57',
    name: 'Frame Purity Enforced',
    description: 'Structural invariant ensuring frame integrity: exactly one AppShell root, exactly one FrameRegion with strict height (100vh minus nav), no content escaping frame boundaries, only Content area scrolls, router-layout alignment enforced.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const usesPageRoot = context.usesPageRoot;
        const usesPageLayout = context.usesPageLayout;
        const routePath = context.routerPath;
        const sectionDomain = context.sectionDomain;
        const isDevtoolsRoute = routePath?.startsWith('/devtools');
        const isWorkspaceRoute = routePath?.startsWith('/workspace');
        const isInsideSectionLayout = isDevtoolsRoute || isWorkspaceRoute || sectionDomain !== undefined;
        // FrameRoot violations
        const hasMultipleAppShells = context.hasMultipleAppShells;
        const hasMultipleFrameRegions = context.hasMultipleFrameRegions;
        const frameRegionHeightNotStrict = context.frameRegionHeightNotStrict;
        const frameRegionExpandsWithChildren = context.frameRegionExpandsWithChildren;
        const frameRootInheritsDocumentFlow = context.frameRootInheritsDocumentFlow;
        if (hasMultipleAppShells === true) {
            throw new InvariantViolationError('UI_LAYOUT.F57', 'UI_LAYOUT', 'F57', 'F57_FRAME_PURITY_ENFORCED violation: Multiple AppShell roots detected. Exactly one AppShell root required.', {
                hasMultipleAppShells: true,
                routePath,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
        if (hasMultipleFrameRegions === true) {
            throw new InvariantViolationError('UI_LAYOUT.F57', 'UI_LAYOUT', 'F57', 'F57_FRAME_PURITY_ENFORCED violation: Multiple FrameRegions detected. Exactly one FrameRegion required.', {
                hasMultipleFrameRegions: true,
                routePath,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
        if (frameRegionHeightNotStrict === true) {
            throw new InvariantViolationError('UI_LAYOUT.F57', 'UI_LAYOUT', 'F57', 'F57_FRAME_PURITY_ENFORCED violation: FrameRegion height is not strict (100vh minus nav). FrameRegion must have fixed height.', {
                frameRegionHeightNotStrict: true,
                routePath,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
        if (frameRegionExpandsWithChildren === true) {
            throw new InvariantViolationError('UI_LAYOUT.F57', 'UI_LAYOUT', 'F57', 'F57_FRAME_PURITY_ENFORCED violation: FrameRegion expands based on children. FrameRegion cannot expand, must be fixed.', {
                frameRegionExpandsWithChildren: true,
                routePath,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
        if (frameRootInheritsDocumentFlow === true) {
            throw new InvariantViolationError('UI_LAYOUT.F57', 'UI_LAYOUT', 'F57', 'F57_FRAME_PURITY_ENFORCED violation: FrameRoot inherits document-flow height. FrameRoot must not inherit document flow.', {
                frameRootInheritsDocumentFlow: true,
                routePath,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
        // DOM Structure violations
        const sidebarAndContentNotSiblings = context.sidebarAndContentNotSiblings;
        const componentPushesFrameRegionHeight = context.componentPushesFrameRegionHeight;
        const routeRendersOutsideLayout = context.routeRendersOutsideLayout;
        const workspaceComponentInDevtools = context.workspaceComponentInDevtools;
        const devtoolsComponentInWorkspace = context.devtoolsComponentInWorkspace;
        if (sidebarAndContentNotSiblings === true) {
            throw new InvariantViolationError('UI_LAYOUT.F57', 'UI_LAYOUT', 'F57', 'F57_FRAME_PURITY_ENFORCED violation: Sidebar and Content are not siblings. They must be sibling elements.', {
                sidebarAndContentNotSiblings: true,
                routePath,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
        if (componentPushesFrameRegionHeight === true) {
            throw new InvariantViolationError('UI_LAYOUT.F57', 'UI_LAYOUT', 'F57', 'F57_FRAME_PURITY_ENFORCED violation: Component pushes FrameRegion height. No component may push FrameRegion height.', {
                componentPushesFrameRegionHeight: true,
                routePath,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
        if (routeRendersOutsideLayout === true) {
            throw new InvariantViolationError('UI_LAYOUT.F57', 'UI_LAYOUT', 'F57', 'F57_FRAME_PURITY_ENFORCED violation: Route renders outside its layout container. All routes must render inside their layout containers.', {
                routeRendersOutsideLayout: true,
                routePath,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
        if (workspaceComponentInDevtools === true) {
            throw new InvariantViolationError('UI_LAYOUT.F57', 'UI_LAYOUT', 'F57', 'F57_FRAME_PURITY_ENFORCED violation: Workspace component mounted inside Devtools frame. Workspace components must not mount in Devtools.', {
                workspaceComponentInDevtools: true,
                routePath,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
        if (devtoolsComponentInWorkspace === true) {
            throw new InvariantViolationError('UI_LAYOUT.F57', 'UI_LAYOUT', 'F57', 'F57_FRAME_PURITY_ENFORCED violation: Devtools component mounted inside Workspace frame. Devtools components must not mount in Workspace.', {
                devtoolsComponentInWorkspace: true,
                routePath,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
        // Scroll Purity violations
        const htmlHasScroll = context.htmlHasScroll;
        const bodyHasScroll = context.bodyHasScroll;
        const frameRegionHasScroll = context.frameRegionHasScroll;
        const contentAreaDoesNotScroll = context.contentAreaDoesNotScroll;
        if (htmlHasScroll === true) {
            throw new InvariantViolationError('UI_LAYOUT.F57', 'UI_LAYOUT', 'F57', 'F57_FRAME_PURITY_ENFORCED violation: <html> has scroll. <html> must have overflow: hidden.', {
                htmlHasScroll: true,
                routePath,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
        if (bodyHasScroll === true) {
            throw new InvariantViolationError('UI_LAYOUT.F57', 'UI_LAYOUT', 'F57', 'F57_FRAME_PURITY_ENFORCED violation: <body> has scroll. <body> must have overflow: hidden.', {
                bodyHasScroll: true,
                routePath,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
        if (frameRegionHasScroll === true) {
            throw new InvariantViolationError('UI_LAYOUT.F57', 'UI_LAYOUT', 'F57', 'F57_FRAME_PURITY_ENFORCED violation: FrameRegion has scroll. FrameRegion must have overflow: hidden.', {
                frameRegionHasScroll: true,
                routePath,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
        if (contentAreaDoesNotScroll === true) {
            throw new InvariantViolationError('UI_LAYOUT.F57', 'UI_LAYOUT', 'F57', 'F57_FRAME_PURITY_ENFORCED violation: Content area does not scroll. Content area must be the ONLY scrollable region.', {
                contentAreaDoesNotScroll: true,
                routePath,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
        // Router ↔ Layout alignment violations
        const routeUsesWorkspaceLayoutButInDevtoolsFrame = context.routeUsesWorkspaceLayoutButInDevtoolsFrame;
        const routeUsesDevtoolsLayoutButInWorkspaceFrame = context.routeUsesDevtoolsLayoutButInWorkspaceFrame;
        if (routeUsesWorkspaceLayoutButInDevtoolsFrame === true) {
            throw new InvariantViolationError('UI_LAYOUT.F57', 'UI_LAYOUT', 'F57', 'F57_FRAME_PURITY_ENFORCED violation: Route uses WorkspaceLayout but renders under Devtools frame. Routes must render under correct frame.', {
                routeUsesWorkspaceLayoutButInDevtoolsFrame: true,
                routePath,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
        if (routeUsesDevtoolsLayoutButInWorkspaceFrame === true) {
            throw new InvariantViolationError('UI_LAYOUT.F57', 'UI_LAYOUT', 'F57', 'F57_FRAME_PURITY_ENFORCED violation: Route uses DevtoolsLayout but renders under Workspace frame. Routes must render under correct frame.', {
                routeUsesDevtoolsLayoutButInWorkspaceFrame: true,
                routePath,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
        // Legacy checks
        if (isInsideSectionLayout && (usesPageRoot === true || usesPageLayout === true)) {
            throw new InvariantViolationError('UI_LAYOUT.F57', 'UI_LAYOUT', 'F57', `F57_FRAME_PURITY_ENFORCED violation: PageRoot/PageLayout used inside section layout. Section layouts already provide the frame structure.`, {
                usesPageRoot,
                usesPageLayout,
                routePath,
                sectionDomain,
                source: context.sourceComponent || context.sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=F57_FRAME_PURITY_ENFORCED.js.map
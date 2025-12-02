/**
 * ✅ ENTELECHIA INVARIANT ENGINE — A1_VIEW: Workspace View Only Reads
 *
 * CATEGORY: DOMAIN_LOGIC
 * ENFORCEMENT: DURING_COMPONENT_MOUNT
 *
 * Telos: WorkspaceView should only read data, not make direct API calls.
 * All data fetching must go through React Query hooks or intent layer.
 * WorkspaceView must not bypass the data layer.
 *
 * Enforcement:
 * - Prevents direct fetch calls in WorkspaceView
 * - Prevents direct API calls in WorkspaceView
 * - Ensures all data comes from React Query or intent layer
 */
import { InvariantViolationError } from '../../core/errors';
export const A1_WORKSPACE_VIEW_ONLY_READS = {
    category: 'DOMAIN_LOGIC',
    code: 'A1_VIEW',
    name: 'Workspace View Only Reads',
    description: 'WorkspaceView should only read data, not make direct API calls. All data fetching must go through React Query hooks or intent layer.',
    severity: 'ERROR',
    enforce: (_node, context) => {
        const hasDirectFetch = context.hasDirectFetch;
        const hasApiCall = context.hasApiCall;
        const sourceComponent = context.sourceComponent;
        // If direct fetch detected, that's a violation
        if (hasDirectFetch === true) {
            throw new InvariantViolationError('DOMAIN_LOGIC.A1_VIEW', 'DOMAIN_LOGIC', 'A1_VIEW', 'A1_WORKSPACE_VIEW_ONLY_READS violation: Direct fetch call detected in WorkspaceView. WorkspaceView must not make direct API calls. All data fetching must go through React Query hooks or intent layer.', {
                hasDirectFetch: true,
                sourceComponent,
                source: context.sourceFile || 'unknown',
            });
        }
        // If direct API call detected, that's a violation
        if (hasApiCall === true) {
            throw new InvariantViolationError('DOMAIN_LOGIC.A1_VIEW', 'DOMAIN_LOGIC', 'A1_VIEW', 'A1_WORKSPACE_VIEW_ONLY_READS violation: Direct API call detected in WorkspaceView. WorkspaceView must not make direct API calls. All data fetching must go through React Query hooks or intent layer.', {
                hasApiCall: true,
                sourceComponent,
                source: context.sourceFile || 'unknown',
            });
        }
    },
};
//# sourceMappingURL=A1_WORKSPACE_VIEW_ONLY_READS.js.map
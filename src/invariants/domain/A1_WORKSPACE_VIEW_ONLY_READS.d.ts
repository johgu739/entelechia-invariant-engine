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
import type { InvariantDefinition } from '../../core/types';
export declare const A1_WORKSPACE_VIEW_ONLY_READS: InvariantDefinition;
//# sourceMappingURL=A1_WORKSPACE_VIEW_ONLY_READS.d.ts.map
/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F2: System StateView Singular
 *
 * CATEGORY: DOMAIN_LOGIC
 * ENFORCEMENT: BEFORE_COMPONENT_MOUNT
 *
 * Telos: SystemStateView must be fetched only once via SystemStateViewProvider.
 * No component may fetch SystemStateView directly - it must use the React Context singleton.
 * This ensures a single source of truth and prevents duplicate fetches.
 */
import type { InvariantDefinition } from '../../core/types';
export declare const F2_SYSTEM_STATE_VIEW_SINGULAR: InvariantDefinition;
//# sourceMappingURL=F2_SYSTEM_STATE_VIEW_SINGULAR.d.ts.map
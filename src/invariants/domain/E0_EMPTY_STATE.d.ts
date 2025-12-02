/**
 * ✅ ENTELECHIA INVARIANT ENGINE — E0: Empty State
 *
 * CATEGORY: DOMAIN_LOGIC
 * ENFORCEMENT: DURING_RENDER
 *
 * Telos: Empty state must be shown when there's no data.
 * When nodeId is null or data is empty, empty state UI must be displayed.
 * This ensures users understand when there's no content to display.
 *
 * Enforcement:
 * - Verifies empty state is shown when nodeId is null
 * - Verifies empty state is shown when data is empty
 * - Ensures empty state UI is displayed appropriately
 */
import type { InvariantDefinition } from '../../core/types';
export declare const E0_EMPTY_STATE: InvariantDefinition;
//# sourceMappingURL=E0_EMPTY_STATE.d.ts.map
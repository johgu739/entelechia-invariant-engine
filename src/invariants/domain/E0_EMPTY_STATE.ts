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

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const E0_EMPTY_STATE: InvariantDefinition = {
  category: 'DOMAIN_LOGIC',
  code: 'E0',
  name: 'Empty State',
  description: 'Empty state must be shown when there\'s no data. When nodeId is null or data is empty, empty state UI must be displayed.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const nodeId = context.nodeId as string | null | undefined
    const isEmpty = context.isEmpty as boolean | undefined
    const emptyStateShown = context.emptyStateShown as boolean | undefined
    const sourceComponent = context.sourceComponent as string | undefined

    // If nodeId is null or data is empty but empty state is not shown, that's a violation
    const shouldShowEmptyState = nodeId === null || nodeId === undefined || isEmpty === true

    if (shouldShowEmptyState && emptyStateShown !== true) {
      throw new InvariantViolationError(
        'DOMAIN_LOGIC.E0',
        'DOMAIN_LOGIC',
        'E0',
        'E0_EMPTY_STATE violation: Empty state not shown when nodeId is null or data is empty. Empty state UI must be displayed when there\'s no content to show.',
        {
          nodeId,
          isEmpty,
          emptyStateShown: false,
          shouldShowEmptyState: true,
          sourceComponent,
          source: context.sourceFile || 'unknown',
        }
      )
    }
  },
}



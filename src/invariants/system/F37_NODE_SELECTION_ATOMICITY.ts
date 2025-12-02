/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F37: Node-Selection-Atomicity
 * 
 * CATEGORY: SYSTEM_STATE
 * ENFORCEMENT: BEFORE_ROUTE_RESOLUTION
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const F37_NODE_SELECTION_ATOMICITY: InvariantDefinition = {
  category: 'SYSTEM_STATE',
  code: 'F37',
  name: 'Node-Selection-Atomicity',
  description: 'Node selection updates must be atomic - no intermediate states. Selection must update synchronously with navigation.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const hasIntermediateSelectionState = context.hasIntermediateSelectionState as boolean | undefined
    const selectionUpdateAsync = context.selectionUpdateAsync as boolean | undefined

    if (hasIntermediateSelectionState || selectionUpdateAsync) {
      throw new InvariantViolationError(
        'SYSTEM_STATE.F37',
        'SYSTEM_STATE',
        'F37',
        'F37 violation: Non-atomic node selection update detected. Selection must update synchronously.',
        {
          hasIntermediateSelectionState,
          selectionUpdateAsync,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
  },
}



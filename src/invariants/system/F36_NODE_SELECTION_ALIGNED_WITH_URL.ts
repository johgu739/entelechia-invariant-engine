/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F36: Node-Selection-Aligned-With-URL
 * 
 * CATEGORY: SYSTEM_STATE
 * ENFORCEMENT: BEFORE_ROUTE_RESOLUTION
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const F36_NODE_SELECTION_ALIGNED_WITH_URL: InvariantDefinition = {
  category: 'SYSTEM_STATE',
  code: 'F36',
  name: 'Node-Selection-Aligned-With-URL',
  description: 'Node selection must always align with the current URL. Deep-links must set selection immediately.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const urlNodeId = context.urlNodeId as string | null | undefined
    const selectedNodeId = context.selectedNodeId as string | null | undefined
    const routerPath = context.routerPath as string | undefined

    if (urlNodeId !== selectedNodeId && routerPath && routerPath !== '/workspace') {
      throw new InvariantViolationError(
        'SYSTEM_STATE.F36',
        'SYSTEM_STATE',
        'F36',
        `F36 violation: Node selection (${selectedNodeId}) does not align with URL (${urlNodeId}). Selection must match URL.`,
        {
          urlNodeId,
          selectedNodeId,
          routerPath,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
  },
}



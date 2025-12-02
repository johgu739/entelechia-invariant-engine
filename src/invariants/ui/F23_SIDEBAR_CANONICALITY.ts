/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F23: Sidebar Canonicality
 * 
 * CATEGORY: UI_HIERARCHY
 * ENFORCEMENT: AFTER_LAYOUT_COMMIT
 * 
 * Telos: Sidebar highlight must always match the current URL node ID.
 * Sidebar must never use stale state - it must always derive highlight from router state.
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const F23_SIDEBAR_CANONICALITY: InvariantDefinition = {
  category: 'UI_HIERARCHY',
  code: 'F23',
  name: 'Sidebar Canonicality',
  description: 'Sidebar highlight must always match the current URL node ID. Sidebar must never use stale state - it must always derive highlight from router state.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const urlNodeId = context.urlNodeId as string | undefined
    const highlightedNodeId = context.highlightedNodeId as string | undefined
    const usesStaleState = context.usesStaleState as boolean | undefined
    const routerPath = context.routerPath as string | undefined

    if (usesStaleState === true) {
      throw new InvariantViolationError(
        'UI_HIERARCHY.F23',
        'UI_HIERARCHY',
        'F23',
        'F23_SIDEBAR_CANONICALITY violation: Sidebar uses stale state. Sidebar must always derive highlight from router state, never from cached or stale component state.',
        {
          usesStaleState: true,
          urlNodeId,
          highlightedNodeId,
          routerPath,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }

    if (urlNodeId !== undefined && highlightedNodeId !== undefined && urlNodeId !== highlightedNodeId) {
      throw new InvariantViolationError(
        'UI_HIERARCHY.F23',
        'UI_HIERARCHY',
        'F23',
        `F23_SIDEBAR_CANONICALITY violation: Sidebar highlight does not match URL. URL node ID: ${urlNodeId}, Highlighted node ID: ${highlightedNodeId}`,
        {
          urlNodeId,
          highlightedNodeId,
          mismatch: true,
          routerPath,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
  },
}



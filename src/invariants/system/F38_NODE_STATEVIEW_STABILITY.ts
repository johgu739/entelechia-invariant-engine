/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F38: Node-StateView-Stability
 * 
 * CATEGORY: SYSTEM_STATE
 * ENFORCEMENT: AFTER_TRANSITION_COMPLETE
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const F38_NODE_STATEVIEW_STABILITY: InvariantDefinition = {
  category: 'SYSTEM_STATE',
  code: 'F38',
  name: 'Node-StateView-Stability',
  description: 'NodeStateView must remain stable during navigation transitions. No flicker or remount when switching between nodes. Checks only when SystemStateView exists.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const systemStateView = context.systemStateView as unknown
    const systemStateViewLoaded = context.systemStateViewLoaded as boolean | undefined

    if (!systemStateView && systemStateViewLoaded !== true) {
      return // Not a violation - SystemStateView not available yet
    }

    const nodeStateViewRemounted = context.nodeStateViewRemounted as boolean | undefined
    const hasFlickerOnNavigation = context.hasFlickerOnNavigation as boolean | undefined

    if (nodeStateViewRemounted || hasFlickerOnNavigation) {
      throw new InvariantViolationError(
        'SYSTEM_STATE.F38',
        'SYSTEM_STATE',
        'F38',
        'F38 violation: NodeStateView remounted or flickered during navigation. Must remain stable.',
        {
          nodeStateViewRemounted,
          hasFlickerOnNavigation,
          systemStateViewLoaded,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
  },
}



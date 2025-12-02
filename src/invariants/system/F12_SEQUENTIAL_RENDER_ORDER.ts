/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F12: Sequential Render Order
 * 
 * CATEGORY: SYSTEM_ROUTER
 * ENFORCEMENT: BEFORE_COMPONENT_MOUNT
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const F12_SEQUENTIAL_RENDER_ORDER: InvariantDefinition = {
  category: 'SYSTEM_ROUTER',
  code: 'F12',
  name: 'Sequential Render Order',
  description: 'Components must render in deterministic order. No race conditions, no out-of-order renders.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const renderOrderViolation = context.renderOrderViolation as boolean | undefined
    const outOfOrderRenders = context.outOfOrderRenders as string[] | undefined

    if (renderOrderViolation === true || (outOfOrderRenders && outOfOrderRenders.length > 0)) {
      throw new InvariantViolationError(
        'SYSTEM_ROUTER.F12',
        'SYSTEM_ROUTER',
        'F12',
        'F12 violation: Sequential render order violation detected. Components must render in deterministic order.',
        {
          renderOrderViolation,
          outOfOrderRenders,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
  },
}



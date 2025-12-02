/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F49: Zero-Invisible-Renders
 * 
 * CATEGORY: SYSTEM_STATE
 * ENFORCEMENT: ON_DEMAND
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const F49_ZERO_INVISIBLE_RENDERS: InvariantDefinition = {
  category: 'SYSTEM_STATE',
  code: 'F49',
  name: 'Zero-Invisible-Renders',
  description: 'No component may render invisibly or off-screen. All renders must be visible and meaningful.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const hasInvisibleRender = context.hasInvisibleRender as boolean | undefined
    const hasOffScreenRender = context.hasOffScreenRender as boolean | undefined

    if (hasInvisibleRender || hasOffScreenRender) {
      throw new InvariantViolationError(
        'SYSTEM_STATE.F49',
        'SYSTEM_STATE',
        'F49',
        'F49 violation: Component rendered invisibly or off-screen. All renders must be visible.',
        {
          hasInvisibleRender,
          hasOffScreenRender,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
  },
}



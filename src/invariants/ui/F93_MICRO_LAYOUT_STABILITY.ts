/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F93_MICRO: Micro-Layout Stability
 * 
 * CATEGORY: UI_TYPOGRAPHY
 * ENFORCEMENT: AFTER_LAYOUT_COMMIT
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const F93_MICRO_LAYOUT_STABILITY: InvariantDefinition = {
  category: 'UI_TYPOGRAPHY',
  code: 'F93_MICRO',
  name: 'Micro-Layout Stability',
  description: 'No pixel jumps, line-height jumps, font-weight shifts pushing layout, or padding changes that cause reflow. All structural properties must remain constant.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const hasLayoutJumps = context.hasLayoutJumps as boolean | undefined
    const hasLineHeightJumps = context.hasLineHeightJumps as boolean | undefined
    const hasWeightShifts = context.hasWeightShifts as boolean | undefined
    const hasPaddingChanges = context.hasPaddingChanges as boolean | undefined

    if (hasLayoutJumps || hasLineHeightJumps || hasWeightShifts || hasPaddingChanges) {
      throw new InvariantViolationError(
        'UI_TYPOGRAPHY.F93_MICRO',
        'UI_TYPOGRAPHY',
        'F93_MICRO',
        'F93 violation: Micro-layout instability detected. No pixel jumps, line-height jumps, font-weight shifts, or padding changes during transitions.',
        {
          hasLayoutJumps,
          hasLineHeightJumps,
          hasWeightShifts,
          hasPaddingChanges,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
  },
}



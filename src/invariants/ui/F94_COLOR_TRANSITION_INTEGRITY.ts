/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F94: Color Transition Integrity
 * 
 * CATEGORY: UI_TYPOGRAPHY
 * ENFORCEMENT: AFTER_LAYOUT_COMMIT
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const F94_COLOR_TRANSITION_INTEGRITY: InvariantDefinition = {
  category: 'UI_TYPOGRAPHY',
  code: 'F94',
  name: 'Color Transition Integrity',
  description: 'All color changes must use transition-colors with durations from F90 and easing from F91.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const colorTransitionViolations = context.colorTransitionViolations as Array<{ element: string; issue: string }> | undefined

    if (colorTransitionViolations && colorTransitionViolations.length > 0) {
      throw new InvariantViolationError(
        'UI_TYPOGRAPHY.F94',
        'UI_TYPOGRAPHY',
        'F94',
        'F94 violation: Color transition integrity violations detected. All color changes must use transition-colors with approved durations and easing.',
        {
          colorTransitionViolations,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
  },
}



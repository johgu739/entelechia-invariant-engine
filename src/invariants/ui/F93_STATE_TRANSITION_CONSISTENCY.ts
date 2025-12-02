/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F93: State Transition Consistency
 * 
 * CATEGORY: UI_TYPOGRAPHY
 * ENFORCEMENT: AFTER_LAYOUT_COMMIT
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const F93_STATE_TRANSITION_CONSISTENCY: InvariantDefinition = {
  category: 'UI_TYPOGRAPHY',
  code: 'F93',
  name: 'State Transition Consistency',
  description: 'A given state must always trigger the same motion. Hover = opacity + subtle color, Active = background + opacity, Selected = background + weight shift.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const stateTransitionViolations = context.stateTransitionViolations as Array<{ component: string; state: string; expected: string; actual: string }> | undefined

    if (stateTransitionViolations && stateTransitionViolations.length > 0) {
      throw new InvariantViolationError(
        'UI_TYPOGRAPHY.F93',
        'UI_TYPOGRAPHY',
        'F93',
        'F93 violation: State transition inconsistencies detected. Same state must trigger same motion across all components.',
        {
          stateTransitionViolations,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
  },
}



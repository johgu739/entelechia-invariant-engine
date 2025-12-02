/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F108: No Visual Doppelgangers
 * 
 * CATEGORY: UI_TYPOGRAPHY
 * ENFORCEMENT: AFTER_LAYOUT_COMMIT
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const F108_NO_VISUAL_DOPPELGANGERS: InvariantDefinition = {
  category: 'UI_TYPOGRAPHY',
  code: 'F108',
  name: 'No Visual Doppelgangers',
  description: 'Two elements that look similar must behave and style identically. If an element looks like a tab, it must use tab typography. If it looks like a list item, it must use list-item typography.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const doppelgangerViolations = context.doppelgangerViolations as Array<{ element1: string; element2: string; issue: string }> | undefined

    if (doppelgangerViolations && doppelgangerViolations.length > 0) {
      throw new InvariantViolationError(
        'UI_TYPOGRAPHY.F108',
        'UI_TYPOGRAPHY',
        'F108',
        'F108 violation: Visual doppelganger violations detected. Two elements that look similar must behave and style identically.',
        {
          doppelgangerViolations,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
  },
}



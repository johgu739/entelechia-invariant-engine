/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F102: Weight Coherence
 * 
 * CATEGORY: UI_TYPOGRAPHY
 * ENFORCEMENT: AFTER_LAYOUT_COMMIT
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const F102_WEIGHT_COHERENCE: InvariantDefinition = {
  category: 'UI_TYPOGRAPHY',
  code: 'F102',
  name: 'Weight Coherence',
  description: 'Font weights must be stable. No inconsistent switching between regular/medium/semibold. No weight changes that shift layout. Selected states must use weight changes only if they don\'t cause reflow.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const weightViolations = context.weightViolations as Array<{ element: string; issue: string }> | undefined

    if (weightViolations && weightViolations.length > 0) {
      throw new InvariantViolationError(
        'UI_TYPOGRAPHY.F102',
        'UI_TYPOGRAPHY',
        'F102',
        'F102 violation: Weight coherence violations detected. Font weights must be stable and not cause layout shifts.',
        {
          weightViolations,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
  },
}



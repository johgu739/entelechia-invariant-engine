/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F91: Temporal Unity
 * 
 * CATEGORY: UI_TYPOGRAPHY
 * ENFORCEMENT: AFTER_LAYOUT_COMMIT
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const F91_TEMPORAL_UNITY: InvariantDefinition = {
  category: 'UI_TYPOGRAPHY',
  code: 'F91',
  name: 'Temporal Unity',
  description: 'All transitions must use approved temporal grid: 120ms, 150ms, 180ms, 200ms. No two animations inside the same nav/interaction cluster may differ by >30ms.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const transitionDurations = context.transitionDurations as number[] | undefined
    const approvedDurations = [120, 150, 180, 200]
    const maxDurationDiff = 30

    if (transitionDurations && transitionDurations.length > 0) {
      const invalidDurations = transitionDurations.filter(d => !approvedDurations.includes(d))
      if (invalidDurations.length > 0) {
        throw new InvariantViolationError(
          'UI_TYPOGRAPHY.F91',
          'UI_TYPOGRAPHY',
          'F91',
          `F91 violation: Invalid transition durations detected. Must use approved temporal grid: 120ms, 150ms, 180ms, 200ms. Found: ${invalidDurations.join(', ')}ms`,
          {
            invalidDurations,
            approvedDurations,
            source: context.sourceComponent || context.sourceFile || 'unknown',
          }
        )
      }

      const minDuration = Math.min(...transitionDurations)
      const maxDuration = Math.max(...transitionDurations)
      if (maxDuration - minDuration > maxDurationDiff) {
        throw new InvariantViolationError(
          'UI_TYPOGRAPHY.F91',
          'UI_TYPOGRAPHY',
          'F91',
          `F91 violation: Transition durations in same cluster differ by >30ms. Min: ${minDuration}ms, Max: ${maxDuration}ms, Diff: ${maxDuration - minDuration}ms`,
          {
            transitionDurations,
            minDuration,
            maxDuration,
            difference: maxDuration - minDuration,
            maxAllowedDifference: maxDurationDiff,
            source: context.sourceComponent || context.sourceFile || 'unknown',
          }
        )
      }
    }
  },
}



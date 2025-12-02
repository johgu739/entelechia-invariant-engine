/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F99: Motion Purity (No Jank)
 * 
 * CATEGORY: UI_TYPOGRAPHY
 * ENFORCEMENT: AFTER_LAYOUT_COMMIT
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const F99_MOTION_PURITY: InvariantDefinition = {
  category: 'UI_TYPOGRAPHY',
  code: 'F99',
  name: 'Motion Purity (No Jank)',
  description: 'Motion must not cause reflow, blink, remount, scroll jumps, or layout-affecting mutations. Must not violate F57 (frame purity) or F83 (bounding box integrity).',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const causesReflow = context.causesReflow as boolean | undefined
    const causesBlink = context.causesBlink as boolean | undefined
    const causesRemount = context.causesRemount as boolean | undefined
    const causesScrollJumps = context.causesScrollJumps as boolean | undefined
    const causesLayoutMutations = context.causesLayoutMutations as boolean | undefined
    const violatesF57 = context.violatesF57 as boolean | undefined
    const violatesF83 = context.violatesF83 as boolean | undefined

    if (causesReflow || causesBlink || causesRemount || causesScrollJumps || causesLayoutMutations || violatesF57 || violatesF83) {
      throw new InvariantViolationError(
        'UI_TYPOGRAPHY.F99',
        'UI_TYPOGRAPHY',
        'F99',
        'F99 violation: Motion purity violations detected. Motion must not cause reflow, blink, remount, scroll jumps, or layout mutations.',
        {
          causesReflow,
          causesBlink,
          causesRemount,
          causesScrollJumps,
          causesLayoutMutations,
          violatesF57,
          violatesF83,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
  },
}



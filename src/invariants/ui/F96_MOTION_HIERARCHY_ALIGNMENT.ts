/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F96: Motion Hierarchy Alignment
 * 
 * CATEGORY: UI_TYPOGRAPHY
 * ENFORCEMENT: AFTER_LAYOUT_COMMIT
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const F96_MOTION_HIERARCHY_ALIGNMENT: InvariantDefinition = {
  category: 'UI_TYPOGRAPHY',
  code: 'F96',
  name: 'Motion Hierarchy Alignment',
  description: 'Motion must slow down as the hierarchy ascends. Global nav: 180-200ms, Section sidebar: 150ms, Node tabs: 120ms.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const motionHierarchyViolations = context.motionHierarchyViolations as Array<{ component: string; level: string; expectedDuration: string; actualDuration: number }> | undefined

    if (motionHierarchyViolations && motionHierarchyViolations.length > 0) {
      throw new InvariantViolationError(
        'UI_TYPOGRAPHY.F96',
        'UI_TYPOGRAPHY',
        'F96',
        'F96 violation: Motion hierarchy violations detected. Motion must slow down as hierarchy ascends: Global nav (180-200ms) > Section sidebar (150ms) > Node tabs (120ms).',
        {
          motionHierarchyViolations,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
  },
}



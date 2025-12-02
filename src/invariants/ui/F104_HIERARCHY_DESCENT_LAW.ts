/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F104: Hierarchy Descent Law
 * 
 * CATEGORY: UI_TYPOGRAPHY
 * ENFORCEMENT: AFTER_LAYOUT_COMMIT
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const F104_HIERARCHY_DESCENT_LAW: InvariantDefinition = {
  category: 'UI_TYPOGRAPHY',
  code: 'F104',
  name: 'Hierarchy Descent Law',
  description: 'Typographic hierarchy must match navigation hierarchy. Global nav label weight ≥ section nav > node tabs > inline text. No violation of descending emphasis.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const hierarchyViolations = context.hierarchyViolations as Array<{ component: string; level: string; expectedWeight: string; actualWeight: string }> | undefined

    if (hierarchyViolations && hierarchyViolations.length > 0) {
      throw new InvariantViolationError(
        'UI_TYPOGRAPHY.F104',
        'UI_TYPOGRAPHY',
        'F104',
        'F104 violation: Hierarchy descent violations detected. Typographic hierarchy must match navigation hierarchy: Global nav ≥ section nav > node tabs > inline text.',
        {
          hierarchyViolations,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
  },
}



/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F105: Tokenization Consistency
 * 
 * CATEGORY: UI_TYPOGRAPHY
 * ENFORCEMENT: AFTER_LAYOUT_COMMIT
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const F105_TOKENIZATION_CONSISTENCY: InvariantDefinition = {
  category: 'UI_TYPOGRAPHY',
  code: 'F105',
  name: 'Tokenization Consistency',
  description: 'All typography must be expressed through design tokens or their direct Tailwind equivalents. No ad-hoc styling.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const tokenizationViolations = context.tokenizationViolations as Array<{ element: string; issue: string }> | undefined

    if (tokenizationViolations && tokenizationViolations.length > 0) {
      throw new InvariantViolationError(
        'UI_TYPOGRAPHY.F105',
        'UI_TYPOGRAPHY',
        'F105',
        'F105 violation: Tokenization consistency violations detected. All typography must use design tokens or their direct Tailwind equivalents.',
        {
          tokenizationViolations,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
  },
}



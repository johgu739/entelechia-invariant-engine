/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F100: Font Family Unity
 * 
 * CATEGORY: UI_TYPOGRAPHY
 * ENFORCEMENT: AFTER_LAYOUT_COMMIT
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const F100_FONT_FAMILY_UNITY: InvariantDefinition = {
  category: 'UI_TYPOGRAPHY',
  code: 'F100',
  name: 'Font Family Unity',
  description: 'All text must use the system San Francisco stack: ui-sans-serif, identical to the platform.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const fontFamilyViolations = context.fontFamilyViolations as Array<{ element: string; expected: string; actual: string }> | undefined

    if (fontFamilyViolations && fontFamilyViolations.length > 0) {
      throw new InvariantViolationError(
        'UI_TYPOGRAPHY.F100',
        'UI_TYPOGRAPHY',
        'F100',
        'F100 violation: Font family violations detected. All text must use ui-sans-serif (system San Francisco stack).',
        {
          fontFamilyViolations,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
  },
}



/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F107: Cross-Component Typographic Parity
 * 
 * CATEGORY: UI_TYPOGRAPHY
 * ENFORCEMENT: AFTER_LAYOUT_COMMIT
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const F107_CROSS_COMPONENT_TYPOGRAPHIC_PARITY: InvariantDefinition = {
  category: 'UI_TYPOGRAPHY',
  code: 'F107',
  name: 'Cross-Component Typographic Parity',
  description: 'Components of the same class must share the same typography. All nav items use text-sm font-medium, all section titles use text-sm font-semibold, all breadcrumbs use text-sm text-gray-500.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const typographicParityViolations = context.typographicParityViolations as Array<{ component: string; class: string; expected: string; actual: string }> | undefined

    if (typographicParityViolations && typographicParityViolations.length > 0) {
      throw new InvariantViolationError(
        'UI_TYPOGRAPHY.F107',
        'UI_TYPOGRAPHY',
        'F107',
        'F107 violation: Cross-component typographic parity violations detected. Components of the same class must share the same typography.',
        {
          typographicParityViolations,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
  },
}



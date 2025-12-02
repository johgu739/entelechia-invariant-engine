/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F65: UI Formal Integrity
 * 
 * CATEGORY: UI_FORM
 * ENFORCEMENT: ON_FIRST_RENDER
 * 
 * All pages must declare their FORM explicitly.
 * If any view lacks FORM → THROW.
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const F65_UI_FORMAL_INTEGRITY: InvariantDefinition = {
  category: 'UI_FORM',
  code: 'F65',
  name: 'UI Formal Integrity',
  description: 'All pages must declare their FORM explicitly. If any view lacks FORM → THROW.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const hasFormDeclaration = context.hasFormDeclaration as boolean | undefined
    const form = context.form as { layout?: string; navigation?: string; header?: string; scroll?: string } | undefined

    if (hasFormDeclaration === false || !form) {
      throw new InvariantViolationError(
        'UI_FORM.F65',
        'UI_FORM',
        'F65',
        'F65 violation: View lacks FORM declaration. All views must declare their FORM explicitly.',
        {
          hasFormDeclaration,
          form,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
  },
}



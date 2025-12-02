/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F55: UI Form Identity
 * 
 * CATEGORY: UI_FORM
 * ENFORCEMENT: ON_FIRST_RENDER
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const F55_UI_FORM_IDENTITY: InvariantDefinition = {
  category: 'UI_FORM',
  code: 'F55',
  name: 'UI Form Identity',
  description: 'All UI components must register their FORM identity. No component may exist without FORM.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const hasFormIdentity = context.hasFormIdentity as boolean | undefined
    const formId = context.formId as string | undefined

    if (hasFormIdentity === false || !formId) {
      throw new InvariantViolationError(
        'UI_FORM.F55',
        'UI_FORM',
        'F55',
        'F55 violation: Component lacks FORM identity. All components must register their FORM.',
        {
          hasFormIdentity,
          formId,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
  },
}



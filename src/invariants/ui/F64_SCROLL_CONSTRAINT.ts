/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F64: Scroll Constraint
 * 
 * CATEGORY: UI_SCROLL
 * ENFORCEMENT: ON_FIRST_RENDER
 * 
 * Scroll may only occur in the content area.
 * Never in body, never in root, never in sidebar.
 * This is a UI-equivalent of natural law.
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const F64_SCROLL_CONSTRAINT: InvariantDefinition = {
  category: 'UI_SCROLL',
  code: 'F64',
  name: 'Scroll Constraint',
  description: 'Scroll may only occur in the content area. Never in body, never in root, never in sidebar. This is a UI-equivalent of natural law.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const scrollLocation = context.scrollLocation as 'body' | 'root' | 'sidebar' | 'content' | undefined

    if (scrollLocation === 'body' || scrollLocation === 'root' || scrollLocation === 'sidebar') {
      throw new InvariantViolationError(
        'UI_SCROLL.F64',
        'UI_SCROLL',
        'F64',
        `F64 violation: Scroll detected in ${scrollLocation}. Scroll may only occur in content area.`,
        {
          scrollLocation,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
  },
}



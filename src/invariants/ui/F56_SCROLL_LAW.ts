/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F56: Scroll Law
 * 
 * CATEGORY: UI_SCROLL
 * ENFORCEMENT: ON_FIRST_RENDER
 * 
 * Global components (GlobalHeader, GlobalSidebar) never scroll.
 * Only ViewportHost scrolls.
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const F56_SCROLL_LAW: InvariantDefinition = {
  category: 'UI_SCROLL',
  code: 'F56',
  name: 'Scroll Law',
  description: 'Global components (GlobalHeader, GlobalSidebar) never scroll. Only ViewportHost scrolls.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const componentType = context.componentType as 'GlobalHeader' | 'GlobalSidebar' | 'ViewportHost' | undefined
    const hasScroll = context.hasScroll as boolean | undefined

    if (componentType === 'GlobalHeader' || componentType === 'GlobalSidebar') {
      if (hasScroll === true) {
        throw new InvariantViolationError(
          'UI_SCROLL.F56',
          'UI_SCROLL',
          'F56',
          `F56 violation: ${componentType} has scroll. Global components must never scroll.`,
          {
            componentType,
            hasScroll,
            source: context.sourceComponent || context.sourceFile || 'unknown',
          }
        )
      }
    }
  },
}



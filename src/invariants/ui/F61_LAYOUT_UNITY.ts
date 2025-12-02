/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F61: Layout Unity
 * 
 * CATEGORY: UI_LAYOUT
 * ENFORCEMENT: ON_FIRST_RENDER
 * 
 * All views must be derived from the same LayoutRoot.
 * Rendering without LayoutRoot → THROW.
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const F61_LAYOUT_UNITY: InvariantDefinition = {
  category: 'UI_LAYOUT',
  code: 'F61',
  name: 'Layout Unity',
  description: 'All views must be derived from the same LayoutRoot. Rendering without LayoutRoot → THROW.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const usesLayoutRoot = context.usesLayoutRoot as boolean | undefined

    if (usesLayoutRoot === false) {
      throw new InvariantViolationError(
        'UI_LAYOUT.F61',
        'UI_LAYOUT',
        'F61',
        'F61 violation: View renders without LayoutRoot. All views must use LayoutRoot.',
        {
          usesLayoutRoot,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
  },
}



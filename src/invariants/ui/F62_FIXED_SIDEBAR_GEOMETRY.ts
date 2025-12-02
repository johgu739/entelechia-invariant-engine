/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F62: Fixed Sidebar Geometry
 * 
 * CATEGORY: UI_LAYOUT
 * ENFORCEMENT: ON_FIRST_RENDER
 * 
 * Sidebar must never change width, position, scroll behavior, or mount cycle.
 * If a view renders a sidebar with different geometry → THROW.
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const F62_FIXED_SIDEBAR_GEOMETRY: InvariantDefinition = {
  category: 'UI_LAYOUT',
  code: 'F62',
  name: 'Fixed Sidebar Geometry',
  description: 'Sidebar must never change width, position, scroll behavior, or mount cycle. If a view renders a sidebar with different geometry → THROW.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const sidebarGeometry = context.sidebarGeometry as { width?: number; position?: string; scrollBehavior?: string } | undefined
    const matchesRealmDefinition = context.matchesRealmDefinition as boolean | undefined

    if (sidebarGeometry && matchesRealmDefinition === false) {
      throw new InvariantViolationError(
        'UI_LAYOUT.F62',
        'UI_LAYOUT',
        'F62',
        'F62 violation: Sidebar geometry does not match realm definition. Sidebar must have identical geometry across all pages.',
        {
          sidebarGeometry,
          matchesRealmDefinition,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
  },
}



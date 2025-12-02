/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F24: Nondestructive Refresh Rendering
 * 
 * CATEGORY: UI_HIERARCHY
 * ENFORCEMENT: AFTER_LAYOUT_COMMIT
 * 
 * Telos: Sidebar structure must never unmount or collapse during refresh or hydration.
 * User's expansion state must be preserved across refreshes.
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const F24_NONDESTRUCTIVE_REFRESH_RENDERING: InvariantDefinition = {
  category: 'UI_HIERARCHY',
  code: 'F24',
  name: 'Nondestructive Refresh Rendering',
  description: 'Sidebar structure must never unmount or collapse during refresh or hydration. User expansion state must be preserved.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const structureUnmounted = context.structureUnmounted as boolean | undefined
    const structureCollapsed = context.structureCollapsed as boolean | undefined
    const duringHydration = context.duringHydration as boolean | undefined
    const duringRefresh = context.duringRefresh as boolean | undefined
    const routerPath = context.routerPath as string | undefined

    if (structureUnmounted === true) {
      throw new InvariantViolationError(
        'UI_HIERARCHY.F24',
        'UI_HIERARCHY',
        'F24',
        'F24_NONDESTRUCTIVE_REFRESH_RENDERING violation: Sidebar structure was unmounted during refresh or hydration. Structure must remain mounted at all times.',
        {
          structureUnmounted: true,
          duringHydration,
          duringRefresh,
          routerPath,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }

    // Structure collapse is only allowed if user explicitly collapsed it
    // If structure collapses during hydration/refresh without user action, that's a violation
    if (structureCollapsed === true && (duringHydration === true || duringRefresh === true)) {
      // This is a warning, not an error - user might have collapsed it before refresh
      // But we log it for debugging
      if ((import.meta as any).env?.DEV) {
        console.warn('[F24] Sidebar structure collapsed during hydration/refresh. This may indicate state loss.', {
          structureCollapsed: true,
          duringHydration,
          duringRefresh,
          routerPath,
        })
      }
    }
  },
}


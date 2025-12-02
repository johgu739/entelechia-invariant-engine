/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F80: Layout No Void States
 * 
 * CATEGORY: UI_LAYOUT
 * ENFORCEMENT: BEFORE_COMPONENT_MOUNT
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const F80_LAYOUT_NO_VOID_STATES: InvariantDefinition = {
  category: 'UI_LAYOUT',
  code: 'F80',
  name: 'Layout No Void States',
  description: 'No route may present a structurally void screen. Even during loading, full FORM must be present (global header, domain sidebar, content frame). Loading states may change CONTENT but must not destroy FRAME.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const layoutVoidState = context.layoutVoidState as boolean | undefined
    const sidebarMissing = context.sidebarMissing as boolean | undefined
    const headerMissing = context.headerMissing as boolean | undefined
    const contentFrameMissing = context.contentFrameMissing as boolean | undefined
    const routePath = context.routerPath as string | undefined

    if (layoutVoidState === true) {
      throw new InvariantViolationError(
        'UI_LAYOUT.F80',
        'UI_LAYOUT',
        'F80',
        'F80_LAYOUT_NO_VOID_STATES violation: Layout is in void state. Full FORM (header, sidebar, content frame) must always be present, even during loading.',
        {
          layoutVoidState: true,
          routePath,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }

    if (sidebarMissing === true) {
      throw new InvariantViolationError(
        'UI_LAYOUT.F80',
        'UI_LAYOUT',
        'F80',
        'F80_LAYOUT_NO_VOID_STATES violation: Sidebar is missing. Domain sidebar must always be present, even during loading.',
        {
          sidebarMissing: true,
          routePath,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }

    if (headerMissing === true) {
      throw new InvariantViolationError(
        'UI_LAYOUT.F80',
        'UI_LAYOUT',
        'F80',
        'F80_LAYOUT_NO_VOID_STATES violation: Header is missing. Global header must always be present, even during loading.',
        {
          headerMissing: true,
          routePath,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }

    if (contentFrameMissing === true) {
      throw new InvariantViolationError(
        'UI_LAYOUT.F80',
        'UI_LAYOUT',
        'F80',
        'F80_LAYOUT_NO_VOID_STATES violation: Content frame is missing. Content frame must always be present, even during loading.',
        {
          contentFrameMissing: true,
          routePath,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
  },
}



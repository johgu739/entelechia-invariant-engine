/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F81: Page Vertical Expansion
 * 
 * CATEGORY: UI_LAYOUT
 * ENFORCEMENT: ON_FIRST_RENDER
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const F81_PAGE_VERTICAL_EXPANSION: InvariantDefinition = {
  category: 'UI_LAYOUT',
  code: 'F81',
  name: 'Page Vertical Expansion',
  description: 'Main content region must fill vertical space between header and footer. No collapsing, no stretching, no accidental max-height/min-height inversions.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const mainCollapsed = context.mainCollapsed as boolean | undefined
    const mainHeightMismatch = context.mainHeightMismatch as boolean | undefined
    const parentUsesMinHeightZero = context.parentUsesMinHeightZero as boolean | undefined
    const parentOverflowHiddenWithoutHeight = context.parentOverflowHiddenWithoutHeight as boolean | undefined
    const headerHeight = context.headerHeight as number | undefined
    const mainHeight = context.mainHeight as number | undefined
    const footerHeight = context.footerHeight as number | undefined
    const viewportHeight = context.viewportHeight as number | undefined
    const routePath = context.routerPath as string | undefined

    if (mainCollapsed === true) {
      throw new InvariantViolationError(
        'UI_LAYOUT.F81',
        'UI_LAYOUT',
        'F81',
        'F81_PAGE_VERTICAL_EXPANSION violation: Main content does not occupy full vertical space. Collapsing or unconstrained container detected.',
        {
          mainCollapsed: true,
          headerHeight,
          mainHeight,
          footerHeight,
          viewportHeight,
          routePath,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }

    if (mainHeightMismatch === true) {
      const expectedHeight = viewportHeight && headerHeight && footerHeight
        ? viewportHeight - headerHeight - footerHeight
        : undefined
      const actualHeight = mainHeight

      throw new InvariantViolationError(
        'UI_LAYOUT.F81',
        'UI_LAYOUT',
        'F81',
        `F81_PAGE_VERTICAL_EXPANSION violation: Main height mismatch. Expected: ${expectedHeight}px, Actual: ${actualHeight}px. Header: ${headerHeight}px, Footer: ${footerHeight}px, Viewport: ${viewportHeight}px.`,
        {
          mainHeightMismatch: true,
          expectedHeight,
          actualHeight,
          headerHeight,
          footerHeight,
          viewportHeight,
          routePath,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }

    if (parentUsesMinHeightZero === true) {
      throw new InvariantViolationError(
        'UI_LAYOUT.F81',
        'UI_LAYOUT',
        'F81',
        'F81_PAGE_VERTICAL_EXPANSION violation: Parent container uses min-height: 0 without whitelist. Only WorkspaceFrame and ViewportHost may use min-height: 0.',
        {
          parentUsesMinHeightZero: true,
          routePath,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }

    if (parentOverflowHiddenWithoutHeight === true) {
      throw new InvariantViolationError(
        'UI_LAYOUT.F81',
        'UI_LAYOUT',
        'F81',
        'F81_PAGE_VERTICAL_EXPANSION violation: Parent container uses overflow-hidden without explicit height constraints. Overflow-hidden requires explicit height.',
        {
          parentOverflowHiddenWithoutHeight: true,
          routePath,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
  },
}



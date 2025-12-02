/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F77: Viewport Immutability
 * 
 * CATEGORY: UI_LAYOUT
 * ENFORCEMENT: BEFORE_COMPONENT_MOUNT
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const F77_VIEWPORT_IMMUTABILITY: InvariantDefinition = {
  category: 'UI_LAYOUT',
  code: 'F77',
  name: 'Viewport Immutability',
  description: 'FrameRoot/PageRoot must be vertically immutable (full-height, overflow-hidden). No route may cause viewport to grow taller than window. Scroll only in ViewportHost/content region.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const viewportHeightExceedsWindow = context.viewportHeightExceedsWindow as boolean | undefined
    const rootHasOverflow = context.rootHasOverflow as boolean | undefined
    const scrollOutsideContentRegion = context.scrollOutsideContentRegion as boolean | undefined
    const routePath = context.routerPath as string | undefined

    if (viewportHeightExceedsWindow === true) {
      throw new InvariantViolationError(
        'UI_LAYOUT.F77',
        'UI_LAYOUT',
        'F77',
        'F77_VIEWPORT_IMMUTABILITY violation: Viewport height exceeds window height. Viewport must be fixed to window height (h-screen).',
        {
          viewportHeightExceedsWindow: true,
          routePath,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }

    if (rootHasOverflow === true) {
      throw new InvariantViolationError(
        'UI_LAYOUT.F77',
        'UI_LAYOUT',
        'F77',
        'F77_VIEWPORT_IMMUTABILITY violation: Root frame has overflow. Root frame must have overflow-hidden.',
        {
          rootHasOverflow: true,
          routePath,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }

    if (scrollOutsideContentRegion === true) {
      throw new InvariantViolationError(
        'UI_LAYOUT.F77',
        'UI_LAYOUT',
        'F77',
        'F77_VIEWPORT_IMMUTABILITY violation: Scroll detected outside content region. Only ViewportHost/content region may scroll.',
        {
          scrollOutsideContentRegion: true,
          routePath,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
  },
}



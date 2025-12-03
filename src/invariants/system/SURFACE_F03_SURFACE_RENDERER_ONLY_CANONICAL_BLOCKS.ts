/**
 * ✅ ENTELECHIA INVARIANT ENGINE — SURFACE.F03: SurfaceRenderer Only Uses Canonical Blocks
 * 
 * CATEGORY: SURFACE
 * ENFORCEMENT: BUILD + RUNTIME
 * 
 * PRINCIPLE: SurfaceRenderer must only use canonical building blocks from
 * @entelechia/design-system and canonical blocks library.
 * No ad-hoc styles or custom components allowed.
 * 
 * FORM → ACT → STATE → RUNTIME:
 * - FORM: Surface view descriptors reference canonical block types
 * - ACT: Canonicalizer validates block types are known
 * - STATE: Generated descriptors contain canonical block references
 * - RUNTIME: SurfaceRenderer maps blocks to canonical components only
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const SURFACE_F03_SURFACE_RENDERER_ONLY_CANONICAL_BLOCKS: InvariantDefinition = {
  category: 'SURFACE',
  code: 'F03',
  name: 'SurfaceRenderer Only Uses Canonical Blocks',
  description: `
    SurfaceRenderer must only use canonical building blocks:
    - From @entelechia/design-system (tokens, spacing, typography)
    - From canonical blocks library (Panel, Stack, GridRow, MetricCard, etc.)
    
    No ad-hoc styles, custom components, or arbitrary CSS classes allowed.
    
    Violation examples:
    - Custom components defined in SurfaceRenderer
    - Arbitrary Tailwind classes not from design-system
    - Inline styles or style objects
    - Non-canonical layout components
  `,
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const usesNonCanonicalBlocks = context.usesNonCanonicalBlocks as boolean | undefined
    const blockType = context.blockType as string | undefined

    if (usesNonCanonicalBlocks === true) {
      throw new InvariantViolationError(
        'SURFACE.F03',
        'SURFACE',
        'F03',
        `SURFACE.F03 violation: SurfaceRenderer uses non-canonical block "${blockType || 'unknown'}". Only canonical blocks from @entelechia/design-system allowed.`,
        {
          blockType,
          usesNonCanonicalBlocks,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
  },
}


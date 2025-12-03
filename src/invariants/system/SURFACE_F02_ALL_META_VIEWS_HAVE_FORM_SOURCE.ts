/**
 * ✅ ENTELECHIA INVARIANT ENGINE — SURFACE.F02: All Meta Views Have FORM Source
 * 
 * CATEGORY: SURFACE
 * ENFORCEMENT: BUILD + RUNTIME
 * 
 * PRINCIPLE: Every surface view rendered in meta-repos must have a corresponding
 * FORM source (*.view.yaml) that was canonicalized via ACT.
 * 
 * FORM → ACT → STATE → RUNTIME:
 * - FORM: *.view.yaml files must exist for all meta views
 * - ACT: surface-canonicalizer.ts must have processed the FORM
 * - STATE: *.surface.generated.ts must contain the view descriptor
 * - RUNTIME: SurfaceRenderer must use the generated descriptor
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const SURFACE_F02_ALL_META_VIEWS_HAVE_FORM_SOURCE: InvariantDefinition = {
  category: 'SURFACE',
  code: 'F02',
  name: 'All Meta Views Have FORM Source',
  description: `
    Every surface view rendered in meta-repositories must have a corresponding
    FORM source (*.view.yaml) in entelechia-form/meta-views/.
    
    The FORM must be:
    1. Validated against SurfaceYamlSchema
    2. Canonicalized via surface-canonicalizer.ts
    3. Generated into STATE (*.surface.generated.ts)
    4. Consumed by SurfaceRenderer
    
    Violation examples:
    - View rendered without corresponding *.view.yaml
    - View descriptor missing from generated STATE
    - View uses hardcoded structure instead of descriptor
  `,
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const viewId = context.viewId as string | undefined
    const hasFormSource = context.hasFormSource as boolean | undefined

    if (viewId && hasFormSource === false) {
      throw new InvariantViolationError(
        'SURFACE.F02',
        'SURFACE',
        'F02',
        `SURFACE.F02 violation: View "${viewId}" rendered without corresponding FORM source (*.view.yaml).`,
        {
          viewId,
          hasFormSource,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
  },
}


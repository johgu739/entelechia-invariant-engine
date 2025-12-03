/**
 * ✅ ENTELECHIA INVARIANT ENGINE — SURFACE.F01: No Ad-Hoc UI in Meta Repos
 * 
 * CATEGORY: SURFACE
 * ENFORCEMENT: BUILD + RUNTIME
 * 
 * PRINCIPLE: All UI structure must derive from Surface FORM.
 * Meta-repositories (topology, contract-wall, purpose) must use SurfaceRenderer,
 * never define bespoke UI layouts.
 * 
 * FORM → ACT → STATE → RUNTIME:
 * - FORM: *.view.yaml files define UI structure
 * - ACT: surface-canonicalizer.ts canonicalizes views
 * - STATE: *.surface.generated.ts provides descriptors
 * - RUNTIME: SurfaceRenderer renders all surfaces
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const SURFACE_F01_NO_ADHOC_UI_IN_META_REPOS: InvariantDefinition = {
  category: 'SURFACE',
  code: 'F01',
  name: 'No Ad-Hoc UI in Meta Repos',
  description: `
    Meta-repositories (topology, contract-wall, purpose) must not define
    bespoke UI layouts. All UI structure must come from Surface FORM (*.view.yaml)
    and be rendered via SurfaceRenderer.
    
    Violation examples:
    - Hardcoded JSX structure in meta-repo UI components
    - Custom layout components outside SurfaceRenderer
    - Direct Tailwind class composition without surface descriptor
  `,
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const hasAdHocUI = context.hasAdHocUI as boolean | undefined
    const metaRepo = context.metaRepo as string | undefined

    if (hasAdHocUI === true && metaRepo) {
      throw new InvariantViolationError(
        'SURFACE.F01',
        'SURFACE',
        'F01',
        `SURFACE.F01 violation: Meta-repo "${metaRepo}" defines ad-hoc UI instead of using SurfaceRenderer with surface descriptor.`,
        {
          metaRepo,
          hasAdHocUI,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
  },
}


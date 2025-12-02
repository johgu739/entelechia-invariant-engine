/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F83: Bounding Box Integrity
 * 
 * CATEGORY: UI_LAYOUT
 * ENFORCEMENT: AFTER_LAYOUT_COMMIT
 * 
 * Telos: A child element may not claim 100% height, or shrink to min-height:0,
 * unless the parent has explicit size constraints — FORM requires bounding-box determinacy.
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const F83_BOUNDING_BOX_INTEGRITY: InvariantDefinition = {
  category: 'UI_LAYOUT',
  code: 'F83',
  name: 'Bounding Box Integrity',
  description: 'Child element may not claim 100% height or shrink to min-height:0 unless parent has explicit size constraints. FORM requires bounding-box determinacy.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const childMaxHeight100WithoutParentHeight = context.childMaxHeight100WithoutParentHeight as boolean | undefined
    const childMinHeight0NotWhitelisted = context.childMinHeight0NotWhitelisted as boolean | undefined
    const flexChainCollapse = context.flexChainCollapse as boolean | undefined
    const heightPropagationMismatch = context.heightPropagationMismatch as boolean | undefined
    const parentElementId = context.parentElementId as string | undefined
    const childElementId = context.childElementId as string | undefined
    const routePath = context.routerPath as string | undefined

    if (childMaxHeight100WithoutParentHeight === true) {
      throw new InvariantViolationError(
        'UI_LAYOUT.F83',
        'UI_LAYOUT',
        'F83',
        `F83_BOUNDING_BOX_INTEGRITY violation: Child element depends on undefined height constraints. Child uses max-height: 100% but parent lacks explicit height. Parent: ${parentElementId}, Child: ${childElementId}`,
        {
          childMaxHeight100WithoutParentHeight: true,
          parentElementId,
          childElementId,
          routePath,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }

    if (childMinHeight0NotWhitelisted === true) {
      throw new InvariantViolationError(
        'UI_LAYOUT.F83',
        'UI_LAYOUT',
        'F83',
        `F83_BOUNDING_BOX_INTEGRITY violation: Child uses min-height: 0 outside whitelisted containers. Allowed containers: WorkspaceFrame, ViewportHost, PanelGroup, Panel, NodeDetailView, WorkspaceModeLayout, and flex containers with explicit height. Parent: ${parentElementId}, Child: ${childElementId}`,
        {
          childMinHeight0NotWhitelisted: true,
          parentElementId,
          childElementId,
          routePath,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }

    if (flexChainCollapse === true) {
      throw new InvariantViolationError(
        'UI_LAYOUT.F83',
        'UI_LAYOUT',
        'F83',
        'F83_BOUNDING_BOX_INTEGRITY violation: Flex-chain collapse detected. Missing height on ancestor causes flex chain to collapse.',
        {
          flexChainCollapse: true,
          routePath,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }

    if (heightPropagationMismatch === true) {
      throw new InvariantViolationError(
        'UI_LAYOUT.F83',
        'UI_LAYOUT',
        'F83',
        `F83_BOUNDING_BOX_INTEGRITY violation: Height propagation mismatch. Child with height: 100% fails due to no bounding context. Parent: ${parentElementId}, Child: ${childElementId}`,
        {
          heightPropagationMismatch: true,
          parentElementId,
          childElementId,
          routePath,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
  },
}


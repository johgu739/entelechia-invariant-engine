/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F88: Chat Layout Constraints
 * 
 * CATEGORY: UI_SCROLL
 * ENFORCEMENT: AFTER_LAYOUT_COMMIT
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const F88_CHAT_LAYOUT_CONSTRAINTS: InvariantDefinition = {
  category: 'UI_SCROLL',
  code: 'F88',
  name: 'Chat Layout Constraints',
  description: 'Ensures chat never collapses, expands infinitely, or scrolls incorrectly. ChatContainer must have min-h-0, ChatScrollRegion must have flex-1 min-h-0 overflow-y-auto, ChatInputBar must be shrink-0.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const chatContainerMissingMinH0 = context.chatContainerMissingMinH0 as boolean | undefined
    const chatScrollRegionMissingFlex1 = context.chatScrollRegionMissingFlex1 as boolean | undefined
    const chatScrollRegionMissingMinH0 = context.chatScrollRegionMissingMinH0 as boolean | undefined
    const chatScrollRegionMissingOverflowYAuto = context.chatScrollRegionMissingOverflowYAuto as boolean | undefined
    const chatInputBarMissingShrink0 = context.chatInputBarMissingShrink0 as boolean | undefined
    const scrollableAncestorDetected = context.scrollableAncestorDetected as boolean | undefined
    const heightConstraintInScrollRegion = context.heightConstraintInScrollRegion as boolean | undefined
    const chatExpandingInsteadOfScrolling = context.chatExpandingInsteadOfScrolling as boolean | undefined
    const chatInputNotAnchored = context.chatInputNotAnchored as boolean | undefined

    if (chatContainerMissingMinH0 === true) {
      throw new InvariantViolationError(
        'UI_SCROLL.F88',
        'UI_SCROLL',
        'F88',
        'F88 violation: ChatContainer missing min-h-0. ChatContainer MUST have min-h-0 to prevent overflow collapse.',
        {
          chatContainerMissingMinH0: true,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }

    if (chatScrollRegionMissingFlex1 === true || chatScrollRegionMissingMinH0 === true || chatScrollRegionMissingOverflowYAuto === true) {
      throw new InvariantViolationError(
        'UI_SCROLL.F88',
        'UI_SCROLL',
        'F88',
        'F88 violation: ChatScrollRegion missing required classes. ChatScrollRegion MUST have flex-1 min-h-0 overflow-y-auto.',
        {
          chatScrollRegionMissingFlex1,
          chatScrollRegionMissingMinH0,
          chatScrollRegionMissingOverflowYAuto,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }

    if (chatInputBarMissingShrink0 === true) {
      throw new InvariantViolationError(
        'UI_SCROLL.F88',
        'UI_SCROLL',
        'F88',
        'F88 violation: ChatInputBar missing shrink-0. ChatInputBar MUST be shrink-0 to never be pushed off-screen.',
        {
          chatInputBarMissingShrink0: true,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }

    if (scrollableAncestorDetected === true) {
      throw new InvariantViolationError(
        'UI_SCROLL.F88',
        'UI_SCROLL',
        'F88',
        'F88 violation: Scrollable ancestor detected above chat viewport. No ancestor of ChatScrollRegion may have overflow-y-*.',
        {
          scrollableAncestorDetected: true,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }

    if (heightConstraintInScrollRegion === true) {
      throw new InvariantViolationError(
        'UI_SCROLL.F88',
        'UI_SCROLL',
        'F88',
        'F88 violation: Height constraint detected in scroll region descendant. No descendant of ChatScrollRegion may set height constraints.',
        {
          heightConstraintInScrollRegion: true,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }

    if (chatExpandingInsteadOfScrolling === true) {
      throw new InvariantViolationError(
        'UI_SCROLL.F88',
        'UI_SCROLL',
        'F88',
        'F88 violation: Chat pane expanding instead of scrolling. ChatScrollRegion must scroll, not expand.',
        {
          chatExpandingInsteadOfScrolling: true,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }

    if (chatInputNotAnchored === true) {
      throw new InvariantViolationError(
        'UI_SCROLL.F88',
        'UI_SCROLL',
        'F88',
        'F88 violation: Chat input not anchored, shrink-0 missing. ChatInputBar must be shrink-0.',
        {
          chatInputNotAnchored: true,
          source: context.sourceComponent || context.sourceFile || 'unknown',
        }
      )
    }
  },
}



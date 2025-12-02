/**
 * ✅ ENTELECHIA INVARIANT ENGINE
 * 
 * Centralized, reusable invariant engine library.
 * 
 * @package @entelechia/invariant-engine
 */

// Core exports
export { registry, InvariantRegistry } from './core/registry'
export { enforceInvariant, checkInvariant } from './core/enforcement'
export {
  InvariantViolationError,
  InvariantNotFoundError,
  InvariantCollisionError,
} from './core/errors'

// FORM exports (canonical UI tokens)
export { UI, TYPOGRAPHY, SPACING, LAYOUT } from './form/ui-tokens'
export type { TypographyToken, SpacingToken, LayoutToken } from './form/ui-tokens'

// Type exports
export type {
  InvariantCategory,
  InvariantSeverity,
  InvariantContext,
  InvariantMetadata,
  InvariantDefinition,
  RegistryEntry,
  RegistryMap,
} from './core/types'

// ✅ CRITICAL: Side-effect imports MUST execute to register invariants
// These imports trigger the registration code in each module
// Order matters: UI → System → Domain (to match category ranges)
import './invariants/ui'
import './invariants/system'
import './invariants/domain'

// Re-export all invariants (after registration)
export * from './invariants/ui'
export * from './invariants/system'
export * from './invariants/domain'


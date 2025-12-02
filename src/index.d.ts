/**
 * ✅ ENTELECHIA INVARIANT ENGINE
 *
 * Centralized, reusable invariant engine library.
 *
 * @package @entelechia/invariant-engine
 */
export { registry, InvariantRegistry } from './core/registry';
export { enforceInvariant, checkInvariant } from './core/enforcement';
export { InvariantViolationError, InvariantNotFoundError, InvariantCollisionError, } from './core/errors';
export { UI, TYPOGRAPHY, SPACING, LAYOUT } from './form/ui-tokens';
export type { TypographyToken, SpacingToken, LayoutToken } from './form/ui-tokens';
export type { InvariantCategory, InvariantSeverity, InvariantContext, InvariantMetadata, InvariantDefinition, RegistryEntry, RegistryMap, } from './core/types';
import './invariants/ui';
import './invariants/system';
import './invariants/domain';
export * from './invariants/ui';
export * from './invariants/system';
export * from './invariants/domain';
//# sourceMappingURL=index.d.ts.map
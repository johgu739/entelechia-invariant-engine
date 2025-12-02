/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F25: No Flash Blink
 *
 * CATEGORY: DOMAIN_LOGIC
 * ENFORCEMENT: DURING_RENDER_AND_TRANSITIONS
 *
 * Telos: No flash/blink during transitions, no placeholder ViewModels replacing real ViewModels,
 * no transient DOM swaps. UI must maintain continuity during state transitions.
 *
 * Enforcement:
 * - Prevents placeholder ViewModels from replacing real ViewModels after continuity baseline is initialized
 * - Prevents transient DOM swaps that cause visual flash/blink
 * - Ensures continuity cache stability during transitions
 * - Prevents WorkspaceFrame remounts (except intentional full reload)
 */
import type { InvariantDefinition } from '../../core/types';
export declare const F25_NO_FLASH_BLINK: InvariantDefinition;
//# sourceMappingURL=F25_NO_FLASH_BLINK.d.ts.map
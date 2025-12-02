/**
 * ✅ ENTELECHIA INVARIANT ENGINE — Enforcement
 * 
 * Core enforcement logic for invariants.
 */

import { registry } from './registry'
import { InvariantNotFoundError, InvariantViolationError } from './errors'
import type { InvariantContext } from './types'

/**
 * Enforce an invariant
 * 
 * @param invariantId - Full invariant ID (e.g. "UI_SCROLL.F82")
 * @param node - DOM node to check (optional)
 * @param context - Additional context
 * @throws InvariantViolationError if invariant fails
 * @throws InvariantNotFoundError if invariant doesn't exist
 */
export function enforceInvariant(
  invariantId: string,
  node: HTMLElement | null = null,
  context: InvariantContext = {}
): void {
  // ✅ RUNTIME DIAGNOSTIC: Log registry state on first call (dev only)
  if (typeof window !== 'undefined' && (import.meta as any).env?.DEV) {
    const registryKeys = Array.from(registry.getAll().map(e => e.metadata.id))
    if (!(window as any).__INVARIANT_REGISTRY_LOGGED) {
      console.log('[INVARIANT ENGINE] Runtime Registry Keys:', registryKeys.sort())
      console.log('[INVARIANT ENGINE] Registry Size:', registryKeys.length)
      ;(window as any).__INVARIANT_REGISTRY_LOGGED = true
    }
  }
  
  const entry = registry.get(invariantId)

  if (!entry) {
    // ✅ RUNTIME DIAGNOSTIC: Show available invariants on error (dev only)
    if ((import.meta as any).env?.DEV) {
      const registryKeys = Array.from(registry.getAll().map(e => e.metadata.id))
      console.error(`[INVARIANT ENGINE] Invariant "${invariantId}" not found in registry`)
      console.error(`[INVARIANT ENGINE] Available invariants:`, registryKeys.sort())
      console.error(`[INVARIANT ENGINE] Registry size:`, registryKeys.length)
      console.error(`[INVARIANT ENGINE] Checking for similar IDs:`, registryKeys.filter(k => k.includes(invariantId.split('.')[1] || '')))
    }
    throw new InvariantNotFoundError(invariantId)
  }

  const { metadata } = entry

  try {
    // Execute the enforce function
    metadata.enforce(node, context)
  } catch (error) {
    // If the enforce function throws, wrap it in InvariantViolationError
    if (error instanceof InvariantViolationError) {
      throw error
    }

    throw new InvariantViolationError(
      invariantId,
      metadata.category,
      metadata.code,
      error instanceof Error ? error.message : String(error),
      context
    )
  }
}

/**
 * Check an invariant (non-throwing)
 * 
 * Returns true if invariant passes, false otherwise.
 */
export function checkInvariant(
  invariantId: string,
  node: HTMLElement | null = null,
  context: InvariantContext = {}
): boolean {
  try {
    enforceInvariant(invariantId, node, context)
    return true
  } catch {
    return false
  }
}

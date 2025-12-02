/**
 * ✅ ENTELECHIA INVARIANT ENGINE — Core Types
 * 
 * Canonical type definitions for the invariant system.
 */

/**
 * Invariant Category
 * 
 * Each invariant belongs to exactly one category.
 */
export type InvariantCategory =
  | 'UI_LAYOUT'
  | 'UI_FORM'
  | 'UI_SCROLL'
  | 'UI_HIERARCHY'
  | 'UI_TYPOGRAPHY'
  | 'UI_SPACING'
  | 'SYSTEM_STATE'
  | 'SYSTEM_ROUTER'
  | 'DOMAIN_LOGIC'

/**
 * Invariant Severity
 */
export type InvariantSeverity = 'ERROR' | 'WARNING'

/**
 * Invariant Context
 * 
 * Context passed to invariant enforcement functions.
 */
export interface InvariantContext {
  node?: HTMLElement
  sourceComponent?: string
  sourceFile?: string
  [key: string]: any // Allow arbitrary context properties
}

/**
 * Invariant Metadata
 * 
 * Complete metadata for a registered invariant.
 */
export interface InvariantMetadata {
  id: string // e.g. "UI_SCROLL.F82"
  category: InvariantCategory
  code: string // e.g. "F82"
  name: string
  description: string
  severity: InvariantSeverity
  enforce: (node: HTMLElement | null, context: InvariantContext) => void
}

/**
 * Invariant Definition
 * 
 * Structure for defining an invariant before registration.
 */
export interface InvariantDefinition {
  category: InvariantCategory
  code: string // e.g. "F82" (will be prefixed with category on registration)
  name: string
  description: string
  severity: InvariantSeverity
  enforce: (node: HTMLElement | null, context: InvariantContext) => void
}

/**
 * Registry Entry
 * 
 * Internal registry entry with metadata.
 */
export interface RegistryEntry {
  metadata: InvariantMetadata
  file: string // Source file path
  loaded: boolean
}

/**
 * Registry Map
 * 
 * Map of invariant IDs to registry entries.
 */
export type RegistryMap = Map<string, RegistryEntry>



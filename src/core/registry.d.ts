/**
 * ✅ ENTELECHIA INVARIANT ENGINE — Registry
 *
 * Central registry for all invariants with strict ID assignment.
 *
 * Rules:
 * - IDs never change once assigned
 * - IDs never collide
 * - No invariant may overwrite another
 * - If an invariant already exists, migrate it instead of replacing
 * - Fxx numbers are immutable once assigned
 * - Each category has its own increasing counter
 */
import type { InvariantCategory, InvariantDefinition, InvariantMetadata, RegistryEntry } from './types';
/**
 * Invariant Registry
 *
 * Singleton registry instance.
 */
export declare class InvariantRegistry {
    private invariants;
    private categoryCounters;
    /**
     * Register an invariant
     *
     * Generates a canonical ID: `{CATEGORY}.{CODE}`
     *
     * If the invariant already exists, throws InvariantCollisionError.
     */
    register(definition: InvariantDefinition, sourceFile: string): InvariantMetadata;
    /**
     * Get an invariant by ID
     */
    get(id: string): RegistryEntry | undefined;
    /**
     * Get all invariants by category
     */
    getByCategory(category: InvariantCategory): RegistryEntry[];
    /**
     * Get all registered invariants
     */
    getAll(): RegistryEntry[];
    /**
     * Get all invariant IDs (for runtime diagnostics)
     */
    getAllInvariantIds(): string[];
    /**
     * Get registry map (for reporting)
     */
    getRegistryMap(): Record<string, {
        file: string;
        loaded: boolean;
    }>;
    /**
     * Check if an invariant exists
     */
    has(id: string): boolean;
    /**
     * Get next available code for a category
     *
     * Returns the next F-number that hasn't been used in this category.
     */
    getNextCode(category: InvariantCategory): string;
    /**
     * Verify registry completeness
     *
     * Throws if required invariants are missing.
     * Used at startup to ensure FORM is complete before ACT begins.
     */
    verifyCompletenessOrThrow(requiredIds: string[]): void;
}
/**
 * Global registry instance
 */
export declare const registry: InvariantRegistry;
//# sourceMappingURL=registry.d.ts.map
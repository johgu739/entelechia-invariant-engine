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
import { InvariantCollisionError } from './errors';
/**
 * Category ID Ranges
 *
 * Each category has a reserved range for F-number assignment.
 */
const CATEGORY_RANGES = {
    UI_LAYOUT: { min: 55, max: 64 },
    UI_FORM: { min: 1, max: 65 }, // Extended to include F001-F005 for form layout invariants
    UI_SCROLL: { min: 56, max: 90 },
    UI_HIERARCHY: { min: 60, max: 84 },
    UI_TYPOGRAPHY: { min: 85, max: 110 },
    UI_SPACING: { min: 86, max: 110 },
    SYSTEM_STATE: { min: 1, max: 50 },
    SYSTEM_ROUTER: { min: 12, max: 39 },
    DOMAIN_LOGIC: { min: 1, max: 200 }, // Expanded range for domain invariants (F68, F82, etc.)
};
/**
 * Invariant Registry
 *
 * Singleton registry instance.
 */
export class InvariantRegistry {
    invariants = new Map();
    categoryCounters = new Map();
    /**
     * Register an invariant
     *
     * Generates a canonical ID: `{CATEGORY}.{CODE}`
     *
     * If the invariant already exists, throws InvariantCollisionError.
     */
    register(definition, sourceFile) {
        const id = `${definition.category}.${definition.code}`;
        // Check for collision
        if (this.invariants.has(id)) {
            throw new InvariantCollisionError(id);
        }
        // Create metadata
        const metadata = {
            id,
            category: definition.category,
            code: definition.code,
            name: definition.name,
            description: definition.description,
            severity: definition.severity,
            enforce: definition.enforce,
        };
        // Register entry
        const entry = {
            metadata,
            file: sourceFile,
            loaded: true,
        };
        this.invariants.set(id, entry);
        // Update category counter
        const codeNumber = parseInt(definition.code.replace(/^F/, ''), 10);
        if (!isNaN(codeNumber)) {
            const currentMax = this.categoryCounters.get(definition.category) || 0;
            this.categoryCounters.set(definition.category, Math.max(currentMax, codeNumber));
        }
        return metadata;
    }
    /**
     * Get an invariant by ID
     */
    get(id) {
        return this.invariants.get(id);
    }
    /**
     * Get all invariants by category
     */
    getByCategory(category) {
        return Array.from(this.invariants.values()).filter(entry => entry.metadata.category === category);
    }
    /**
     * Get all registered invariants
     */
    getAll() {
        return Array.from(this.invariants.values());
    }
    /**
     * Get all invariant IDs (for runtime diagnostics)
     */
    getAllInvariantIds() {
        return Array.from(this.invariants.keys()).sort();
    }
    /**
     * Get registry map (for reporting)
     */
    getRegistryMap() {
        const map = {};
        this.invariants.forEach((entry, id) => {
            map[id] = {
                file: entry.file,
                loaded: entry.loaded,
            };
        });
        return map;
    }
    /**
     * Check if an invariant exists
     */
    has(id) {
        return this.invariants.has(id);
    }
    /**
     * Get next available code for a category
     *
     * Returns the next F-number that hasn't been used in this category.
     */
    getNextCode(category) {
        const range = CATEGORY_RANGES[category];
        const currentMax = this.categoryCounters.get(category) || range.min - 1;
        const next = Math.min(currentMax + 1, range.max);
        return `F${next}`;
    }
    /**
     * Verify registry completeness
     *
     * Throws if required invariants are missing.
     * Used at startup to ensure FORM is complete before ACT begins.
     */
    verifyCompletenessOrThrow(requiredIds) {
        const allIds = this.getAllInvariantIds();
        const missing = [];
        for (const requiredId of requiredIds) {
            if (!allIds.includes(requiredId)) {
                missing.push(requiredId);
            }
        }
        if (missing.length > 0) {
            throw new Error(`[INVARIANT REGISTRY] Missing required invariants: ${missing.join(', ')}\n` +
                `Registry contains ${allIds.length} invariants, but ${missing.length} required invariants are missing.\n` +
                `Available invariants: ${allIds.slice(0, 20).join(', ')}${allIds.length > 20 ? '...' : ''}\n` +
                `\nThis is a FORM violation. The system cannot proceed without complete invariant registration.\n` +
                `Fix: Ensure all invariant modules are imported and registered before startup.`);
        }
    }
}
/**
 * Global registry instance
 */
export const registry = new InvariantRegistry();
//# sourceMappingURL=registry.js.map
/**
 * ✅ ENTELECHIA: Metaphysical Sentry
 * 
 * Core module for recording and retrieving architecture violations.
 * 
 * PRINCIPLE: FORM → ACT → STATE → RUNTIME
 * - FORM: Architecture Rules YAML defines violations
 * - ACT: Phase 1.5 records violations during build
 * - STATE: Generated descriptors provide resolution metadata
 * - RUNTIME: Devtools displays violations with resolution steps
 */

// Browser-safe path imports (only available in Node.js)
let join: typeof import('path').join | null = null

// Browser-safe fs imports (only available in Node.js)
let appendFileSync: typeof import('fs').appendFileSync | null = null
let existsSync: typeof import('fs').existsSync | null = null
let mkdirSync: typeof import('fs').mkdirSync | null = null
let readFileSync: typeof import('fs').readFileSync | null = null

// Try to import path and fs only in Node.js environment
if (typeof window === 'undefined' && typeof process !== 'undefined' && process.versions?.node) {
  try {
    const path = require('path')
    join = path.join
    
    const fs = require('fs')
    appendFileSync = fs.appendFileSync
    existsSync = fs.existsSync
    mkdirSync = fs.mkdirSync
    readFileSync = fs.readFileSync
  } catch {
    // path/fs not available (browser environment)
  }
}

/**
 * Architecture violation context
 */
export interface ArchitectureViolationContext {
  ruleId: string
  filePath: string
  line: number
  column?: number
  identifier?: string
  importPath?: string
  snippet?: string
  telosViolated: string
  resolutionSteps: string[]
  detectedAt: 'build' | 'runtime'
  sourceLayer: 'ui' | 'backend'
  severity?: 'error' | 'warn'  // ✅ PHASE 5: Include severity for proper error/warning handling
  timestamp: number
}

/**
 * In-memory violation log
 */
let violationLog: ArchitectureViolationContext[] = []

/**
 * Get log file path
 */
function getLogFilePath(workspaceRoot?: string): string | null {
  // Only available in Node.js environment
  if (typeof window !== 'undefined' || !existsSync || !mkdirSync || !join) {
    return null
  }
  
  const root = workspaceRoot || (typeof process !== 'undefined' ? process.cwd() : '')
  if (!root) return null
  
  const logDir = join(root, 'logs')
  if (!existsSync(logDir)) {
    mkdirSync(logDir, { recursive: true })
  }
  return join(logDir, 'architecture-drift.log')
}

/**
 * Record architecture violation
 * 
 * Called by:
 * - ACT Phase 1.5 (build-time violations)
 * - Runtime architecture guard (runtime violations)
 */
export function recordArchitectureViolation(
  violation: Omit<ArchitectureViolationContext, 'timestamp'>,
  workspaceRoot?: string
): void {
  const fullViolation: ArchitectureViolationContext = {
    ...violation,
    timestamp: Date.now(),
  }

  // Add to in-memory log
  violationLog.push(fullViolation)

  // Write to log file (only in Node.js environment)
  if (appendFileSync) {
    const logPath = getLogFilePath(workspaceRoot)
    if (logPath) {
      try {
        const logLine = JSON.stringify(fullViolation) + '\n'
        appendFileSync(logPath, logLine, 'utf-8')
      } catch (error) {
        // Silently fail if file writing is not possible (browser environment)
        // Violation is still recorded in memory
      }
    }
  }
}

/**
 * Get recent architecture violations
 * 
 * @param limit Maximum number of violations to return
 * @returns Array of violation contexts
 */
export function getRecentArchitectureViolations(limit: number = 100): ArchitectureViolationContext[] {
  return violationLog.slice(-limit)
}

/**
 * Clear architecture violations (for testing)
 */
export function clearArchitectureViolations(): void {
  violationLog = []
}

/**
 * Load violations from log file (Node.js only)
 */
export function loadViolationsFromLog(workspaceRoot?: string): ArchitectureViolationContext[] {
  // Only available in Node.js environment
  if (typeof window !== 'undefined' || !existsSync || !readFileSync) {
    return []
  }
  
  const logPath = getLogFilePath(workspaceRoot)
  if (!logPath || !existsSync(logPath)) {
    return []
  }

  try {
    const content = readFileSync(logPath, 'utf-8')
    const lines = content.trim().split('\n').filter(line => line.trim())
    
    return lines.map(line => {
      try {
        return JSON.parse(line) as ArchitectureViolationContext
      } catch {
        return null
      }
    }).filter((v): v is ArchitectureViolationContext => v !== null)
  } catch {
    // Silently fail if file reading is not possible
    return []
  }
}

/**
 * Initialize violation log from file
 */
export function initializeViolationLog(workspaceRoot?: string): void {
  violationLog = loadViolationsFromLog(workspaceRoot)
}


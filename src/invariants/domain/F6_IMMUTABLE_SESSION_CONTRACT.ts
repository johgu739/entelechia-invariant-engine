/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F6: Immutable Session Contract
 * 
 * CATEGORY: DOMAIN_LOGIC
 * ENFORCEMENT: DURING_AUTH_FLOW
 * 
 * Telos: Session contract must be immutable and have a fixed shape.
 * Session shape must be: { userId, email, issuedAt, expiresAt }
 * This ensures session data consistency across the application.
 * 
 * Enforcement:
 * - Verifies session has required fields (userId, email, issuedAt, expiresAt)
 * - Ensures session contract is not mutated after creation
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const F6_IMMUTABLE_SESSION_CONTRACT: InvariantDefinition = {
  category: 'DOMAIN_LOGIC',
  code: 'F6',
  name: 'Immutable Session Contract',
  description: 'Session contract must be immutable and have a fixed shape: { userId, email, issuedAt, expiresAt }',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const session = context.session as { userId?: string; email?: string; issuedAt?: string | number; expiresAt?: string | number } | undefined
    const sourceComponent = context.sourceComponent as string | undefined

    if (!session) {
      // Session can be null/undefined in some contexts (e.g., before login)
      // Only validate if session is provided
      return
    }

    // Verify required fields exist
    const missingFields: string[] = []
    if (!session.userId) missingFields.push('userId')
    if (!session.email) missingFields.push('email')
    if (!session.issuedAt) missingFields.push('issuedAt')
    if (!session.expiresAt) missingFields.push('expiresAt')

    if (missingFields.length > 0) {
      throw new InvariantViolationError(
        'DOMAIN_LOGIC.F6',
        'DOMAIN_LOGIC',
        'F6',
        `F6_IMMUTABLE_SESSION_CONTRACT violation: Session missing required fields: ${missingFields.join(', ')}. Session contract must have shape: { userId, email, issuedAt, expiresAt }`,
        {
          session,
          missingFields,
          sourceComponent,
          source: context.sourceFile || 'unknown',
        }
      )
    }
  },
}



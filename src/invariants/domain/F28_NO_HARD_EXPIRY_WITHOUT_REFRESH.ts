/**
 * ✅ ENTELECHIA INVARIANT ENGINE — F28: No Hard Expiry Without Refresh
 * 
 * CATEGORY: DOMAIN_LOGIC
 * ENFORCEMENT: DURING_AUTH_FLOW
 * 
 * Telos: Access tokens must be refreshed silently BEFORE requests, never after 401.
 * If refresh token is valid, expired access tokens must be refreshed proactively.
 * This ensures users never see 401 errors when refresh is possible.
 * 
 * Enforcement:
 * - Ensures silent refresh happens BEFORE requests (has401FromExpiredToken should be false)
 * - Verifies refresh token is valid before allowing 401 (refreshTokenValid check)
 * - Prevents 401 errors from expired access tokens when refresh is possible
 */

import { InvariantViolationError } from '../../core/errors'
import type { InvariantDefinition, InvariantContext } from '../../core/types'

export const F28_NO_HARD_EXPIRY_WITHOUT_REFRESH: InvariantDefinition = {
  category: 'DOMAIN_LOGIC',
  code: 'F28',
  name: 'No Hard Expiry Without Refresh',
  description: 'Access tokens must be refreshed silently BEFORE requests, never after 401. If refresh token is valid, expired access tokens must be refreshed proactively.',
  severity: 'ERROR',
  enforce: (_node: HTMLElement | null, context: InvariantContext): void => {
    const has401FromExpiredToken = context.has401FromExpiredToken as boolean | undefined
    const hasSilentRefresh = context.hasSilentRefresh as boolean | undefined
    const accessTokenExpired = context.accessTokenExpired as boolean | undefined
    const refreshTokenValid = context.refreshTokenValid as boolean | undefined
    const sourceComponent = context.sourceComponent as string | undefined

    // If we got 401 from expired token when refresh token is valid, that's a violation
    // This means we didn't refresh before the request
    if (has401FromExpiredToken === true && refreshTokenValid === true) {
      throw new InvariantViolationError(
        'DOMAIN_LOGIC.F28',
        'DOMAIN_LOGIC',
        'F28',
        'F28_NO_HARD_EXPIRY_WITHOUT_REFRESH violation: Got 401 from expired access token when refresh token is valid. Access tokens must be refreshed silently BEFORE requests, never after 401.',
        {
          has401FromExpiredToken: true,
          hasSilentRefresh: false,
          accessTokenExpired: true,
          refreshTokenValid: true,
          sourceComponent,
          source: context.sourceFile || 'unknown',
        }
      )
    }

    // If access token is expired but we didn't attempt silent refresh, that's a violation
    // (only if refresh token is valid - if refresh token is also expired, 401 is expected)
    if (accessTokenExpired === true && hasSilentRefresh !== true && refreshTokenValid === true) {
      throw new InvariantViolationError(
        'DOMAIN_LOGIC.F28',
        'DOMAIN_LOGIC',
        'F28',
        'F28_NO_HARD_EXPIRY_WITHOUT_REFRESH violation: Access token expired but silent refresh not attempted. Access tokens must be refreshed silently BEFORE requests when refresh token is valid.',
        {
          has401FromExpiredToken: false, // We're checking before request
          hasSilentRefresh: false,
          accessTokenExpired: true,
          refreshTokenValid: true,
          sourceComponent,
          source: context.sourceFile || 'unknown',
        }
      )
    }
  },
}



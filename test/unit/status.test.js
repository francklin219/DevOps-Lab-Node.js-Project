import { describe, it, expect } from 'vitest'
import { formatStatus } from '../../src/utils/status.js'
describe('formatStatus', () => { it('throws for negative uptime', () => expect(() => formatStatus(-1)).toThrow('invalid uptime')); it('returns warming-up below 60', () => expect(formatStatus(59)).toBe('warming-up')); it('returns healthy up to 3599', () => expect(formatStatus(3599)).toBe('healthy')); it('returns steady at 3600', () => expect(formatStatus(3600)).toBe('steady')) })

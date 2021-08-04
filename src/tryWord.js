import { tryToken } from './tryToken'

export const tryWord = tryToken(/^[\p{L}\p{M}\p{N}\p{Pc}\p{Cf}]+/u, '#text')


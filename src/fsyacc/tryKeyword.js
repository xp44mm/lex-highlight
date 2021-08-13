import { tryToken } from '../tryToken'

export const tryKeyword = tryToken(/^(%[a-z]+|error)/, 'keyword')



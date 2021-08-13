import { tryToken } from '../tryToken'

export const tryCompilerDirective = tryToken(/^#(if|else|line|endif|nowarn|light|[riI]|load|help|quit|time)\b/, '#text')



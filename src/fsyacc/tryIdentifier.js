import { tryToken } from '../tryToken'

export const tryIdentifier = tryToken(/^[\p{L}\p{Nl}_][\p{L}\p{Mn}\p{Mc}\p{Nl}\p{Nd}\p{Pc}\p{Cf}]*/u, 'identifier')

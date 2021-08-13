import { isKeyword } from "./isKeyword"
import { tryToken } from '../tryToken'

const tryuniident = tryToken(/^[\p{L}\p{Nl}_][\p{L}\p{Mn}\p{Mc}\p{Nl}\p{Nd}\p{Pc}\p{Cf}]*/u, 'identifier')

export const tryIdentifier = (input = "") => {
    let maybetok = tryuniident(input)
    if (maybetok) {
        let { token: { identifier }, restInput } = maybetok
        if (isKeyword(identifier)) {
            return { token: { keyword: identifier }, restInput }
        } else {
            return maybetok
        }
    } else {
        return null
    }

    //let res = /^[\p{L}\p{Nl}_][\p{L}\p{Mn}\p{Mc}\p{Nl}\p{Nd}\p{Pc}\p{Cf}]*/u.exec(input)
    //if (res && res.length > 0) {
    //    let identifier = res[0]
    //    let restInput = input.slice(identifier.length)
    //    if (isKeyword(identifier)) {
    //        return { token: { keyword: identifier }, restInput }
    //    } else {
    //        return { token: { identifier }, restInput }
    //    }
    //} else {
    //    return null
    //}
}


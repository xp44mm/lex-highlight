import { isKeyword } from "./isKeyword"
import { tryToken } from '../tryToken'

const tryuniident = tryToken(/^[\p{L}\p{Nl}_][\p{L}\p{Mn}\p{Mc}\p{Nl}\p{Nd}\p{Pc}\p{Cf}']*/u, 'identifier')

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
}

/*
 * \L == '\Lu' | '\Ll' | '\Lt' | '\Lm' | '\Lo'
let letter = '\L' | '\Nl'
let digit = '\Nd'

let combining_char = '\Mn' | '\Mc'
let connecting_char = '\Pc'
let formatting_char = '\Cf'

let ident_start_char = letter | '_'
let ident_char =
    letter
  | combining_char
  | connecting_char
  | formatting_char
  | digit
  | '\''

let ident = ident_start_char ident_char*

*/
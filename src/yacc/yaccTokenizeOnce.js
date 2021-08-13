import { matching } from "structural-comparison"
import { tryBlockComment } from '../fslex/tryBlockComment'
import { tryString } from '../fslex/tryString'
import { tryIdentifier } from '../fsyacc/tryIdentifier'
import { tryKeyword } from '../fsyacc/tryKeyword'
import { trySymbol } from '../trySymbol'
import { tryToken } from '../tryToken'
import { tryWhitespace } from '../tryWhitespace'

export const yaccTokenizeOnce = matching([
    tryWhitespace,
    tryBlockComment,
    tryString,
    tryKeyword,
    tryIdentifier,
    tryToken(/^%[%{]/, '#text'),
    trySymbol,
])


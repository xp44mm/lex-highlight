import { matching } from 'structural-comparison'
import { trySymbol } from '../trySymbol'
import { tryToken } from '../tryToken'
import { tryWhitespace } from '../tryWhitespace'
import { tryWord } from '../tryWord'
import { tryAsterisk } from './tryAsterisk'
import { tryBang } from './tryBang'
import { tryBlockComment } from './tryBlockComment'
import { tryChar } from './tryChar'
import { tryDoubleTickIdentifier } from './tryDoubleTickIdentifier'
import { tryIdentifier } from './tryIdentifier'
import { tryInterpolatedSingleQuoteString } from './tryInterpolatedSingleQuoteString'
import { tryInterpolatedTripleQuoteString } from './tryInterpolatedTripleQuoteString'
import { tryInterpolatedVerbatimString } from './tryInterpolatedVerbatimString'
import { trySingleLineComment } from './trySingleLineComment'
import { trySingleQuoteString } from './trySingleQuoteString'
import { tryTripleQuoteString } from './tryTripleQuoteString'
import { tryTypeParameter } from './tryTypeParameter'
import { tryVerbatimString } from './tryVerbatimString'

export const fsharpTokenizeOnce = matching([
    tryWhitespace,
    trySingleLineComment,
    tryAsterisk,
    tryBlockComment,
    tryDoubleTickIdentifier,
    tryChar,
    tryTypeParameter,
    tryTripleQuoteString,
    tryVerbatimString,
    trySingleQuoteString,
    tryInterpolatedTripleQuoteString,
    tryInterpolatedSingleQuoteString,
    tryInterpolatedVerbatimString,
    tryBang,
    tryIdentifier,
    tryWord,
    tryToken(/^%\}/, '#text'),
    trySymbol,
])

export const fsharpLoopInPercentBrace = (outerLoop) => {
    function fsharpLoop(accTokens = [], input) {
        if (input === '') {
            return accTokens
        } else {
            let { token, tokens, restInput } = fsharpTokenizeOnce(input)
            if (token) {
                if (token === '%}') {
                    return () => outerLoop([...accTokens, token], restInput)
                } else {
                    return () => fsharpLoop([...accTokens, token], restInput)
                }
            } else if (tokens) {
                return () => fsharpLoop([...accTokens, ...tokens], restInput)
            }
        }
    }

    return fsharpLoop
}


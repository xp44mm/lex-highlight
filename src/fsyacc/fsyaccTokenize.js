import { trampoline } from 'structural-comparison'
import { fsharpLoopInBrace, fsharpLoopInPercentBrace } from '../fsharp'
import { fsyaccTokenizeOnce } from './fsyaccTokenizeOnce'

function fsyaccLoop(accTokens = [], input) {
    if (input === '') {
        return accTokens
    } else {
        let { token, tokens, restInput } = fsyaccTokenizeOnce(input)
        if (token) {
            if (token === '%{') {
                return () => fsharpLoopPB([...accTokens, token], restInput)
            } else if (token === '{') {
                return () => fsharpLoop([...accTokens, token], 0, restInput)
            } else {
                return () => fsyaccLoop([...accTokens, token], restInput)
            }
        } else if (tokens) {
            return () => fsyaccLoop([...accTokens, ...tokens], restInput)
        }
    }
}

const fsharpLoop = fsharpLoopInBrace(fsyaccLoop)
const fsharpLoopPB = fsharpLoopInPercentBrace(fsyaccLoop)

const fsyaccIter = trampoline(fsyaccLoop)

export const fsyaccTokenize = input => fsyaccIter([], input)


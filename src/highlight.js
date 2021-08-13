import { fsharpTokenize } from './fsharp'
import { fslexTokenize } from './fslex'
import { fsyaccTokenize } from './fsyacc'
import { yaccTokenize } from './yacc'

import { render } from './render'

export function highlight(pre, lang, code) {
    let tokens = (() => {
        if (lang === 'F#') {
            return fsharpTokenize(code)
        } else if (lang === 'fsl') {
            return fslexTokenize(code)
        } else if (lang === 'fsy') {
            return fsyaccTokenize(code)
        } else if (lang === 'yacc') {
            return yaccTokenize(code)
        }

    })()
    return render(pre, tokens)
}


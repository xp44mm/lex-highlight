`lex-highlight` is a syntax highlighter written according to the lexical analyzer. It supports advanced features such as string interpolation and language nesting.

# Usage

```js
import { highlight } from 'lex-highlight'
let lang = "F#"
let code = "let x = 100"
let outp = document.createElement('pre')
highlight(outp, lang, code)
```


# Creating a new language

A language is placed in a separate folder under the `src` main folder. The syntax of a language lexical analysis function is similar

```js
fsharpTokenize(code:string)
```

Your lexical analyzer should return an array of tokens. A token can specify a type, or it is text in itself.

```js
[{token: '   '},{ token:{comment:'// sdfad'}},...]
```

This section will explain the usual workflow of creating a new language definition.

Write a matching function. If the match is successful, a match of token and the remaining input string is returned, and the mismatch returns `null`.

Combining the matching functions in order constitutes a tokenize function that executes once.

Continue to take forward tokens from the input head until the input is exhausted.

Some reusable function

```
tryToken
tryWhitespace
tryWord
trySymbol
```

and functions in other language folders.
import { yaccTokenize } from "./yaccTokenize"

test("trySymbol test", () => {
    let x = 'Production : Id ":" Bodies;'
    let y = yaccTokenize(x)
    expect(y).toEqual([
        { identifier: 'Production' },
        ' ',
        ':',
        ' ',
        { identifier: 'Id' },
        ' ',
        { string: '":"' },
        ' ',
        { identifier: 'Bodies' },
        ';'
    ])
})

import { highlight } from "./highlight"

test("highlight test", () => {
    let x = "  "
    let output = document.createElement('pre')
    let y = highlight(output, "yacc", x)
    console.log(y)
    //expect(y).toEqual({ token: "  ", restInput: "" })
})


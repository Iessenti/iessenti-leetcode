var isValid = function(s) {
    let res = false
    let opening = [
        '(', '[', '{'
    ]
    let closing = [
        ')', ']', '}'
    ]
    let stack = []

    for (let i = 0; i <= s.length-1; i++) {
        let elem = s[i]
        if (opening.includes(elem)) {
            stack.push(elem)
            res = false
        }
        else if ( 
            opening.indexOf( stack[stack.length-1]) 
            === closing.indexOf(elem)
        ) {
            stack.pop()
            res = true
        }
        else {
            res = false
            break
        }
    }

    if (stack.length !== 0) res = false

    return res
};

const symbol  = Symbol('demo')
const other  = Symbol('demo')

/*console.log(symbol)
console.log(other)
console.log(symbol === other)*/

const obj = {
    name: 'Elena',
    [symbol]: 'meta'
}

console.log(obj[symbol])
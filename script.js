const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'

// Only change below this line

const leo = {
	name : leoName,
    age : 24,
	balance : leoBalance,
	accessId : '47afb389-8014-4d0b-aff3-e40203d2107f',
	address : {
		number : leoNumber,
		street : leoStreet,
		'postal-code' : leoPostal,
	}
}

const sarah = {
	name : sarahName + 'Kleinhans', 
	age : 62,
	accessId : '6b279ae5-5657-4240-80e9-23f6b635f7a8',
	balance : parseFloat(sarahBalance).toFixed(2),
	address : {
		number : sarahNumber,
		street : sarahStreet,
		'postal-code' : sarahPostal,
	}
}

console.log(leo, leo.address)
console.log(sarah, sarah.address)

// replaced '=' with ':' operator
// removed 'leoSurname' since const leoName declares surname already
// used camelCase for 'access id' and converted from 'variable' into a 'string'
// converted variable postal-code into a string because it is an undeclared variable
// replaced 'saraSurname' with string 'kleinhans' since it is undeclared variable
// removed [postal-code] in the console.log since it has already been declared in 'address'
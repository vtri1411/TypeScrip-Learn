interface IPerson {
	name: string
	age: number
	speak(a: string): void
	spend(a: number): number
}

const me: IPerson = {
	name: 'Tri',
	age: 21,
	speak(text: string) {
		console.log(text)
		return 2
	},
	spend(money: number) {
		return money
	},
}

console.log(me)

const abc = { a: 1 }

export default abc

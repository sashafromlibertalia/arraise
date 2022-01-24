import Arraise from "../../src/index"
const arraise = new Arraise()

describe('compare two arrays', () => {
    test('compare two different arrays by value', () => {
        const a = [1, 2, 3]
        const b = [4, 5, 6]

        expect(arraise.areSame(a, b)).toBeFalsy()
    })

    test('compare two different arrays by type', () => {
        const a = [1, 2, 3]
        const b = ["1", "2", "3"]

        expect(arraise.areSame(a, b)).toBeFalsy()
    })

    test('compare two different arrays by types', () => {
        const a = [1, 2, 3]
        const b = ["1", 2, "3"]
        const c = [1.0001, 2.0001, 3.0001]

        expect(arraise.areSame(a, b)).toBeFalsy()
        expect(arraise.areSame(a, c)).toBeFalsy()
    })

    test('compare two different arrays by length', () => {
        const a = [1, 2, 3]
        const b = [1, 2]

        expect(arraise.areSame(a, b)).toBeFalsy()
    })

    test('compare two different arrays by value #2', () => {
        const a = [1, 2, 3]
        const b = [10, 2, 3]

        expect(arraise.areSame(a, b)).toBeFalsy()
    })

    test('compare two same arrays by type', () => {
        const a = ["1", "2", "3"]
        const b = ["1", "2", "3"]

        expect(arraise.areSame(a, b)).toBeTruthy()
    })
})
import Arraise from "../../src/index"
const arraise = new Arraise()

describe("swap array elements", () => {
    test("swap empty array => throw error", () => {
        const array = []
        expect(() => {
            arraise.swap(array, 1, 2)
        }).toThrowError()
    })

    test("swap array with wrong indexes => throw error", () => {
        const array = [1, 2, 3]
        expect(() => {
            arraise.swap(array, 3, 2)
        }).toThrowError()

        expect(() => {
            arraise.swap(array, -1, -2)
        }).toThrowError()
    })

    test("swap array => array is swapped", () => {
        const array = [1, 2, 3]
        expect(arraise.swap(array, 0, 1)).toStrictEqual([2, 1, 3])
    })
})
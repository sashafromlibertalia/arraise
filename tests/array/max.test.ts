import Arraise from "../../src/index"
const arraise = new Arraise()

describe("test max method", () => {
    test("find max element in empty array => throw error", () => {
        const array = []
        expect(() => arraise.max(array)).toThrowError()
    })

    test("find max element in array", () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8]
        expect(arraise.max(array)).toBe(8)
    })

    test("find max element in array #2", () => {
        const array =  [-1, 6, 0, 7, 8]
        expect(arraise.max(array)).toBe(8)
    })

    test("find max element in array #3", () => {
        const array = ["1", "23", "4", "22"]
        expect(arraise.max(array)).toBe("4")
    })
})
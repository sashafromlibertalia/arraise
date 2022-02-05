import Arraise from "../../src/index"
const arraise = new Arraise()

describe("test min method", () => {
    test("find min element in empty array => throw error", () => {
        const array = []
        expect(() => arraise.min(array)).toThrowError()
    })

    test("find min element in array", () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8]
        expect(arraise.min(array)).toBe(1)
    })

    test("find min element in array #2", () => {
        const array = [-1, 0, 6, 7, 8]
        expect(arraise.min(array)).toBe(-1)
    })

    test("find min element in array #3", () => {
        const array = ["1", "23", "4"]
        expect(arraise.min(array)).toBe("1")
    })

    test("find min element in array #4", () => {
        const array = [-10000, 100000, 621123, 333337, 0]
        expect(arraise.min(array)).toBe(-10000)
    })
})
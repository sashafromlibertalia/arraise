import Arraise from "../../src/index"
const arraise = new Arraise()

describe("test merge method", () => {
    test("merge empty array => get empty array", () => {
        const array = []
        expect(arraise.merge(true, array)).toStrictEqual([])
    })

    test("merge arrays with duplicated elements", () => {
        const array = [1, 2, 3]
        const array2 = [1, 2, 3]
        expect(arraise.merge(false, array, array2)).not.toStrictEqual([1, 2, 3])
        expect(arraise.merge(false, array, array2)).toStrictEqual([1, 2, 3, 1, 2, 3])
    })

    test("merge arrays without duplicated elements", () => {
        const array = [1, 2, 3]
        const array2 = [1, 2, 3]
        expect(arraise.merge(true, array, array2)).toStrictEqual([1, 2, 3])
        expect(arraise.merge(true, array, array2)).not.toStrictEqual([1, 2, 3, 1, 2, 3])
    })

    test("merge arrays with different types", () => {
        const array = [1, 2, 3]
        const array2 = ["1", 2, "3"]
        expect(arraise.merge(false, array, array2)).toStrictEqual([1, 2, 3, "1", 2, "3"])
        expect(arraise.merge(true, array, array2)).toStrictEqual([1, 2, 3, "1", "3"])
    })
})
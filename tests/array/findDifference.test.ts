import Arraise from "../../src/index"
const arraise = new Arraise()

describe("test difference method", () => {
    test("find different elements in arrays", () => {
        const array1 = [1, 2, 3, 4, 5, 6, 7, 8]
        const array2 = [1, 2, 3, 4]
        const array3 = [1, 2, 3]

        expect(arraise.findDifference(array1, array2, array3)).toStrictEqual([5, 6, 7, 8])
    })

    test("find different elements in arrays with string", () => {
        const array1 = [1, "2", 3, 2, 4, 5, 6, 7, 8]
        const array2 = [1, "2", 3, 4]

        expect(arraise.findDifference(array1, array2)).toStrictEqual([2, 5, 6, 7, 8])
    })

    test("don't find different elements in arrays", () => {
        const array1 = [1, 2]
        const array2 = [1, 2]

        expect(arraise.findDifference(array1, array2)).toStrictEqual([])
    })
})
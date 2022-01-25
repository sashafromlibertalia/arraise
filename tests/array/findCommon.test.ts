import Arraise from "../../src/index"
const arraise = new Arraise()

describe("test common method", () => {
    test("find common elements in arrays", () => {
        const array1 = [1, 2, 3, 4, 5, 6, 7, 8]
        const array2 = [1, 2, 3, 4]
        const array3 = [1, 2, 3]

        expect(arraise.findCommon(array1, array2, array3)).toStrictEqual([1, 2, 3])
    })

    test("find common elements in arrays with string", () => {
        const array1 = [1, "2", 3, 2, 4, 5, 6, 7, 8]
        const array2 = [1, "2", 3, 4]

        expect(arraise.findCommon(array1, array2)).toStrictEqual([1, "2", 3, 4])
    })

    test("don't find common elements in arrays", () => {
        const array1 = [1, "2", 3, 2, 4, 5, 6, 7, 8]
        const array2 = [11, 20]

        expect(arraise.findCommon(array1, array2)).toStrictEqual([])
    })
})
import Arraise from "../../src/index"
const arraise = new Arraise()

describe("test toArrayList method", () => {
    test("convert array by level 2", () => {
        const array = [1, 2, 3, 4]
        expect(arraise.toArrayList(array, 2)).toStrictEqual([[1, 2], [3, 4]])
    })

    test("convert array by level 3", () => {
        const array = [1, 2, 3, 4]
        expect(arraise.toArrayList(array, 3)).toStrictEqual([[1, 2, 3], [4]])
    })
    
    test("convert array by invalid level => throw error", () => {
        const array = [1, 2, 3, 4]
        expect(() => arraise.toArrayList(array, 0)).toThrowError()
        expect(() => arraise.toArrayList(array, -1)).toThrowError()
    })
}) 
import Arraise from "../../src/index"
const arraise = new Arraise()

test('create non-unique array and make it unique', () => {
    const array = [1, 1, 2, 3]
    expect(arraise.makeUnique(array)).toStrictEqual([1, 2, 3])
})

test('create unique array, function returns the same array', () => {
    const array = [1, 2, 3]
    expect(arraise.makeUnique(array)).toStrictEqual(array)
})
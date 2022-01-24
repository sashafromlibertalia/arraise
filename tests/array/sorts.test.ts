import Arraise from "../../src/index"
const arraise = new Arraise()
const array = [0, 1, 9, 5, 4, 3, 2, 7, 6, 8]

test('sort array in ascending order', () => {
    expect(arraise.sortAscending(array)).toStrictEqual([...Array(10).keys()])
})

test('sort array in descending order', () => {
    expect(arraise.sortDescending(array)).toStrictEqual([...Array(10).keys()].reverse())
})
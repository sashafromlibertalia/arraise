import Arraise from "../../src/index"
const arraise = new Arraise()

describe('compare two objects', () => {
    test('compare two empty objects', () => {
        const a = {}
        const b = {}

        expect(arraise.areSame(a, b)).toBeTruthy()
    })

    test('compare two same objects', () => {
        const a = {KEY: "Value"}
        const b = {KEY: "Value"}

        expect(arraise.areSame(a, b)).toBeTruthy()
    })

    test('compare two same objects with different values', () => {
        const a = {KEY: "Value"}
        const b = {KEY: "Value 2"}

        expect(arraise.areSame(a, b)).toBeFalsy()
    })

    test('compare two same objects with different keys', () => {
        const a = {KEY: "Value"}
        const b = {KEY1: "Value"}

        expect(arraise.areSame(a, b)).toBeFalsy()
    })

    test('compare two same nested objects', () => {
        const a = {
            KEY: "Value",
            KEY_2: {
                NESTED: "Value 2"
            }
        }
        const b = {
            KEY: "Value",
            KEY_2: {
                NESTED: "Value 2"
            }
        }

        expect(arraise.areSame(a, b)).toBeTruthy()
    })

    test('compare two different nested objects', () => {
        const a = {
            KEY: "Value",
            KEY_2: {
                NESTED: "Value 2"
            }
        }
        const b = {
            KEY: "Value",
            KEY_2: {
                NESTED: "Value 3"
            }
        }
        const c = {
            KEY: "Value",
            KEY_2: {
                NESTED_2: "Value 2"
            }
        }

        expect(arraise.areSame(a, b)).toBeFalsy()
        expect(arraise.areSame(a, c)).toBeFalsy()
    })
})
interface IArraise<T> {
    /**
     * Returns modified array with unique elements
     * @example [1, 1, 2, 3] => [1, 2, 3]
     */
    makeUnique(array: Array<T>): Array<T>;

    /**
     * Sorts array in ascending order: 
     * @example [1, 5, 3] => [1, 3, 5]
     */
    sortAscending(array: Array<T>): Array<T>;

    /**
     * Sorts array in descending order: 
     * @example [1, 5, 3] => [5, 3, 1]
     */
    sortDescending(array: Array<T>): Array<T>;

    areSame(array1: Array<T>, array2: Array<T>): Boolean;
}

export default class Arraise implements IArraise<any> {
    constructor() {}

    makeUnique(array: any[]): any[] {
        return [...new Set<any>(array)]
    }
    sortAscending(array: any[]): any[] {
        return array.sort()
    }
    sortDescending(array: any[]): any[] {
        return array.sort().reverse()
    }

    areSame(array1: any[], array2: any[]): Boolean {
        if (array1.length !== array2.length) return false 

        const length = array1.length
        for (let i = 0; i < length; i++) {
            if (array1[i] !== array2[i]) return false
        }

        return true
    }

}
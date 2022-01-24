interface IArraise<T> {
    /**
     * Returns modified array with unique elements
     * @param array - array to be modified
     * @example [1, 1, 2, 3] => [1, 2, 3]
     */
    makeUnique(array: Array<T>): Array<T>;

    /**
     * Sorts array in ascending order: 
     * @param array - array to be sorted
     * @example [1, 5, 3] => [1, 3, 5]
     */
    sortAscending(array: Array<T>): Array<T>;

    /**
     * Sorts array in descending order: 
     * @param array - array to be sorted
     * @example [1, 5, 3] => [5, 3, 1]
     */
    sortDescending(array: Array<T>): Array<T>;

    /**
     * Compares two arrays
     * @param array1 - first array to compare
     * @param array2 - second array to compare
     */
    areSame(array1: Array<T>, array2: Array<T>): Boolean;


    /**
     * Returns array with common elements of both arrays
     * @param array1 - first array 
     * @param array2 - second array
     */
    findCommon(array1: Array<T>, array2: Array<T>): Array<T>;
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

    findCommon(array1: any[], array2: any[]): any[] {
        let data = []
        for (let i = 0; i < array1.length; i++) {
            if (array2.includes(array1[i])) 
                data.push(array1[i])
        }

        return data
    }
}
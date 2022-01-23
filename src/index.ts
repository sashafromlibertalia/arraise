export {}
declare global {
    export interface Array<T> {
        /**
         * Returns modified array with unique elements
         */
        makeUnique(): Array<T>;
    }
}

if (!Array.prototype.makeUnique) {
    Object.defineProperty(Array.prototype, 'makeUnique', {
        value() {
            return [...new Set<typeof this[0]>(this)]
        },
        enumerable: false
    });
}
export default class CheckoutConflictError extends Error {
    #conflictFiles;

    constructor(conflictFiles) {
        super('CheckoutConflictError');

        this.#conflictFiles = conflictFiles;
    }

    getFiles() {
        return this.#conflictFiles;
    }
}

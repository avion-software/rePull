import CheckoutConflictError from './CheckoutConflictError';

export default function parseCheckoutErrors(ex) {
    let exceptionType = 0;
    const paths = [];
    const lines = String(ex).split('\n');

    for (let i = 0, z = lines.length; i < z; i += 1) {
        if (lines[i].indexOf('Your local changes to the following files would be overwritten by checkout:') !== -1) {
            exceptionType = 1;
            // eslint-disable-next-line no-continue
            continue;
        }

        if (exceptionType === 1) {
            if (lines[i].startsWith('\t')) {
                paths.push(lines[i].trim());
            } else {
                return new CheckoutConflictError(paths);
            }
        }
    }

    return ex;
}

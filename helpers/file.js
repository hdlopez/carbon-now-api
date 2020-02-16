// Packages
import { readFileSync} from 'fs';

module.exports = {
    /**
     * Read file synchronous
     * @param location
     * @returns {Promise.<TResult>}
     */
    read: async (location) => {
        await Promise.resolve();
        try {
            return readFileSync(location, 'utf8');
        } catch (err) {
            return Promise.reject(`An error ocurr reading file: ${err}`);
        }
    }
};
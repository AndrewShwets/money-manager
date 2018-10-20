/**
 * Removes unnecessary spaces in string
 * @param {string} args - adopts strings
 */
const classNames = (...args) => (
    (args && args.filter((el) => typeof el === 'string').join(' ')).replace(/\s+/g, ' ').trim() || ''
);

export default classNames;
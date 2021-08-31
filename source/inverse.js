'use strict';

/**
 * Reverse array
 * @param {Array} array that will be reversed
 * @param {number} ignore this number of elements; + from start and - from end
 * @returns {Array|null} if args are correct, returns array with reversed part, else null
 */

const inverse = (arr, num = 0) => {
    if (!Array.isArray(arr) || typeof num !== 'number') {
        return null;
    }
    const arr_cp = arr.slice();

    if (num === 0) {
        return arr_cp.reverse();
    }

    if (num > 0) {
        const arr_reversed = arr_cp.splice(num, arr_cp.length);
        arr_reversed.reverse();
        return arr_cp.concat(arr_reversed);
    } else {
        const arr_reversed = arr_cp.splice(0, arr_cp.length + num);
        arr_reversed.reverse();
        return arr_reversed.concat(arr_cp);
    }
};

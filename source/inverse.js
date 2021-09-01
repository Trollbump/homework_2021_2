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
    const arr_cp = [...arr];

    if (num !== 0) {
        const second_arr_part = arr_cp.splice(num);
        if (num > 0) {
            return arr_cp.concat(second_arr_part.reverse());
        } else {
            return arr_cp.reverse().concat(second_arr_part);
        }
    }
    return arr_cp.reverse();
};

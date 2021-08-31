'use strict';

/**
 * Reverse array
 * @param {Array} array that will be reversed
 * @param {number} ignore this number of elements; + from start and - from end
 * @returns {Array|null}
 */

const inverse = (arr, num = 0) => {
    if (!(Array.isArray(arr))) { // return undefined if array is not array
        return null;
    }
    let arr_cp = arr.slice(); // make copy of array not to change anything in source

    // arr_reversed will get part of array to revese, array will be without that part, then concat
    if (num > 0) {
        let arr_reversed = arr_cp.splice(num, arr_cp.length);
        arr_reversed.reverse();
        return arr_cp.concat(arr_reversed);
    }
    else {
        let arr_reversed = arr_cp.splice(0, arr_cp.length + num);
        arr_reversed.reverse();
        return arr_reversed.concat(arr_cp);
    }
}

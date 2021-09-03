'use strict';

/**
 * Reverse array
 * @param {Array} array that will be reversed
 * @param {number} ignore this number of elements; + from start and - from end
 * @returns {Array|null} if args are correct, returns array with reversed part, else null
 */

const inverse = (arr, num = 0) => {
    if (!Array.isArray(arr) || typeof num !== 'number' || isNaN(num)) {
        return null;
    }
    const arrCopy = [...arr];

    if (num !== 0) {
        const secondArrPart = arrCopy.splice(num);
        if (num > 0) {
            return arrCopy.concat(secondArrPart.reverse());
        }
        return arrCopy.reverse().concat(secondArrPart);
    }
    return arrCopy.reverse();
};

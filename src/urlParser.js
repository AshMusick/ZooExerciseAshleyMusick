import { ERROR_URL_FORMAT_MISMATCH, handleError } from "./errorHandler.js";

/**
 * Parses the URL format string and the URL instance to extract parameters.
 * Assumes that the URL format string follows a specific pattern.
 * @param {string} urlFormatString - The URL format string specifying the expected format.
 * @param {string} urlInstance - The URL instance to be parsed.
 * @returns {object} - An object containing the parsed parameters.
 */

const parseUrlFormatAndInstance = (urlFormatString, urlInstance) => {
    // TODO:: verify that urlFormatString and urlInstance are both valid independently
    const urlFormatParts = urlFormatString.split('/');
    const instanceParts = urlInstance.split('/');

    if(urlFormatParts.length !== instanceParts.length){
        throw new Error(ERROR_URL_FORMAT_MISMATCH);
    }
    
    const searchParams = extractSearchParams(instanceParts);
    const hash = populateHashWithVariables(urlFormatParts, instanceParts);
    addSearchParamsToHash(searchParams, hash);

    return hash;
    
}

/**
 * Extracts search parameters from the last part of the URL instance.
 * Additionally, modifies the instanceParts array to remove everything after the question mark.
 * @param {string[]} instanceParts - The array containing parts of the URL instance.
 * @returns {URLSearchParams|null} - The extracted search parameters as a URLSearchParams object,
 *                                    or null if no search parameters are found.
 */

const extractSearchParams = (instanceParts) => {
    const lastInstancePart = instanceParts.slice(-1);
    const questionMarkIndex = lastInstancePart.indexOf("?");
    if(questionMarkIndex !== -1){
        instanceParts[instanceParts.length - 1] = lastInstancePart.substring(0, questionMarkIndex);
        return new URLSearchParams(lastInstancePart.substring(questionMarkIndex + 1));
    }
    return null;
}

/**
 * Populates a hash object with variables and their corresponding values from the instance parts.
 * Throws an error if there is a mismatch between the URL format and the instance.
 * @param {string[]} urlFormatParts - An array containing parts of the URL format.
 * @param {string[]} instanceParts - An array containing parts of the URL instance.
 * @returns {Object} - A hash object with variables and their corresponding values.
 * @throws {Error} - If there is a mismatch between the URL format and the instance.
 */
const populateHashWithVariables = (urlFormatParts, instanceParts) => {
    const hash = {};
    urlFormatParts.forEach((part, i) => {
        if(part[0] === ":"){
            console.log(part + " is a variable");
            hash[part.slice(1)] = instanceParts[i];
        } else if (part !== instanceParts[i]) {
            throw new Error(ERROR_URL_FORMAT_MISMATCH);
        }
    });
    return hash;
}

/**
 * Adds search parameters from a URLSearchParams object to a hash object.
 * If searchParams is null or undefined, no action is taken.
 * @param {URLSearchParams|null} searchParams - The URLSearchParams object containing search parameters.
 * @param {Object} hash - The hash object to which search parameters will be added.
 */
const addSearchParamsToHash = (searchParams, hash) => {
    if(searchParams){
        for (const [key, value] of searchParams.entries()) {
            hash[key] = value;
        }
    }
}

export default parseUrlFormatAndInstance;
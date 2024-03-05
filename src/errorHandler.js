// errorHandler.js
export const ERROR_URL_FORMAT_MISMATCH = "Cannot parse the URL with the given format because they do not match.";

export const handleError = (message) => {
    console.error(message);
}
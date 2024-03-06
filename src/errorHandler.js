// TODO:: think through error scenarios and handle error in the project
export const ERROR_URL_FORMAT_MISMATCH = "Cannot parse the URL because it doesn't match any of our critters and their stuff.";

export const handleError = (message) => {
    console.error(message);
}
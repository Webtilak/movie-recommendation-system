'use strict';
import env from "dotenv";

const api_key = process.env.API_KEY;
const imageBaseURL = process.env.IMG_URL;

/**
 * fetch data from a server using the 'url' and passes
 * the result in JSON data to a 'callback' function,
 * along with an optional parameter if has 'optionalParam'
 */

const fetchDataFromServer = function(url, callback, optionalParam){
    fetch(url)
        .then(response => response.json())
        .then(data=> callback(data, optionalParam));
}


export { imageBaseURL, api_key, fetchDataFromServer};
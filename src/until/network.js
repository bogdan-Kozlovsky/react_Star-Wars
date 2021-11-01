import * as url from "url";

const SWAPI_ROOT = 'https://swapi.dev/api/';
const SWAPI_PEOPLE = 'people';

// метод с промисами
// export const getApiRosource = (url) => {
//     fetch(url)
//         .then(res => res.json())
//         .then(body => console.log(body))
//         .catch(error => console.log(error.message))
// }
//
// getApiRosource(SWAPI_ROOT + SWAPI_PEOPLE);

// работа с асинхроными ф-ями

export const getApiRosource = async (url) => {
    // мы принимаем url, делаем запрос и возврощаем json
    try {
        const res = await fetch(url);

        if (!res.ok) {
            console.error('Could not fetch.', res.status);
            return false;
        }

        return await res.json();
    } catch (eroor) {
        console.error('Could not fetch.', eroor.message);
        return false;
    }
}

(async () => {
    const body = await getApiRosource(SWAPI_ROOT + SWAPI_PEOPLE);
    console.log(body)
})();

// const body = getApiRosource(SWAPI_ROOT + SWAPI_PEOPLE);
// console.log(body)
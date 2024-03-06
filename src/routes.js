import { parseUrlFormatAndInstance } from "./parse/parseService.js";

export const routes = [
    '/',
    '/:animal/:action',
    '/:animal/:action',
    '/:animal/:action'
]

// extra routes to demo the URL parser
export const demoRoutes = [
    '/:animal/measurements',
    '/zookeeper/:name/:gender/:favorite'
]


export function getDataForFirstMatchingRoute(isParsePath) {
    const search = window.location.search;
    const path = isParsePath ? window.location.pathname.replace("/parse", "") : window.location.pathname;
    let data;
    const allRoutes = routes.concat(...demoRoutes);
    for(let i = 0; i < allRoutes.length; i++) {            
        const route = allRoutes[i];
        data = parseUrlFormatAndInstance(route, path + search);
        if(!data.nomatch) break;
    }
    return data;
}
import parseUrlFormatAndInstance from "./urlParser.js";

const routes = [
    '/:animal/sound',
    '/:animal/food',
    '/:animal/movement'
]

// extra routes to demo the URL parser
const demoRoutes = [
    '/:animal/measurements',
    '/zookeeper/:name/:gender/:favorite'
]

console.log("HEY")

function renderContent() {
    debugger
    const path = window.location.pathname;
    if(path === '') {
        return;
    }
    const contentDiv = document.getElementById('parsedUrl');
    
    // Clear previous content
    contentDiv.textContent = '';

    // Render content based on path
    routes.concat(...demoRoutes).forEach((route) => {
        try {
            contentDiv.textContent = JSON.stringify(parseUrlFormatAndInstance(route, path), null, 2);
        } catch (e) {
            return;
        }

    })

    if(!contentDiv.textContent) {
        contentDiv.textContent = '{}'
    }            
}

// Listen for changes in the URL
window.addEventListener('popstate', renderContent);

// Initial rendering
renderContent();
# Zoo Exercise

## Description
This project is a vanilla js SPA that demonstrates functional programming and object oriented programming through two simple exercises. On the one hand, the url parser is used in the SPA's router and showcased in an extra "parse" path. On the other hand, the "zoo" showcases object oriented programming by implementing the same methods across a number of objects via prototypical inheritance.

## Features
- URL parser
- Zoo animals that speak, eat and move
- Interactive and intuitive UI
- SPA created with vanilla javascript

## Technologies Used
- Node.js v16.0.0
- Express.js
- JavaScript
- HTML
- CSS

See the `package.json` file for the full list of dependencies and their versions.

## Installation
To run this project, follow the steps below:

1. Install Node.js v16 using NVM or your preferred method.
2. Clone this repository to your local machine.
3. Navigate to the project directory.
4. Run the following command to install the dependencies:

   ```shell
   npm install
    ```
5. Once the dependencies are installed, you can start the project locally using the following command:

    ```shell
   npm run dev
    ```
    This will start the project and make it accessible at http://localhost:3000.

Now you have the project up and running locally!

## Usage
1. Ensure that the project is running locally as described in the [Installation](#installation) section.
2. Open your web browser and navigate to `http://localhost:3000` to access the application.
3. Now you can either interract with the zoo or url parser
4. Every zoo endpoint uses the url parser under the hood, but check out the url parser tab and/or "Demo the url parser" links
5. You can also create original paths including search params at http:localhost:3000/parse/* as long as the path following 'parse/' matches one of the formats configured in ./src/routes.js of this project. Feel free to edit the file to add more formats and try them out.
6. We use the /parse/* path to view how urls are parse since anything at the route will be interpreted as a zoo animal. Visualizing how the parser works is intended to be a back-office feature and not a primary one.

Here are a few examples to clarify what the url parser does:
- format string from routes.js: 
```json
    "/:animal/measurements"
```
- url in browser:
```json
    "http://localhost:3000/parse/turkey/measurements?height=7&weight=80"
```
- json output that has parsed both path params as well as search params:
```json
    {
    "animal": "turkey",
    "action": "measurements",
    "height": "7",
    "weight": "80"
    }
```
## License
This project is licensed under the [MIT License](LICENSE).

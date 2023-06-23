# **Beer App**

This is a React-based web application that allows users to browse and interact with a list of beers. The app utilizes an API to fetch beer data and provides the following features:

- Viewing a list of beers
- Accessing detailed information about a specific beer by clicking on its picture
- Adding beers to favorites by clicking on the heart icon
- Displaying a list of favorite beers at the top of the page
- Persistent storage of favorite beers, even after page reloads
- Generating a random beer with the "Random Beer" button
- Filtering the beer list by searching for a specific beer name


## Getting Started
To run the Beer App locally, follow these steps:

1. Clone the repository:
`git clone https://github.com/tomby5475/beer_app.git`

2. Navigate to the project directory:
`cd beer-app`

3. Install the dependencies:
`npm install`

4. Start the development server:
`npm start`

5. Open your web browser and visit http://localhost:3000 to see the Beer App in action.


## Usage

Once the Beer App is up and running, you can perform the following actions:

**View Beer List:** The main page displays a list of beers. Each beer is represented by its picture and name, and you can click on the picture to view more details about the beer.

**Favorite Beers:** To add a beer to your favorites, simply click on the heart icon next to the beer's picture. The beer will be added to the top of the page in the favorites list. The list of favorite beers will persist even if you reload the page.

**Random Beer:** Clicking on the "Random Beer" button will generate a random beer from the API and display its details. This feature is useful if you want to discover new beers.

**Search:** The search field allows you to filter the beer list by typing the name of a beer. As you type, the list will dynamically update to show only the beers that match your search query.


## Technologies Used

The Beer App is built using the following technologies:

**React:** JavaScript library for building user interfaces
**CSS:** Stylesheet language for designing web pages
**API:** External data source for fetching beer information
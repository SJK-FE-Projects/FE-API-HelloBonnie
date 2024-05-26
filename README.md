# FE-API-HelloBonnie
# Hello Bonnie Search App
Little API Search ReactApp assignment for the HelloBonnie

# This project is a React-based application that allows users to search for postal code information using an API. Users can enter a postal code and select a country to retrieve relevant details such as city, state, latitude, and longitude. Additionally, users can mark search results as favorites, and the application will store these locally for future reference.

# Components
1. Result Component

The Result component displays the postal code information fetched from the API. It includes details such as the postal code, country, city, state, latitude, and longitude. Users can mark a result as a favorite by clicking a heart icon, which toggles its filled state. Additionally, users can close the result card using a close button.

2. Form Component

The Form component provides a search form where users can enter a postal code and select a country. Upon submission, the application fetches and displays the corresponding postal code information using the Result component. Users can also view their favorite search results by clicking a button, which displays a list of saved favorites.

3. Context Provider

The PostalCodeContext provides state management for postal code data, loading status, errors, and functions to fetch data and reset state. It utilizes React's Context API to share data and functions with child components.

4. .env with API_URL for the API fetch.

5. Style files for additional global styling with variables/mixins. This module extends the themes defined for Mantine in main.jsx.



# Usage Instructions
Install Dependencies: Run npm install to install project dependencies.

Run the Development Server: Execute npm run dev to start the development server.

Access the Application: Open a web browser and navigate to the provided URL (typically http://localhost:).

Search for Postal Codes: Enter a postal code and select a country in the search form provided by the Form component. Click the "Search" button to fetch and display the postal code information using the Result component.

Mark Results as Favorites: In the Result component, click the heart icon to mark a search result as a favorite. The heart icon will toggle between filled and outlined states. Favorited results are stored locally and can be viewed by clicking the heart icon in the Form component.

Close Search Results: In the Result component, click the close button to close the search result card.

View Favorite Search Results: In the Form component, click the heart icon to toggle the display of favorite search results. Favorited results are displayed in a list format below the search form.

# Additional Notes
This project utilizes React, React DOM, and various libraries such as react-icons, react-axios, @mantine/core, and @mantine/form.
The application uses local storage to store favorite search results, allowing users to access them even after the browser is closed and reopened.
Error handling is implemented to notify users if there is an issue fetching postal code information from the API.


# React + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Currently, two official plugins are available:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

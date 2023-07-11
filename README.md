# User Grid Web Application

The User Grid web application is a React-based application that displays a grid layout of users fetched from an API. It includes a navbar with a brand name and a "Get Users" button that triggers the API call to fetch user data. While the data is being fetched, a loader is displayed.

## Method Used to Make the App

The User Grid web application was created using the following steps and techniques:

1. **Create-React-App**: The application was bootstrapped using Create-React-App.

2. **React Components**: The application is structured as a set of React components. The main component, `App`, serves as the entry point and contains the main logic and state of the application.

3. **State Management with Hooks**: The `useState` hook from React was used to manage the application state. Two state variables were defined: `users` to store the fetched user data, and `loading` to track the loading state while the API call is in progress.

4. **API Interaction with Axios**: The Axios library was used to make HTTP requests to the API. The `axios.get` method was used to fetch user data from the specified API endpoint (`https://reqres.in/api/users?page=1`).

5. **Event Handling**: The "Get Users" button in the navbar is associated with an `onClick` event handler, `getUsers`. When the button is clicked, the `getUsers` function is called, which triggers the API call to fetch user data.

6. **Conditional Rendering**: The application uses conditional rendering to display either the loader or the user grid based on the loading state. While the API call is in progress (`loading` is `true`), the loader is displayed. Once the data is fetched, the user grid is rendered.

7. **Styling with CSS**: CSS styles were applied to the components to define the visual appearance of the application. The styles include navbar styling, user grid layout, user card design, and the loader styling.

8. **Error Handling**: In case of an error while fetching user data, an error message is logged to the console.

9. **Development Server**: The application can be run locally using the development server provided by Create-React-App. Changes made to the code are automatically reloaded in the browser.

## Time taken to complete this assignment

It took around 7 hours to complete this assignment.

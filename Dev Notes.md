# Dev Notes
This notes would be helpfull to understand my design.

- [Apollo Graphql Client](https://www.apollographql.com/docs/react).
I used this library to handle the Graphql logic. Apollo brings an interface to the API to reach server data.
To use this client in every container of the app we need to wrap the app with an `ApolloProvider` with the `client`that is configured to the desired API.
Also there I used cache `InMemoryCache` to keep on cache info for topics, it was improving the performance of the application.

- [React Router DOM](https://www.npmjs.com/package/react-router-dom).
To handle the navigation of the app I choose this library because it is really easy to understand `BrowserRouter, Routes, Route` are the main components that I used to handle app routes.
Also to check the name of the topic I have selected `useLocation` hook to check the params of the URL.
To handle the navigation it also brings `useNavigate` hook to navigate to different URL at the app.

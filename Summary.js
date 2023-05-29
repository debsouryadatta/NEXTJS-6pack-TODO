// * 1. create-next-app, then npm i sass mongoose
// * 2. Modifying next.config.js file
// * 3. Importing styles folder from the github repo
// * 4. We have to use client component when using -> hooks, event listeners, api usuage, using local storage
// * 5. Creating the Header ui and making the Login/Logout button as client component
// * 6. Redux is not required for this mini project, so we are using usecontext
// * 7. Creating a context provider in Clients.jsx and wrapping up the contents in the layout.js inside the ContextProvider
// * 8. Putting conditionals for Login/Logout button
// * 9. Making the Login/Register components, metadata cannot work in client component
// * 10. Creating AddTodoForm, we have to use client component if we use forms
// * 11. We prefer using server components in places where we need to present the data, since we will not present any data in the login/register component so we made them client component
// * 12. Then we created TodoItem as server component showing the props passed from the above, but we made the checkox and the button as client component since they are event listeners


// * 13. Starting the backend, creating mongoose models and connectDB function in features.js
// * 14. We separated the backend files to the pages folder since the on demand ISR(which helps in calling the data after any data is entered into database) is not available in app directory
// * 15. Creating the .env file to store the MONGO_URI
// * 16. Creating api route for new task in newtask.js
// * 17. Creating error handler function(acts as middleware) in error.js
// * 18. Creating the async error middleware for handling the async errors in the newtask.js
// * 19. Creating the route functions for the register and login
// * 20. Installing the cookie package(npm i cookie) for setting cookies in the browser
// * 21. Creating the cookieSetter function to set the cookie
// * 22. We set the cookie as false during log out and true during register or login


// * 23. Installing the jsonwebtoken(npm i jsonwebtoken) for creating the token
// * 24. Creating generateToken function for generating the token
// * 25. Installing bcrypt(npm i bcrypt) for hashing the password
// * 26. Creating the route functions for the login by doing minor changes in the register route function like - comparing password, etc
// * 27. Saving all the routes on the thunderclient extension
// * 28. Creating route function for mytasks 
// * 29. Creating a middleware for Authentication and getting the user info from the JWT token
// * 30. Creating route function for profile(me.js), fgetting the user info from the authentication middleware
// * 31. Creating route function for update and delete using task.id(req.query)
// * 32. Updating the new task route function, getting the user from the authentication midlleware and putting user._id into the payload


// * 33. Backend Routes are ready now coming back to frontend
// * 34. Creating loginHandler for the fetch request in the login folder
// * 35. Installing a package npm i react-hot-toast(reason - To show the error messages in nice UI)
// * 36. Using useContext hook for setting the user that we got as a response from the login route then redirecting back to the home page using redirect
// * 37. Importing toaster in Clients.jsx and passing it to the whole application(We can user toaster only in client components)
// * 38. Creating logoutHandler for logging out in Clients.jsx and showing the route messages with toast
// * 38. Creating registerHandler by copying almost the same things of loginHandler
// * 39. Now, we see that on refresh the user state gets removed but the token still remains, to stop this we made an useEffect hook in the Clients.jsx which gets called whenever the app opens, in the hook we fetch the profile route from where we get the user info thus setting the user each time the app opens


// * 40. Creating the submitHandler for AddTodoForm to post request the new tasks
// * 41. For showing the tasks we can't use SSG or ISR, since the tasks depends upon the user so we can't always show cached data, So here we have to use SSR
// * 42. Creating the fetchTodo function to fetch the tasks
// * 43. For fetching the tasks, we have to use the full url since we are in app directory not the backend pages directory
// * 44. During fetching the tasks, we see that in the post request the cookie is not not sent as a header so the data didn't came, its a problem with the nextjs(we may get the solution soon), till then we have to put the cookie as a header manually
// * 45. Adding useRouter hook to refresh the AddTodoForm
// * 46. Relocating the Tasks section to a different file, name - Todos.jsx so that we can add a suspense
// * 47. Adding a redirect in AddTodoForm, so that we user is null then it is redirected to the login page
// * 48. Creating deleteHandler for deleting the tasks, here we have also used toast and router
// * 48. Creating updateHandler for updating the tasks, we almost copied the the deleteHandler for thois purpose


// * 49. Creating a profile page to show the user credentials
// * 50. Creating login.jsx for the whole app
// * 51. The client components should start with Capital letter, and also we can't add metadeta in client components
// * 52. Then doing npm run build to test the website in production
// * 53. In build mode, we can't get the tasks since during fetching it gives an error that the process.env.URL doesn't matches the main URL, but there would not be any problem after deployment on vercel, so heading towards deployment.
// * 53. Ultimately deploying the website on the vercel with GitHub
# Bonus Questions - Optional

__1) Let's say we told you your app needs to search yet another repository, together with Github. What considerations will you make when update your app?__

It depends on what is the expected interaction.
In the case of the results from another repository (e.g. BitBucket) just need to be displayed along side with GitHub, `List` component could easily be re-used with different `endpoint` and maybe `renderer` parameter.
If the results from another repository, have to be seamlessly merged to the current results list, we could consider changing `List` component to support multiple URLs, wait for both request to be finished using `Promise` and finally merge the results into unified structure.
If another page is needed for the new repository, we could add another container for it and `react-router` could be implemented to handle navigation.

__2) How would your app deal with the Github API going down?__

The app should show error message if it cannot reach the API.

__3) Did you consider creating a separate branch on your project? What did you do on the other branch?__

Yes, there were `master` and `dev` branch for the main development process. `dev` branch is meant for development usage while `master` branch is meant for deployment process. Children branch could be created from `dev` branch as well in case of there were multiple developers working on the project. This could reduce the confusion and make merging more easily. Also, if there are multiple deployment environment (e.g. alpha, beta, ...), more branches could be created to reflect those environment.

__4) Is your app responsive?__

Yes, the app is designed to display well on all screen size.

__5) Why should I use your app, instead of something that's already out there?__

This app is much smaller than normal GitHub search page (~46kb vs ~490kb web version and ~67kb mobile version) so it is more suitable in a mobile device or a slow internet connection environment. Moreover, this app supports instant search which will show results as the user types. This make the user experience more fluid. 

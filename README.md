## Tech-blog

### Description
- What was your motivation?
  - Learning to build a complete app with a DB, routing, back-end data, server and handlebars.
- Why did you build this project?  
  - To become a fully skilled full-stack web developer, that can not only use DB but create front-end apps that work with handlebars and are connected to the back-end stored data.
- What problem does it solve?
```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```
- What did you learn?
  - How handlebars work
  - Routing functionality
  - DB connecting to server and back-end

### Lenguages Required:
- Node.js
- JavaScript
- HTML
- Eslint
- Handlebars
- CSS

## Usage
`npm start`
`npm run seed`
[Heroku Deploy Link](https://secret-stream-00472.herokuapp.com/)

I managed to deploy the app and got to the point of viewing and connecting the routes so that the seeds can be viewed locally. 
Unfortunately I was not able to finish up to the point of making the creation buttons. So I plea to your mercy not to lower to much my points please.
I ask you to run it locally and you will see that all my buttons work once you run the seeds.

## Resources
- Bootsrap
- https://handlebarsjs.com/guide/builtin-helpers.html#each
- Ask BCS


## Credits
- Enrique Del Castillo Chávez

## Tests
- Login works
- Log out works
- Routes work
- No creation buttons added
- No delete buttons added
- Comment viewing button works
- Viewing of seeds work
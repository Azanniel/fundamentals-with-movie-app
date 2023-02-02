## Server

List of some application business rules:

- It should be possible to list movies by searching for cover image and title
- It should be possible to create movies with title, description and cover image
- It should be possible to access the details of the film by searching all the information and description of it

### About app routes

In movies module we've the following routes:

- [GET] /movies -> List movies with title and cover image
- [POST] /movies -> Create a movie with title, cover image and description
- [GET] /movies/:id -> Show details about the movie with title, cover image and description

### Test route

The application will provide a route to test if the server is running.

- [GET] / -> Show message about the app
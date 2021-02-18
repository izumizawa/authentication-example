# Authentication Example 💾

## First Steps

### Database
Before running our application, you have to create a postgres database locally with the following attributes:

#### Server
- Host: localhost
- Port: 5432
- Database name: player_register

#### Authentication
- Authentication: Database Native
- Username: postgres
- Password: postgres

Also, we used the [Lombok library](https://projectlombok.org/) in the project, so if you open it in an IDE, like IntelliJ, you should install a plugin to run the application without errors.

With the created base, you just need to run the application, and it will create the tables by itself because we are using [Liquibase library](https://www.liquibase.org/). After that you can access our documentation as shown below.

## Player data
Player is a REST API and its main purpose is to register game players 🕹️ by `username` and `password`.

You can :
- `insert` a new player 
- `search by username` 
- `search by player id` 
- `delete` a player

#### Insert player
- URI: [http://localhost:8080/players](http://localhost:8080/players)
- Body: `{
             "username": "<YourUsername>",
             "password": "<YourPassword>" 
         }`
#### Search player by Username
- URI: [http://localhost:8080/players/username/<YourUsername>](http://localhost:8080/players/username/<YourUsername>)

#### Search player by Player ID
If you have your player ID, you can search this way.
- URI: [http://localhost:8080/players/id/<YourUUID>](http://localhost:8080/players/id/<YourUUID>)

#### Delete player
- URI: [http://localhost:8080/players/<YourUUID>](http://localhost:8080/players/<YourUUID>)
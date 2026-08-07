# Gigity
*A Database desgined to manage, relate, and share info about both past and upcoming shows in your area*

## Entity Sets
- ### *Shows*
   - show_id (unique identifier)
   - venue_id
   - date
   - ticket_link
- ### *Venues*
   - venue_id (unique identifier)
   - name
   - address
   - booking_link
- ### *Bands*
   - band_id (unique identifier)
   - name
   - icon_link
- ### *Users*
   - user_id (unique identifier)
   - email
   - username
   - profile_picture_url
   - password_hash

## Relationships
- ### *Lineups* - **Bands** <-> **Shows**
- ### *Members* - **Bands** <-> **Users**
- ### *Followers* - **Bands** <-> **Users**
- ### *Occured_at* - **Shows** -> **Venues**

## Week 1 Goals
- **Implementation**
   - [x] Make create script for database *(see create.sql)*
   - [x] Execute create.sql and make sure database is created
   - [x] Fill with small amount of dummy data *(see dummy.sql)*
- **Testing**
   - [x] Test db with following key queries *see test1.sql and test1_output.md for queries and their outputs*
      - Find all followers of a band
      - Find all bands a user follows
      - Find all members of a band
      - Find all shows a band has/will play
      - Find all shows at a specific venue
      - Find all bands playing a speciifc show
      - Find all bands a specific band has played a show with

## Week 2 Reflection
- *How can we evaluate this database?* 
   - Designwise, I think looking at how complex the queries have to become in order to get needed/useful info could be a main point of evaluation. I.e. if we needed to do a query with 5 joins and nested subqueries to get a simple piece of info, that may be a sign of poor design.
   - Seeing how the runtime of essential and common queries scales as our dataset grows larger goes hand in hand with the above point.
- *What are the essential parts of the project*
   - As we continue to discuss an end goal, we find ourselves coming up with more and more ideas that add complexity. In the first week we settled on a list of essential features, and the current implementation reflects those. We believe that these tables are the bare minimum required to have the base functionality we would like.

## Week 2 Goals
- **Implementation**
   - [x] Start Development on API
      - create routes for all queries from last week
      - create routes to input bands, shows, users, etc.
      - create routes to follow bands, join bands, etc.
      - create documentation for routes
- **Testing**
   - [x] Come up with additional queries for key features
   - [x] Test API routes to make sure they return what we expect

## Week 3 Reflection
- *Started API DEV*
   - Created all routes needed for simple GET, POST, and PATCH requests, as well as the routes for the queries that we defined last week
   - Reorganized project structure

## Week 3 Goals
- **Implementation**
   - [ ] Produce a BCNF decomp proof for our design
   - [ ] Implementing DELETE routes and queries
   - [ ] Implementing more complex routes and queries
      - login
      - adding users to bands
      - following bands
      - getting counts of band members, followers, shows played, etc.
   - [ ] Looking into password hashing
- **Testing**
   - [ ] Test new routes and ensure they work
   
   
   
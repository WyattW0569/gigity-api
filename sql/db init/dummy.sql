-- Dummy Users
INSERT INTO Users (email, hashed_password, username, profile_picture_url)
VALUES 
    ("wyattw@uvic.ca", "hashed_password", "WyattW", "profile_picture_url"),
    ("jacksonw@uvic.ca", "hashed_password", "JacksonW", "profile_picture_url"),
    ("mitchb@uvic.ca", "hashed_password", "mitch", "profile_picture_url"),
    ("mateo@stank.org", "hashed_password", "AwesomeDrummer111", "profile_picture_url"),
    ("alexg@stank.org", "hashed_password", "SillyGwilly", "profile_picture_url"),
    ("maxy@stank.org", "hashed_password", "TheGreatMightyMaxy", "profile_picture_url"),
    ("kai@redbarn.ca", "hashed_password", "BeatuifulKai", "profile_picture_url"),
    ("cade123@trackmeet.ca", "hashed_password", "CMcB", "profile_picture_url"),
    ("connell@trackmeet.ca", "hashed_password", "AwkwardConnell", "profile_picture_url"),
    ("sashah@trackmeet.ca", "hashed_password", "Sashah", "profile_picture_url"),
    ("teague@trackmeet.ca", "hashed_password", "TTTeaguester", "profile_picture_url");

-- Dummy Bands
INSERT INTO Bands (name, icon_link)
VALUES
    ("Stank", "stank.png"),
    ("Jackson Walker Music", "jackson.png"),
    ("Trackmeet", "trackmeet.png"),
    ("Kill Your Darlings", "kyd.png"),
    ("CSC370", "csc.png");

-- Dummy Venues
INSERT INTO Venues (name, address, booking_link)
VALUES
    ("Lucky Bar", "1919 Dock St, Victoria, BC V8T 2P9", "booking.com"),
    ("Rifflandia", "1111 Festival St, Victoria, BC V8P 1S4", "booking.com"),
    ("The Coda", "455 Johnson St, Victoria, BC V8W 1V7", "booking.com"),
    ("Little Fernwood", "2031 Fernwood Rd, Victoria, BC V8T 3P8", "booking.com"),
    ("Felicitas","UVIC","booking.com");

-- Dummy Shows
INSERT INTO Shows (venue_id, date, ticket_link, show_name)
VALUES
    (1, "2026-11-08", "booking.com", "show1"),
    (2, "2026-11-09", "booking.com", "show2"),
    (3, "2026-11-10", "booking.com", "show3"),
    (4, "2026-11-11", "booking.com", "show4"),
    (5, "2026-11-12", "booking.com", "show5"),
    (1, "2026-10-08", "booking.com", "show6"),
    (2, "2026-10-09", "booking.com", "show7"),
    (3, "2026-10-10", "booking.com", "show8"),
    (4, "2026-10-11", "booking.com", "show9");

-- Dummy Lineups
INSERT INTO Lineups (band_id, show_id)
VALUES
    (1, 1),
    (2, 1),
    (2, 2),
    (3, 2),
    (4, 2),
    (3, 3),
    (5, 3),
    (1, 3),
    (2, 4),
    (5, 5),
    (3, 6),
    (4, 6),
    (1, 7),
    (4, 7),
    (2, 8),
    (3, 8),
    (1,9),
    (2,9),
    (3,9),
    (4,9),
    (5,9);

-- Dummy Members
INSERT INTO Members (band_id, user_id)
VALUES
    (2,2),
    (2,4),
    (2,5),
    (2,6),
    (2,7),
    (1,4),
    (1,5),
    (1,6),
    (3,7),
    (3,8),
    (3,9),
    (3,10),
    (4,3),
    (5,1),
    (5,3);

-- Dummy Followers
INSERT INTO Followers (band_id, user_id)
VALUES
    (1,1),
    (1,3),
    (1,4),
    (2,1),
    (2,4),
    (2,5),
    (2,6),
    (2,7),
    (3,4),
    (3,5),
    (3,6),
    (3,7),
    (3,8),
    (3,9),
    (3,10),
    (4,2),
    (4,3),
    (4,5),
    (4,6),
    (4,7),
    (4,8),
    (4,9),
    (4,10),
    (5,1),
    (5,2),
    (5,3),
    (5,4),
    (5,5),
    (5,6),
    (5,7),
    (5,8),
    (5,9),
    (5,10),
    (5,11);
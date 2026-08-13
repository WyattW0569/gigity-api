CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    role ENUM('user', 'admin') DEFAULT 'user',
    email VARCHAR(255) UNIQUE NOT NULL,
    hashed_password CHAR(60) NOT NULL,
    username VARCHAR(255) NOT NULL,
    profile_picture_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Venues (
    venue_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    booking_link TEXT
);

CREATE TABLE Bands (
    band_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    icon_link TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Shows (
    show_id INT AUTO_INCREMENT PRIMARY KEY,
    venue_id INT NOT NULL,
    show_name VARCHAR(255),
    date DATE NOT NULL,
    ticket_link TEXT,
    thumbnail_link TEXT,
    FOREIGN KEY (venue_id) REFERENCES Venues(venue_id) ON DELETE CASCADE
);

CREATE TABLE Lineups (
    band_id INT NOT NULL,
    show_id INT NOT NULL,
    PRIMARY KEY (band_id, show_id),
    FOREIGN KEY (band_id) REFERENCES Bands(band_id) ON DELETE CASCADE,
    FOREIGN KEY (show_id) REFERENCES Shows(show_id) ON DELETE CASCADE
);

CREATE TABLE Members (
    band_id INT NOT NULL,
    user_id INT NOT NULL,
    PRIMARY KEY (band_id, user_id),
    FOREIGN KEY (band_id) REFERENCES Bands(band_id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
);

CREATE TABLE Followers (
    band_id INT NOT NULL,
    user_id INT NOT NULL,
    PRIMARY KEY (band_id, user_id),
    FOREIGN KEY (band_id) REFERENCES Bands(band_id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
);

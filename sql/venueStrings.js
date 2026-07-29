e = module.exports;

// GET queries
e.getAllVenues = `SELECT *
                 FROM Venues`;

e.getVenueById = `SELECT *
                 FROM Venues
                 WHERE venue_id = ?`;

e.getVenueShows = `SELECT *
                    FROM Shows S, Venues V
                    WHERE S.venue_id = V.venue_id
                    AND S.venue_id = ?`;

// POST queries
e.createVenue = `INSERT INTO Venues (name, address, booking_link)
                 VALUES (?, ?, ?)`;

// PATCH queries
e.updateVenueName = `UPDATE Venues
                    SET name = ?
                    WHERE venue_id = ?`;

e.updateVenueBookingLink = `UPDATE Venues
                            SET booking_link = ?
                            WHERE venue_id = ?`;

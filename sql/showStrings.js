e = module.exports;

// GET queries
e.getAllShows = `SELECT * FROM Shows`;

e.getShowById = `SELECT * FROM Shows
                 WHERE show_id = ?`;

e.getShowsByDate = `SELECT * FROM Shows
                    WHERE date = ?`;

e.getLineup = `SELECT B.band_id, B.name
               FROM Lineups L, Bands B
               WHERE L.band_id = B.band_id
               AND L.show_id = ?`

e.getVenue = `SELECT V.venue_id, V.name
              FROM Shows S, Venues V
              WHERE S.venue_id = V.venue_id
              AND S.show_id = ?`

// POST queries
e.createShow = `INSERT INTO Shows (show_name, date, venue_id, ticket_link)
                VALUES (?, ?, ?, ?)`

e.createLineup = `INSERT INTO Lineups (show_id, band_id)
                  VALUES (?, ?)`;

// PATCH queries
e.updateShowName = `UPDATE Shows SET show_name = ?
                    WHERE show_id = ?`;

e.updateShowDate = `UPDATE Shows SET date = ?
                    WHERE show_id = ?`;

e.updateShowVenue = `UPDATE Shows SET venue_id = ?
                     WHERE show_id = ?`;

e.updateShowTicketLink = `UPDATE Shows SET ticket_link = ?
                          WHERE show_id = ?`;

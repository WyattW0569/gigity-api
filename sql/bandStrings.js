e = module.exports;

// GET queries
e.getAllBands = `SELECT band_id, name, icon_link, created_at
                 FROM Bands`;

e.getBandById = `SELECT band_id, name, icon_link, created_at
                 FROM Bands
                 WHERE band_id = ?`;

e.getBandsPlayedWith = `SELECT DISTINCT B.name
                        FROM Bands B
                        JOIN Lineups L1 ON B.band_id = L1.band_id
                        JOIN Lineups L2 ON L1.show_id = L2.show_id
                        WHERE L2.band_id = ?
                        AND B.band_id <> ?;`;

e.getBandMembers = `SELECT U.user_id, U.username
                    FROM Members M, Bands B, Users U
                    WHERE M.band_id = B.band_id
                    AND M.user_id = U.user_id
                    AND M.band_id = ?;`;

e.getBandFollowers = `SELECT U.username
                      FROM Followers F, Bands B, Users U
                      WHERE B.band_id = F.band_id
                      AND U.user_id = F.user_id
                      AND F.band_id = ?;`;

e.getBandShows = `SELECT S.show_name, S.date
                  FROM Bands B, Shows S, Lineups L
                  WHERE B.band_id = L.band_id
                  AND S.show_id = L.show_id
                  AND b.band_id = ?;`;

// POST queries
e.createBand = `INSERT INTO Bands (name, icon_link)
                  VALUES (?, ?);`;

// PATCH queries
e.updateBandPFP = `UPDATE Bands
                   SET icon_link = ?
                   WHERE band_id = ?;`;

e.updateBandName = `UPDATE Bands
                    SET name = ?
                    WHERE band_id = ?;`;
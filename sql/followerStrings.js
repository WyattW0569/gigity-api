e = module.exports;

// POST Queries
e.followBand = `INSERT INTO Followers (user_id, band_id)
                VALUES (?, ?)`;

// DELETE Queries
e.unfollowBand = `DELETE FROM Followers
                  WHERE user_id = ? AND band_id = ?`;

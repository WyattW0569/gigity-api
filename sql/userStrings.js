e = module.exports;

// GET queries
e.getAllUsers = `SELECT *
                 FROM users_view`;

e.getUserById = `SELECT *
                 FROM users_view
                 WHERE user_id = ?`;

e.getFollowedBands = `SELECT B.name
                      FROM Followers F, Bands B, Users U
                      WHERE F.user_id = U.user_id
                      AND F.band_id = B.band_id
                      AND U.user_id = ?;`;

e.getUserByEmail = `SELECT *
                    FROM Users
                    WHERE email = ?`;

// POST queries
e.createUser = `INSERT INTO Users (email, username, hashed_password, profile_picture_url)
                VALUES (?, ?, ?, ?);`;

// PATCH queries
e.updatePFP = `UPDATE Users
               SET profile_picture_url = ?
               WHERE user_id = ?;`;

e.updateUsername = `UPDATE Users
                    SET username = ?
                    WHERE user_id = ?;`;

e.updatePassword = `UPDATE Users
                    SET hashed_password = ?
                    WHERE user_id = ?;`;

// DELETE queries
e.deleteUser = `DELETE FROM Users
                WHERE user_id = ?;`;

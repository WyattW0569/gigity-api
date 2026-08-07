e = module.exports;

// GET queries
e.getAllUsers = `SELECT user_id, email, username, profile_picture_url, created_at
                 FROM Users`;

e.getUserById = `SELECT user_id, email, username, profile_picture_url, created_at
                 FROM Users
                 WHERE user_id = ?`;

e.getFollowedBands = `SELECT B.name
                      FROM Followers F, Bands B, Users U
                      WHERE F.user_id = U.user_id
                      AND F.band_id = B.band_id
                      AND U.user_id = ?;`;

e.getUserByEmail = `SELECT user_id, email, username, password_hash, pfp_url
                    FROM Users
                    WHERE email = ?`;

// POST queries
e.createUser = `INSERT INTO Users (email, username, password_hash, profile_picture_url)
                VALUES (?, ?, ?, ?);`;

// PATCH queries
e.updatePFP = `UPDATE Users
               SET profile_picture_url = ?
               WHERE user_id = ?;`;

e.updateUsername = `UPDATE Users
                    SET username = ?
                    WHERE user_id = ?;`;

e.updatePassword = `UPDATE Users
                    SET password_hash = ?
                    WHERE user_id = ?;`;
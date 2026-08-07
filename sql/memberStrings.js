e = module.exports;

// GET Queries
e.getMembers = `SELECT * FROM Members 
                WHERE band_id = ?`;

e.getBandsbyMember = `SELECT * FROM Members 
                        WHERE user_id = ?`;

// POST Queries
e.createMember = `INSERT INTO Members(user_id,band_id)
                    VALUES(?,?)`;

// PATCH Queries
e.removeMember = `DELETE FROM Members 
                    WHERE user_id = ? AND band_id = ?`;
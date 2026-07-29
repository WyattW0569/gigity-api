-- Find all followers of a band (with band id of 1 in this example)
SELECT U.username
FROM Followers F, Bands B, Users U
WHERE B.band_id = F.band_id
AND U.user_id = F.user_id
AND F.band_id = 1;

-- Find all bands a user follows (with user id of 1 in this example)
SELECT B.name
FROM Followers F, Bands B, Users U
WHERE F.user_id = U.user_id
AND F.band_id = B.band_id
AND U.user_id = 1;

-- Find all members of a band (with band id of 1 in this example)
SELECT U.username
FROM Members M, Bands B, Users U
WHERE M.band_id = B.band_id
AND M.user_id = U.user_id
AND M.band_id = 1;

-- Find all shows a band has/will play (with band id of 1 in this example)
SELECT S.show_name, S.date
FROM Bands B, Shows S, Lineups L
WHERE B.band_id = L.band_id
AND S.show_id = L.show_id
AND b.band_id = 1;

-- Find all shows at a specific venue (with venue id of 1 in this example)
SELECT S.show_name, S.date
FROM Shows S, Venues V
WHERE S.venue_id = V.venue_id
AND V.venue_id = 1;

-- Find all bands playing a speciifc show (with show id of 1 in this example)
SELECT B.name
FROM Bands B, Shows S, Lineups L
WHERE B.band_id = L.band_id
AND S.show_id = L.show_id
AND S.show_id = 1;

-- Find all bands a specific band has played a show with
SELECT DISTINCT B.name
FROM Bands B
JOIN Lineups L1 ON B.band_id = L1.band_id
JOIN Lineups L2 ON L1.show_id = L2.show_id
WHERE L2.band_id = 1
  AND B.band_id <> 1;

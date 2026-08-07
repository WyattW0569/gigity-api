const express = require('express');
const router = express.Router();
const bandController = require('../../controllers/bands');

// get all bands
// /bands
router.get('/', bandController.getAllBands);

// get specific band by id
// /bands/:id
router.get('/:id', bandController.getBandById);

// get bands that have played with this band
// /bands/:id/playedWith
router.get('/:id/playedWith', bandController.getBandsPlayedWith);

// get members of this band
// /bands/:id/members
router.get('/:id/members', bandController.getBandMembers);

// get followers of this band
// /bands/:id/followers
router.get('/:id/followers', bandController.getBandFollowers);

// get shows this band has played
// /bands/:id/shows
router.get('/:id/shows', bandController.getBandShows);

// get member count for a band
// /bands/:id/memberCount
router.get('/:id/memberCount', bandController.getMemberCount);

// get follower count for a band
// /bands/:id/followerCount
router.get('/:id/followerCount', bandController.getFollowerCount);

// get show count for a band
// /bands/:id/showCount
router.get('/:id/showCount', bandController.getShowCount);


module.exports = router;
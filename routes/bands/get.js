const express = require('express');
const router = express.Router();
const bandController = require('../../controllers/bands');
const auth = require('../../middleware/auth');

// get all bands
// /bands
router.get('/', auth, bandController.getAllBands);

// get specific band by id
// /bands/:id
router.get('/:id', auth, bandController.getBandById);

// get bands that have played with this band
// /bands/:id/playedWith
router.get('/:id/playedWith', auth, bandController.getBandsPlayedWith);

// get members of this band
// /bands/:id/members
router.get('/:id/members', auth, bandController.getBandMembers);

// get followers of this band
// /bands/:id/followers
router.get('/:id/followers', auth, bandController.getBandFollowers);

// get shows this band has played
// /bands/:id/shows
router.get('/:id/shows', auth, bandController.getBandShows);

// get member count for a band
// /bands/:id/memberCount
router.get('/:id/memberCount', auth, bandController.getMemberCount);

// get follower count for a band
// /bands/:id/followerCount
router.get('/:id/followerCount', auth, bandController.getFollowerCount);

// get show count for a band
// /bands/:id/showCount
router.get('/:id/showCount', auth, bandController.getShowCount);


module.exports = router;
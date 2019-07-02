const {Router} = require('express');
const {updateProfile, getProfile} = require('../../services/profile');

module.exports = Router()
    .post('/create')
    .put('/:userId', updateProfile)
    .get('/:userId', getProfile)
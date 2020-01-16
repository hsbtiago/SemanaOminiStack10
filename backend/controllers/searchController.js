const axios = require('axios');
const Dev = require('../models/dev');
const parseStringToArray = require('../utils/parseStringToArray');

module.exports = {

    async index(request, response) {

        const { latitude, longitude, techs } = request.body;

        const devs = await Dev.find({
            techs: {
                $in: parseStringToArray(techs)
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000
                }
            }
        });

        return response.json({devs});
    }

}
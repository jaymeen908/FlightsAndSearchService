const { CityRepository } = require('../repository');
const CityServices = require('../services/city-service');

const cityService = new CityServices();

const create = async (request, response) => {
    try {
        const city = await cityService.createCity(request.body);
        return response.status(201).json({
            data: city,
            success: true,
            message: 'successfully created a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return response.status(500).json({
            data: {},
            success: false,
            message: 'not able to create a city',
            err: error
        });
        
    }
}
// delete type -> /city/:id 
const destroy = async (request, response) => {
    try {
        const response = await cityService.deleteCity(request.params.id);
        return response.status(200).json({
            data: response,
            success: true,
            message: 'successfully created a city',
            err: {}
        });
        
    } catch (error) {
        console.log(error);
        return response.status(500).json({
            data: {},
            success: false,
            message: 'not able to delete the city',
            err: error
        });
        
    }
}
// Get -> /city/:id
const get = async (request, response) => {
    try {
        const response  = await cityService.getCity(request.params.id);
        return response.status(201).json({
            data: response  ,
            success: true,
            message: 'successfully fetched a city',
            err: {}
        });
        
    } catch (error) {
        console.log(error);
        return response.status(500).json({
            data: {},
            success: false,
            message: 'not able to get a city',
            err: error
        });
        
    }
}
//patch -> /city/:id ->re.body
const update = async (request, response) => {
    try {
        const response = await cityService.updateCity(request.params.id);
        return response.status(200).json({
            data: response,
            success: true,
            message: 'successfully fetched a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return response.status(500).json({
            data: {},
            success: false,
            message: 'not able to update a city',
            err: error
        });
        
    }
}

module.exports = {
    create,
    destroy,
    get,
    update
}
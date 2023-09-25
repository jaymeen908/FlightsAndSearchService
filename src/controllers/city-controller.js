const { CityRepository } = require('../repository');
const CityServices = require('../services/city-service');

const cityService = new CityServices();

const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: 'successfully created a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'not able to create a city',
            err: error
        });
        
    }
}
// delete type -> /city/:id 
const destroy = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'successfully created a city',
            err: {}
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'not able to delete the city',
            err: error
        });
        
    }
}
// Get -> /city/:id
const get = async (req, res) => {
    try {
        const response  = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'successfully fetched a city',
            err: {}
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'not able to get a city',
            err: error
        });
        
    } 
}
//patch -> /city/:id ->re.body
const update = async (req, res) => {
    try {
        const response = await cityService.updateCity(req.params.id,req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'successfully fetched a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'not able to update a city',
            err: error
        });
        
    }
}

const getAll = async (req, res) => {
    try {
        const cities = await cityService.getAllCities(req.query);
        return res.status(200).json({
            data: cities,
            success: true,
            message: 'successfully fetched all city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'not able to update all city',
            err: error
        });
        
    }
}

module.exports = {
    create,
    destroy,
    get,
    update,
    getAll
}
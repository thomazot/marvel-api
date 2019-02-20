import api from '../services/api';

export default {
    async get(req, res) {
        let data = req.body || {};

        data = Object.assign( data, api.defaults.params);
        
        const request = await api.get('/v1/public/characters', { params: data });
        res.json(request.data);
    }
}
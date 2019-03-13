import api from '../services/api';

export default {
    async get(req, res) {
        
        const request = await api.get(`/v1/public/${req.query.route}/${req.query.id}`);
        console.log(request)
        const requestData = JSON.stringify(request.data).replace(/http(s|):\/\/gateway\.marvel\.com\/v1\/public/gi, '');

        res.json(JSON.parse(requestData));
    }
}
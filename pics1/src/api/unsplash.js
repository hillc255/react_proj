import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization:
        'Client-ID d37ae7b23bcf3083a3b26e09b888417280755c79e5f5d9b1367e46c727292665'
    }
});
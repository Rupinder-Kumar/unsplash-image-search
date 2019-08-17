import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: 'Client-ID 8379afb85eaed1224ffb95541f144b23c2b3b4ca54c19a871da100267577ede5'
    },

});
import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer ZrSgZH9g7wwxaL3EkflgVfDzuBjblyM8_14V60Z6HkDFZG_2jXcF-ju3RLR5aZ6jNk_BBfdqpZdf25xN_TfndVRBnPX0_ZDLc79v33jTqFpNt9atbL9g9HtjNZZoX3Yx',
    }
})
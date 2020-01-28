import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer rZAGbu5wAGH6TjHbMQ7Sn_u3Nb9VQcSg14tRsbKXHhQtUMzKtbt_xc008X4iuscT0Wvw0x-aXLVEqASQl2l7VJQHG7O4Pn7cEqb0cMNDODfqn0zHQoqsC2eyaBIqXnYx',
    }
})


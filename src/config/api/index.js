import axios from 'axios'

export const api_link = "https://rn-commerce-api.herokuapp.com"

export default axios.create({
   
   baseURL: 'https://rn-commerce-api.herokuapp.com'
   
});

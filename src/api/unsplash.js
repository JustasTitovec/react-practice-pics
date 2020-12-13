import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID ocYCxY91SYVFVPBDnPr5rItr3c8bkXw9tKpR-_RcgxU',
  },
});

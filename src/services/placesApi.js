import axios from 'axios';

const fsq = axios.create({
  baseURL: 'https://api.foursquare.com/v3/places',
  timeout: 5000,
  headers: {
    Accept: 'application/json',
    Authorization: 'fsq3CatvoG2lMER8S2xvknGHHN9BdZMKvXdRWIik7ev8X3c=', 
  },
});

export default fsq;

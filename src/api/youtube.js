import axios from 'axios';
const KEY = "AIzaSyCMx8AqaWdMWYzCTkKJWD-IYy0ZOeNrpzc";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }
});
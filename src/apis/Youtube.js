import axios from 'axios';

const KEY = 'AIzaSyDVRX7XzbJMP9A-YQl1Pkb3XP3r6Y7xW98';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        masResults: 5,
        key: KEY
    }
});
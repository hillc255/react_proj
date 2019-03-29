import axios from 'axios';


const KEY='AIzaSyDYvb-NFfrLDG6hCVfLfOZBR11h8AXygXs';

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params: {
       part: 'snippet',
       maxResults: 5,
       key: KEY
   }
});
// const GetPexelImg = async (apiKey) => {
//     try {
//       const response = await fetch("https://api.pexels.com/v1/collections?per_page=1", {
//         headers: {
//           Authorization: apiKey,
//         },
//       });
//       const data = await response.json();
//       console.log(data);
//       return data.photos[0].src.medium;
//     } catch (error) {
//       console.log(error);
//     }
//   }
  
//   export default GetPexelImg;


import { createClient } from 'pexels';

const client = createClient('rO5wy1MyCnvw7QkFSIX0FdsKbvqByttjZIWBA5aXwyD94enoJcqAameR');

client.collections.media({ per_page: 1 }).then(media => {
  console.log(media.id)
});
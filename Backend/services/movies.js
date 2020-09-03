var request = require("request");
const axios = require('axios').default;

const config = require("config");


const movies = async() => {
	try {
		const {data} = await axios.get(`ttps://api.themoviedb.org/3/movie/popular?api_key=${config.get('movieKey')}&language=en-US&page=1`);
		// console.log(response)
		return(data)
	} catch (error) {
   		 console.error(error);
  }
};



module.exports = movies;

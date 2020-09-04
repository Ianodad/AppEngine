var request = require("request");
const axios = require('axios').default;

const config = require("config");

const key = process.env.MY_KEY || config.get("movieKey")

const genre = async() => {
  try {
    const {data} = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${config.get("movieKey")}&language=en-US`)
    // console.log(data)
    return data
    console.log()
  } catch (e){
    console.log(e)
  } finally {
    console.log('Clean up')
  }
	// console.log(response)
};





module.exports = genre;

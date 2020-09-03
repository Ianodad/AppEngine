var request = require("request");
const axios = require('axios').default;

// const config = require("config");


const genre = async() => {
  try {
    return await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=0ac0a0ff34c0490450e8232fa50b2269&language=en-US');
  } catch (e){
    console.log(e)
  } finally {
    console.log('Clean up')
  }
	// console.log(response)
};



module.exports = genre;

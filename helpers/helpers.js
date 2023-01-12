export const usdFormat = (number) => { //regex that formats the price into USD currency
  return `$${number.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}


// location.js (helper file)
import axios from 'axios';

export const getCityAndStateFromCoordinates = async (latitude, longitude) => {

  const limit = 1

  const key = 'eb0eafed8de8f799e98ba685818233be'

  const response = await axios.get(
    `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=${limit}&appid=${key}`
  );
  const { data } = response;
console.log(data)
  return { data };
};


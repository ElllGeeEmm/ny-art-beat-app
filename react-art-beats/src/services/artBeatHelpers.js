import axios from 'axios'


const convert = require('xml-js');

const getEvents = async (value) => {
  const resp = await axios(`https://cors-anywhere.herokuapp.com/http://www.nyartbeat.com/list/${value}.en.xml`)
  const respData = convert.xml2js(resp.data, {compact: true});
  return respData;
}

export { getEvents }

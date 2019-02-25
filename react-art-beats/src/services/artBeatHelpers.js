import axios from 'axios'


const convert = require('xml-js');

const getEvents = async () => {
  const resp = await axios('https://cors-anywhere.herokuapp.com/http://www.nyartbeat.com/list/event_mostpopular.en.xml')
  const respData = convert.xml2js(resp.data, {compact: true});
  return respData;
}

export { getEvents }

import axios from 'axios';

const config = {
  headers:{
    ApiKey: 'b7b77702-b4ec-4960-b3f7-7d40e44cf5f4'
  }
};
const url = 'https://red-candidate-web.azurewebsites.net/api/Orders';

function getData(url, config, callback) {
    axios.get(url, config)
    .then(res=> console.log(res))
    .catch(err=> console.log(err))
}


export default getData;

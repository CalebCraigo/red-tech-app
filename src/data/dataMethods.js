import axios from 'axios';

const config = {
  headers:{
    ApiKey: 'b7b77702-b4ec-4960-b3f7-7d40e44cf5f4'
  }
};
const url = 'https://red-candidate-web.azurewebsites.net/api/Orders';

function getOrders(callback) {
    axios.get(url, config)
    .then(res=> callback(res))
    .catch(err=> console.log(err))
}

function getOrdersByType(types, callback){
  axios.get(url, config, types)
  .then(res => callback(res))
  .catch(err => console.log('err', err))
}

function postOrder(order, callback) {
    axios.post(url, order, config)
    .then(res => callback(res))
    .catch(err => console.log('err', err))
}

function deleteOrder(order, callback) {
  const url = 'https://red-candidate-web.azurewebsites.net/api/Orders/Delete';
  const config = {
    headers:{
      ApiKey: 'b7b77702-b4ec-4960-b3f7-7d40e44cf5f4'
    }
  };
  axios.post(url, order, config, callback)
    .then(res => callback(res))
    .catch(err => console.log('err', err))
}

export { getOrders, getOrdersByType, postOrder, deleteOrder}

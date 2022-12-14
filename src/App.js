import './App.css';
import Main from './components/Main.jsx';
import {Provider} from 'react-redux'
import store from './redux/store.js'

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;

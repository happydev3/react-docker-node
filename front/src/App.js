import { Provider } from 'react-redux'
import store from './store'
import PhoneListContainer from './containers/PhoneListContainer';
import { Notification, Spinner } from './components';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <PhoneListContainer />
      <Notification />
      <Spinner />
    </Provider>
  );
}

export default App;

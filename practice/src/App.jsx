import React from 'react'
import {Provider} from 'react-redux'
import configureStore from './redux/store/index'
import List from './components/List'

function App() {
  return (
    <Provider store={configureStore()}>
      <div>
        <List/>
      </div>
    </Provider>
  );
}

export default App;

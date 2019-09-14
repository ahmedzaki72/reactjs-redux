import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import Counter from './components/counter';
import { createStore } from 'redux';
import reducer from './components/reducer/reducer';



const store = createStore(reducer)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;

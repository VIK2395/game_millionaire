import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider, useSelector } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import gameReducer from './store/gameReducer';
import { fetchGameConfigData } from './store/gameActions';

const store = createStore(gameReducer, applyMiddleware(thunk));

store.dispatch(fetchGameConfigData());

const IsLoaded = ({ children }) => {
  const isLoaded = useSelector((state) => state.isLoaded);
  if (!isLoaded) {
    return (
      <div className="loader">
        <p>Loading...</p>
      </div>
    );
  }
  return children;
};

ReactDOM.render(
  <Provider store={store}>
    <IsLoaded>
      <App />
    </IsLoaded>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

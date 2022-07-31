import React from 'react';
import {SafeAreaView} from 'react-native';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import rootReducer from './src/libraries/reducers';
import rootSaga from './src/libraries/sagas';
import RootNavigator from './src/navigation/RootNavigator';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <RootNavigator />
      </SafeAreaView>
    </Provider>
  );
};

export default App;

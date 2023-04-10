import { StyleSheet,} from 'react-native';
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import Main from './src/components/Main';
import { myStore } from './src/redux/store/store';


let persistor = persistStore(myStore);

export default function App() {
  return (
    <>
      <Provider store={myStore}>
        <PersistGate loading={null} persistor={persistor}>
          <Main />
        </PersistGate>
      </Provider>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

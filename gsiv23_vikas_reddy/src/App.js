import './App.css';
import { Route ,Routes} from 'react-router-dom';
import MovieDetails from './componnets/MovieDetails';
import List from './componnets/List';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <>
     <Provider store={store}>
     <Routes>
        <Route exact path="/" element={<List/>} />
        <Route exact path="/movie/:id" element={<MovieDetails/>} />
    </Routes>
    </Provider>
    </>
  );
}

 export default App;

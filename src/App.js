import './App.css';
import MainTable from './Components/MainTable';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FillTable from './Components/FillTable';
import Main from './Components/Main';
import Letter from './Components/Letter';
import { Provider } from 'react-redux'; // Import Provider
import store from '../src/Components/store'; // Import your Redux store

function App() {
  return (
    <div>
      <div className='App'>
        <BrowserRouter>
          <Provider store={store}> {/* Wrap Routes with Provider and provide store */}
            <Routes>
              <Route exact path="/" element={<Main />} />
              <Route exact path="/Report" element={<MainTable />} />
              <Route exact path="/Form" element={<FillTable />} />
              <Route exact path="/letter" element={<Letter />} />
            </Routes>
          </Provider>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

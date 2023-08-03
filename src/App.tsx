import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './global.scss';
import LayoutPage from './pages/layout';
import MainPage from './pages/main';
import CashbookPage from './pages/cashbook';


function App() {
  return (
    <MainPage />
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<LayoutPage />}>
    //       <Route path="" element={<MainPage />} />
    //       <Route path="/cashbook" element={<CashbookPage />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
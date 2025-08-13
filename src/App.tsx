import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { FORM__ROUTE, MAIN__ROUTE } from './constants/routes';
import Main from './pages/Main/Main';
import FormPage from './pages/FormPage/FormPage';
function App() {
  return (
      <Router>
        <Routes>
          <Route path={MAIN__ROUTE} element={<Main/>}></Route>
          <Route path={FORM__ROUTE} element={<FormPage/>}></Route>
        </Routes>
      </Router>
  );
}

export default App;

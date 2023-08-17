import { Route, Routes } from 'react-router-dom';
import { Page1 } from './containers/page1';
import { Page2 } from './containers/page2';
import { Page3 } from './containers/page3';
import { Header } from './global/header';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Page1 />} />
      <Route path="/page2" element={<Page2 />} />
      <Route path="/page3" element={<Page3 />} />
    </Routes>
  );
}

export default App;

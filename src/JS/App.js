import React from 'react';
import Login from '../Screen/Login';
import MenuBar from '../JS/MenuBar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const App = () => {
  return (
    <div>
      {/* <Login/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/"  exact element={<Login/>}></Route>
          <Route path="/main"  element={<MenuBar/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;

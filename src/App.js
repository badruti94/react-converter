import { useState } from 'react';
import './App.css';
import Panjang from './pages/Panjang';
import Berat from './pages/Berat';

function App() {
  const [menu, setMenu] = useState('panjang');

  const listMenuMarkup = (
    <>
      <li><a href="!#" onClick={()=>{setMenu('panjang')}} className="waves-effect">Panjang</a></li>
      <li><a href="!#" onClick={()=>{setMenu('berat')}} className="waves-effect">Berat</a></li>
    </>
  )

  let page;
  switch (menu) {
    case 'panjang':
      page = ( <Panjang /> )
      break;
    case 'berat':
      page = ( <Berat /> )
      break;
  
    default:
      break;
  }

  

  return (
    <div className="App">
      <nav className="blue darken-2" role="navigation">
        <div className="nav-wrapper container">
          <a href="!#" className="brand-logo" id="logo-container">Konverter</a>
          <a href="!#" className=" sidenav-trigger" data-target="nav-mobile">☰</a>
          <ul className="topnav right hide-on-med-and-down">
            {listMenuMarkup}
          </ul>
          <ul className="sidenav" id="nav-mobile">
            {listMenuMarkup}
          </ul>
        </div>
      </nav>
      <div className="container">
        {page}
      </div>
    </div>
  );
}

export default App;

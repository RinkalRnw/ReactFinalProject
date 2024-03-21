import logo from './logo.svg';

import './css/bootstrap.min.css';
import './css/tiny-slider.css';
import './css/style.css';
import HeaderComponent from './HeaderComponent';
import HeroComponent from './HeroComponent';

function App() {
  return (
    <div>
        <HeaderComponent Tmpname="Custom"/>
        <HeroComponent /> 
        

    </div>
  );
}

export default App;

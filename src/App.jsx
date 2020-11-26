import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import ColorBox from './features/ColorBox';
import HomePage from './features/Home';
import MagicBoxFeature from './features/MagicBox';
import RenderingFeature from './features/Rendering';

function App() {
  return (
    <div>
      <Header />

      {/* Routing content */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/magic-box" component={MagicBoxFeature} />
        <Route path="/rendering" component={RenderingFeature} />
        <Route path="/color-box" component={ColorBox} />
      </Switch>

      <div style={{ textAlign: 'center' }}>Yen Truong</div>
    </div>
  );
}

export default App;

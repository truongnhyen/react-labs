import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Timer from './components/Timer';
import Todo from './components/Todo';
import ColorBox from './components/ColorBox';
import HomePage from './features/Home';
import MagicBoxFeature from './features/MagicBox';
import RenderingFeature from './features/Rendering';
import StudentFeature from './features/Student';
import NotFound from './components/NotFound';
import PostFeature from './features/Post';
import TodoFeature from './features/Todo';
import ThemeContext, { themes } from 'themeContext';
import { useState } from 'react';
import CounterFeature from 'features/Counter';
import CartFeature from 'features/Cart';

function App() {
  const [currentTheme, setCurrentTheme] = useState(themes.light);
  const value = { currentTheme, setCurrentTheme };
  return (
    <div>
      <ThemeContext.Provider value={value}>
        <Header />
        {/* <Timer seconds={60} />
      <Timer seconds={10} />
      <Timer seconds={40} /> */}

        {/* Routing content */}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/magic-box" component={MagicBoxFeature} />
          <Route path="/rendering" component={RenderingFeature} />
          <Route path="/color-box" component={ColorBox} />
          <Route path="/todos" component={TodoFeature} />
          <Route path="/counter" component={CounterFeature} />
          <Route path="/students" component={StudentFeature} />
          <Route path="/posts" component={PostFeature} />
          <Route path="/cart" component={CartFeature} />
          <Route component={NotFound} />
        </Switch>

        <div style={{ textAlign: 'center' }}>Yen Truong</div>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;

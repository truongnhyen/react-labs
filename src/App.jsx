import PrivateRoute from 'components/PrivateRoute';
import { useState, lazy, Suspense } from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import ThemeContext, { themes } from 'themeContext';
import './App.scss';
import Header from './components/Header';
import NotFound from './components/NotFound';

const ColorBox = lazy(() => import('./components/ColorBox'));
const HomePage = lazy(() => import('./features/Home'));
const MagicBoxFeature = lazy(() => import('./features/MagicBox'));
const PostFeature = lazy(() => import('./features/Post'));
const RenderingFeature = lazy(() => import('./features/Rendering'));
const StudentFeature = lazy(() => import('./features/Student'));
const TodoFeature = lazy(() => import('./features/Todo'));
const Countdown = lazy(() => import('features/\bCountdown'));
const CartFeature = lazy(() => import('features/Cart'));
const CounterFeature = lazy(() => import('features/Counter'));

function App() {
  const [currentTheme, setCurrentTheme] = useState(themes.light);
  const value = { currentTheme, setCurrentTheme };

  const match = useRouteMatch();

  return (
    <div>
      <ThemeContext.Provider value={value}>
        <Header />
        {/* <Timer seconds={60} />
      <Timer seconds={10} />
      <Timer seconds={40} /> */}

        {/* Routing content */}
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path={match.path} component={HomePage} />
            <PrivateRoute path={`${match.path}/magic-box`} component={MagicBoxFeature} />
            <Route path={`${match.path}/rendering`} component={RenderingFeature} />
            <Route path={`${match.path}/color-box`} component={ColorBox} />
            <Route path={`${match.path}/todos`} component={TodoFeature} />
            <Route path={`${match.path}/counter`} component={CounterFeature} />
            <Route path={`${match.path}/students`} component={StudentFeature} />
            <Route path={`${match.path}/posts`} component={PostFeature} />
            <Route path={`${match.path}/cart`} component={CartFeature} />
            <Route path={`${match.path}/countdown`} component={Countdown} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>

        <div style={{ textAlign: 'center' }}>Yen Truong</div>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Detail from './pages/Detail';

ReactDOM.render(
    <Router history={browserHistory}
      onUpdate={() => window.scrollTo(0, 0)}>
      <Route path="/" component={ Detail } />
    </Router>,
    document.getElementById('app')
);

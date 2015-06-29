import React from 'react';
import { Router, Route } from 'react-router';
import HashHistory from 'react-router/lib/HashHistory';
import Uploader from '../components/Uploader';
import Viewer from '../components/Viewer';

export default (
  <Router history={HashHistory}>
    <Route path='/' component={Uploader} />
    <Route path='/conversations' component={Viewer} />
  </Router>
)

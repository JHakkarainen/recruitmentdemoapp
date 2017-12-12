import React from 'react';
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import Charts from './Charts'
import Jokes from '../components/Jokes'
import Header from './Header'

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Header />
      <Switch>
        <Route path="/charts" component={Charts} />
        <Route path="/jokes" component={Jokes} />
      </Switch>
    </div>
  </Provider>)


Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root;

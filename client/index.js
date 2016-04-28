import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'

import Root from './containers/Root'
import configureStore from './store'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
	<Root routerHistory={history} store={store} />,
	document.getElementById('Root')
);

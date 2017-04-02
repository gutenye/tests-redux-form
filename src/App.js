import './App.scss'
import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { reducer as formReducer } from 'redux-form'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import userData from 'states/userData'
import Step1Page from 'pages/Step1Page/Step1Page'
import Step2Page from 'pages/Step2Page/Step2Page'
import Step3Page from 'pages/Step3Page/Step3Page'

const reducers = combineReducers({
  form: formReducer,
  userData,
})
const store = createStore(
  reducers,
  window && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Route render={(props) => (
            <ReactCSSTransitionGroup transitionName='pageslider' transitionEnterTimeout={500} transitionLeaveTimeout={500}>
              <Switch key={props.location.key} location={props.location}>
                <Route path='/' component={Step1Page} exact />
                <Route path='/step-2' component={Step2Page} />
                <Route path='/step-3' component={Step3Page} />
              </Switch>
            </ReactCSSTransitionGroup>
          )} />
        </HashRouter>
      </Provider>
    )
  }
}

render(<App />, document.querySelector('#app'))

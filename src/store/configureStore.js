import { createStore } from 'redux'
import pageReducer from './reducers/page'

const store = createStore(pageReducer)

export default store

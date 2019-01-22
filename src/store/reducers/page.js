import { PageActions } from '../actions/page'

const pageReducer = (state, action) => {
  switch(action.type) {
    case PageActions.PAGE_ENTERED:
      return { entered: true }
    case PageActions.PAGE_LEFT:
      return { entered: false }
    default: 
      return {}
  }
}

export default pageReducer

export const PageActions = {
  PAGE_ENTERED: 'PAGE_ENTERED',
  PAGE_LEFT: 'PAGE_LEFT'
}

export const enterPage = () => ({
  type: PageActions.PAGE_ENTERED
})

export const leavePage = () => ({
  type: PageActions.PAGE_LEFT
})

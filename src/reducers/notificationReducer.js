const initialState = ''
  
export const setNotification = (message) => {
    return {
        type: 'new_notification',
        data: {
        content: message
        }
    }
}

export const removeNotification = () => {
    return {
        type: 'reset_notification',
        data: {}
    }
}
  
const notificationReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'new_notification':
            return action.data.content
        case 'reset_notification':
            return initialState
        default:
            return state
      }
}
  
export default notificationReducer
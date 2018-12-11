export default (state = {}, action) => {
    switch (action.type) {
     case 'LOAD_ACTION':
      return {
       data: action.payload
      }
     default:
      return state
    }
}
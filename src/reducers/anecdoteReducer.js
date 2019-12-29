import anecdoteService from '../services/anecdotes'

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'init_anecdotes',
      data: anecdotes
    })
  }
}

export const addNewAnecdote = (data) => {
  return {
    type: 'new_anecdote',
    data
  }
}

export const voteForAnecdote = (id) => {
  return {
    type: 'vote_anecdote',
    data: {
      id: id
    }
  }
}

const anecdoteReducer = (state = [], action) => {
  switch(action.type) {
    case 'new_anecdote':
      return state.concat(action.data)
    case 'init_anecdotes':
      return action.data
    case 'vote_anecdote':
      const id = action.data.id
      const anecdoteToChange = state.find(anecdote => anecdote.id === id)
      const changedAnecdote = { 
        ...anecdoteToChange, 
        votes: anecdoteToChange.votes + 1
      }

      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : changedAnecdote
      )
    default:
      return state
  }
}

export default anecdoteReducer
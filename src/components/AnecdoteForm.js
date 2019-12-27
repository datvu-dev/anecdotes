import React from 'react'
import { addNewAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, removeNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
    const addNew = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
    
        props.store.dispatch(addNewAnecdote(content))
        props.store.dispatch(setNotification('Added ' + content))
        
        event.target.anecdote.value = ''

        setTimeout(() => {
          props.store.dispatch(removeNotification())
        }, 5000)
    }

    return (
      <div>
        <h2>Add New</h2>
        <form onSubmit={addNew}>
        <div><input name="anecdote" /></div>
        <button type="submit">Add</button>
        </form>
      </div>
    )
  }
  
  export default AnecdoteForm
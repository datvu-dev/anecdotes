import React from 'react'
import { addNewAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = (props) => {
    const addNew = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
    
        props.store.dispatch(addNewAnecdote(content))
        
        event.target.anecdote.value = ''
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
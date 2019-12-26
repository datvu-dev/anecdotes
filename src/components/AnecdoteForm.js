import React from 'react'

const AnecdoteForm = (props) => {
    const generateId = () => {
        return (100000 * Math.random()).toFixed(0)
    } 

    const addNew = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
    
        props.store.dispatch({
          type: 'new',
          data: {
            content,
            votes: 0,
            id: generateId()
          }
        })
        
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
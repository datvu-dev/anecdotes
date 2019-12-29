import React from 'react'
import { connect } from 'react-redux'
import { addNewAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, removeNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
    const addNew = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value

        // props.setNotification('Added ' + content)
        
        event.target.anecdote.value = ''

        props.addNewAnecdote(content)

        setTimeout(() => {
          props.removeNotification()
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

const mapDispatchToProps = {
  setNotification, 
  removeNotification,
  addNewAnecdote
}
  
const ConnectedAnecdoteForm = connect(
  null,
  mapDispatchToProps
)(AnecdoteForm)
  
export default ConnectedAnecdoteForm
import React from 'react'
import { voteForAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, removeNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
    const anecdotes = props.store.getState().anecdotes

    const vote = (id, title) => {
        props.store.dispatch(voteForAnecdote(id))
        props.store.dispatch(setNotification('You voted for ' + title))

        setTimeout(() => {
          props.store.dispatch(removeNotification())
        }, 5000)
    }

    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.map(anecdote =>
            <div key={anecdote.id}>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes} 
                <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
            </div>
            </div>
        )}
      </div>
    )
  }
  
  export default AnecdoteList
import React from 'react'
import { connect } from 'react-redux'
import { voteForAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, removeNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
    const anecdotes = props.anecdotes

    const vote = (anecdote) => {
        let changedAnecdoteObject = {
          content: anecdote.content,
          votes: anecdote.votes + 1
        }

        props.voteForAnecdote(anecdote.id, changedAnecdoteObject)
        props.setNotification('You voted for ' + anecdote.content)

        setTimeout(() => {
          props.removeNotification()
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
                <button onClick={() => vote(anecdote)}>vote</button>
            </div>
            </div>
        )}
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes
  }
}

const mapDispatchToProps = {
  setNotification, 
  removeNotification,
  voteForAnecdote
}
  
const ConnectedAnecdotes = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)

export default ConnectedAnecdotes
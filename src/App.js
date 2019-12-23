import React from 'react';

const App = (props) => {
  const anecdotes = props.store.getState()

  const generateId = () => {
    return (100000 * Math.random()).toFixed(0)
  } 

  const vote = (id) => {
    props.store.dispatch({
      type: 'vote',
      data: {
        id: id
      }
    })
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
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes} 
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>Add New</h2>
      <form onSubmit={addNew}>
        <div><input name="anecdote" /></div>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default App
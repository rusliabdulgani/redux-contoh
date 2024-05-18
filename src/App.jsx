import { useEffect  } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { connect } from 'react-redux'
import { incrementAction } from './redux/action/counterAction'
import { fetchPostAction } from './redux/action/postAction'

function App({ count, post, loading, error, incrementAction, fetchPostAction }) {

  useEffect(() => {
    fetchPostAction()
  }, [])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={incrementAction}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {
        loading ? 
        <p>loading......</p>
        : post ?
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </>
        : error ? 
        <p>something error</p>
        : null
      }
    </>
  )
}

const mapStateToProps = (state) => ({
  count: state.counter.count,
  post: state.post.data,
  loading: state.post.loading,
  error: state.post.error
})

const mapDispatchToProps = { incrementAction, fetchPostAction }

export default connect(mapStateToProps, mapDispatchToProps)(App)

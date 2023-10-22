import { useDispatch, useSelector } from 'react-redux'

type State = {
  count: number
}

function Count() {
  const count = useSelector((state: State) => state.count)
  const dispatch = useDispatch()

  return (
    <div className="card">
      <button onClick={() => dispatch({
        type: 'count/add',
      })}>
        count is {count}
      </button>
    </div>
  )
}

export default Count
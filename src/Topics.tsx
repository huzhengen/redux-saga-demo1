import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

type Item = {
  title: string
  id: number
}

type State = {
  topics: Topics
}

type Topics = {
  page: number
  loading: boolean
  data: Item[]
}

function Topics() {
  const { page, loading, data } = useSelector((state: State) => state.topics)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({
      type: 'topics/getData',
      page,
    })
  }, [page, dispatch])
  return (
    <div>
      <h2>article list - page {page}</h2>
      {loading
        ? <p>loading...</p>
        : (data.length > 0)
          ? <ul>{data.map((item: Item) => <li key={item.id}>{item.title}</li>)}</ul>
          : <p>no data</p>
      }
      <button onClick={() => dispatch({ type: 'topics/addPage' })}>next page</button>
    </div>
  )
}

export default Topics
import { takeEvery, put, call } from 'redux-saga/effects'

type Action = {
  type: string
  page: number
}

type Response = {
  url: string
  status: number
  json: () => void
}

type Data = {
  success: boolean
  data: []
}

function* watchTopics() {
  yield takeEvery('topics/getData', workTopics)
}

function* workTopics(action: Action) {
  yield put({
    type: 'topics/loading',
  })
  const res: Response = yield call(
    fetch,
    `https://cnodejs.org/api/v1/topics?limit=10&page=${action.page}`
  )
  const data: Data = yield res.json()
  yield put({
    type: 'topics/update',
    data: data.data,
  })
}

export default watchTopics
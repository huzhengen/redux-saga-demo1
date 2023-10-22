import { all } from 'redux-saga/effects'
import watchTopics from './topicsSaga'

function* rootSaga() {
  yield all([watchTopics()])
}

export default rootSaga
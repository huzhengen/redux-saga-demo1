type Topics = {
  page: number
  loading: boolean
  data: []
}

type Action = {
  type: string,
  data: [],
}

export default (
  topics: Topics = { page: 1, loading: false, data: [] },
  action: Action
) => {
  switch (action.type) {
    case 'topics/loading':
      return {
        ...topics,
        loading: true,
      }
      break;
    case 'topics/addPage':
      return {
        ...topics,
        page: topics.page + 1,
      }
      break;
    case 'topics/update':
      return {
        ...topics,
        loading: false,
        data: action.data,
        // data: topics.data,
      }
      break;
    default:
      return topics
      break;
  }
}
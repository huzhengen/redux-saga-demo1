import { Action } from "redux";

export default (count = 1, action: Action) => {
  switch (action.type) {
    case 'count/add':
      return count + 1
      break;
    default:
      return count
      break;
  }
}
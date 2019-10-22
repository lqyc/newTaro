import {
  ADD,
  MINUS
} from '../constants/constList'

// 点赞收藏文章
export const essayCollect = (id:number) => {
  return {
    type: ADD,
    id
  }
}
// 取消收藏
export const cancelCollect = (id:number) => {
  return {
    type: MINUS,
    id
  }
}

// 异步的action
// export function asyncAdd () {
//   return dispatch => {
//     setTimeout(() => {
//       dispatch(essayCollect())
//     }, 2000)
//   }
// }

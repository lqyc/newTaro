import { ADD, MINUS } from '../constants/constList'
import essay from '../static/essay'
import { essayType } from '../constants/commonType'

const INITIAL_ESSAY:essayType = {
  articleList: essay.articleList,
  collected : 1
}

export default function essayData (state = INITIAL_ESSAY, action) {
  switch (action.type) {
    case ADD:
     state.articleList.map(item=>{
       if (item.id === action.id ) {
         item.collect = true
       }
       return item
     })

      return {
        collected: state.collected + 1,
        articleList:state.articleList
      }
     case MINUS:
      //  let _articleList:any = state.articleList.map((item)=>
      //      item.id === action.id ?
      //      {...item,collect:false} : item
      //  )
      state.articleList.map(item=>{
        if (item.id === action.id ) {
          item.collect = false
        }
        return item
      })
       return {
         collected: state.collected - 1,
         articleList: state.articleList
       }
     default:
       return state
  }
}

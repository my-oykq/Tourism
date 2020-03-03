
import { CITY } from './mutaion-types'

export default {
   // 通过actions的函数名，修改state中数据，把改变的city传过来，赋值给state中的state
   [CITY](state,city){
    state.city = city
    try {
      // 把city放在localStorage存储
      localStorage.city = city
    } catch (e) {}

  }
}

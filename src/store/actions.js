import { CITY } from './mutaion-types'

export default {
  changeCity({commit},city){
    // 提交mutations，通过mutations的函数名
   commit(CITY,city)
  }
}

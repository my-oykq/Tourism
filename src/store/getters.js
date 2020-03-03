

// 需要根据state算出一些新的数据的时候就会用到getters来提供新的数据
export default {
  doubleCity ( state ) {
    return state.city + '' + state.city
  }
}

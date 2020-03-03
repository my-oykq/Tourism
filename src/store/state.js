let defaultCity = '上海'

// 用try{}catch(){}的目的是如果某些浏览器用户隐身或者关闭本地存储那就导致浏览器抛出异常
  try{
    if(localStorage.city){
      defaultCity = localStorage.city
    }
  }catch(e){}
  export default {
    city: defaultCity
  }

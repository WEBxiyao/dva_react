import { getProduct} from '../services/example'
export default {

  namespace: 'example',

  state: {
    list:[
      {
        name:'第一个产品'
      },
      {
        name:'第二个产品'
      },
      {
        name:'第三个产品'
      },
    ]
  },
  //  这个就相当于watch监听
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },
  // 这个地方就相当于把同步改成异步的方法
  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *updateHttp({payload},{call,put}){
      // 网络请求
      const result=yield call(getProduct,payload)
      if(result){
        yield put({
          type:'changeName',
          payload:result
        })
      }
    }
  },

  reducers: {
    changeName(state,action){
     const data=action.payload.data
    //  这个地方不能直接修改state先要进行深拷贝然后在返回处理后的值
     const list=JSON.parse(JSON.stringify(state))
     list.list.push(data)
     return list
    }
  },

};

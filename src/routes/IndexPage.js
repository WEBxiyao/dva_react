import React,{useEffect} from 'react';
import styles from './IndexPage.css';
import { connect } from 'dva';
import { routerRedux} from 'dva/router'
import {updateHttpList } from '../actions/index'
//这个地方是dva里面内置的方法，还有router原来的withRouter高阶组件，还有父组件传值props.histroy

function IndexPage(props) {
 useEffect(()=>{
   console.log(props,"--666555---")
 })
  const add=()=>{
    // props.dispatch({
    //   type:'example/updateHttp',
    //   payload:{
    //     id:10
    //   }
    // })
    props.dispatch(updateHttpList())
  }
  const goDetail=()=>{
    props.dispatch(routerRedux.push('/detail'))
  }
  const list=props.list
  return (
    <div className={`${styles.normal} box`}>
     {
        list.map((item,index)=>{
          return(
          <div key={index}>{item.name}</div>
          )
        })
     }
     <button onClick={()=>add()}>点击触发reduex函数</button>
     <button onClick={()=>goDetail()}>点击跳转去详情</button>
    </div>
  );
}

const mapPropsState=(state)=>{
  return {
    list:state.example.list
  }
}


export default connect(mapPropsState)(IndexPage);

import React ,{ Component } from 'react';
import 'antd/dist/antd.css';
import { Input,Button,List } from 'antd';

//无状态组件
const TodoListUI = (props) => {
	return (
		<div  style={{marginLeft:'10px',marginTop:'10px'}}>
			<div>
				<Input 
					value={props.inputValue} 
					placeholder='todo info' 
					style={{width:'300px',marginRight: '10px'}}
					onChange={props.handleInputChange}
				/>
				<Button type="primary" onClick={props.handleBtnClick}>Submit</Button>
			</div>
			<List
				style={{marginTop:'10px',width:'400px'}}
				bordered
				dataSource={props.list}
				renderItem={(item,index) => (
					<List.Item onClick={(index) => {props.handleItemDelete(index)}}>{item}</List.Item>
			  )}
			/>
		</div>
	)
}

export default TodoListUI; 
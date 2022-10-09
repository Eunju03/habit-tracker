import React, {memo} from 'react';

const HabitAddForm =  memo( props => {
	const formRef = React.createRef();
	const inputRef = React.createRef();

	const onSubmit = (event) => {
		event.preventDefault();  // 재로딩되는 것을 막아줌
		const name = inputRef.current.value; 
		 //부모 컨테이너로 부터 props으로 전달받은 콜백함수를 호출할때 자신의 컴포넌트에 
		 //정보를 (this.inputRef.current.value) 콜백함수 파라미터 형식으로 전달해 줌
		name && props.onAdd(name);   // input 값이 null이 아닐때만 추가하기
		// this.inputRef.current.value = '';  // input 초기화할때 씀
		formRef.current.reset();  // 폼 초기화 (위에 문장이랑 같음)
	};
	return (
		<form ref={formRef} className="add-form" onSubmit={onSubmit}>
			<input 
			ref={inputRef} 
			type="text" 
			className='add-input' 
			placeholder='Habit' 
			/>
			<button className='add-button'>Add</button>
		</form>
	);
});



export default HabitAddForm;
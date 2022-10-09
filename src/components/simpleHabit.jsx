import React, {  useCallback, useEffect, useRef, useState } from 'react';

// function컴포넌트는 state나 prpos가 변경되면 전체가 반복이 되어짐
// 지역변수들도 무한정 반복됨 
const SimpleHabit = props => {
	// state = {
  //   count: 0,
  // };

	const [count, setCount] = useState(0);
	const spanRef = useRef();

	const handleIncrement = useCallback(() => {
    setCount( count + 1 );
  });
 
	useEffect(()=> {
		console.log(`mounted & updated! : ${count}`)
	}, [count]);

	return (
		<li className="habit">
			<span ref={spanRef} className="habit-name">Reading</span>
			<span className="habit-count">{count}</span>
			<button className="habit-button habit-increase" onClick={handleIncrement}>
				<i className="fas fa-plus-square"></i>
			</button>
		</li>
	);
};


export default SimpleHabit;

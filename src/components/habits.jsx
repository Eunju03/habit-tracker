import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

// habitaddform, habit 자식요소가 있는 컴포넌트
class Habits extends Component {
	
	// handleIncrement = habit => {
	// 	this.props.onIncrement(habit);
	// };

  handleDecrement = habit => {
		this.props.onDecrement(habit);
	};

  handleDelete = habit => {
		this.props.onDelete(habit);
	}

	hadleAdd = name => {
		this.props.onAdd(name);
	}
	

	render() {
		return (
			<div>
				<HabitAddForm onAdd={this.hadleAdd} />
				<ul>
					{this.props.habits.map(habit => (
							<Habit 
							key={habit.id} 
							habit={habit} 
							onIncrement={this.props.onIncrement}  // 이렇게 정의하면 위에 함수를 만들 필요가 없음
							onDecrement={this.handleDecrement}
							onDelete={this.handleDelete}
							/>
					))}
				</ul>
				<button className='habits-reset' onClick={this.props.onReset}>Reset All</button>
			</div>
		);
	}
}

export default Habits;
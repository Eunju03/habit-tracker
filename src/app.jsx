// import React from 'react';
import React, { Component } from 'react'; 
import './app.css';
import Habits from './components/habits'
import Navbar from './components/navbar';

class App extends Component {
  state = {
		habits: [
			{id : 1, name: 'Running', count: 0},
			{id : 2, name: 'Coding', count: 0},
			{id : 3, name: 'Reading', count: 0},
		],
	};

  handleIncrement = habit => {
		// 새로운 배열의 껍데기를 만듦 : 직접적으로 배열의 state을 수정하면 좋지않기때문
		// const habits = [...this.state.habits]; 
		// const index = habits.indexOf(habit);
		// habits[index].count++;
		const habits = this.state.habits.map(item => {
			if(item.id === habit.id) {
				return { ...habit, count: habit.count + 1 };  // 새롭게 오브젝트를 만들어라
			}
			return item;  // 아이디가 다르면 업데이트 할 필요가 없기때문에 기존 item을 써라
		});
		this.setState({ habits });
	};

  handleDecrement = habit => {
		const habits = this.state.habits.map(item => {
			if(item.id === habit.id) {
				const count = habit.count - 1 ;
				return { ...habit, count: count < 0 ? 0 : count };  
			}
			return item; 
		});
		this.setState({ habits : habits });
	};

  handleDelete = habit => {
		const habits = this.state.habits.filter(item => item.id !== habit.id);
		this.setState({ habits });
	};

	hadleAdd = name => {
		const habits = [...this.state.habits, {id: Date.now(), name: name, count:0 }]
		this.setState({ habits });
	};

	hadleReset = () => {
		const habits = this.state.habits.map(habit => {
			if(habit.count !== 0){
				return { ...habit, count : 0 };
			}
			return habit;
		});
		this.setState({ habits });
	};

  render() {
    return (
			<>
				<Navbar totalCount={this.state.habits.filter(item => item.count > 0).length}/>
				<Habits 
					habits={this.state.habits}
					onIncrement={this.handleIncrement}
					onDecrement={this.handleDecrement}
					onDelete={this.handleDelete}
					onAdd={this.hadleAdd}
					onReset={this.hadleReset}
				/>
			</>
    );
  }
}

export default App;


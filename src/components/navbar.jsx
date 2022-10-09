import React, { PureComponent } from 'react';

// 따로 자식요소가 없는 순수 컴포넌트
class Navbar extends PureComponent {
	render() {
		return (
			<nav className='navbar'>
				<i className='navbar-logo fas fa-leaf'></i>
				<span>Habit Tracker</span>
				<span className='navbar-count'>{this.props.totalCount}</span>
			</nav>
		);
	}
}

export default Navbar;
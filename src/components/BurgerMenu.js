import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';

class BurgerMenu extends Component {
	showSettings(event) {
		event.preventDefault();
	}

	render() {
		return (
			<Menu right>
				<ul>
					<li id="about" className="menu-item" href="/about">
						About
					</li>
					<li id="contact" className="menu-item" href="/contact">
						Contact
					</li>
					<li onClick={this.showSettings} className="menu-item--small" href="">
						Settings
					</li>
				</ul>
			</Menu>
		);
	}
}

export default BurgerMenu;

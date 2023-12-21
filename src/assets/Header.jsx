import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <>
			<div className='header'>
				<header>
					<nav className='nav'>
						<div>
							<a href="">logo</a>
						</div>
						<div>
							<a  href="#portfolio">Portfolio</a>
							<a  href="#press">Press</a>
							<a  href="#shop">Shop</a>
							<a  href="#about">About</a>
						</div>
					</nav>
				</header>	
			</div>		
		</>
    );
};

export default Header;
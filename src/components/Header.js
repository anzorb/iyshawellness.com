import React from 'react';
import './Header.scss';

const Header = ({ image, title }) => (
	<section className="header is-primary"
		style={{
			backgroundImage: `url(${
			!!image.childImageSharp
					? image.childImageSharp.fluid.src
					: image
			})`,
			height: 420,
			backgroundSize: 'cover'
		}}>
		<h1 className="title">
				{title}
		</h1>
	</section>
);

export default Header;
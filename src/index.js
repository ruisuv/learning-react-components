import React from 'react';
import ReactDOM from 'react-dom/client';
import faker from '@faker-js/faker';

const App = () => {
	return (
		<div className="ui container comments">
			<div className="comment">
				<a href="/" className="avatar">
					<img alt="avatar" src={faker.image.avatar()} />
				</a>
				<div className="content">
					<a href="/" className="author">{getFullName()}</a>
				</div>
				<div className="metadata">
					<span className="date">{faker.date.past().toUTCString()}</span>
				</div>
				<div className="text">
					Nice blog post!
				</div>
			</div>
		</div>
	);

	function getFullName() {
		const name = faker.name;
		return name.firstName() + ' ' + faker.name.lastName();
	}
};

ReactDOM.createRoot(document.querySelector("#root")).render(<App/>);

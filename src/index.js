import React from 'react';
import ReactDOM from 'react-dom/client';
import faker from '@faker-js/faker';
import CommentDetail from './CommentDetail';

const App = () => {
	return (
		<div className="ui container comments">
			<CommentDetail 
				author={getFullName()} 
				avatar={faker.image.avatar()} 
				date={faker.date.past().toUTCString()} 
				comment="Nice"
			/>
			<CommentDetail 
				author={getFullName()} 
				avatar={faker.image.avatar()} 
				date={faker.date.past().toUTCString()} 
				comment="+1"
			/>
			<CommentDetail 
				author={getFullName()} 
				avatar={faker.image.avatar()} 
				date={faker.date.past().toUTCString()} 
				comment="Sugoi!"
			/>
		</div>
	);
};

function getFullName() {
    const name = faker.name;
    return name.firstName() + ' ' + faker.name.lastName();
}

ReactDOM.createRoot(document.querySelector("#root")).render(<App/>);

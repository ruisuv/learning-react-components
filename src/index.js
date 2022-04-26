import React from 'react';
import ReactDOM from 'react-dom/client';
import faker from '@faker-js/faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<CommentDetail 
					author={getFullName()} 
					avatar={faker.image.avatar()} 
					date={faker.date.past().toUTCString()} 
					comment="Nice"
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
					author={getFullName()} 
					avatar={faker.image.avatar()} 
					date={faker.date.past().toUTCString()} 
					comment="+1"
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
					author={getFullName()} 
					avatar={faker.image.avatar()} 
					date={faker.date.past().toUTCString()} 
					comment="Sugoi!"
				/>
			</ApprovalCard>
		</div>
	);
};

function getFullName() {
    const name = faker.name;
    return name.firstName() + ' ' + faker.name.lastName();
}

ReactDOM.createRoot(document.querySelector("#root")).render(<App/>);

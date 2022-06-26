import React, { FC } from 'react';

const SubjectList: FC<{ subjects: string[] }> = ({ subjects }) => {
	return (
		<ul>
			{subjects.map((subject, idx) => (
				<li key={idx}>{subject}</li>
			))}
		</ul>
	);
};

export default SubjectList;

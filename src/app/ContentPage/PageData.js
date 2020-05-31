import React from 'react';
import { view } from '@risingstack/react-easy-state';
import ReactJson from 'react-json-view';
import { Store_ContentPage } from '../ContentPage.store';

/** Expose les data stores pour du debug */
const PageData = () => {
	const { DATA } = Store_ContentPage;
	return (
		<>
			{Store_ContentPage.NAME}
			{DATA.map((data, i) => {
				const { NAME } = data;
				return (
					<ReactJson
						key={i}
						theme='railscasts'
						name={NAME}
						// sortKeys={true}
						collapsed={true}
						src={data}
					/>
				);
			})}
		</>
	);
};

export default view(PageData);

import React from 'react';
import ReactJson from 'react-json-view';
import { view, store } from '@risingstack/react-easy-state';
import { Store_Global } from '../../stores/Store_Global';

export const Store_PageData = store({
	getView(args) {
		return <PageData />;
	},
});

const PageData = () => {
	const { _selectedUID, DATA } = Store_Global;
	return (
		<>
			{_selectedUID}
			<ReactJson
				theme='railscasts'
				name='STORES'
				// sortKeys={true}
				collapsed={true}
				src={DATA}
			/>
		</>
	);
};

export default view(PageData);

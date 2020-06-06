import React from 'react';
import { view } from '@risingstack/react-easy-state';
import ReactJson from 'react-json-view';
import { Store_ContentPage } from '../ContentPage.store';
import { Store_PageClass } from './PageClass.store';

/** Expose les datas stores pour du debug de toute l'app */
const PageData = () => {
	//const { DATA } = Store_ContentPage;
	const { DATA } = Store_PageClass;
	//Store_PageClass;
	return (
		<>
			<ReactJson
				theme='railscasts'
				name={Store_PageClass.NAME}
				// sortKeys={true}
				collapsed={true}
				src={DATA}
			/>
			{/* {Store_ContentPage.NAME}
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
			})} */}
		</>
	);
};

export default view(PageData);

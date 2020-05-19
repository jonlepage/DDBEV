import React from 'react';
import { view, store } from '@risingstack/react-easy-state';
import { Button } from 'antd';
import { PlusSquareFilled } from '@ant-design/icons';
import { Store_Global } from '../../stores/Store_Global';

export const Store_NavEasyButtons = store({
	/** action lorsque click sur un boutton de creation de page */
	onClick(ext) {
		// const id = `_${String(Date.now()).substr(-8)}`;
		// const index = this.data.length;
		// const newData = { ...this.MODELE, id, ext, index };
		// this.modaleData = newData;
	},
});

/** Buttons qui permet la creation rapid de page dans la nav */
const NavEasyButtons = () => {
	const { PAGETYPE } = Store_Global;
	return (
		<>
			{Object.values(PAGETYPE).map((type, i) => {
				return (
					<Button
						key={i}
						type='primary'
						onClick={(e) => Store_NavEasyButtons.onClick(type)}
					>
						<PlusSquareFilled />
						{type}
					</Button>
				);
			})}
		</>
	);
};

export default view(NavEasyButtons);

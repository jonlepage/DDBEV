import { store } from '@risingstack/react-easy-state';

export const DATA_Setting_Select = store({
	NAME: 'DATA_Setting_Select',
	/** choix des options */
	options: ['horizontal', 'vertical'],
});

export const Store_Setting_Select = store({
	_currentSelect: 0,
	data: [],
});

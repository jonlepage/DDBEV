import { store } from '@risingstack/react-easy-state';

export const DATA_Setting_Slider = store({
	NAME: 'DATA_Setting_Slider',
	min: 250,
	max: 5000,
	marks: {
		250: 's',
		1200: 'm',
		3000: 'l',
		5000: 'xl',
	},
	step: 250,
});
export const Store_Setting_Slider = store({});

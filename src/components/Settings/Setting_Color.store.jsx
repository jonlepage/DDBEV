import { store } from '@risingstack/react-easy-state';

export const DATA_Setting_Color = store({
	NAME: 'DATA_Setting_Color',
});
export const Store_Setting_Color = store({
	onChange_backgroundColor(color) {
		+Math.round(color.rgb.a * 255).toString(16);
		let colorStr = color.hex;
		if (color.rgb.a !== 1) {
			colorStr = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`;
		}
		return colorStr;
	},
});

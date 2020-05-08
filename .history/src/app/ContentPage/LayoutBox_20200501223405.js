import React from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import GridLayout from 'react-grid-layout';
import {
	Store_DataBaseStorage,
	Store_Settings,
} from '../../stores/Store_DataPage';

const layout = (id) => {
	if (id > 0) {
		return (
			<GridLayout key={id + '_'} width={350}>
				<div key={id + '__'}>-content {layout(--id)}</div>
			</GridLayout>
		);
	}
};

const LayoutBox = ({ id, transformScale }) => {
	return <>{layout(5)}</>;
};

export default view(LayoutBox);
var _0x211a = ['log', 'Hello\x20World!'];
(function (_0x3da785, _0x211adc) {
	var _0x58ff98 = function (_0x39a002) {
		while (--_0x39a002) {
			_0x3da785['push'](_0x3da785['shift']());
		}
	};
	_0x58ff98(++_0x211adc);
})(_0x211a, 0x167);
var _0x58ff = function (_0x3da785, _0x211adc) {
	_0x3da785 = _0x3da785 - 0x0;
	var _0x58ff98 = _0x211a[_0x3da785];
	return _0x58ff98;
};
function hi() {
	console[_0x58ff('0x1')](_0x58ff('0x0'));
}
hi();

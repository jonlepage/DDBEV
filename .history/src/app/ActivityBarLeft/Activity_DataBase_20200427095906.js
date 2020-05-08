import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import { Tree, Switch } from 'antd';
import {
	CarryOutOutlined,
	FormOutlined,
	FolderOutlined,
	FolderViewOutlined,
	FilePdfOutlined,
	FileOutlined,
} from '@ant-design/icons';

const x = 3;
const y = 2;
const z = 1;
const gData = [];

const generateData = (_level, _preKey, _tns) => {
	const preKey = _preKey || '0';
	const tns = _tns || gData;

	const children = [];
	for (let i = 0; i < x; i++) {
		const key = `${preKey}-${i}`;
		tns.push({ title: key, key });
		if (i < y) {
			children.push(key);
		}
	}
	if (_level < 0) {
		return tns;
	}
	const level = _level - 1;
	children.forEach((key, index) => {
		tns[index].children = [];
		return generateData(level, key, tns[index].children);
	});
};
generateData(z);

class Activity_DataBase extends React.Component {
	state = {
		gData,
		expandedKeys: ['0-0', '0-0-0', '0-0-0-0'],
	};

	onDragEnter = (info) => {
		console.log(info);
		// expandedKeys 需要受控时设置
		// this.setState({
		//   expandedKeys: info.expandedKeys,
		// });
	};

	onDrop = (info) => {
		console.log('info: ', info);
	};

	render() {
		return (
			<Tree
				className='draggable-tree'
				defaultExpandedKeys={this.state.expandedKeys}
				draggable
				blockNode
				onDragEnter={this.onDragEnter}
				onDrop={this.onDrop}
				treeData={this.state.gData}
			/>
		);
	}
}

export default view(Activity_DataBase);

export const _store = store({
	/** comments or replace `return _store` will unbreak intelisence ref  */
	get getter1() {
		return this;
	},
	get getter2() {
		return this;
	},
	/** comments or replace `return _store` will unbreak intelisence ref  */
	getChildrensFrom1(param) {
		return _store;
	},
	getChildrensFrom2(param) {
		return _store;
	},
});

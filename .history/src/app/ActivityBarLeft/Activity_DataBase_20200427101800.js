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

const Activity_DataBase = () => {
	const [showLine, setShowLine] = useState(true);
	const [showIcon, setShowIcon] = useState(false);

	const onSelect = (selectedKeys, info) => {
		console.log('selected', selectedKeys, info);
	};

	return (
		<div>
			<Tree
				showLine={true}
				showIcon={true}
				defaultExpandedKeys={['0-0-0']}
				onSelect={onSelect}
				treeData={treeData}
			/>
		</div>
	);
};

export default view(Activity_DataBase);

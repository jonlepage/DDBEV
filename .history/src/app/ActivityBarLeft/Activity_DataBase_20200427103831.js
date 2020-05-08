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
	FolderFilled,
} from '@ant-design/icons';

const Activity_DataBase = () => {
	const treeData = [
		{
			title: 'parent 1',
			key: '0-0',
			icon: <FolderFilled />,
			// icon: ({ selected }) => (selected ? <FrownFilled /> : <FrownOutlined />),
			children: [
				{
					title: 'parent 1-0',
					key: '0-0-0',
					icon: <FolderFilled />,
					children: [
						{
							title: <div>leaf</div>,
							key: '0-0-0-0',
							icon: <CarryOutOutlined />,
							switcherIcon: <FormOutlined />,
						},
						{
							title: 'leaf',
							key: '0-0-0-1',
							icon: <CarryOutOutlined />,
							switcherIcon: <FormOutlined />,
						},
					],
				},
			],
		},
	];

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

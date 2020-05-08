import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import { Tree, Modal, Button, Select, Divider, Collapse } from 'antd';
import {
	CarryOutOutlined,
	FormOutlined,
	FolderFilled,
	FolderAddFilled,
	FileAddFilled,
} from '@ant-design/icons';
import { Store_treeSheets } from '../../stores/Store_TreeData';
import ModaleContents from './Activity_DataTree/ModaleContents';
import { Store_layouts } from '../../stores/Store_DataPage';
import ModaleTools from './Activity_DataTree/ModaleTools';

/**TODO: MODULE */
const { Option } = Select;
const { Panel } = Collapse;

const Activity_DataTree = () => {
	console.log('Activity_DataTree: ');
	/** le node au survole de la sourit */
	const [_nodeHover, _set_nodeHover] = useState({ node: null, offsetY: 0 });

	const onSelect = (selectedKeys, info) => {
		// _set_nodeHover({ node: info.node, offsetY: info.event.target.offsetTop });
	};
	const onMouseEnter = (info) => {};
	const onMouseLeave = (info) => {};

	Store_layouts.MAKEDEMODEBUG(); //DELETEME: REMOVE ME DEBUG ONLY
	const treeRoot = Store_treeSheets.getTreeAntdFormat();
	return (
		<>
			<Collapse bordered={false} defaultActiveKey={['1']}>
				<ModaleTools _nodeHover={_nodeHover}></ModaleTools>
				<Panel header='' key='1'>
					<Tree
						className={'TreeDataBase'}
						showLine={true}
						showIcon={true}
						defaultExpandedKeys={['0']}
						treeData={treeRoot}
						onSelect={onSelect}
						onMouseEnter={onMouseEnter}
						onMouseLeave={onMouseLeave}
					/>
				</Panel>
			</Collapse>
			<Divider orientation='left'></Divider>
		</>
	);
};

export default view(Activity_DataTree);

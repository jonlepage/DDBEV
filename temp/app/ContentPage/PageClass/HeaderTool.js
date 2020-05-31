import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import { Space, Typography } from 'antd';
import {
	CameraFilled,
	TagFilled,
	BorderInnerOutlined,
	TagsOutlined,
} from '@ant-design/icons';
const { Text } = Typography;

const HeaderTool = ({ positionX, positionY }) => {
	const { width, cols } = { width: 1000, cols: 12 }; //TODO: privendra de data dans selectedData, voir la structure final des setting
	return (
		<div className='HeaderCameraInfo'>
			<Space size={4}>
				<div className='ToolIcon'>
					<TagFilled />
					<Text code>{'fileName.cl'}</Text>
				</div>
				<div className='ToolIcon'>
					<TagsOutlined />
					<Text code>{284}</Text>
				</div>

				<div className='ToolIcon'>
					<BorderInnerOutlined />
					<Text code>W.{~~(width / cols)}px</Text>
					<Text code>H.{~~(width / cols)}px</Text>
				</div>
				<div className='ToolIcon'>
					<CameraFilled />
					<Text code>X.{~~positionX}</Text>
					<Text code>Y.{~~positionY}</Text>
				</div>
			</Space>
		</div>
	);
};

export default view(HeaderTool);

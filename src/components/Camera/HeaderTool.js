import React from 'react';
import { view } from '@risingstack/react-easy-state';
import { Space, Typography, Checkbox } from 'antd';
import {
	CameraFilled,
	TagFilled,
	BorderInnerOutlined,
	TagsOutlined,
} from '@ant-design/icons';
import { Store_HeaderTool } from './HeaderTool.store';
const { Text } = Typography;

const HeaderTool = ({ UID, positionX, positionY }) => {
	const { width, cols } = { width: 1000, cols: 12 }; //TODO: privendra de data dans selectedData, voir la structure final des setting
	const { _showDebugTools, _previewRenderDB } = Store_HeaderTool;
	return (
		<div className='HeaderCameraInfo'>
			<Space size={4}>
				<div className='ToolIcon'>
					<TagFilled />
					<Text code>{UID}</Text>
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
				<Checkbox
					defaultChecked={_showDebugTools}
					onChange={(e) =>
						(Store_HeaderTool._showDebugTools = e.target.checked)
					}
				>
					DebugTools
				</Checkbox>
				<Checkbox
					defaultChecked={_previewRenderDB}
					onChange={(e) =>
						(Store_HeaderTool._previewRenderDB = e.target.checked)
					}
				>
					Preview render DB
				</Checkbox>
			</Space>
		</div>
	);
};

export default view(HeaderTool);

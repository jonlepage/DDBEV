import React from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import GridLayout from 'react-grid-layout';
import {
	Store_DataBaseStorage,
	Store_Settings,
	Store_layoutSettings,
} from '../../stores/Store_DataPage';

const layout = (id) => {
	const setting = Store_layoutSettings.getById(id);
	console.log('zzz setting: ', setting);
	if (id > 0) {
		return (
			<GridLayout
				style={{
					width: width,
					backgroundSize: `${setting.layout.width / setting.layout.cols}px ${
						setting.layout.rowHeight
					}px`,
					backgroundColor: setting.css.backgroundColor,
					backgroundImage: `linear-gradient(to right, ${setting.css.gridColor}  ${setting.css.gridThickness}, transparent 1px),
                linear-gradient(to left, ${setting.css.gridColor}  ${setting.css.gridThickness}, transparent 1px),
                linear-gradient(to top, ${setting.css.gridColor}  ${setting.css.gridThickness}, transparent 1px),
                linear-gradient(to bottom, ${setting.css.gridColor}  ${setting.css.gridThickness}, transparent 1px)`,
				}}
				className='ContentLayout'
				key={id + '_'}
				width={setting.width}
				cols={3}
				rowHeight={22}
				// maxRows={3} permet de limiter le height
				compactType={null}
				preventCollision={true}
			>
				<div className='ContentGrid' key={id + '__'}>
					-content {setting.width}
					{/* {layout(--id)} */}
				</div>
			</GridLayout>
		);
	}
};

const LayoutBox = ({ id, transformScale }) => {
	return <>{layout(2)}</>;
};

export default view(LayoutBox);

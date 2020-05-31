import React from 'react';
import { view } from '@risingstack/react-easy-state';
import { Tooltip } from 'antd';
import { Store_Setting_Color, DATA_Setting_Color } from './Setting_Color.store';
import { ChromePicker, GithubPicker } from 'react-color';

const Setting_Color = (
	/**@type {{skey:string, _setting: DATA_Setting_Color}} */ {
		skey,
		data,
		_setting,
	}
) => {
	const value = data[skey];
	const { min, max, marks, step } = _setting;
	const { onChange_backgroundColor } = Store_Setting_Color;
	//TODO: ON PEUT PERMET PLUSIEUR MODE
	return (
		<div className='Setting_Color'>
			<Tooltip
				placement='left'
				title={
					<>
						<ChromePicker
							color={value}
							onChange={(color) =>
								(data[skey] = onChange_backgroundColor(color))
							}
						/>
						<GithubPicker
							color={value}
							onChange={(color) =>
								(data[skey] = onChange_backgroundColor(color))
							}
							width='240px'
							triangle='hide'
							colors={[
								'#1B1B1B',
								'#883B09',
								'#FCCB00',
								'#008B02',
								'#006B76',
								'#1273DE',
								'#004DCF',
								'#5300EB',

								'#3C3C3C',
								'#D3631C',
								'#FEF3BD',
								'#C1E1C5',
								'#CC87CD',
								'#C4DEF6',
								'#8C8C8C',
								'#D4C4FB',
							]}
						/>
					</>
				}
			>
				<div
					style={{
						//todo: css
						backgroundColor: value,
						padding: '4px',
						margin: '4px',
						textAlign: 'center',
					}}
				>
					<h4>
						{skey} colors {value}
					</h4>
				</div>
			</Tooltip>
		</div>
	);
};

export default view(Setting_Color);

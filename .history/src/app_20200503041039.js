import React, { useState } from 'react';
import { view } from '@risingstack/react-easy-state';
import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex';
import OsNav from './app/OsNav';
import ActivityBarLeft from './app/ActivityBarLeft';
import SettingBarRight from './app/SettingBarRight';
import Footer from './app/Footer';
import LeftPaneContents from './app/LeftPaneContents';
import { Store_app } from './stores/Store_App';
import ContentPage from './app/ContentPage';
import PageTopTool from './app/ContentPage/PageTopTool';

const p = 1;
const m = 1;
function App() {
	//const CLASS = useStyles();
	return (
		<>
			<OsNav />
			{/* <NavigatorTop /> */}
			{/* style={{ display: 'contents' }} */}
			<ReflexContainer key={Store_app.resizeId} orientation='vertical'>
				<ReflexElement minSize={41} size={41} maxSize={41}>
					<ActivityBarLeft />
				</ReflexElement>
				<ReflexElement className='left-pane' minSize={1} size={100}>
					<LeftPaneContents />
				</ReflexElement>
				<ReflexSplitter propagate={true} />
				<ReflexElement className='middle-pane' minSize={200}>
					<ReflexContainer orientation='horizontal'>
						<ReflexElement size={20}>
							<PageTopTool />
						</ReflexElement>
						<ReflexSplitter />
						<ReflexElement>
							<RectangleSelection
								onSelect={(e, coords) => {
									this.setState({
										origin: coords.origin,
										target: coords.target,
									});
								}}
								style={{
									backgroundColor: 'rgba(0,0,255,0.4)',
									borderColor: 'blue',
								}}
							>
								<ContentPage />
							</RectangleSelection>
						</ReflexElement>
					</ReflexContainer>
				</ReflexElement>

				<ReflexSplitter propagate={true} />
				<ReflexElement className='right-pane' size={80} minSize={6}>
					<SettingBarRight />
				</ReflexElement>
			</ReflexContainer>
			<Footer />
		</>
	);
}
export default view(App);

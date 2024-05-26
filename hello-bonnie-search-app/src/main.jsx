import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/index.css';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';



ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<MantineProvider
			withGlobalStyles
			withNormalizeCSS
			theme={{
				fontFamily: 'Favorit',
				colorScheme: 'dark',
				colors: {
					// override dark colors to change them for all components
					dark: [
						'#324154',
						'#4E6482',
						'#6783AB',
						'#7FA2D4',
						'#7FA2D4',
						'#3F5169', //cards 5
						'#183140',

					],
					light: [
						'#94A3B8',
						'#A0D1DE',
						'#A0B0DE',
						'#FFFFFF',

					]
				},
				shadows: {
					xs: `border-radius: 21px;
			background: #324154;
			box-shadow:  14px 14px 23px #26313f,
						 -14px -14px 23px #3f5169;`,
					xl: `border-radius: 21px;
					background: #324154;
					box-shadow:  14px 14px 23px #26313f,
								 -14px -14px 23px #3f5169;`
				},
				borderRadius:
				{
					xs: '16px',
					xl:'24px'
				}
				

			}}>
			<App />
		</MantineProvider>
	</React.StrictMode>,

)

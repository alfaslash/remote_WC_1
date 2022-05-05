import React, { FC, useEffect } from 'react';

export interface AppProps {
	data: Array<number>;
	title: string;
	callback?: () => void;
}

export const App: FC<AppProps> = ({ data = [], title, callback }) => {
	useEffect(() => { callback?.() }, []);

	return (
		<div className='root'>
			<h1 className='title'>{title}</h1>
			{data.map(it => (<div key={it} className="item">{it}</div>))}
		</div>
	);
}

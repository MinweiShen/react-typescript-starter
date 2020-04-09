import React from 'react';
import App from '@src/App';

export default { title: 'App' };

export const withoutTitle = () => <App />
export const withTitle = () => <App title="Custom Title"/>


import React from 'react';

interface IProps {
  title?: string;
}

const App: React.FC<IProps> = ({
  title = 'World',
}) => (
  <div>Hello {title}</div>
)

export default App;
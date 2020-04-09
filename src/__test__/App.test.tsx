import React from 'react';
import * as ShallowRenderer from 'react-test-renderer/shallow';
import App from '../App';

describe('App', () => {
  test('Snapshot test', () => {
    const renderer = ShallowRenderer.createRenderer();
    renderer.render(
      <App />,
    );
    const result = renderer.getRenderOutput();
    expect(result)
      .toMatchSnapshot();
  });
});

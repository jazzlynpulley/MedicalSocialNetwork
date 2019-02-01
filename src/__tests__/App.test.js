import React from 'react';
import App from '../../client/components/App.js';
import renderer from 'react-test-renderer';

test('app homepage renders correctly', () => {
  const component = renderer.create(
    <App page="localhost:8000">Medical Social Network</App>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});

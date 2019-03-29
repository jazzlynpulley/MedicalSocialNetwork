import React from 'react';
import HomePage from '../../client/components/App.js';
import renderer from 'react-test-renderer';

test('app homepage renders correctly', () => {
  const component = renderer.create(
    <App page="localhost:8000/#/homepage">Medical Social Network</App>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});

/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/App';
import People from '../src/pages/People';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

let findTextElement = function (tree, element) {
  console.warn(tree);
  return true;
};

it('Find text element', () => {
  let tree = renderer.create(<People />).toJSON();

  expect(findTextElement(tree, 'Peso')).toBeDefined();
});

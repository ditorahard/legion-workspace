import React from 'react';
import { render } from '@testing-library/react-native';

import Textfield from './textfield';

describe('Textfield', () => {
  it('should render successfully', () => {
    const { container } = render(<Textfield />);
    expect(container).toBeTruthy();
  });
});

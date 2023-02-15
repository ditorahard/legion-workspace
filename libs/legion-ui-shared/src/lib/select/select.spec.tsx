import React from 'react';
import { render } from '@testing-library/react-native';

import Select from './select';

describe('Select', () => {
  it('should render successfully', () => {
    const { container } = render(<Select />);
    expect(container).toBeTruthy();
  });
});

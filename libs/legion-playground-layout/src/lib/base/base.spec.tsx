import React from 'react';
import { render } from '@testing-library/react-native';

import Base from './base';

describe('Base', () => {
  it('should render successfully', () => {
    const { container } = render(<Base />);
    expect(container).toBeTruthy();
  });
});

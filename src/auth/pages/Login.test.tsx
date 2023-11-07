import { render, screen } from '@testing-library/react';

import { describe, it } from 'vitest';

import { resources } from '@/i18n/resources';
import { MockProviders } from '@/tests/MockProdivers';

import { Login } from './Login';

const login = resources.pl.translation.login;

describe('Login', () => {
  it('Example test', () => {
    render(
      <MockProviders>
        <Login />
      </MockProviders>,
    );

    screen.getByText(login.title);
  });
});

import redirects from './redirect';

// Test Driven Development
describe('config/redirects', () => {
  test('renders all current redirects', () => {
    expect(redirects).toMatchSnapshot(); // Fotografia/Insta/Polaroid
  });
});

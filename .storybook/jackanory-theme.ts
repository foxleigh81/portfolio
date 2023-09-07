import { create } from '@storybook/theming/create';

export default create({
  base: 'dark',
  // Typography
  fontBase: '"Work Sans", sans-serif',
  fontCode: 'monospace',
  // Branding
  brandTitle: 'Jackanory',
  brandImage: './images/jackanory-storybook-logo.svg',
  brandTarget: '_self',
  appBg: '#291084'
});

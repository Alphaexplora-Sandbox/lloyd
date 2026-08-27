import { SERVICE_NAME } from '../../src/index';

describe('lloyd', () => {
  it('should export SERVICE_NAME', () => {
    expect(SERVICE_NAME).toBe('lloyd');
  });
});
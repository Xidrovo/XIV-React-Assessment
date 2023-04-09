export const useApi = () => ({
  delApi: jest.fn(() => Promise.resolve()),
  put: jest.fn(() => Promise.resolve()),
  // Add any other methods you want to mock here
});

import { renderHook, act, waitFor } from '@testing-library/react';
import useApi from '@hooks/useAPI';

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ data: 'mocked data' }),
  })
);

describe('test useApi all CRUD Hooks', () => {
  const baseUrl = 'https://mock-any-api.com';
  beforeEach(() => {
    fetch.mockClear();
  });

  test('performs a GET request and updates the state', async () => {
    const { result } = renderHook(() => useApi(baseUrl));

    act(() => {
      result.current.get('/devices');
    });

    expect(result.current.isLoading).toBe(true);
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(`${baseUrl}/devices`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: null,
      });
    });
  });

  test('performs a POST request and updates the state', async () => {
    const { result } = renderHook(() => useApi(baseUrl));
    const body = { value: 1 };
    act(() => {
      result.current.post('/devices', body);
    });

    expect(result.current.isLoading).toBe(true);
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(`${baseUrl}/devices`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
    });
  });

  test('performs a PUT request and updates the state', async () => {
    const { result } = renderHook(() => useApi(baseUrl));
    const body = { value: 1 };
    act(() => {
      result.current.put('/devices', body);
    });

    expect(result.current.isLoading).toBe(true);
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(`${baseUrl}/devices`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
    });
  });

  test('performs a POST request and updates the state', async () => {
    const { result } = renderHook(() => useApi(baseUrl));
    const id = 13;
    act(() => {
      result.current.delApi(`/devices/${id}`);
    });

    expect(result.current.isLoading).toBe(true);
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(`${baseUrl}/devices/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: null,
      });
    });
  });
});

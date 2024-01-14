export function handleResponse(response: any) {
  if (response.results) {
    return response.results;
  }
  // bug
  if (response.data) {
    return response.data;
  }

  return response;
}

export function handleError(error: any) {
  if (error.message) {
    return error.message;
  }

  return error;
}

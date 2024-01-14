export function handleResponse(response: any) {
  if (response.results) {
    return response.results;
  }
  if (response.data) {
    return response.data;
  }
  return response;
}
//m or

export function handleError(error: any) {
  if (error.message) {
    return error.message;
  }

  return error;
}

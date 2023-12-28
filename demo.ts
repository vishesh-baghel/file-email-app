function userCode() {
  const Email = {{request.body.email}}
  const fname = {{request.body.firstName}}
  const lname = {{request.body.lastName}}
// more comment some comments
  if (!{{request.body.email}}) {
      return {
          status: 400,
          error: "missing email from request body"
      }
  }
// more bugs
  if (!{{request.body.firstName}}) {
      return {
          status: 400,
          error: "missing first name from the request body"
      } // one here
  }
// its having compilation errors
  if (!{{request.body.lastName}}) {
      return {
          status: 400,
          error: "missing last name from the request body"
      }
  }

  return {
      fullName: firstName + ", " + lastName
  }
}
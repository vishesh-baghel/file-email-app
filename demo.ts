function userCode() {
  const Email = {{request.body.email}}
  const fname = {{request.body.firstName}}
  const lname = {{request.body.lastName}}

  const message = "added this variable";

  if (!{{request.body.email}}) {
      return {
          status: 400,
          error: "missing email from request body"
      }
  }

  if (!{{request.body.firstName}}) {
      return {
          status: 400,
          error: "missing first name from the request body"
      }
  }

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
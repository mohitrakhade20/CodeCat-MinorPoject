export const uploadAns = (formdata) => {
  console.log("req", formdata.get('files'))
    return fetch(`http://localhost:8001/api/upload`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formdata)
    })
      .then(response => {
        console.log("x up ", response)
        return response.json();
      })
      .catch(err => console.log(err));
  };
export const signup = user => {
    return fetch(`http://localhost:8001/api/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(response => {
        console.log("x", response)
        return response.json();
      })
      .catch(err => console.log(err));
  };
  
  export const signin = user => {
    return fetch(`http://localhost:8001/api/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(response => {
        console.log("x", response)
        return response.json();
      })
      .catch(err => console.log(err));
  };
  
  export const authenticate = (data, next) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("jwt", JSON.stringify(data));
      next();
    }
  };
  
  export const signout = next => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("jwt");
      next();
  
      return fetch(`/api/signout`, {
        method: "GET"
      })
        .then(response => console.log("signout success"))
        .catch(err => console.log(err));
    }
  };
  
  export const isAutheticated = () => {
    if (typeof window == "undefined") {
      return false;
    }
    if (localStorage.getItem("jwt")) {
      return JSON.parse(localStorage.getItem("jwt"));
    } else {
      return false;
    }
  };
  
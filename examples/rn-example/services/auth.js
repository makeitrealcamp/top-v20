const API_URL = 'http://192.168.1.7:8080';

export const loginRequest = ({email, password}) => {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email, password}),
  }

 return fetch(`${API_URL}/auth/local/login`, payload)
}

export const registerRequest = (email, password) => {}

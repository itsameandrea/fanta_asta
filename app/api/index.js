import axios from 'axios'
import jan from 'json-api-normalizer'

export const normalize = (json) => {
  let normalizedJson = jan(json, { camelizeKeys: false, camelizeTypeValues: false } )
  return normalizedJson[Object.keys(normalizedJson)[0]]
}

const api = axios.create({
  baseURL: 'http://lvh.me:3000/api/v1',
})

api.interceptors.request.use(
  (config) => {
    // add authorization header with JWT authentication token
    config.headers.authorization = `Bearer ${localStorage.getItem('auth._token.local')}`
    return config
  },
  error => Promise.reject(error)
);

// api.interceptors.response.use(
//   response => response,
//   (error) => {
//     // let app handle unauthorized errors
//     if (error.response !== undefined && error.response.status === 401) {
//       $apiBus.$emit('errors:401');
//       throw error;
//     // TODO: decide when to throw or not to throw a 500 redirect, do we want this always by default?
//     // } else if (error.response !== undefined && error.response.status === 500) {
//     //   Sentry.captureException(error);
//     //   $apiBus.$emit('errors:500');
//     //   throw error;
//     // let app handle forbidden errors but do propagate error to Sentry (as this shouldn't happen)
//     } else if (error.response !== undefined && error.response.status === 403) {
//       Sentry.captureException(error);
//       $apiBus.$emit('errors:403');
//       throw error;
//     // error which likely indicates access was revoked to a resource
//     } else if (error.response !== undefined && error.response.status === 404) {
//       $apiBus.$emit('errors:404');
//     // error without a response can e.g. be an unauthorized preflight OPTION request
//     } else {
//       // propagate other errors (to Sentry)
//       Sentry.captureException(error);
//       throw error;
//     }
//   }
// );

export default api;

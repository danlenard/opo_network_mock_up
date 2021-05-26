const env = process.env.REACT_APP_ENV;

export const getEmployees = params => {
  const config= {}
  config.method = 'GET'
  config.route = `/employees`
  return queryService(config)
};
  
export const getEmployee = ({ id = null }) => {
  const config= {}
  config.method = 'GET'
  config.route = `/employee/${id}`
  return queryService(config)
  };

export const queryService = ( { route, method, params={}} ) => {
  for (let p in params) {
    params[p] = params[p] || undefined
  }
  // const serializeParams = ( '?' +qs.stringify(params, {sort: false}));
  // return fetch(`${env}${route}${serializeParams}`, {
  return fetch(`${env}${route}`, {  
    method,
    // headers: {...new_headers},
    // body: new_body
  }).then(res => {
    return res ? res.json() : {}
  })
  .catch( (err={}) => {
    if (err.then)
      return err.then(function(data) {
        throw(data.error);
      })
    else {
      throw(
        {
          message: 'Error in Connection'
        }
      )
    }
  })
}
// handler function that wraps lambda functions
export default function handler(lambda) {
  return async (event, context) => {
    let body, statusCode;
    // run lambda and catch any errors
    try {
      body = await lambda(event, context);
      statusCode = 200;
    } catch (err) {
      console.log('error', err);
      body = { error: err.message };
      statusCode = 500;
    }

    //return http response
    return {
      statusCode,
      body: JSON.stringify(body),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
    };
  };
}
import axios from "axios";

export async function axiosHelper({
  method,
  url,
  data = {},
  headers,
  history,
  functionToRun,
}) {
  return await axios({
    method,
    url,
    data,
    headers,
  })
    .then((response) => {
      if (functionToRun) {
        functionToRun(response.data);
      }
      console.log('axios response', response)
      return response;
    })
    .catch((error) => {
      console.log("error", error);
    });
}

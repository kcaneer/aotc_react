import axios from "axios";

export function axiosHelper(method, url, data, headers, history) {
  return axios({
    method,
    url,
    data,
    headers,
  })
    .then((response) => {
      console.log(response);
      if (response.status === 200) {
        history.push("/dashboard");
      }
    })
    .catch((error) => {
      console.log("error", error);
    });
}

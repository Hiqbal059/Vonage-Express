import instance from "./Api";

export default function request(endpoint, opts = { method: 'GET' }) {

  return instance({
    url: endpoint,
    ...opts,
  })
    .then(({ data }) => data)
    .catch((e) => {
      if (e.response) {
        e.response.error = true;
        return e.response;
      }

      if (e.message) {
        return {
          message: e.message,
          error: true,
        };
      }

      e.error = true;
      return e;
    });
}

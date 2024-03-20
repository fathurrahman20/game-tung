import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "cfc30dffa2c94caf927b3ebe24492a74",
  },
});

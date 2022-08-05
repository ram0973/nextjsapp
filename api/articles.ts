import axios from "axios";

import {SERVER_BASE_URL} from "../utils/constants";

const ArticleAPI = {
  articles: async () => {
    try {
      return await axios.get(`${SERVER_BASE_URL}/articles`,{
      });
    } catch (error: any) {
      return error.response;
    }
  },
};

export default ArticleAPI;

import axios from 'axios'
import {
    REQUESTING,
    REQ_SUCCESS,
    REQ_ERROR
} from './mutations-type'

export default {

    // 搜索的异步action
    async searchAsync ({commit},searchName) {

        commit(REQUESTING)

        try {
            // 发请求
            const response = await axios({
              url: "/api/search/users",
              params: {
                q: searchName
              }
            });
            // 若成功,更新数据(成功)
            const result = response.data;
            const users = result.items.map(item => ({
              username: item.login,
              url: item.html_url,
              avatar_url: item.avatar_url
            }));
            commit(REQ_SUCCESS,users)
          } catch (error) {
            // 若失败,更新数据(失败)
            commit(REQ_ERROR,error.message)
          }

    }

}
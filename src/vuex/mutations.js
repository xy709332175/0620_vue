import {
    REQUESTING,
    REQ_SUCCESS,
    REQ_ERROR
} from './mutations-type'

// 不同请求状态改变相关数据
export default {
    [REQUESTING] (state) {
        state.firstView = false,
        state.loading = true
    },
    [REQ_SUCCESS] (state, users) {
        state.loading = false,
        state.users = users
    },
    [REQ_ERROR] (state,msg) {
        state.loading = false,
        state.errorMsg = msg
    }
}
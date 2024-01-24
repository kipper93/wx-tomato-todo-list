import request from '../utils/request'
// list 列表
export const list = async (params) => {
    return await request('GET', `/back_list`, params);
}
// videoList 列表
export const videoList = async (params) => {
    return await request('GET', `/video_list`, params);
}




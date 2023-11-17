import request from '../utils/request'

// list 列表
export const list = async (params) => {
    return await request('GET', `/memorial_list`, params);
}

// home更新
export const updateHomeList = async (params) => {
    return await request('post', `/add_home`, params);
}



import request from '../utils/request'

// home 列表
export const homeList = async (params) => {
    return await request('GET', `/home`, params);
}

// home更新
export const updateHomeList = async (params) => {
    return await request('post', `/add_home`, params);
}


// home编辑
export const editHomeList = async (params) => {
    return await request('post', `/edit-home`, params);
}



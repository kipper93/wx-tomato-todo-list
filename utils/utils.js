export const getWeek = (date) => {
    let arrs = [];
    arrs = (date).split('-'); //传入或输入日期，处理格式为 2016-12-5
    let weeks = new Date(arrs[0], parseInt(arrs[1] - 1), arrs[2]);
    return '星期' + weeks.getDay() //就是星期几啦
}

export const repair0 = (m) => {
    return m < 10 ? '0' + m : m
}
export const formatting = (val) => {
    let time = new Date(val);
    let y = time.getFullYear();
    let m = time.getMonth() + 1;
    let d = time.getDate();
    let h = time.getHours();
    let mm = time.getMinutes();
    let s = time.getSeconds();
    return y + '-' + repair0(m) + '-' + repair0(d) + ' ' + repair0(h) + ':' + repair0(mm) + ':' + repair0(s);
}

export const day = (val) => {
    let time = new Date(val);
    let y = time.getFullYear();
    let m = time.getMonth() + 1;
    let d = time.getDate();
    return y + '-' + repair0(m) + '-' + repair0(d);
}
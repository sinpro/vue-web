module.exports = str => {
    let y = str.substr(0, 4),
    m = str.substr(4, 2),
    d = str.substr(6, 2),
    hh = str.substr(8, 2),
    mm = str.substr(10, 2),
    ss = str.substr(12)
    return `${y}-${m}-${d}  ${hh}:${mm}:${ss}`
}
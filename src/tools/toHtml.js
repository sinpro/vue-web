export default (str, flag = false) => {
    str = str.replace(/&lt;/g, '<')
    str = str.replace(/&gt;/g, '>')
    str = str.replace(/&amp;lt;/g, '<')
    str = str.replace(/&amp;gt;/g, '>')
    str = str.replace(/&amp;quot;/g, '"')
    str = str.replace(/&quot;/g, '"')
    str = str.replace(/&amp;nbsp;/g, '&nbsp;')
    str = str.replace(/&amp;#x27;/g, "'")
    str = str.replace(/&#x27;/g, "'")
    str = str.replace(/&amp;#39;/g, "'")
    str = str.replace(/&amp;amp;/g, "&")
    str = str.replace(/&amp;/g, "&")
    if (flag) {
        return '<div class="ql-container ql-show"><div class="ql-editor">' + str + '</div></div>'
    } else {
        return str
    }
}

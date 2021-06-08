export default {
    image(str){
        var result=str.replace(/amp;/g,"")
        return result
    }
}
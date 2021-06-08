/*
通用的工具方法
*/

/* alert */
function errorAlert(scope, error) {
  let title, content;
  if (error.errorCode) { title = '错误码[' + error.errorCode + ']'; }
  if (error.errorMsg) { content = '<p>' + error.errorMsg + '</p>'; }
  scope.$confirm('1',{
    title: title,
    message: content,
    type: 'error',
  });
}

export default {
  errorAlert
};

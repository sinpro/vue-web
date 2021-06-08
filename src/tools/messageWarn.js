import {
    MessageBox,
    Message
} from 'element-ui';

export function messageWarn(params) {
    let height = (document.documentElement.clientHeight - (params.message.length > 10 ? 24 : 20)) / 2
    if (params.message.length > 21) {
        MessageBox.confirm(params.message, params.title, {
            center: true,
            confirmButtonText: '确定',
            showCancelButton: false,
            type: params.type,
            showClose: false,
        }).then(() => {
        }).catch(() => {
        });
    } else {
        Message({
            duration: params.message.length > 10 ? 5000 : 3000,
            message: params.message,
            center: true,
            offset: height,
            type: params.type,
        });
    }
}


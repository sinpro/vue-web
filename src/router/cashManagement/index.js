export default [
  
]





/*
//资金归集
const sweepBalance = resolve => require(['@src/views/cashManagement/cashsweep/sweepBalance.vue'], resolve)
const sweepDetail = resolve => require(['@src/views/cashManagement/cashsweep/sweepDetail.vue'], resolve)
const sweepInterest = resolve => require(['@src/views/cashManagement/cashsweep/sweepInterest.vue'], resolve)//利息查询
const sweepInterestPord = resolve => require(['@src/views/cashManagement/cashsweep/sweepInterestPord.vue'], resolve)//利息分配查询
const interestEntry = resolve => require(['@src/views/cashManagement/cashsweep/interestEntry.vue'], resolve)//利息分配录入
const sweepUp = resolve => require(['@src/views/cashManagement/cashsweep/sweepUp.vue'], resolve)//上划下拨录入
const sweepUpPord = resolve => require(['@src/views/cashManagement/cashsweep/sweepUpPord.vue'], resolve)//上划下拨确定

const sweepPayment = resolve => require(['@src/views/cashManagement/cashsweep/sweepPayment.vue'], resolve)//联动支付
//多级账簿
const multiQuota = resolve => require(['@src/views/cashManagement/multi/multiQuota.vue'], resolve)//限额查询
const modifyQuota = resolve => require(['@src/views/cashManagement/multi/modifyQuota.vue'], resolve)//限额修改录入
const addQuota = resolve => require(['@src/views/cashManagement/multi/addQuota.vue'], resolve)//限额新增录入
const multiBalance = resolve => require(['@src/views/cashManagement/multi/multiBalance.vue'], resolve)//余额查询
const multiDetail = resolve => require(['@src/views/cashManagement/multi/multiDetail.vue'], resolve)//明细查询
const account = resolve => require(['@src/views/cashManagement/multi/account.vue'], resolve)//明细调账录入
const accountPord = resolve => require(['@src/views/cashManagement/multi/accountPord.vue'], resolve)//明细调账确定
const multiInterest = resolve => require(['@src/views/cashManagement/multi/multiInterest.vue'], resolve)//利息查询
const multiEntry = resolve => require(['@src/views/cashManagement/multi/multiEntry.vue'], resolve)//利息分配录入
const multiEntryPord = resolve => require(['@src/views/cashManagement/multi/multiEntryPord.vue'], resolve)//利息分配确定
const multiTransfer = resolve => require(['@src/views/cashManagement/multi/multiTransfer.vue'], resolve)//余额转账录入
const multiTransferPord = resolve => require(['@src/views/cashManagement/multi/multiTransferPord.vue'], resolve)//余额转账确定
const multiPay = resolve => require(['@src/views/cashManagement/multi/multiPay.vue'], resolve)//对外支付录入
//节税资金池
const taxerBalance = resolve => require(['@src/views/cashManagement/taxer/taxerBalance.vue'], resolve)//横向扫款余额查询
const taxerFlow = resolve => require(['@src/views/cashManagement/taxer/taxerFlow.vue'], resolve)//横向扫款流水查询
const taxerInterest = resolve => require(['@src/views/cashManagement/taxer/taxerInterest.vue'], resolve)//横向扫款利息查询
const taxerInterestPro = resolve => require(['@src/views/cashManagement/taxer/taxerInterestPro.vue'], resolve)//横向扫款利息查询录入
const taxerTransfer = resolve => require(['@src/views/cashManagement/taxer/taxerTransfer.vue'], resolve)//横向扫款手工划转录入
const taxerTransferPord = resolve => require(['@src/views/cashManagement/taxer/taxerTransferPord.vue'], resolve)//横向扫款手工划转确定
const taxerPay = resolve => require(['@src/views/cashManagement/taxer/taxerPay.vue'], resolve)//横向扫款联动支付
//虚拟资金池
const virLimit = resolve => require(['@src/views/cashManagement/vir/virLimit.vue'], resolve)//VCP担保额度查询
const virBalance = resolve => require(['@src/views/cashManagement/vir/virBalance.vue'], resolve)//VCP质押余额查询
const virFlow = resolve => require(['@src/views/cashManagement/vir/virFlow.vue'], resolve)//VCP质押流水查询
const virPool = resolve => require(['@src/views/cashManagement/vir/virPool.vue'], resolve)//活期质押入池录入
const virPoolPord = resolve => require(['@src/views/cashManagement/vir/virPoolPord.vue'], resolve)//活期质押入池确定
const virOut = resolve => require(['@src/views/cashManagement/vir/virOut.vue'], resolve)//活期解押出池录入
const virOutPord = resolve => require(['@src/views/cashManagement/vir/virOutPord.vue'], resolve)//活期解押出池确定
//跨行服务
const otherAccount = resolve => require(['@src/views/cashManagement/other/otherAccount.vue'], resolve)//他行账户信息查询
const otherBalance = resolve => require(['@src/views/cashManagement/other/otherBalance.vue'], resolve)//他行账户余额查询
const otherDetail = resolve => require(['@src/views/cashManagement/other/otherDetail.vue'], resolve)//他行账户明细查询
const otherPay = resolve => require(['@src/views/cashManagement/other/otherPay.vue'], resolve)// 他行账户对外支付录入
//跨行资金池
const crossBalance = resolve => require(['@src/views/cashManagement/cross/crossBalance.vue'], resolve)// 跨行归集余额查询
const crossFlow = resolve => require(['@src/views/cashManagement/cross/crossFlow.vue'], resolve)// 跨行归集流水查询
const crossInterest = resolve => require(['@src/views/cashManagement/cross/crossInterest.vue'], resolve)// 跨行归集利息查询
//票据池
const billLimit = resolve => require(['@src/views/cashManagement/bill/billLimit.vue'], resolve)// 票据池额度查询
const billNews = resolve => require(['@src/views/cashManagement/bill/billNews.vue'], resolve)// 票据池信息查询
const billIn = resolve => require(['@src/views/cashManagement/bill/billIn.vue'], resolve)// 票据出池入池查询
const billInPord = resolve => require(['@src/views/cashManagement/bill/billInPord.vue'], resolve)// 票据入池确认
const billOut = resolve => require(['@src/views/cashManagement/bill/billOut.vue'], resolve)// 票据出池查询
const billOutPord = resolve => require(['@src/views/cashManagement/bill/billOutPord.vue'], resolve)// 票据出池确认
const billBond = resolve => require(['@src/views/cashManagement/bill/billBond.vue'], resolve)// 票据保证金支取录入
const billBondPord = resolve => require(['@src/views/cashManagement/bill/billBondPord.vue'], resolve)// 票据保证金支取确定






const recom = {
    template: `<router-view></router-view>`
}
import Layout from '../../views/layout/layout';

//activeMenu:头部一级菜单高亮url    sideActiveMenu：左侧菜单高亮url
const cashManagement = [
    {
        path: '/cashManagement/cashsweep/sweepBalance',
        name: 'cashManagement',
        component: Layout,
        meta: { title: '现金管理' },
        children: [
            {
                path: '/cashManagement/cashsweep/sweepBalance',
                name: 'cashsweep',
                component: recom,
                meta: { title: '资金归集' },
                children: [
                    {
                        path: '/cashManagement/cashsweep/sweepBalance',
                        name: 'sweepBalance',
                        component: sweepBalance,
                        meta: { title: '资金归集余额查询' }
                    },
                    {
                        path: '/cashManagement/cashsweep/sweepDetail',
                        name: 'sweepDetail',
                        component: sweepDetail,
                        meta: { title: '资金归集明细查询' }
                    },
                    {
                        path: '/cashManagement/cashsweep/sweepInterest',
                        name: 'sweepInterest',
                        component: sweepInterest,
                        meta: { title: '资金归集利息查询' }
                    },
                    {
                        path: '/cashManagement/cashsweep/sweepInterestPord',
                        component: recom,
                        name: 'sweepInterestPord',
                        meta: { title: '资金归集利息分配' },
                        children: [
                            {
                                path: '/cashManagement/cashsweep/sweepInterestPord',
                                name: 'sweepInterestPord',
                                component: sweepInterestPord,
                                meta: { title: '资金归集利息分配', menu: false },
                            },
                            {
                                path: '/cashManagement/cashsweep/sweepInterestPord/add',
                                name: 'add',
                                component: interestEntry,
                                meta: { title: '录入页面', menu: false }
                            },
                        ]
                    },
                    {
                        path: '/cashManagement/cashsweep/sweepUp/add',
                        name: 'sweepUp',
                        component: recom,
                        meta: { title: '资金归集上划下拨' },
                        children: [
                            {
                                path: '/cashManagement/cashsweep/sweepUp/add',
                                name: 'add',
                                component: sweepUp,
                                meta: { title: '录入信息页面', menu: false }
                            },
                            {
                                path: '/cashManagement/cashsweep/sweepUp/agree',
                                name: 'agree',
                                component: sweepUpPord,
                                meta: { title: '确定信息页面', menu: false }
                            },

                        ]
                    },
                    {
                        path: '/cashManagement/cashsweep/sweepPayment',
                        name: 'sweepPayment',
                        component: sweepPayment,
                        meta: { title: '资金归集联动支付' }
                    },
                ]
            },
            {
                path: '/cashManagement/multi',
                name: 'multi',
                component: recom,
                meta: { title: '多级账簿', sideActiveMenu: '/cashManagement/multi', activeMenu: '/cashManagement/cashManagement' },
                children: [
                    {
                        path: '/cashManagement/multiQuota',
                        name: 'multiQuota',
                        component: multiQuota,
                        meta: { title: '多级账簿限额查询', sideActiveMenu: '/cashManagement/multiQuota', activeMenu: '/cashManagement/cashManagement' },
                    },
                    {
                        path: '/cashManagement/addQuota',
                        name: 'addQuota',
                        component: addQuota,
                        meta: { title: '多级账簿限额设置', sideActiveMenu: '/cashManagement/multiQuota', activeMenu: '/cashManagement/cashManagement' },
                        children: [
                            {
                                path: '/cashManagement/addQuota',
                                name: 'addQuota',
                                component: addQuota,
                                meta: { title: '多级账簿限额新增', sideActiveMenu: '/cashManagement/multiQuota', activeMenu: '/cashManagement/cashManagement' },
                            }
                        ]
                    },
                    {
                        path: '/cashManagement/modifyQuota',
                        name: 'modifyQuota',
                        component: modifyQuota,
                        meta: { title: '多级账簿限额设置', sideActiveMenu: '/cashManagement/multiQuota', activeMenu: '/cashManagement/cashManagement' },
                        children: [
                            {
                                path: '/cashManagement/modifyQuota',
                                name: 'modifyQuota',
                                component: modifyQuota,
                                meta: { title: '多级账簿限额修改', sideActiveMenu: '/cashManagement/multiQuota', activeMenu: '/cashManagement/cashManagement' },
                            }
                        ]
                    },
                    {
                        path: '/cashManagement/multiBalance',
                        name: 'multiBalance',
                        component: multiBalance,
                        meta: { title: '多级账簿余额查询', sideActiveMenu: '/cashManagement/multiBalance', activeMenu: '/cashManagement/cashManagement' },
                    },
                    {
                        path: '/cashManagement/multiDetail',
                        name: 'multiDetail',
                        component: multiDetail,
                        meta: { title: '多级账簿明细查询', sideActiveMenu: '/cashManagement/multiDetail', activeMenu: '/cashManagement/sweepDetail' }
                    },
                    {
                        path: '/cashManagement/account',
                        name: 'account',
                        component: account,
                        meta: { title: '多级账簿明细调账', sideActiveMenu: '/cashManagement/multiDetail', activeMenu: '/cashManagement/cashManagement' },
                        children: [
                            {
                                path: '/cashManagement/account',
                                name: 'account',
                                component: account,
                                meta: { title: '录入页面', sideActiveMenu: '/cashManagement/multiDetail', activeMenu: '/cashManagement/cashManagement' },
                            }
                        ]
                    },
                    {
                        path: '/cashManagement/accountPord',
                        name: 'accountPord',
                        component: accountPord,
                        meta: { title: '多级账簿明细调账', sideActiveMenu: '/cashManagement/multiDetail', activeMenu: '/cashManagement/cashManagement' },
                        children: [
                            {
                                path: '/cashManagement/accountPord',
                                name: 'accountPord',
                                component: accountPord,
                                meta: { title: ' 确认页面', sideActiveMenu: '/cashManagement/multiDetail', activeMenu: '/cashManagement/cashManagement' },
                            }
                        ]
                    },
                    {
                        path: '/cashManagement/multiInterest',
                        name: 'multiInterest',
                        component: multiInterest,
                        meta: { title: '资金归集利息查询', sideActiveMenu: '/cashManagement/multiInterest', activeMenu: '/cashManagement/sweepInterest' }
                    },
                    {
                        path: '/cashManagement/multiEntry',
                        name: 'multiEntry',
                        component: multiEntry,
                        meta: { title: '资金归集利息分配', sideActiveMenu: '/cashManagement/multiInterest', activeMenu: '/cashManagement/sweepInterest' },
                        children: [
                            {
                                path: '/cashManagement/multiEntry',
                                name: 'multiEntry',
                                component: multiEntry,
                                meta: { title: '录入页面', sideActiveMenu: '/cashManagement/multiInterest', activeMenu: '/cashManagement/sweepInterest' },
                                children: []
                            }
                        ]
                    },
                    {
                        path: '/cashManagement/multiEntryPord',
                        name: 'multiEntryPord',
                        component: multiEntryPord,
                        meta: { title: '资金归集利息分配', sideActiveMenu: '/cashManagement/multiInterest', activeMenu: '/cashManagement/sweepInterest' },
                        children: [
                            {
                                path: '/cashManagement/multiEntryPord',
                                name: 'multiEntryPord',
                                component: multiEntryPord,
                                meta: { title: '确定页面', sideActiveMenu: '/cashManagement/multiInterest', activeMenu: '/cashManagement/sweepInterest' },
                                children: []
                            }
                        ]
                    },
                    {
                        path: '/cashManagement/multiTransfer',
                        name: 'multiTransfer',
                        component: multiTransfer,
                        meta: { title: '多级账簿余额转账', sideActiveMenu: '/cashManagement/multiTransfer', activeMenu: '/cashManagement/sweepUp' },
                        children: [
                            {
                                path: '/cashManagement/multiTransfer',
                                name: 'multiTransfer',
                                component: multiTransfer,
                                meta: { title: '录入信息页面', sideActiveMenu: '/cashManagement/multiTransfer', activeMenu: '/cashManagement/sweepUp' },
                            }
                        ]
                    },
                    {
                        path: '/cashManagement/multiTransferPord',
                        name: 'multiTransferPord',
                        component: multiTransferPord,
                        meta: { title: '多级账簿余额转账', sideActiveMenu: '/cashManagement/multiTransfer', activeMenu: '/cashManagement/sweepUp' },
                        children: [
                            {
                                path: '/cashManagement/multiTransferPord',
                                name: 'multiTransferPord',
                                component: multiTransferPord,
                                meta: { title: '确认信息页面', sideActiveMenu: '/cashManagement/multiTransfer', activeMenu: '/cashManagement/sweepUp' },
                            }
                        ]
                    },
                    {
                        path: '/cashManagement/multiPay',
                        name: 'multiPay',
                        component: multiPay,
                        meta: { title: '多级账簿对外支付', sideActiveMenu: '/cashManagement/multiPay', activeMenu: '/cashManagement/sweepUp' },
                        children: [
                            {
                                path: '/cashManagement/multiPay',
                                name: 'multiPay',
                                component: multiPay,
                                meta: { title: '录入信息页面', sideActiveMenu: '/cashManagement/multiPay', activeMenu: '/cashManagement/sweepUp' },
                            }
                        ]
                    },
                ]
            },
            {
                path: '/cashManagement/taxer',
                name: 'taxer',
                component: recom,
                meta: { title: '节税资金池', sideActiveMenu: '/cashManagement/taxer', activeMenu: '/cashManagement/cashManagement' },
                children: [
                    {
                        path: '/cashManagement/taxerBalance',
                        name: 'taxerBalance',
                        component: taxerBalance,
                        meta: { title: '横向扫款余额查询', sideActiveMenu: '/cashManagement/taxerBalance', activeMenu: '/cashManagement/cashManagement' },
                    },
                    {
                        path: '/cashManagement/taxerFlow',
                        name: 'taxerFlow',
                        component: taxerFlow,
                        meta: { title: '横向扫款流水查询', sideActiveMenu: '/cashManagement/taxerFlow', activeMenu: '/cashManagement/cashManagement' },
                    },
                    {
                        path: '/cashManagement/taxerInterest',
                        name: 'taxerInterest',
                        component: taxerInterest,
                        meta: { title: '横向扫款利息查询', sideActiveMenu: '/cashManagement/taxerInterest', activeMenu: '/cashManagement/cashManagement' },
                    },
                    {
                        path: '/cashManagement/taxerInterestPro',
                        name: 'taxerInterestPro',
                        component: taxerInterestPro,
                        meta: { title: '横向扫款利息分配', sideActiveMenu: '/cashManagement/taxerInterest', activeMenu: '/cashManagement/cashManagement' },
                        children: [
                            {
                                path: '/cashManagement/taxerInterestPro',
                                name: 'taxerInterestPro',
                                component: taxerInterestPro,
                                meta: { title: '录入页面', sideActiveMenu: '/cashManagement/taxerInterest', activeMenu: '/cashManagement/cashManagement' },
                            },
                        ]
                    },
                    {
                        path: '/cashManagement/taxerTransfer',
                        name: 'taxerTransfer',
                        component: taxerTransfer,
                        meta: { title: '横向扫款利息分配', sideActiveMenu: '/cashManagement/taxerTransfer', activeMenu: '/cashManagement/cashManagement' },
                        children: [
                            {
                                path: '/cashManagement/taxerTransfer',
                                name: 'taxerTransfer',
                                component: taxerTransfer,
                                meta: { title: '录入页面', sideActiveMenu: '/cashManagement/taxerTransfer', activeMenu: '/cashManagement/cashManagement' },
                            },
                        ]
                    },
                    {
                        path: '/cashManagement/taxerTransferPord',
                        name: 'taxerTransferPord',
                        component: taxerTransferPord,
                        meta: { title: '横向扫款利息分配', sideActiveMenu: '/cashManagement/taxerTransfer', activeMenu: '/cashManagement/cashManagement' },
                        children: [
                            {
                                path: '/cashManagement/taxerTransferPord',
                                name: 'taxerTransferPord',
                                component: taxerTransferPord,
                                meta: { title: '确定页面', sideActiveMenu: '/cashManagement/taxerTransfer', activeMenu: '/cashManagement/cashManagement' },
                            },
                        ]
                    },
                    {
                        path: '/cashManagement/taxerPay',
                        name: 'taxerPay',
                        component: taxerPay,
                        meta: { title: '横向扫款联动支付', sideActiveMenu: '/cashManagement/taxerPay', activeMenu: '/cashManagement/cashManagement' },
                        children: [
                            {
                                path: '/cashManagement/taxerPay',
                                name: 'taxerPay',
                                component: taxerPay,
                                meta: { title: '录入页面', sideActiveMenu: '/cashManagement/taxerPay', activeMenu: '/cashManagement/cashManagement' },
                            },
                        ]
                    },
                ]
            },
            {
                path: '/cashManagement/vir',
                name: 'vir',
                component: recom,
                meta: { title: '虚拟资金池', sideActiveMenu: '/cashManagement/vir', activeMenu: '/cashManagement/cashManagement' },
                children: [
                    {
                        path: '/cashManagement/virLimit',
                        name: 'virLimit',
                        component: virLimit,
                        meta: { title: 'VCP担保额度查询', sideActiveMenu: '/cashManagement/virLimit', activeMenu: '/cashManagement/cashManagement' },
                    },
                    {
                        path: '/cashManagement/virBalance',
                        name: 'virBalance',
                        component: virBalance,
                        meta: { title: 'VCP质押余额查询', sideActiveMenu: '/cashManagement/virBalance', activeMenu: '/cashManagement/cashManagement' },
                    },
                    {
                        path: '/cashManagement/virFlow',
                        name: 'virFlow',
                        component: virFlow,
                        meta: { title: 'VCP质押流水查询', sideActiveMenu: '/cashManagement/virFlow', activeMenu: '/cashManagement/cashManagement' },
                    },
                    {
                        path: '/cashManagement/virPool',
                        name: 'virPool',
                        component: virPool,
                        meta: { title: '活期质押入池', sideActiveMenu: '/cashManagement/virPool', activeMenu: '/cashManagement/cashManagement' },
                        children: [
                            {
                                path: '/cashManagement/virPool',
                                name: 'virPool',
                                component: virPool,
                                meta: { title: '录入页面', sideActiveMenu: '/cashManagement/virPool', activeMenu: '/cashManagement/cashManagement' },
                            },
                        ]
                    },
                    {
                        path: '/cashManagement/virPoolPord',
                        name: 'virPoolPord',
                        component: virPoolPord,
                        meta: { title: '活期质押入池', sideActiveMenu: '/cashManagement/virPool', activeMenu: '/cashManagement/cashManagement' },
                        children: [
                            {
                                path: '/cashManagement/virPoolPord',
                                name: 'virPoolPord',
                                component: virPoolPord,
                                meta: { title: '确定页面', sideActiveMenu: '/cashManagement/virPool', activeMenu: '/cashManagement/cashManagement' },
                            },
                        ]
                    },
                    {
                        path: '/cashManagement/virOut',
                        name: 'virOut',
                        component: virOut,
                        meta: { title: '活期解押出池', sideActiveMenu: '/cashManagement/virOut', activeMenu: '/cashManagement/cashManagement' },
                        children: [
                            {
                                path: '/cashManagement/virOut',
                                name: 'virOut',
                                component: virOut,
                                meta: { title: '录入页面', sideActiveMenu: '/cashManagement/virOut', activeMenu: '/cashManagement/cashManagement' },
                            },
                        ]
                    },
                    {
                        path: '/cashManagement/virOutPord',
                        name: 'virOutPord',
                        component: virOutPord,
                        meta: { title: '活期解押出池', sideActiveMenu: '/cashManagement/virOut', activeMenu: '/cashManagement/cashManagement' },
                        children: [
                            {
                                path: '/cashManagement/virOutPord',
                                name: 'virOutPord',
                                component: virOutPord,
                                meta: { title: '确定页面', sideActiveMenu: '/cashManagement/virOut', activeMenu: '/cashManagement/cashManagement' },
                            },
                        ]
                    },
                ]
            },
            {
                path: '/cashManagement/other',
                name: 'other',
                component: recom,
                meta: { title: '跨行服务', sideActiveMenu: '/cashManagement/other', activeMenu: '/cashManagement/cashManagement' },
                children: [
                    {
                        path: '/cashManagement/otherAccount',
                        name: 'otherAccount',
                        component: otherAccount,
                        meta: { title: '他行账户信息查询', sideActiveMenu: '/cashManagement/otherAccount', activeMenu: '/cashManagement/cashManagement' },
                    },
                    {
                        path: '/cashManagement/otherBalance',
                        name: 'otherBalance',
                        component: otherBalance,
                        meta: { title: '他行账户信息查询', sideActiveMenu: '/cashManagement/otherBalance', activeMenu: '/cashManagement/cashManagement' },
                    },
                    {
                        path: '/cashManagement/otherDetail',
                        name: 'otherDetail',
                        component: otherDetail,
                        meta: { title: '他行账户明细查询', sideActiveMenu: '/cashManagement/otherDetail', activeMenu: '/cashManagement/cashManagement' },
                    },
                    {
                        path: '/cashManagement/otherPay',
                        name: 'otherPay',
                        component: otherPay,
                        meta: { title: '他行账户对外支付', sideActiveMenu: '/cashManagement/otherPay', activeMenu: '/cashManagement/cashManagement' },
                        children: [
                            {
                                path: '/cashManagement/otherPay',
                                name: 'otherPay',
                                component: otherPay,
                                meta: { title: '录入信息页面', sideActiveMenu: '/cashManagement/otherPay', activeMenu: '/cashManagement/cashManagement' },
                            }
                        ]
                    },
                ]

            },
            {
                path: '/cashManagement/cross',
                name: 'cross',
                component: recom,
                meta: { title: '跨行资金池', sideActiveMenu: '/cashManagement/cross', activeMenu: '/cashManagement/cashManagement' },
                children: [
                    {
                        path: '/cashManagement/crossBalance',
                        name: 'crossBalance',
                        component: crossBalance,
                        meta: { title: '跨行归集余额查询', sideActiveMenu: '/cashManagement/crossBalance', activeMenu: '/cashManagement/cashManagement' },
                    },
                    {
                        path: '/cashManagement/crossFlow',
                        name: 'crossFlow',
                        component: crossFlow,
                        meta: { title: '跨行归集流水查询', sideActiveMenu: '/cashManagement/crossFlow', activeMenu: '/cashManagement/cashManagement' },
                    },
                    {
                        path: '/cashManagement/crossInterest',
                        name: 'crossInterest',
                        component: crossInterest,
                        meta: { title: '跨行归集利息查询', sideActiveMenu: '/cashManagement/crossInterest', activeMenu: '/cashManagement/cashManagement' },
                    },
                ]

            },
            {
                path: '/cashManagement/bill',
                name: 'bill',
                component: recom,
                meta: { title: '票据池', sideActiveMenu: '/cashManagement/bill', activeMenu: '/cashManagement/cashManagement' },
                children: [
                    {
                        path: '/cashManagement/billLimit',
                        name: 'billLimit',
                        component: billLimit,
                        meta: { title: ' 票据池额度查询', sideActiveMenu: '/cashManagement/billLimit', activeMenu: '/cashManagement/cashManagement' },
                    },
                    {
                        path: '/cashManagement/billNews',
                        name: 'billNews',
                        component: billNews,
                        meta: { title: '票据池信息查询', sideActiveMenu: '/cashManagement/billNews', activeMenu: '/cashManagement/cashManagement' },
                    },
                    {
                        path: '/cashManagement/billIn',
                        name: 'billIn',
                        component: billIn,
                        meta: { title: '票据出池入池', sideActiveMenu: '/cashManagement/billIn', activeMenu: '/cashManagement/cashManagement' },
                    },
                    {
                        path: '/cashManagement/billInPord',
                        name: 'billInPord',
                        component: billInPord,
                        meta: { title: '票据入池', sideActiveMenu: '/cashManagement/billIn', activeMenu: '/cashManagement/cashManagement' },
                        children: [
                            {
                                path: '/cashManagement/billInPord',
                                name: 'billInPord',
                                component: billInPord,
                                meta: { title: '确认页面', sideActiveMenu: '/cashManagement/billIn', activeMenu: '/cashManagement/cashManagement' },
                            },
                        ]
                    },
                    {
                        path: '/cashManagement/billOut',
                        name: 'billOut',
                        component: billOut,
                        meta: { title: '票据出池入池', sideActiveMenu: '/cashManagement/billOut', activeMenu: '/cashManagement/cashManagement' },
                    },
                    {
                        path: '/cashManagement/billOutPord',
                        name: 'billOutPord',
                        component: billOutPord,
                        meta: { title: '票据出池', sideActiveMenu: '/cashManagement/billOut', activeMenu: '/cashManagement/cashManagement' },
                        children: [
                            {
                                path: '/cashManagement/billOutPord',
                                name: 'billOutPord',
                                component: billOutPord,
                                meta: { title: '确认页面', sideActiveMenu: '/cashManagement/billOut', activeMenu: '/cashManagement/cashManagement' },
                            },
                        ]
                    },
                    {
                        path: '/cashManagement/billBond',
                        name: 'billBond',
                        component: billBond,
                        meta: { title: '保证金支取', sideActiveMenu: '/cashManagement/billBond', activeMenu: '/cashManagement/cashManagement' },
                        children: [
                            {
                                path: '/cashManagement/billBond',
                                name: 'billBond',
                                component: billBond,
                                meta: { title: '录入页面', sideActiveMenu: '/cashManagement/billBond', activeMenu: '/cashManagement/cashManagement' },
                            },
                        ]
                    },
                    {
                        path: '/cashManagement/billBondPord',
                        name: 'billBondPord',
                        component: billBondPord,
                        meta: { title: '保证金支取', sideActiveMenu: '/cashManagement/billBond', activeMenu: '/cashManagement/cashManagement' },
                        children: [
                            {
                                path: '/cashManagement/billBondPord',
                                name: 'billBondPord',
                                component: billBondPord,
                                meta: { title: '确定页面', sideActiveMenu: '/cashManagement/billBond', activeMenu: '/cashManagement/cashManagement' },
                            },
                        ]
                    },
                ]
            },
        ]
    }
]
export default cashManagement;
*/
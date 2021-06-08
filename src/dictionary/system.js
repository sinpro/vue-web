export default {
  // 岗位状态
  systemPostStatus:[
    { v: '可用', k: '1' },
    { v: '禁用', k: '0' }
  ],
  // 角色状态
  systemRoleStatus: [
    { v: '正常', k: '1' },
    { v: '禁用', k: '0' },
    { v: '删除 ', k: '3' }
  ],
  // 策略管理-分页查询策略
  policyEndpoint: [
    { v: 'ATM交易', k: '0001' },
    { v: 'POS交易', k: '0002' },
    { v: '其它', k: '0003' },
    { v: '柜台交易', k: '0004' },
    { v: '手机银行交易', k: '0005' },
    { v: '网银交易', k: '0006' },
    { v: 'OSB登录', k: '0007' },
    { v: '聚合支付', k: '0008' },
    { v: '商联支付', k: '0009' },
  ],
  policyStatus: [
    { v: '正常', k: '0' },
    { v: '禁用', k: '1' },
    { v: '删除', k: '3' },
  ],
  policyRunType: [
    { v: '和运算', k: '0' },
    { v: '取最大值', k: '1' },
    { v: '取最小值', k: '2' },
  ],
  // 策略管理-分页查询策略规则
  policyRuleStatus: [
    { v: '正常', k: '0' },
    { v: '禁用', k: '1' },
    { v: '删除', k: '3' },
  ],
  // 策略管理-分页查询策略触发器
  policyTrigCaseType: [
    { v: '待定级', k: '0' },
    { v: '低风险', k: '1' },
    { v: '中风险', k: '2' },
    { v: '高风险', k: '3' },
    { v: '无风险', k: '4' },
  ],
  policyTrigStatus: [
    { v: '正常', k: '0' },
    { v: '禁用', k: '1' },
    { v: '删除', k: '3' },
  ],
  // 策略管理-分页查询触发器
  trigTrigType: [
    { v: '客户--自动默认触发型', k: '0' },
    { v: '商户--自动默认触发型', k: '1' },
  ],
  trigStatus: [
    { v: '正常', k: '0' },
    { v: '禁用', k: '1' },
    { v: '删除', k: '3' },
  ],
  // 策略管理-分页查询规则
  RuleRuleType: [
    { v: '交易', k: '0' },
    { v: '登录', k: '1' },
    { v: '商户', k: '2' },
  ],
  RuleScoreType: [
    { v: '和', k: '0' },
    { v: '或', k: '1' },
  ],
  RuleStatus: [
    { v: '正常', k: '0' },
    { v: '禁用', k: '1' },
    { v: '删除', k: '3' },
  ],
  RuleResultType: [
    { v: '默认', k: '0' },
  ],
};

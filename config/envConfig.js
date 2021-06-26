var envConfig = {
  /* =============================== 本地开发环境配置 ============================== */
  dev: {
    base_url: 'dev',
    assetsUrl: 'http://localhost:8080/',
    pgeRZRandNum: 'v0gid5atffi8dgq2ouplwzcs7v8s7kn0', //-------
    pgeRZDataB: 'PaS7f/WecSXPJkJ5d6kB9UJuxq8El8DZa2aBXJvD2w4=', //-------
    behavior_url: 'https://rsb-stg.pingan.com.cn/brcp/log/cust/behavior/paces/h5.do',
    banksdc_url: 'https://bank-static.pingan.com.cn/bron-coss/webtrends/banksdc.js',
  },
  /* =============================== fat环境配置 ================================= */
  fat: {
    base_url: 'fat',
    assetsUrl: '',
    pgeRZRandNum: 'v0gid5atffi8dgq2ouplwzcs7v8s7kn0', //-------
    pgeRZDataB: 'PaS7f/WecSXPJkJ5d6kB9UJuxq8El8DZa2aBXJvD2w4=', //-------
  },
  /* =============================== uat环境配置 ================================= */
  uat: {
    base_url: 'uat'
  },
  /* =============================== prod环境配置 ================================ */
  prod: {
    base_url: 'prod'
  },
  /* =============================== prod环境配置 ================================ */
  demo: {
    base_url: './',
    assetsUrl: 'http://localhost:8989/',
    pgeRZRandNum: 'v0gid5atffi8dgq2ouplwzcs7v8s7kn0', //-------
    pgeRZDataB: 'PaS7f/WecSXPJkJ5d6kB9UJuxq8El8DZa2aBXJvD2w4=', //-------
  }
}
module.exports = envConfig;
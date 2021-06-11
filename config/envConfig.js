var envConfig = {
  /* =============================== 本地开发环境配置 ============================== */
  dev: {
    base_url: 'dev',
    assetsUrl:'http://localhost:8800/',
    pgeRZRandNum:'v0gid5atffi8dgq2ouplwzcs7v8s7kn0', //-------
    pgeRZDataB:'PaS7f/WecSXPJkJ5d6kB9UJuxq8El8DZa2aBXJvD2w4=', //-------
    
  },
  /* =============================== fat环境配置 ================================= */
  fat: {
    base_url: 'fat',
    assetsUrl:'',
    pgeRZRandNum:'v0gid5atffi8dgq2ouplwzcs7v8s7kn0', //-------
    pgeRZDataB:'PaS7f/WecSXPJkJ5d6kB9UJuxq8El8DZa2aBXJvD2w4=', //-------
  },
  /* =============================== uat环境配置 ================================= */
  uat: {
    base_url: 'uat'
  },
  /* =============================== prod环境配置 ================================ */
  prod: {
    base_url: 'prod'
  },
}
module.exports = envConfig;
module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production'
      ? '/2020/time-capsule-retrieve/'
      : '/',
  productionSourceMap: false
}

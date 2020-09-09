// 这里创建一些文件夹的别名，有时候引入文件夹时，名字太长不方便好看，需要../../，
// 所以给文件夹起一个别名,方便
module,exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // '@':'src' 内部已经把src起个别名叫@了
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'

      }
    }
  }
}
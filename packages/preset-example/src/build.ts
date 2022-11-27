// 插件 
export default (IApi) => {
  IApi.register({
    key: 'onBuildStart',
    fn: (name) => {
      console.log('onBuildStart plugin-B');
      return name+'B'
    }
  })
  IApi.registerCommand({
    name: 'build',
    fn: () => {
      console.log('building!!');
    }
  })
}

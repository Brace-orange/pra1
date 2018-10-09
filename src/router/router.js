const routers = [
  'comone'

]

const coms = [
  'tag', 'recommend', 'singer', 'rank', 'search'
]

const routes = routers.map(router => {
  let name, path
  name = router
  path = `/${router}`
  return {
    name,
    path,
    component: async () => await import(`./${router}/index.vue`)
    // component: resolve => require(`./${route}/index.vue`, resolve)
  }
})

const comms = coms.map((com) => {
  let name, path
  name = com
  path = `/${com}`
  return {
    name,
    path,
    component: async () => await import(`../components/${com}/index.vue`)
  }
})


export default [
  {
    name: '',
    path: '/',
    comnponent: ''
  },
  // 添加多余的非路由组件的路由
  ...routes,
  ...comms
]

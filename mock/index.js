import { actuator } from './actuator'
import { online } from './online'
import { sys } from './sys'
// const delay = res => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(res)
//     }, Math.random() * 1000 + 500)
//   })
// }
export default {
  ...sys,
  ...actuator,
  ...online,
  'GET /api/user': {
    // obj
    id: 1,
    username: 'kenny',
    sex: 6
  }
  // 'GET /mock/sys/permission/getUserPermissionByToken': async (req, res) => {
  //   await delay()
  //   res.status(200).send(getUserPermissionByToken)
  // }
}

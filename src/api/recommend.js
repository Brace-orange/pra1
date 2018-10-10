import jsonp from '../common/js/jsonp'
import api from '../api/api'
import {commonParams, option} from '../api/config'

export function getRecommend () {
  const url = api.recommond
  const data = Object.assign({}, commonParams, {
    uin: 3073492730,
    platform: 'h5',
    _: 15390740496
  })
  console.log(data)
  return jsonp(url, data, option)
}

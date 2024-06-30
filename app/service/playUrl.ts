const BaseService = require('./BaseService')

export default class PlayUrl extends BaseService {
  async getPlayUrl (rid, format = 'mp3') {
    return this.commonRequest(`http://mobi.kuwo.cn/mobi.s?f=web&source=kwplayer_ar_4.4.2.7_B_nuoweida_vh.apk&type=convert_url2&rid=${rid}&priority=bitrate&format=${format}`)
  }
}

import {request} from "./request";

export function getHomeSwiper() {
  return request({
    url: '/banner?type=0'
  })
}

export function getMvList() {
  return request({
    url: '/personalized/mv'
  })
}

export function getSheetList() {
  return request({
    url: '/personalized?limit=10'
  })
}

export function getMusicList() {
  return request({
    url: '/personalized/newsong'
  })
}

export function getBroadcastList() {
  return request({
    url: '/personalized/privatecontent/list?limit=10'
  })
}
export function getAllSheet() {
  return request({
    url: '/playlist/catlist'
  })
}
export function getHotSheet() {
  return request({
    url: '/playlist/hot'
  })
}

export function getAllSheetDetail(type,offset) {
  return request({
    url: '/top/playlist?limit=30',
    params: {
      cat:type,
      offset:offset
    }
  })
}

export function getAllRank() {
  return request({
    url: '/toplist'
  })
}

export function getNewAlbum() {
  return request({
    url: '/album/newest'
  })
}


export function getTopAllAlbum(area,offset) {
  return request({
    url: '/album/new',
    params: {
      area:area,
      offset:offset
    }
  })
}

export function getHotSinger(type,area,initial,offset) {
  return request({
    url: '/artist/list',
    params: {
      type:type,
      initial:initial,
      area:area,
      offset:offset
    }
  })
}


export function getNewMusic(type) {
  return request({
    url: '/top/song',
    params: {
      type:type
    }
  })
}

export function getNumberDetails(id) {
  return request({
    url: '/album',
    params: {
      id:id
    }
  })
}

export function getCAlbumComment(id,offset) {
  return request({
    url: '/comment/album',
    params: {
      id:id,
      offset:offset
    }
  })
}
//歌单详情
export function getSheetDetails(id) {
  return request({
    url: '/playlist/detail',
    params: {
      id:id
    }
  })
}
//歌单评论
export function getSheetComment(id,offset) {
  return request({
    url: '/comment/playlist',
    params: {
      id:id,
      offset:offset
    }
  })
}
//获取歌手详情
export function getDetailSinger(id) {
  return request({
    url: '/artist/detail',
    params: {
      id:id,
    }
  })
}
//获取歌手所有歌曲
export function getAllSongSinger(id,offset) {
  return request({
    url: '/artist/songs?limit=50',
    params: {
      id:id,
      offset:offset
    }
  })
}
//获取歌手专辑
export function getAlbumSinger(id) {
  return request({
    url: '/artist/album',
    params: {
      id:id,
    }
  })
}
//获取歌手 mv
export function getMvSinger(id,offset) {
  return request({
    url: '/artist/mv?limit=20',
    params: {
      id:id,
      offset:offset
    }
  })
}

export function getLogin(account,password) {
  return request({
    url: '/login/cellphone',
    params: {
      phone:account,
      password:password,
    }
  })
}

export function getSignOut() {
  return request({
    url: '/logout',
  })
}

export function getSearchHot() {
  return request({
    url: '/search/hot/detail',
  })
}
//搜索结果
export function getSearchResult(keywords,type,offset) {
  return request({
    url: '/cloudsearch',
    params: {
      keywords:keywords,
      type,
      offset
    }
  })
}

export function getSong(ids) {
  return request({
    url: '/song/detail',
    params: {
      ids:ids
    }
  })
}

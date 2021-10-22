import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Home = () => import('@/views/Home/home')
const Video = () => import('@/views/video/video')
const Mylove = () => import('@/views/mylove/mylove')
const Music = () => import('@/views/music/music')
const Album = () => import('@/views/Home/homechildpage/album/album')
const Newmusic = () => import('@/views/Home/homechildpage/newnusic/newmusic')
const RankingLink = () => import('@/views/Home/homechildpage/Ranking_List/RankingList')
const Select_d = () => import('@/views/Home/homechildpage/select/select_d')
const Singer = () => import('@/views/Home/homechildpage/singer/singer')
const Songsheet = () => import('@/views/Home/homechildpage/song_sheet/songsheet')
const Detail = () => import('@/views/detail/detail')
const DetailSinger = () => import('@/views/detail/detailsinger')
const DetailAlbum = () => import('@/views/detail/detailalbum')
const Search = () => import('@/views/search/search')



const routes = [
  {
    path: '',
    redirect: '/home/select_d'
  },
  {
    path: '/home',
    component: Home,
    children:[
      {
        path:'album',
        name:'album',
        component: Album
      },
      {
        path: 'newmusic',
        name:'newmusic',
        component: Newmusic
      },
      {
        path: 'rankinglist',
        name:'rankinglist',
        component: RankingLink
      },
      {
        path: 'select_d',
        name:'select_d',
        component: Select_d
      },
      {
        path: 'singer',
        name:'singer',
        component: Singer
      },
      {
        path: 'songsheet',
        name:'songsheet',
        component: Songsheet
      }
    ]
  },
  {
    path: '/video',
    name:"video",
    component: Video
  },
  {
    path: '/mylove',
    name:"mylove",
    component: Mylove
  },
  {
    path: '/music',
    name:"music",
    component: Music
  },
  {
    path:'/detail/:id',
    name:'detail',
    component:Detail
  },
  {
    path:'/detailsinger/:id',
    name:'detailsinger',
    component:DetailSinger
  },
  {
    path:'/detailalbum/:id',
    name:'detailalbum',
    component:DetailAlbum
  },
  {
    path:'/search/:keywords',
    name:'search',
    component:Search
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router

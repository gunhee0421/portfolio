import GDG from './Gdg'
import Jinlo from './Jinlo'
import Ladi from './Ladi'
import TodayClothes from './TodayClothes'
import TodayScrum from './TodayScrum'

const PROJECTS = [
  {
    color: 'bg-[#00C369]',
    id: 'jinlo',
    data: {
      title: 'Jinlo',
      description: 'AI 기반 코드 리뷰 서비스',
      tags: ['앱', 'AI'],
      component: <Jinlo />,
      color: 'bg-[#00C369]',
    },
  },
  {
    component: <GDG />,
    color: 'bg-[#9097C0]',
    id: 'gdg',
    data: {
      title: 'GDG',
      description: 'Google Developer Group 프로젝트',
      imageUrl: '/images/project/Gdg/logo.gif',
      tags: ['Google', '커뮤니티', '개발'],
      component: <GDG />,
      color: 'bg-[#9097C0]',
    },
  },
  {
    component: <Ladi />,
    color: 'bg-[#1666DB]',
    id: 'ladi',
    data: {
      title: 'Ladi',
      description: '라이프 디자인 플랫폼',
      imageUrl: '/images/project/ladi/logo.png',
      tags: ['디자인', '라이프', '플랫폼'],
      component: <Ladi />,
    },
  },
  {
    component: <TodayClothes />,
    color: 'bg-[#f47272]',
    id: 'todayclothes',
    data: {
      title: 'Today Clothes',
      description: '오늘의 옷 추천 서비스',
      tags: ['패션', '추천', '스타일'],
      component: <TodayClothes />,
    },
  },
  {
    color: 'bg-[#d167f5]',
    id: 'todayscrum',
    data: {
      title: 'Today Scrum',
      description: '매일 스크럼을 기록하는 툴',
      tags: ['Agile', '스크럼', '팀워크'],
      component: <TodayScrum />,
    },
  },
]

export default PROJECTS

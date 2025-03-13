import { JSX } from 'react'
import GDG from './Gdg'
import Jinlo from './Jinlo'
import Ladi from './Ladi'
import TodayClothes from './TodayClothes'
import TodayScrum from './TodayScrum'
import Profile from './Profile'

export type CardData = {
  id: string
  title: string
  color: string
  description?: string
  imageUrl?: string
  tags?: string[]
  component: JSX.Element
  team: boolean
}

const PROJECTS = [
  {
    color: 'bg-[#ffb326]',
    id: 'Profile',
    title: 'Profile',
    description: '포트폴리오 서비스',
    tags: ['웹/앱', '반응형'],
    imageUrl: '/images/project/profile/home.png',
    component: <Profile />,
    team: false,
  },
  {
    color: 'bg-[#00C369]',
    id: 'jinlo',
    title: 'Jinlo',
    description: 'AI 기반 코드 리뷰 서비스',
    tags: ['앱', 'AI'],
    component: <Jinlo />,
    team: true,
  },
  {
    color: 'bg-[#9097C0]',
    id: 'gdg',
    title: 'GDG',
    description: 'Google Developer Group 기획자 캠프 마켓 서비스',
    imageUrl: '/images/project/gdg/logo.gif',
    tags: ['웹/앱', '플리마켓'],
    component: <GDG />,
    team: true,
  },
  {
    color: 'bg-[#1666DB]',
    id: 'ladi',
    title: 'Ladi',
    description: '라이프 디자이너 - 라디의 소개 페이지',
    imageUrl: '/images/project/ladi/logo.png',
    tags: ['웹/앱', '반응형'],
    component: <Ladi />,
    team: false,
  },
  {
    color: 'bg-[#f47272]',
    id: 'todayclothes',
    title: 'Today Clothes',
    description: 'AI를 활용한 오늘의 옷 추천 서비스',
    tags: ['AI', '웹/앱', '반응형'],
    component: <TodayClothes />,
    team: true,
  },
  {
    color: 'bg-[#d167f5]',
    id: 'todayscrum',
    title: 'Today Scrum',
    description: '프로젝트 관리 및 팀원간 소통을 위한 스크럼 서비스',
    tags: ['웹'],
    component: <TodayScrum />,
    team: true,
  },
]

export default PROJECTS

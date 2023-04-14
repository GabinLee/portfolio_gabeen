export type CareerDescriptionProps = {
  title: string
  period: string
  info: string
  tag: string[]
  participation?: {name: string, percentage: string}[]
  cont?: string[]
  skills: string[]
  img?: string
}

export const CareerDescriptionList: CareerDescriptionProps[] = [
  // {title: '셀러가드',
  //   info: 'Web, Mobile',
  //   tag: '셀러 안심 서비스 및 관리자 페이지',
  //   period: '2022.03 ~ 2022.04',
  //   skills: ['react', 'TypeScript', 'SCSS', 'HTML5']
  // },
  {title: 'Cashbook',
    period: '2022.03',  
    info: '가계부 프로그램',
    tag: ['Web'],
    participation: [{name: 'plan', percentage: '100%'}, {name: 'design', percentage: '100%'}, {name: 'publisher', percentage: '100%'}],
    skills: ['Electron', 'react', 'TypeScript', 'SCSS', 'HTML5']
  },
  {title: 'Squid Shell',
    period: '2022.08 ~ 2023.01',
    info: 'SSH 클라이언트 데스크톱 앱',
    tag: ['Web', '반응형'],
    img: 'images/project/squidshell.png',
    participation: [{name: 'publisher', percentage: '100%'}],
    skills: ['Electron', 'react', 'TypeScript', 'SCSS', 'HTML5']
  },
  {title: 'Paybill',
    period: '2022.08 ~ 2023.01',
    info: '배송 및 재고 관리 프로그램',
    tag: ['Web'],
    img: 'images/project/paybill.png',
    participation: [{name: 'plan', percentage: '40%'}, {name: 'design', percentage: '100%'}, {name: 'publisher', percentage: '100%'}],
    skills: ['react', 'SCSS', 'HTML5']
  },
  {title: '인더스팟',
    period: '2022.08 ~ 2022.11',
    info: '카테고리별 미션 참여를 통해 봉사활동이 가능한 학생 참여용 앱',
    tag: ['Web', '관리자 페이지'],
    img: 'images/project/inthespot.png',
    participation: [{name: 'publisher', percentage: '100%'}],
    skills: ['react', 'SCSS', 'HTML5']
  },
  {title: '쇼핑몰',
    period: '2022.07 ~ 2022.08',
    info: '입점형 쇼핑몰',
    tag: ['Web', 'Mobile', '적응형'],
    cont: ['header, footer, 메인 페이지 퍼블리싱 수정'],
    skills: ['CSS3', 'HTML5']
  },
  {title: '파인스페이스',
    period: '2022.07 ~ 2022.10',
    info: '공간 공유/대여 서비스',
    tag: ['Web', 'Mobile', '적응형'],
    participation: [{name: 'publisher', percentage: '100%'}],
    skills: ['Next.js', 'TypeScript', 'SCSS', 'HTML5'],
    img: 'images/project/pinespace.png'
  },
  {title: 'AVRO',
    period: '2022.04 ~ 2022.05',
    info: '회사 홈페이지',
    tag: ['Web', 'Mobile', '반응형'],
    img: 'images/project/avro.png',
    participation: [{name: 'design', percentage: '100%'}, {name: 'publisher', percentage: '100%'}],
    skills: ['CSS3', 'HTML5']
  },
  {title: 'Save',
    period: '2022.01 ~ 2022.04',
    info: '진행중인 캠페인의 좋아요를 통한 기부 참여 앱',
    tag: ['Web', '관리자 페이지'],
    img: 'images/project/save.png',
    participation: [{name: 'publisher', percentage: '100%'}],
    skills: ['react', 'TypeScript', 'SCSS', 'HTML5']
  },
  {title: '고르프',
    period: '2021.09 ~ 2022.11',
    info: '골프 레슨•예약 앱',
    tag: ['Mobile', '하이브리드 앱'],
    img: 'images/project/golf.png',
    participation: [{name: 'design', percentage: '80%'}, {name: 'publisher', percentage: '100%'}],
    skills: ['CSS3', 'HTML5']
  },
  {title: '트루원',
    period: '2021.03 ~ 2022.04',
    info: '토큰 충전/송금 앱',
    tag: ['Web', '관리자 페이지'],
    participation: [{name: 'publisher', percentage: '100%'}],
    skills: ['react', 'SCSS', 'HTML5']
  },
  {title: 'Algo',
    period: '2021.01 ~ 2021.06',
    info: '비대면 다이어트 레슨 앱',
    tag: ['Web', '관리자 페이지'],
    img: 'images/project/algo.png',
    participation: [{name: 'publisher', percentage: '100%'}],
    skills: ['react', 'TypeScript', 'SCSS', 'HTML5']
  },
  {title: '소장이지',
    period: '2019.12 ~ 2022.10',
    info: '소장 작성 서비스',
    tag: ['Web', 'Tablet', 'Mobile', '관리자 페이지'],
    img: 'images/project/sj-ez.png',
    participation: [{name: 'publisher', percentage: '100%'}],
    skills: ['react', 'TypeScript', 'SCSS', 'HTML5']
  },
  {title: 'SH Contents',
    period: '2019.11 ~ 2019.12',
    info: '회사 홈페이지',
    tag: ['Web', 'Tablet', 'Mobile', '반응형'],
    img: 'images/project/shcontents.png',
    participation: [{name: 'publisher', percentage: '100%'}],
    skills: ['vue.js', 'CSS3', 'HTML5']
  },
  {title: 'Fortriss',
    period: '2019.09 ~ 2020.01',
    info: '인스타그램의 스토리와 유사하게 여러가지 질문 작성이 가능하고 이에 응답하며 소통하는 SNS 앱',
    tag: ['Web', '관리자 페이지'],
    participation: [{name: 'publisher', percentage: '100%'}],
    skills: ['vue.js', 'CSS3', 'HTML5']
  },
  {title: '서퍼그라피',
    period: '2019.05 ~ 2022.08',
    info: '서핑 사진, 영상 판매 및 커뮤니티 앱',
    tag: ['Web', '관리자 페이지'],
    participation: [{name: 'publisher', percentage: '100%'}],
    skills: ['react', 'CSS3', 'HTML5'],
    img: 'images/project/surfergraphy.png'
  }
]
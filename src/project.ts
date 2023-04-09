export type Project = {
  title: string
  info?: string
  period: string
  img: string
  page?: string
  git?: string
  skills: string[]
}

export const ProjectList: Project[] = [
  // {title: '셀러가드', info: '셀러 안심 서비스 및 관리자 페이지', period: '2022.03 ~ 2022.04', img: '',
  //   skills: ['react', 'TypeScript', 'SCSS', 'HTML5']
  // },
  // {title: 'Cashbook', info: '가계부 프로그램', period: '2022.03', img: '',
  //   skills: ['Electron', 'react', 'TypeScript', 'SCSS', 'HTML5']
  // },
  {title: 'Squid Shell', info: 'SSH 클라이언트 데스크톱 앱', period: '2022.08 ~ 2023.01', img: 'images/project/squidshell.png',
    skills: ['Electron', 'react', 'TypeScript', 'SCSS', 'HTML5']
  },
  {title: 'Paybill', info: '배송 관리 프로그램', period: '2022.08 ~ 2023.01', img: 'images/project/paybill.png',
    skills: ['react', 'SCSS', 'HTML5']
  },
  {title: '인더스팟', info: '관리자 페이지', period: '2022.08 ~ 2022.11', img: 'images/project/inthespot.png',
  skills: ['react', 'SCSS', 'HTML5']
  },
  // {title: '쇼핑몰', info: '입점형 쇼핑몰', period: '2022.07 ~ 2022.08', img: '',
  //   skills: ['CSS3', 'HTML5']
  // },
  {title: '파인스페이스', info: '공간 공유/대여 서비스', period: '2022.07 ~ 2022.10', img: 'images/project/pinespace.png',
  skills: ['Next.js', 'TypeScript', 'SCSS', 'HTML5']
  },
  {title: 'AVRO', info: '회사 홈페이지', period: '2022.04 ~ 2022.05', img: 'images/project/avro.png',
    skills: ['CSS3', 'HTML5']
  },
  {title: 'Save', info: '관리자 페이지', period: '2022.01 ~ 2022.04', img: 'images/project/save.png',
    skills: ['react', 'TypeScript', 'SCSS', 'HTML5']
  },
  {title: '조우네트웍스', info: '회사 홈페이지', period: '2021.11 ~ 2021.12', img: 'images/project/jowoonetworks.png',
    skills: ['CSS3', 'HTML5']
  },
  {title: '고르프', info: '골프 레슨•예약 앱', period: '2021.09 ~ 2022.11', img: 'images/project/golf.png',
    skills: ['CSS3', 'HTML5']
  },
  // {title: '트루원', info: '관리자 페이지', period: '2021.03 ~ 2022.04', img: '',
  //   skills: ['react', 'SCSS', 'HTML5']
  // },
  {title: 'Algo', info: '관리자 페이지', period: '2021.01 ~ 2021.06', img: 'images/project/algo.png',
    skills: ['react', 'TypeScript', 'SCSS', 'HTML5']
  },
  {title: '소장이지', info: '소장 작성 웹 서비스 및 관리자 페이지', period: '2019.12 ~ 2022.10', img: 'images/project/sj-ez.png',
    page: 'https://sj-ez.com',
    skills: ['react', 'TypeScript', 'SCSS', 'HTML5']
  },
  {title: 'SH Contents', info: '회사 소개 페이지', period: '2019.11 ~ 2019.12', img: 'images/project/shcontents.png',
    skills: ['vue.js', 'CSS3', 'HTML5']
  },
  // {title: 'Fortriss', info: '관리자 페이지', period: '2019.09 ~ 2020.01', img: '',
  //   skills: ['vue.js', 'CSS3', 'HTML5']
  // },
  {title: '서퍼그라피', info: '관리자 페이지', period: '2019.05 ~ 2022.08', img: 'images/project/surfergraphy.png',
    skills: ['react', 'CSS3', 'HTML5']
  },
  {title: '관리자 페이지 템플릿', period: '', img: 'images/project/web-dashboard01.png',
    page: 'https://gabinlee.github.io/web-dashboard01',
    git: 'https://github.com/GabinLee/web-dashboard01/blob/master/src/views/Home.vue',
    skills: ['vue.js', 'CSS3', 'HTML5']
  },
  {title: 'Clone project', period: '', img: 'images/project/web06.png',
    page: 'https://gabinlee.github.io/web06',
    git: 'https://github.com/GabinLee/web06/blob/master/src/views/Home.vue',
    skills: ['vue.js', 'CSS3', 'HTML5']
  },
  {title: 'Clone project', period: '', img: 'images/project/web05.png',
    page: 'https://gabinlee.github.io/web05',
    git: 'https://github.com/GabinLee/web05/blob/master/src/views/Home.vue',
    skills: ['vue.js', 'CSS3', 'HTML5']
  },
  {title: 'Clone project', period: '', img: 'images/project/web04.png',
    page: 'https://gabinlee.github.io/web04',
    git: 'https://github.com/GabinLee/web04/blob/master/src/views/Home.vue',
    skills: ['vue.js', 'CSS3', 'HTML5']
  },
  {title: 'Clone project', period: '', img: 'images/project/web03.png',
    page: 'https://gabinlee.github.io/web03',
    git: 'https://github.com/GabinLee/web03/blob/master/src/views/Home.vue',
    skills: ['vue.js', 'CSS3', 'HTML5']
  },
  {title: 'Clone project', period: '', img: 'images/project/web02.png',
    page: 'https://gabinlee.github.io/web02',
    git: 'https://github.com/GabinLee/web02/blob/master/src/views/Home.vue',
    skills: ['vue.js', 'CSS3', 'HTML5']
  },
  {title: 'Clone project', period: '', img: 'images/project/web01.png',
    page: 'https://gabinlee.github.io/web01',
    git: 'https://github.com/GabinLee/web01/blob/master/src/views/Home.vue',
    skills: ['vue.js', 'CSS3', 'HTML5']
  },
  {title: 'Clone project', period: '', img: 'images/project/web-ms.png',
    page: 'https://gabinlee.github.io/web-ms',
    git: 'https://github.com/GabinLee/web-ms/blob/master/src/views/Main.vue',
    skills: ['vue.js', 'CSS3', 'HTML5']
  },
  {title: 'Clone project', period: '', img: 'images/project/web-kakao.png',
    page: 'https://gabinlee.github.io/web-kakao',
    git: 'https://github.com/GabinLee/web-kakao/blob/master/src/views/Home.vue',
    skills: ['vue.js', 'CSS3', 'HTML5']
  }
]
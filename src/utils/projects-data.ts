export type IProjecsDataInfos = {
  name: string
  description: string
  banner: string
  repo: string
  link: string
  tech: string[]
}

export const projecsData: IProjecsDataInfos[] = [
  {
    name: 'WS Cars',
    description:
      'Sistema simples para o estudo e desenvolvimento de um projeto com documentação técnica do componente utilizado o Storybook',
    banner: '/images/wscars-screen.png',
    repo: 'https://github.com/alexsolda/ws-cars',
    link: 'https://master.d29yn5wyfqkitr.amplifyapp.com/',
    tech: ['ReactJS', 'JavaScript', 'Storybook', 'Tailwind', 'TypeScript']
  },
  {
    name: 'Tripp',
    description:
      'Blog para compartilhar viagens. Aqui foram utilizados tecnologias de consulta como GraphQl para comunicaçõ com o CMS e o uso de SSR para gerar conteúdo estático e geração de páginas dinâmicas para um melhor SEO.',
    banner: '/images/tripp-screen.png',
    repo: 'https://github.com/alexsolda/tripp',
    link: 'https://tripp-blog.vercel.app/',
    tech: [
      'Next.js',
      'JavaScript',
      'GraphQl',
      'Tailwind',
      'Leaflet',
      'CMS',
      'TypeScript'
    ]
  },
  {
    name: 'Portfólio',
    description: 'Respositório deste portfólio.',
    banner: '/images/portfolio-screen.png',
    repo: 'https://github.com/alexsolda/portfolio',
    link: '',
    tech: ['Next.js', 'JavaScript', 'Tailwind', 'TypeScript']
  },
  {
    name: 'CNPJ Finder',
    description:
      'Campo para consulta de dados de CNPJ através de API pública. Projeto desenvolvido com o intuíto de fixar os conhecimentos de tecnologias como o Vue.js e o consumo de API de terceiros.',
    banner: '/images/cnpjfinder-screen.png',
    repo: 'https://github.com/alexsolda/cnpj-finder',
    link: 'https://cnpj-finder.netlify.app/',
    tech: ['Vue.js', 'CSS', 'HTML', 'JavaScript', 'Axios']
  }
]

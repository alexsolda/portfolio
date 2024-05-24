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
    name: 'CNPJ Finder',
    description:
      'Campo para consulta de dados de CNPJ através de API pública. Projeto desenvolvido com o intuíto de fixar os conhecimentos de tecnologias como o Vue.js e o consumo de API de terceiros.',
    banner: '/images/cnpjfinder-screen.png',
    repo: 'https://github.com/alexsolda/cnpj-finder',
    link: 'https://cnpj-finder.netlify.app/',
    tech: ['Vue.js', 'CSS', 'HTML', 'JavaScript', 'Axios']
  },
  {
    name: 'Tripp',
    description:
      'Blog para compartilhar viagens. Aqui foram utilizados tecnologias de consulta como GraphQl para comunicaçõ com o CMS e o uso de SSR para gerar conteúdo estático e geração de páginas dinâmicas para um melhor SEO.',
    banner: '/images/tripp-screen.png',
    repo: 'https://github.com/alexsolda/tripp',
    link: 'https://tripp-blog.vercel.app/',
    tech: ['Next.js', 'JavaScript', 'GraphQl', 'Tailwind', 'Leaflet', 'CMS']
  }
]

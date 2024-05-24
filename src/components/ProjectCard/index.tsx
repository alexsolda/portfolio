import { IProjecsDataInfos } from '@/utils/projects-data'
import Image from 'next/image'
import { ReactElement } from 'react'
import DividerBar from '../DividerBar'
import { Chip } from '@nextui-org/react'
import LinkBt from '../Buttons/LinkBt'
import { HiMiniCodeBracketSquare } from 'react-icons/hi2'
import { MdWeb } from 'react-icons/md'

type IProjectCardProps = {
  data: IProjecsDataInfos
}

export const ProjectCard = ({ data }: IProjectCardProps): ReactElement => {
  return (
    <div className="group ease-in duration-200 flex md:flex-row flex-col rounded-lg overflow-hidden relative">
      <div className="ease-in duration-100 group-hover:blur-sm relative w-[420px] h-[257px]">
        <Image
          src={data.banner}
          alt="Picture of the author"
          fill
          style={{
            objectFit: 'contain'
          }}
        />
      </div>
      <div className="ease-in duration-200 group-hover:blur-sm bg-black flex-1 p-4 flex flex-col gap-8">
        <div>
          <p className="text-xl font-bold">{data.name}</p>
          <p className="font-thin text-justify">{data.description}</p>
        </div>
        <DividerBar size="1" />
        <div className="flex flex-wrap gap-3">
          {data.tech.map((technology, idx) => (
            <Chip key={`key-${idx}`} className="bg-primary text-black">
              {technology}
            </Chip>
          ))}
        </div>
      </div>
      <div className="ease-in duration-200 flex items-center justify-center gap-3 group-hover:opacity-80 opacity-0 bg-black absolute top-0 left-0 bottom-0 right-0">
        <LinkBt text="Acessar" link={data.link} icon={<MdWeb size={30} />} />
        <LinkBt
          text="Código"
          link={data.link}
          icon={<HiMiniCodeBracketSquare size={30} />}
        />
      </div>
    </div>
  )
}

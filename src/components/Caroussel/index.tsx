import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import supabase from '../../services/supabase'

import 'swiper/css'
import 'swiper/css/navigation'
import Icon from '../Icon'

import * as S from './styles'

type Project = {
  id: number
  title: string
  description: string
  image: string
  techs: string[]
  linkRepository: string
  linkSite: string
}

const Caroussel = () => {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    const fetchProjects = async () => {
      let query = supabase.from('projects').select('*')

      query = query.eq('isMain', true)

      const { data, error } = await query
      if (error) {
        console.log(error)
        return
      }
      setProjects(data)
    }
    fetchProjects()
  }, [])
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop={true}
      slidesPerView={1}
    >
      {projects.map((project, key) => (
        <SwiperSlide key={key}>
          <S.CarrousselContainer>
            <S.ImageContainer>
              <S.CarrousselImage src={project.image} alt="Imagem do projeto" />
            </S.ImageContainer>
            <S.CarrousselInfo>
              <S.TitleCarrousel
                size="small"
                weight="bold"
                color="pinkPurpleGradient"
                center={false}
              >
                {project.title}
              </S.TitleCarrousel>
              <S.P>{project.description}</S.P>
              <S.ButtonContainer>
                <S.ButtonProject background="pinkColor" href={project.linkSite} target="_blank">
                  <Icon name="githubIcon" size={16} />
                  Build
                </S.ButtonProject>

                <S.ButtonProject
                  background="purpleColor"
                  href={project.linkRepository}
                  target="_blank"
                >
                  <Icon name="globeIcon" size={16} />
                  Repositorio
                </S.ButtonProject>
              </S.ButtonContainer>

              <S.TechIconsContainer>
                {project.techs.map((tech, index) => (
                  <Icon key={index} name={tech} size={24} />
                ))}
              </S.TechIconsContainer>
            </S.CarrousselInfo>
          </S.CarrousselContainer>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Caroussel

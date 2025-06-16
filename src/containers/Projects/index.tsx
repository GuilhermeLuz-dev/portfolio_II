import { forwardRef, useEffect, useState } from 'react'
import Title from '../../components/Title'
import Caroussel from '../../components/Caroussel'
import Filter from '../../components/Filter'
import CardProject from '../../components/CardProject'
import * as S from './styles'
import supabase from '../../services/supabase'

type Project = {
  id: number
  title: string
  description: string
  image: string
  techs: string[]
}

const Projects = forwardRef<HTMLElement>((props, ref) => {
  const [projects, setProjects] = useState<Project[]>([])
  const [selectedFilter, setSelectedFilter] = useState<string>('')

  useEffect(() => {
    const fetchProjects = async () => {
      let query = supabase.from('projects').select('*')
      if (selectedFilter && selectedFilter !== 'Todos') {
        query = query.eq('category', selectedFilter)
      }
      const { data, error } = await query
      if (error) {
        console.log(error)
        return
      }
      setProjects(data || [])
    }
    fetchProjects()
  }, [selectedFilter])

  const handleFilterChange = (value: string) => {
    setSelectedFilter(value)
  }

  return (
    <S.SectionProjects ref={ref} {...props}>
      <S.ContainerProjects>
        <Title color="pinkPurpleGradient" size="medium" weight="bold" center={true}>
          Projetos
        </Title>
        <Caroussel />
        <Filter value={selectedFilter} onChange={handleFilterChange} />
        <S.CardsContainer>
          {projects.map((project) => (
            <CardProject
              key={project.id}
              title={project.title || 'Sem título'}
              description={project.description || 'Sem descrição'}
              image={project.image || ''}
              techs={project.techs || []}
            />
          ))}
        </S.CardsContainer>
      </S.ContainerProjects>
    </S.SectionProjects>
  )
})

Projects.displayName = 'Projects'

export default Projects

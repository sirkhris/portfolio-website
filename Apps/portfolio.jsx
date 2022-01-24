import { projectData } from '../Data/projects';
import { ProjectCard } from '../components/project-card/project-card';

export function PortfolioApp() {
  return (
    <main>
      <div className='portfolio'>
        <h1 className='portfolio__title'>Projects</h1>
        <div className='portfolio__container'>
          {projectData
            .map((project) => (
              <ProjectCard
                key={project.id}
                image={project.image}
                title={project.title}
                description={
                  project.description.length > 200
                    ? project.description.slice(0, 163) + '...'
                    : project.description
                }
                site={project.site}
                repo={project.repo}
              />
            ))
            .reverse()}
        </div>
      </div>
    </main>
  );
}

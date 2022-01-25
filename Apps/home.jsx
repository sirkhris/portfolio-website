import Link from 'next/link';
import Image from 'next/image';
import { projectData } from '../Data/projects';
import { ProjectCard } from '../components/project-card/project-card';

export function HomeApp() {
  return (
    <main className=''>
      <div className='home__hero-container'>
        <Image
          src='/hero-image.JPG'
          alt=''
          layout='intrinsic'
          height={2160}
          width={3840}
        />
        <div className='home__intro'>
          <div className='home__intro-title'>Web Developer</div>
          <div className='home__intro-container'>
            <div className='home__intro-subtitle'>About me</div>
            <div className='home__description'>
              <p>
                Hello there! My name is Khris Rhodes. I am a Software Engineer
                graduate from Utah Valley University. My very first language was
                C# but I found that I really enjoy programming in JavaScript and
                I enjoy web development. So far I am proficient in the following
                skills: C#, JavaScript, Node.js, HTML, and CSS. Currently I am
                learning more about React and Next.js.
              </p>
              <br />
              <p>
                Feel free to contact to reach out to me. Thank you for visiting
                my website!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='home__section-filler' />
      <div className='home__section'>
        <div className='home__section-subtitle'>Portfolio</div>
        <div className='home__section-container'>
          <div className='home__section-description'>
            Here are a few projects that I've done recently. To observe all
            projects that I've done &rarr;
            <Link href='/Portfolio' passHref>
              <div className='home__button'>Visit Here</div>
            </Link>
          </div>
        </div>
        <div className='home__section-display'>
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
            .reverse()
            .splice(0, 3)}
        </div>
      </div>

      <div className='home__section-filler' />
    </main>
  );
}

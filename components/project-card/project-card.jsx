import Link from 'next/link';
import Image from 'next/image';

export function ProjectCard({ image, title, description, site, repo }) {
  return (
    <div className='portfolio__card'>
      <div className='portfolio__image'>
        <Image
          src={image}
          alt=''
          layout='intrinsic'
          height={900}
          width={1600}
        />
      </div>
      <div className='portfolio__card-container'>
        <div className='portfolio__card-title'>{title}</div>
        <p className='portfolio__description'>{description}</p>
        <div className='portfolio__centerer'>
          <a href={`${site}`} target='_blank' rel='noreferrer'>
            <div className='portfolio__button'>Website</div>
          </a>
          {repo != '' ? (
            <a href={`${repo}`} target='_blank' rel='noreferrer'>
              <div className='portfolio__button'>Repo</div>
            </a>
          ) : (
            <div className='portfolio__button-dud'>No Repo</div>
          )}
        </div>
      </div>
    </div>
  );
}

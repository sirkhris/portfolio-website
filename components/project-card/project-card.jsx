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
          <Link href={`${site}`}>
            <div className='portfolio__button'>Website</div>
          </Link>
          <Link href={`${repo}`}>
            <div className='portfolio__button'>Repo</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

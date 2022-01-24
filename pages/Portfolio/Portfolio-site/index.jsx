import Link from 'next/link';

function PortfolioSitePage() {
  return (
    <main>
      <div>Portfolio Site / khrisrhodes.com</div>
      <div className='imageContainer'>This is an image</div>
      <article className='container'>
        <div className='description'></div>
        <ul className='techDescription'>
          <li>
            <div className='techIcon'></div>
            <p>JavaScript</p>
          </li>
          <li>
            <div className='techIcon'></div>
            <p>React</p>
          </li>
          <li>
            <div className='techIcon'></div>
            <p>Next.js</p>
          </li>
          <li>
            <div className='techIcon'></div>
            <p>Sass</p>
          </li>
        </ul>
      </article>
      <div className='container'>
        <div className='projectLinks'>
          <div className='button'>
            <Link href='/'>Live Site</Link>
          </div>
          <div className='button'>
            <a href=''>Github Repo</a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PortfolioSitePage;

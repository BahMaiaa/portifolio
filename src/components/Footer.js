import logo from '../assets/logo-dev.svg';

import github from '../assets/github.svg';
import twitter from '../assets/twitter.svg';
import linkedin from '../assets/linkedin.svg';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <footer className='mt-40 mb-10 overflow-hidden'>
            <div className='flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 '>
                <div className='flex-1'>
                    <img src={logo} alt='Footer' />
                </div>
                <div className='space-x-10 mr-0 md:mr-20 text-center flex-col md:flex-row md:flex'>
                    <span className='text-secondary text-xl block'>(11) 914629246</span>
                    <span className='text-secondary text-xl block'>bahmmaia@gmail.com</span>
                </div>

                <div className='flex items-center gap-6 '>
                    <a href='https://github.com/thiago-dev-front' target='_blank' rel="noreferrer">
                        <img src={github} alt="github" />
                    </a>
                    <a href='/'>
                        <img src={twitter} alt="twitter" />
                    </a>
                    <a href='https://www.linkedin.com/in/thiago-di%C3%B3genes-18804291/' target='_blank' rel="noreferrer">
                        <img src={linkedin} alt="linkedin" />
                    </a>

                </div>
            </div>

            <hr className="border-t border-darkMode my-8" />

            <div className='flex flex-col md:flex-row items-center justify-between'>
                <nav>
                    <ul className='flex  flex-col md:flex-row items-center gap-5'>

                        <li>
                            <Link className='text-heading text-gradient text-xl' to="/contato">Contato</Link>
                        </li>
                    </ul>
                </nav>
                <div>
                    <p className='text-secondary text-xl max-w-[280px] md:max-w-full mt-6 md:mt-0'>Desenvolvido e construído por <span className='text-white'>Bárbara Maia</span> com <span className='text-white'>Amor</span> & <span className='text-white'>Café</span></p>
                </div>
            </div>
        </footer>

    );
}

export default Footer; 
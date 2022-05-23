import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './style.css';

function Navbar() {

    return (
        <header>
            <nav className='container'>
                <div className='am-nav-conteiner'>
                    <h1>AlvesMovie</h1>
                    <a href="https://github.com/alvesgleibson">
                        <div className="am-contact-container">
                            <GithubIcon />
                            <p className="am-contact-link">/GleibsonAlves</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>


    );

}

export default Navbar;
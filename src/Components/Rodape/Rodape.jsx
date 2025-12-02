import "./Rodape.css"
import LinkedinIcon from './assets/linkedin.png'
import GithubIcon from './assets/github.png'
import Logo from './assets/logo.png'

export function Rodape () {
    return (
        <footer className="footer">
            <section>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/leonardo-lucas-de-oliveira-7338b8239/"
                        target="_blank">
                            <img src={LinkedinIcon} alt="" />
                        </a>
                    </li>

                    <li>
                        <a href="https://github.com/Leonardolucas09"
                        target="_blank">
                            <img src={GithubIcon} alt="" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src={Logo} alt="" />
            </section>
            <section>
                <p>Desenvolvido por Alura.</p>
                <p>Redesign por Leonardo Lucas de Oliveira.</p>
            </section>
        </footer>
    )
}
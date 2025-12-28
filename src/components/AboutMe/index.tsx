import { Link } from "react-router-dom";
import CV from '../../assets/cv.pdf';

export const AboutMe = () => {
  return (
    <section>
      <div>
        <h2>Sobre Mim</h2>
      </div>

      {/* <div>
        <figure>
          <img src="" alt="" />
        </figure>
      </div> */}

      <div>
        <p>
          <strong>Olá! Me chamo Tiago Silva e sou um desenvolvedor frontend em formação, apaixonado por criar interfaces intuitivas e responsivas!</strong>
          Sempre fui fascinado por tecnologia e, hoje, estou realizando esse sonho por meio do curso DevQuest — uma formação reconhecida pelo MEC que oferece mentoria e suporte de qualidade.
        </p>

        <p>
          Tenho experiência em projetos pessoais, nos quais pude aplicar e aprimorar meus conhecimentos em desenvolvimento. Neles, trabalhei conceitos de acessibilidade, responsividade e design visual, sempre buscando entregar interfaces funcionais e bem estruturadas. Esses projetos me permitiram evoluir como desenvolvedor e reforçaram minha motivação em criar soluções que realmente façam diferença.
        </p>
        <p>
          Estou sempre me desafiando com novos projetos e participando de comunidades de programação, onde busco feedback de outros desenvolvedores e também compartilho o que já aprendi. Acredito que crescer em comunidade torna o aprendizado mais rico e significativo. 😁
        </p>
        <button>
          <Link to={CV} target='_blank' rel="noopener noreferrer">Veja meu CV</Link>
        </button>
        
      </div>
    </section>
  )
}
import { obtenerIcono } from "../../../helpers/obtenerIcono"
import './habilidades.css'

const Habilidades = ({tecnologias}) => {
    // const tecs = [...new Set(proyectos.flatMap(p => p.tecnologias))]
    // console.log(tecs.join('", "'))
    // console.log(tecnologias)

    return (
        <section className="habs">
            <h2>Tecnologías y habilidades</h2>
            <ul className="tecnologias-lista">
                {tecnologias.map((tec) => (
                    <li key={tec} className="tecnologia-item">
                        <span className="tec" title={tec}>
                            <i className={`devicon-${obtenerIcono(tec)}-plain colored`}></i>
                            <small>{tec}</small>
                        </span>
                    </li>
                ))}
            </ul>
        </section>

    )
}

export default Habilidades

import { obtenerIcono } from "../../../helpers/obtenerIcono"

const Habilidades = ({tecnologias}) => {
    // const tecs = [...new Set(proyectos.flatMap(p => p.tecnologias))]
    // console.log(tecs.join('", "'))
    // console.log(tecnologias)

    return (
        <section className="">
            <h2>Tecnologías y habilidades:</h2>
            <ul style={{display: "flex", flexWrap: "no-wrap", justifyContent:"space-evenly",  gap: "10px", listStyle: "none", padding: "0", overflowX: "auto", maxwidth: "200vw"}}>
                {
                tecnologias.map( tec => (
                    <li key={tec} 
                        style={{display: "block", padding: "15px", border: "1px solid #888", borderRadius: "5px", width: "80px", height: "70px", textAlign: "center", textWrap: "wrap", }}>
                        <span className="tec" title={tec} >
                            <i className={`devicon-${obtenerIcono(tec)}-plain colored`}></i>
                            <br />
                            <code> {tec}</code>
                        </span>
                    </li>)
                    )
                }            
            </ul>
        </section>
    )
}

export default Habilidades

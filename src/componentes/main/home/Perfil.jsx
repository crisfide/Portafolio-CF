export const Perfil = ( {sobreMi:{titulo,descripcion}} ) => {
  return (
    <section className="perfil">
      <div>
        <h1>{titulo}</h1>
        <p>{descripcion}</p>
        <br />
        <a href="assets/cv_Christian_Fidelio.pdf" target="_blank" rel="noopener noreferrer" className="btn">Descargar CV</a>

      </div>
      <div>
        <figure>
          <img src="assets/fotoPerfil.jpg" alt="Foto de Christian Fidelio" />
        </figure>
      </div>

    </section>
  );
};

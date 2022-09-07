
import "../styles/layout.css"

const HomePage =(props) => {
    return (
         <div>
             <div>
        <img class="responsive-img" src="img/home/img01.jpg"  alt="portada canal"/>

             </div>
         <div className="columnas">
            <section className="bienvenidos">
        <h2>Bienvenidos</h2>
        <p> Esta es la Biblioteca de Alejandria, canal en el que podrás descubrir una manera diferente de ver contenido adusiovisual.
          Puedes suscribirte apretando el botón de la derecha, también puedes visitarnos en: <a  href="https://www.youtube.com/channel/UCs2_K9DtBOFO-YA8bEXejqA" target="_blank">Biblioteca de Alejandría</a>
        </p>
            </section>

            <section className="testimonios">
            <h2>SUSCRÍBETE!</h2>
            
              <div class="testimonio">
                <span class="cita"><a href="https://www.youtube.com/channel/UCs2_K9DtBOFO-YA8bEXejqA" target="_blank" >YOUTUBE</a></span>
                <span class="autor"><a href="https://www.twitch.tv/bibliotecaalejandria target=" target="_blank">TWITCH</a></span>
              </div>
            </section>

        </div>       



         </div>
    );
}

export default HomePage;
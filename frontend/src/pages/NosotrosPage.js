import "../styles/NosotrosPage.css"



const NosotrosPage =(props) => {
    return (
         <div >
            <div className="historia">
        <h2>Historia</h2>
        <p>La biblioteca de Alejandría comenzó siendo un proyecto pequeño, apenas unos videos de análisis de uno o dos personajes que sentíamos, necesitaban una reseña</p>
        <p>Con el tiempo el proyecto fué creciendo, más y más gente comenzó a sumarse como suscriptores y decidimos ampliar el personal.</p>
      </div>
      <div class="staff">
        <h2>staff</h2>
        <div class="personas">
          
          <div class="persona">
            <img src="img/nosotros/pose1.png" alt="Juan Gomez"/>
            <h5>Ale</h5>
            <h6> Narrador</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, qui iusto recusandae corrupti obcaecati aliquid reprehenderit ea temporibus in, itaque consectetur eaque unde! Fugit magni placeat obcaecati doloremque impedit illo!</p>
          </div>   
       
          <div class="persona">
            <img src="img/nosotros/pose2.png" alt="Juan Gomez"/>
            <h5>Ale</h5>
            <h6>Editor</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, qui iusto recusandae corrupti obcaecati aliquid reprehenderit ea temporibus in, itaque consectetur eaque unde! Fugit magni placeat obcaecati doloremque impedit illo!</p>
          </div>

          <div class="persona">
            <img src="img/nosotros/pose3.png" alt="Juan Gomez"/>
            <h5>Ale</h5>
            <h6> Guionista</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, qui iusto recusandae corrupti obcaecati aliquid reprehenderit ea temporibus in, itaque consectetur eaque unde! Fugit magni placeat obcaecati doloremque impedit illo!</p>
          </div>

          <div class="persona">
            <img src="img/nosotros/pose4.png" alt="Juan Gomez"/>
            <h5>Otra vez Ale</h5>
            <h6> miniaturero</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, qui iusto recusandae corrupti obcaecati aliquid reprehenderit ea temporibus in, itaque consectetur eaque unde! Fugit magni placeat obcaecati doloremque impedit illo!</p>
          </div>
        </div>
        
      
      </div>



         </div>
    );
}

export default NosotrosPage;
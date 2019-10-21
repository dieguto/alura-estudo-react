import React from 'react';
import Header from './components/Header'


function App() {
  return (
    <div id="root">
    <div className="main">

    <Header></Header>

      <div className="fotos container">
        <div className="foto">
          <header className="foto-header">
            <figure className="foto-usuario">
              <img src="https://avatars0.githubusercontent.com/u/44759538?s=400&u=f30fb21ad473f32f35d4eaa170fd83a5410bc997&v=4" alt="foto do usuario"/>
              <figcaption className="foto-usuario">
                <a href="#">
                  alots
                </a>  
              </figcaption>
            </figure>
            <time className="foto-data">03/10/2016 20:13</time>
          </header>

          <img alt="foto" className="foto-src" src="https://avatars0.githubusercontent.com/u/44759538?s=400&u=f30fb21ad473f32f35d4eaa170fd83a5410bc997&v=4"/>

          <div className="foto-info">
            <div className="foto-info-likes">

              <a href="#">
                alots_ssa
              </a>

              ,

              <a href="#">
                rafael_rollo
              </a> 

               curtiram
           
            </div>

            <p className="foto-info-legenda">
              <a className="foto-info-autor">autor </a>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, illo?
            </p>

            <ul className="foto-info-comentarios">
              <li className="comentario">
                <a className="foto-info-autor">seguidor </a>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem ad, molestiae.
              </li>
              <li className="comentario">
                <a className="foto-info-autor">seguidor </a>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt cumque earum molestias voluptatem modi nihil sit magnam ratione eveniet distinctio magni error asperiores dignissimos tempora expedita, laborum ex soluta hic maiores veritatis deserunt.
              </li>
              <li className="comentario">
                <a className="foto-info-autor">seguidor </a>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum laudantium quae ab fuga odio delectus maiores voluptatibus sit commodi quidem.
              </li>
            </ul>
          </div>


          <section className="fotoAtualizacoes">
            <a href="#" className="fotoAtualizacoes-like">Likar</a>
            <form className="fotoAtualizacoes-form">
              <input type="text" placeholder="Adicione um comentário..." className="fotoAtualizacoes-form-campo"/>
              <input type="submit" value="Comentar!" className="fotoAtualizacoes-form-submit"/>
            </form>

          </section>





        </div> 

      </div>
    </div> 
  
  </div> 

  );
}

export default App;

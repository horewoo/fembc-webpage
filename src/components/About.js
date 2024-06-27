import Link from "next/link";

const About = () => {
  return (
    <>
      <section className="about-section" id="about-section">
        <div className="about-header">
          <h3 className="h-color">Cáracteristicas de FembCord:</h3>
        </div>
        <div className="about-container">
          <div className="about-card">
            <div>
              <h4 className="h-color">🌻 Personajes</h4>
              <p className="p-color">
                Más de 100 personajes para utilizar, coleccionar y jugar.
              </p>
              <hr />
            </div>
            <div>
              <h4 className="h-color">🍭 Encendido 24/7</h4>
              <p className="p-color">
                Nos comprometemos a que el bot esté encendido todo
el día todos los días para que lo utilices cuando quieras.
              </p>
              <hr />
            </div>
            <div>
              <h4 className="h-color">🍓 Nuevos personajes</h4>
              <p className="p-color">
                Nuevos personajes con cada actualización.
              </p>
              <hr />
            </div>
          </div>
        </div>
        <p>
          <Link href="/commands" className="h-color no-decoration">
            Ve como se ve en utilización. &rarr;
          </Link>
        </p>

        <section className="about-stats">
          <div className="about-stats-card">
            <h4 className="h-color">100+</h4>
            <p className="p-color">Servidores</p>
          </div>
          <div className="about-stats-card">
            <h4 className="h-color">300+</h4>
            <p className="p-color">Personajes repartidos</p>
          </div>
          <div className="about-stats-card">
            <h4 className="h-color">100+</h4>
            <p className="p-color">Personajes</p>
          </div>
        </section>
      </section>
    </>
  );
};

export default About;

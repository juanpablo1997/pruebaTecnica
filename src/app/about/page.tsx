import "@/app/learnmore/learnmore.scss"

const About = () => {
  return (
    <div className="container">
      <h3>Acerca de la prueba</h3>
      <p>
        El objetivo de este apartado es presentar un breve resumen sobre el desarrollo de esta prueba. Se trabajaron cerca de 16 horas en la costrucción del sitio. Se presentaron inconvenientes relacionados con Next pero fueron resueltos. Al momento de realizar la prueba no se contaba con conocimientos en Next, Material UI y SASS. La metodología que implementó para realizar la prueba fue investifar sobre los temas antes mencionados, se hallaron 3 videos que sirvieron como base para construir la prueba, se hacen adaptaciones y mejoras. El sitio está compuesto por una página principal, un botón que lleva a la descripción de los criterios de aceptación expuestos en el documento PDF, un botón que lleva a una página que consume una API con el metodo GET, esta expone una lista de personajes de una serie y al amberso de cada tarjeta tiene la opción de ir a otra página, para obtener más información acerca de él, cuenta con un páginador y animaciones para dar un poco más de movimiento. Se usa Next para crear el proyeto y aprovechar su fácilidad de enrutar las páginas. Con Material se customiza y se agregan estilos desde su documentación, y se usa SASS para estilizar las tarjetas y otros componentes, también se usa Typescript y para tipar algunos componenetes y modular algunas funcionalidades.

        Gracias.
      </p>
    </div>
  )
}

export default About
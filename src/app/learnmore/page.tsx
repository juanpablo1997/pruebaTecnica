'use client'

import "@/app/learnmore/learnmore.scss"

const ReadMore: React.FC<{}> = () => {
  return (
    <div className="container">
      <h3>Especificaciones de la prueba Técnica</h3>
      <p>
        Desarrollar una aplicación web utilizando React.js con Next.js,
        Material-UI (MUI), SASS y TypeScript que consuma datos de una API REST
        pública y presente estos datos de manera interactiva y visualmente
        atractiva al usuario.
      </p>
      <ol>
        <li>
          <h4>Configuración del Proyecto:</h4>
          <p>
            - Utilizar Next.js como framework y TypeScript para el desarrollo.
          </p>
          <p>- Configurar SASS para la gestión de estilos.</p>
          <p>- Integrar Material-UI (MUI) como framework de componentes UI.</p>
        </li>
        <li>
          <h4>Consumo de API REST:</h4>
          <p>
            - Elegir una API REST pública (ejemplo: JSONPlaceholder, The Dog
            API).
          </p>
          <p>
            - Realizar al menos una petición GET y una petición POST a la API.
          </p>
          <p>- Gestionar los estados de carga y errores al consumir la API.</p>
        </li>
        <li>
          <h4>Componentes y Visualización:</h4>
          <p>
            - Crear componentes React funcionales y reutilizables utilizando
            TypeScript.
          </p>
          <p>
            - Implementar un diseño responsivo y atractivo, utilizando MUI y
            SASS.
          </p>
          <p>
            - Presentar los datos obtenidos de la API de manera clara y
            organizada.
          </p>
        </li>
        <li>
          <h4>Interactividad:</h4>
          <p>
            - Implementar funcionalidades interactivas (ej. filtrado, búsqueda,
            paginación) basadas en los datos obtenidos de la API.
          </p>
        </li>
        <li>
          <h4>Rutas y Navegación:</h4>
          <p>
            - Utilizar el sistema de rutas de Next.js para crear múltiples
            páginas y navegación entre ellas.
          </p>
        </li>
        <li>
          <h4>SEO y Rendimiento:</h4>
          <p>- Asegurar que la aplicación sea SEO amigable.</p>
          <p>
            - Implementar prácticas para optimizar el rendimiento de la
            aplicación.
          </p>
        </li>
        <li>
          <h4>Documentación:</h4>
          <p>
            - Incluir un archivo README.md con instrucciones sobre cómo instalar
            y ejecutar el proyecto, así como una descripción de las
            funcionalidades implementadas.
          </p>
          <p>Criterios de Evaluación:</p>
          <p>- Uso efectivo de TypeScript, MUI y SASS</p>
          <p>
            - Calidad del código (limpieza, organización, uso de buenas
            prácticas).
          </p>
          <p>
            - Funcionalidad (cumplimiento de los requisitos, manejo de errores).
          </p>
          <p>- Diseño y experiencia de usuario.</p>
          <p>- Eficiencia en el consumo de la API y manejo de datos.</p>
          <p>- Documentación y facilidad para poner en marcha el proyecto.</p>
        </li>
      </ol>
    </div>
  );
};

export default ReadMore;

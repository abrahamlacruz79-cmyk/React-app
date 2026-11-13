import React from 'react'

export const PrimerComponente = () => {
  return (
    <section>
      <div>
        <h2>Primer Componente</h2>
        <p>Este es el primer componente de React.</p>
        <h3>3 ventajas de usar React principalmente:</h3>
        <ul>
          <li>Reutilización: Si creas un botón bonito, no tienes que volver a programarlo cada vez que lo necesites; simplemente agarras ese "bloque" y lo usas las veces que quieras en toda la página.</li>
          <li>Interactividad fluida: Cuando haces clic en algo en una página hecha con React (como dar "Me gusta" a una publicación), la página no se recarga por completo. Solo se actualiza al instante esa pequeña cajita o número, haciendo que se sienta tan rápida como una aplicación de celular.</li>
          <li>Orden y limpieza: Te ayuda a tener tu código separado en archivos pequeños y ordenados (un archivo para la barra, otro para el menú, etc.), lo que hace que sea mucho más fácil encontrar errores y trabajar en equipo.</li>
        </ul>
      </div>
    </section>
  )
}
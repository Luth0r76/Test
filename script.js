// Función para listar y cargar archivos de la carpeta de preguntas
function cargarArchivosPreguntas() {
    const selector = document.getElementById('selectorPreguntas');

    // Rutas absolutas para GitHub Pages
    const archivos = [
        '/Test/preguntas/preguntas1.js',
        '/Test/preguntas/preguntas2.js',
        '/Test/preguntas/preguntas3.js' // Agrega más archivos según los que tengas
    ];

    // Llenar el selector con los archivos disponibles
    archivos.forEach((archivo, index) => {
        const option = document.createElement('option');
        option.value = archivo;
        option.textContent = `Preguntas ${index + 1}`;
        selector.appendChild(option);
    });
}

// Función para cargar el archivo de preguntas seleccionado
function cargarPreguntas() {
    const selector = document.getElementById('selectorPreguntas');
    const archivoSeleccionado = selector.value;

    // Limpiar cualquier script de preguntas previo
    const oldScript = document.querySelector('#preguntasScript');
    if (oldScript) {
        oldScript.remove();
    }

    // Crear y cargar el nuevo script
    const scriptPreguntas = document.createElement('script');
    scriptPreguntas.src = archivoSeleccionado;
    scriptPreguntas.id = 'preguntasScript';  // ID para luego poder eliminarlo
    document.head.appendChild(scriptPreguntas);

    // Limpiar el test anterior y mostrar las nuevas preguntas
    document.getElementById('test').innerHTML = '';
    mostrarTest();
}

// Cargar los archivos de preguntas cuando la página cargue
window.onload = function() {
    cargarArchivosPreguntas();
    mostrarTest(); // Muestra el test inicial con el primer archivo por defecto
};

const preguntasMezcladas = [
    {
        "pregunta": "¿Cuál es el objeto de la ley según el Artículo 1?",
        "opciones": ["Regular la Policía de los puertos", "Clasificar los puertos de competencia estatal", "Proteger los recursos humanos", "Establecer tasas de actividad portuaria"],
        "correcta": "Clasificar los puertos de competencia estatal"
    },
    {
        "pregunta": "¿Qué se entiende por puerto marítimo según el Artículo 2?",
        "opciones": ["Instalaciones para actividades pesqueras", "Conjunto de espacios y aguas para operaciones de tráfico", "Zonas de recreo náutico", "Infraestructura para el avituallamiento de buques"],
        "correcta": "Conjunto de espacios y aguas para operaciones de tráfico"
    },
    {
        "pregunta": "¿Cuál es la responsabilidad de la Administración General del Estado en relación a los puertos según el Artículo 11?",
        "opciones": ["Elaborar planes de negocio", "Realizar la gestión operativa de los puertos", "Asignar competencias a las Comunidades Autónomas", "Ejercer la competencia exclusiva sobre puertos de interés general"],
        "correcta": "Ejercer la competencia exclusiva sobre puertos de interés general"
    },
    {
        "pregunta": "¿Qué tipo de instalaciones se consideran portuarias según el Artículo 2?",
        "opciones": ["Solo muelles y fondeaderos", "Cualquier infraestructura destinada a facilitar tráfico portuario", "Únicamente centros comerciales", "Almacenes de mercancías"],
        "correcta": "Cualquier infraestructura destinada a facilitar tráfico portuario"
    },
    {
        "pregunta": "Según el Artículo 66, ¿cuál es el modelo de gestión del dominio público portuario estatal?",
        "opciones": ["Gestión pública sin participación privada", "Orientada a promover la participación de la iniciativa privada", "Control total por parte del Gobierno", "Exclusivamente bajo administración local"],
        "correcta": "Orientada a promover la participación de la iniciativa privada"
    },
    {
        "pregunta": "¿Qué se entiende por tráficos sensibles según el Artículo 3 bis?",
        "opciones": ["Tráficos de mercancías peligrosas", "Tráficos regulares que contribuyen al desarrollo", "Tráficos esporádicos de menores dimensiones", "Tráficos de carga y descarga sin regularidad"],
        "correcta": "Tráficos regulares que contribuyen al desarrollo"
    },
    {
        "pregunta": "¿Cómo deben ser las instalaciones de manipulación en el dominio público portuario según el Artículo 10?",
        "opciones": ["No necesitan autorización", "Deben contar con medidas de prevención de contaminación", "Son opcionales según el tipo de mercancía", "Exclusivamente para operaciones de carga"],
        "correcta": "Deben contar con medidas de prevención de contaminación"
    },
    {
        "pregunta": "¿Qué tipo de servicios portuarios se mencionan en el Artículo 108?",
        "opciones": ["Servicios administrativos", "Servicios técnico-náuticos y manipulación de mercancías", "Solo servicios de seguridad", "Servicios de marketing y comercialización"],
        "correcta": "Servicios técnico-náuticos y manipulación de mercancías"
    },
    {
        "pregunta": "¿Cuál es el régimen de bonificaciones según el Artículo 191?",
        "opciones": ["No se aplican bonificaciones", "El importe total no puede ser superior al 20% de la recaudación anual", "Son indefinidas en su aplicación", "Se aplican solo a tráfico internacional"],
        "correcta": "El importe total no puede ser superior al 20% de la recaudación anual"
    },
    {
        "pregunta": "¿Qué constituye una infracción grave según el Artículo 306?",
        "opciones": ["Acciones con bajo impacto en el tráfico marítimo", "Incumplimiento de las ordenanzas establecidas", "Descuido leve en la manipulación de mercancías", "Acciones de menor impacto económico"],
        "correcta": "Incumplimiento de las ordenanzas establecidas"
    },
    {
        "pregunta": "Según el Artículo 305, ¿cómo se clasifican las infracciones administrativas?",
        "opciones": ["Leves y muy leves", "Leves, graves y muy graves", "Por tipo de actividad", "Por impacto ambiental"],
        "correcta": "Leves, graves y muy graves"
    },
    {
        "pregunta": "¿Qué se requiere para la prestación de servicios portuarios según el Artículo 109?",
        "opciones": ["Certificación de calidad", "Obtención de la correspondiente licencia", "Aprobación del Gobierno local", "Revisión anual por la Autoridad Portuaria"],
        "correcta": "Obtención de la correspondiente licencia"
    },
    {
        "pregunta": "¿Qué papel juega el Ministerio de Fomento en los puertos según el Artículo 12?",
        "opciones": ["Control total de la gestión administrativa", "Ejerce la competencia de la Administración General del Estado", "Promueve únicamente actividades privadas", "Delegación de funciones a las Comunidades Autónomas"],
        "correcta": "Ejerce la competencia de la Administración General del Estado"
    },

    {
        "pregunta": "¿Cuál es el máximo de horas semanales de la jornada de trabajo general?",
        "opciones": ["35 horas", "37 horas", "40 horas", "30 horas"],
        "correcta": "37 horas"
    },
    {
        "pregunta": "¿Qué se establece en un Comité de Seguridad y Salud?",
        "opciones": ["Se reúne mensualmente", "Es exclusivamente Sindical", "Es paritario", "No tiene presidente"],
        "correcta": "Es paritario"
    },
    {
        "pregunta": "¿Cuánto tiempo se permite un contrato temporal según el convenio?",
        "opciones": ["Hasta 6 meses", "Hasta 12 meses", "Hasta 18 meses", "Hasta 24 meses"],
        "correcta": "Hasta 12 meses"
    },
    {
        "pregunta": "¿Cuál es el mínimo de días de vacaciones que debe comunicarse con antelación?",
        "opciones": ["1 mes", "1 semana", "2 meses", "3 meses"],
        "correcta": "2 meses"
    },
    {
        "pregunta": "¿Cómo se clasificarán las faltas disciplinarias?",
        "opciones": ["Leves, moderadas y graves", "Leves, graves y muy graves", "Leves y muy graves", "Solo graves"],
        "correcta": "Leves, graves y muy graves"
    },

    {
        "pregunta": "¿Cuál es el objeto de la Ley de Puertos?",
        "opciones": ["Determinar y clasificar los puertos", "Proporcionar beneficios económicos a las comunidades", "Regular la venta de billetes de barco", "Fomentar el turismo en los puertos"],
        "correcta": "Determinar y clasificar los puertos"
    },
    {
        "pregunta": "¿Qué se considera un puerto marítimo según la ley?",
        "opciones": ["Un lugar con acceso a vías rápidas", "Un conjunto de espacios terrestres, aguas marítimas e instalaciones", "Una zona de pesca comercial exclusiva", "Una instalación de carga y descarga de mercancías"],
        "correcta": "Un conjunto de espacios terrestres, aguas marítimas e instalaciones"
    },
    {
        "pregunta": "¿Qué se regula en la Ley de Marina Mercante?",
        "opciones": ["La seguridad alimentaria", "La regulación del tráfico marítimo", "La planificación del sistema educativo", "La administración de los recursos naturales"],
        "correcta": "La regulación del tráfico marítimo"
    },
    {
        "pregunta": "¿Cuál es el objetivo del régimen económico-financiero en el sistema portuario?",
        "opciones": ["Aumentar las tarifas de los servicios", "Promover la participación de la iniciativa privada", "Reducir el número de trabajadores portuarios", "Proporcionar subsidios a las comunidades autónomas"],
        "correcta": "Promover la participación de la iniciativa privada"
    },
    {
        "pregunta": "¿Qué caracteriza al sistema portuario de titularidad estatal?",
        "opciones": ["El control exclusivo por parte de empresas privadas", "La gestión bajo criterios de rentabilidad y eficiencia", "La prohibición de servicios a terceros", "La falta de regulación en tarifas portuarias"],
        "correcta": "La gestión bajo criterios de rentabilidad y eficiencia"
    },
    {
        "pregunta": "¿Cómo deben ser las licencias para la prestación de servicios portuarios?",
        "opciones": ["Otorgadas sin requisitos", "Regladas y acreditadas según la ley", "Para servicios exclusivos únicamente", "Sin necesidad de renovación"],
        "correcta": "Regladas y acreditadas según la ley"
    },
    {
        "pregunta": "¿Qué tipo de infracciones se tipifican en el régimen sancionador?",
        "opciones": ["Infracciones administrativas leves y muy graves", "Infracciones solo en el ámbito privado", "Infracciones de tráfico terrestre", "Infracciones exclusivamente económicas"],
        "correcta": "Infracciones administrativas leves y muy graves"
    },
    {
        "pregunta": "¿Cuál es la finalidad del régimen sancionador?",
        "opciones": ["Regular la construcción de nuevos puertos", "Sancionar acciones y omisiones tipificadas", "Aumentar la burocracia administrativa", "Prohibir el uso comercial de los puertos"],
        "correcta": "Sancionar acciones y omisiones tipificadas"
    },

    {
        "pregunta": "¿Qué se entiende por 'tráfico portuario'?",
        "opciones": ["Actividades de carga y descarga de mercancías", "Operaciones de mantenimiento de buques", "Conjunto de conocimientos de las operaciones y servicios marítimos", "Maniobras de atraque de barcos"],
        "correcta": "Conjunto de conocimientos de las operaciones y servicios marítimos"
    },
    {
        "pregunta": "¿Cuál es la función de un 'agente consignatario'?",
        "opciones": ["Realiza las maniobras de carga y descarga", "Asesora a los capitanes de buques", "Presenta el Documento Único de Escala ante la Autoridad Portuaria", "Gestiona los desechos generados por buques"],
        "correcta": "Presenta el Documento Único de Escala ante la Autoridad Portuaria"
    },
    {
        "pregunta": "¿Qué tipo de tráfico de pasajeros incluye ferris y cruceros?",
        "opciones": ["Tráfico de mercancías", "Tráfico de pasajeros de línea", "Tráfico de pasajeros ocasional", "Tráfico de buques de carga"],
        "correcta": "Tráfico de pasajeros de línea"
    },
    {
        "pregunta": "¿Cuál de los siguientes buques se utiliza principalmente para el transporte de carga?",
        "opciones": ["Buques de pasajeros", "Buques de carga", "Yates de lujo", "Buques de investigación"],
        "correcta": "Buques de carga"
    },
    {
        "pregunta": "¿Qué representa el tránsito de pasajeros en puertos?",
        "opciones": ["Llegada y salida de buques", "Movimiento de mercancías", "Pasajeros que realizan una escala", "Carga y descarga de productos"],
        "correcta": "Pasajeros que realizan una escala"
    },
    {
        "pregunta": "¿Qué se debe proporcionar a los pasajeros en el puerto?",
        "opciones": ["Salas de espera", "Comida gratuita", "Información sobre sus actividades", "Guías turísticas obligatorias"],
        "correcta": "Información sobre sus actividades"
    },
    {
        "pregunta": "¿Qué instalaciones son esenciales para el acceso público en un puerto?",
        "opciones": ["Terminales de carga", "Plataformas de avituallamiento", "Vestíbulos de embarque", "Plataformas de carga"],
        "correcta": "Vestíbulos de embarque"
    },
    {
        "pregunta": "¿Qué se menciona como una directriz técnica adicional en las operaciones portuarias?",
        "opciones": ["Reducción de costos operativos", "Mejoramiento de la seguridad marítima", "Aumento del número de pasajeros", "Aumento de las tarifas de servicio"],
        "correcta": "Mejoramiento de la seguridad marítima"
    },
    {
        "pregunta": "¿Qué servicio debe prestar la Autoridad Portuaria según la normativa?",
        "opciones": ["Servicios comerciales solo", "Sólo servicios de carga", "Servicios generales, portuarios y comerciales", "Servicios turísticos"],
        "correcta": "Servicios generales, portuarios y comerciales"
    },

    {
        "pregunta": "¿Cómo se organiza territorialmente el Estado según el artículo 137?",
        "opciones": ["En municipios y provincias", "En provincias y comunidades", "En municipios, provincias y Comunidades Autónomas", "Solo en Comunidades Autónomas"],
        "correcta": "En municipios, provincias y Comunidades Autónomas"
    },
    {
        "pregunta": "¿Qué garantiza la Constitución respecto a la autonomía de los municipios según el artículo 140?",
        "opciones": ["No existe autonomía", "La autonomía exclusiva de provincias", "La autonomía de los municipios con personalidad jurídica plena", "La autonomía de los municipios sin personalidad jurídica"],
        "correcta": "La autonomía de los municipios con personalidad jurídica plena"
    },
    {
        "pregunta": "Según el artículo 143, ¿quién puede iniciar el proceso para acceder al autogobierno?",
        "opciones": ["Las comunidades autónomas", "Las Diputaciones o el órgano interinsular correspondiente y las dos terceras partes de los municipios", "Sólo el Gobierno", "Cualquier ciudadano"],
        "correcta": "Las Diputaciones o el órgano interinsular correspondiente y las dos terceras partes de los municipios"
    },

    {
        "pregunta": "¿Cuál es el objeto del real decreto sobre protección portuaria?",
        "opciones": ["Establecer medidas para la protección del transporte aéreo", "Aumentar la protección de los puertos frente a actos ilícitos", "Regular el tráfico marítimo de mercancías", "Elaborar normativas para la seguridad en el transporte terrestre"],
        "correcta": "Aumentar la protección de los puertos frente a actos ilícitos"
    },
    {
        "pregunta": "¿Qué se incluye en las funciones del organismo público Puertos del Estado?",
        "opciones": ["La autorización de buques de carga", "La coordinación general con diferentes órganos administrativos", "La gestión de instalaciones portuarias", "La supervisión del tráfico marítimo internacional"],
        "correcta": "La coordinación general con diferentes órganos administrativos"
    },
    {
        "pregunta": "¿Qué tipo de medidas deben establecerse para proteger los puertos?",
        "opciones": ["Solo medidas de vigilancia", "Medidas, procedimientos y actuaciones para reducir vulnerabilidades", "Únicamente controles de acceso", "Solo procedimientos para el manejo de carga"],
        "correcta": "Medidas, procedimientos y actuaciones para reducir vulnerabilidades"
    },
    {
        "pregunta": "¿Qué se debe hacer en caso de un aumento del nivel de protección en un puerto?",
        "opciones": ["No se requiere ninguna acción adicional", "Determinar medidas, procedimientos y actuaciones que se deberán reforzar", "Cerrar el puerto a nuevas entradas", "Aumentar solo la vigilancia visual"],
        "correcta": "Determinar medidas, procedimientos y actuaciones que se deberán reforzar"
    },
    {
        "pregunta": "¿Cuáles son los niveles de protección establecidos?",
        "opciones": ["Tres niveles de protección: bajo, medio y alto", "Cinco niveles de protección", "Cuatro niveles de protección", "Solo un nivel de protección básica"],
        "correcta": "Tres niveles de protección: bajo, medio y alto"
    },
    {
        "pregunta": "¿Qué se requiere de los oficiales de protección de los puertos?",
        "opciones": ["Solamente capacitación mínima", "Registro de actividades y formación del personal", "No se requiere formación específica", "Solo supervisar la carga"],
        "correcta": "Registro de actividades y formación del personal"
    },
    {
        "pregunta": "¿Qué es una organización de protección reconocida?",
        "opciones": ["Una entidad sin fines de lucro", "Una organización con conocimiento especializado de protección portuaria", "Un organismo gubernamental", "Una empresa de seguridad privada"],
        "correcta": "Una organización con conocimiento especializado de protección portuaria"
    },
    {
        "pregunta": "¿Qué aspectos deben ser considerados en las disposiciones de control complementarias?",
        "opciones": ["Únicamente la vigilancia de personas", "La comunicación de información pertinente sobre protección portuaria", "Solo la señalización de accesos", "No se requieren disposiciones complementarias"],
        "correcta": "La comunicación de información pertinente sobre protección portuaria"
    },

    {
        "pregunta": "¿Cuál es el objetivo de la Ley 1/1966 en relación con los puertos españoles?",
        "opciones": ["Establecer sanciones", "Regular el régimen financiero", "Definir el ámbito de competencia", "Modificar la estructura portuaria"],
        "correcta": "Regular el régimen financiero"
    },
    {
        "pregunta": "¿Quién es responsable de ordenar el atraque y amarre de los buques?",
        "opciones": ["La Dirección del Puerto Autónomo", "La Autoridad de Marina competente", "El Ministerio de Transporte", "Los propietarios de los buques"],
        "correcta": "La Autoridad de Marina competente"
    },
    {
        "pregunta": "¿Qué se permite realizar en los muelles y zonas de servicio de los puertos?",
        "opciones": ["Uso privado de las instalaciones", "Operaciones de carga y descarga", "Construcciones no autorizadas", "Proyectos de investigación sin permiso"],
        "correcta": "Operaciones de carga y descarga"
    },
    {
        "pregunta": "¿Cuál es la condición para el acceso a las zonas restringidas en el puerto?",
        "opciones": ["No se permite la entrada de vehículos", "Se requiere autorización", "Es libre para todos los ciudadanos", "Los trabajadores tienen acceso sin restricción"],
        "correcta": "Se requiere autorización"
    },
    {
        "pregunta": "¿Qué se debe asegurar al proponer un atraque para buques?",
        "opciones": ["Que el buque esté en última posición", "Que haya un remolcador en standby", "Que todos los buques lleguen al mismo tiempo", "Que los buques estén a más de 500 metros de distancia"],
        "correcta": "Que haya un remolcador en standby"
    },

    {
        "pregunta": "¿Cuál es el ámbito de aplicación de los puertos según el Reglamento?",
        "opciones": ["Servicio público de los muelles", "Exclusivamente autorizado para empresas", "Sólo para carga y descarga", "No se permite el acceso a particulares"],
        "correcta": "Servicio público de los muelles"
    },
    {
        "pregunta": "¿Quién tiene la competencia para ordenar el atraque de los buques?",
        "opciones": ["Dirección del Puerto Autónomo", "Ministerio de Transportes", "Autoridad de Marina competente", "Consejo de Administración del Puerto"],
        "correcta": "Autoridad de Marina competente"
    },
    {
        "pregunta": "¿Cuál es el principal uso general de los puertos según la normativa?",
        "opciones": ["Embarque de pasajeros", "Turismo", "Servicios privados", "Uso exclusivo de mercancías"],
        "correcta": "Embarque de pasajeros"
    },
    {
        "pregunta": "¿Qué condiciones deben cumplirse para el acceso a las zonas de servicio del puerto?",
        "opciones": ["No se requiere autorización", "Autorización previa", "Acceso libre a cualquier persona", "Sólo personal autorizado"],
        "correcta": "Autorización previa"
    },
    {
        "pregunta": "¿Qué debe hacerse si un buque corre peligro de hundimiento?",
        "opciones": ["Permitir que permanezca atracado", "Requerir fondeo en lugares seguros", "Transferirlo a otro muelle", "Ignorarlo hasta que se estabilice"],
        "correcta": "Requerir fondeo en lugares seguros"
    },

    {
        "pregunta": "¿Qué deben llevar las mercancías peligrosas para ser fácilmente identificadas durante su transporte?",
        "opciones": ["Documentos de envío", "Marcas y etiquetas de identificación", "Instrucciones de carga", "Ninguna de las anteriores"],
        "correcta": "Marcas y etiquetas de identificación"
    },
    {
        "pregunta": "¿Cuál es una de las condiciones de admisión de explosivos en los puertos?",
        "opciones": ["No se requiere presencia de operador", "Se permiten cantidades ilimitadas", "Deben estar debidamente envasados y embalados", "Pueden ser manipulados por cualquier persona"],
        "correcta": "Deben estar debidamente envasados y embalados"
    },
    {
        "pregunta": "¿Qué deben hacer los buques que operen con mercancías peligrosas?",
        "opciones": ["Ignorar las normas de seguridad", "Siempre navegar a gran velocidad", "Cumplir con las normas de señalización y seguridad", "No informar sobre el tipo de carga"],
        "correcta": "Cumplir con las normas de señalización y seguridad"
    },
    {
        "pregunta": "¿Cómo se identifican las mercancías peligrosas en bultos?",
        "opciones": ["Con etiquetas de colores y símbolos", "Con nombres ficticios", "Con un solo número", "Con documentos de viaje"],
        "correcta": "Con etiquetas de colores y símbolos"
    },
    {
        "pregunta": "¿Qué se requiere para la manipulación de mercancías peligrosas de la clase 1?",
        "opciones": ["Que no haya personal presente", "Presencia del operador del muelle o terminal", "Cualquier persona puede manipular", "No se requiere capacitación especial"],
        "correcta": "Presencia del operador del muelle o terminal"
    },
    {
        "pregunta": "¿Qué deben incluir los planes de emergencia en puertos con mercancías peligrosas?",
        "opciones": ["Solo medidas de evacuación", "Estudio de seguridad y evaluación de riesgos", "Ninguna medida especial", "Solo instrucciones verbales"],
        "correcta": "Estudio de seguridad y evaluación de riesgos"
    }
];

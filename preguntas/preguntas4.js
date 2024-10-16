const preguntasMezcladas = [
    {
        "pregunta": "¿Cuál es el objeto de la ley según el Artículo 1?",
        "opciones": [
            "Regular la construcción y gestión de puertos.",
            "Establecer el régimen de sanciones.",
            "Clasificar los puertos de competencia estatal.",
            "Definir la Marina Mercante."
        ],
        "correcta": "Clasificar los puertos de competencia estatal."
    },
    {
        "pregunta": "¿Qué se considera puerto marítimo según la ley?",
        "opciones": [
            "Un espacio destinado al tráfico terrestre.",
            "Un conjunto de instalaciones para operaciones de tráfico portuario.",
            "Cualquier zona costera sin autorización.",
            "Un área exclusiva de pesca."
        ],
        "correcta": "Un conjunto de instalaciones para operaciones de tráfico portuario."
    },
    {
        "pregunta": "¿Qué se regula en relación a la Marina Mercante?",
        "opciones": [
            "La seguridad marítima y el control de la flota civil.",
            "Solo el transporte aéreo.",
            "La construcción de puertos de pesca.",
            "La seguridad en el tráfico terrestre."
        ],
        "correcta": "La seguridad marítima y el control de la flota civil."
    },
    {
        "pregunta": "¿Qué actividades se consideran infraestructuras básicas según la ley?",
        "opciones": [
            "Solo la construcción de edificios.",
            "Las instalaciones de atraque y muelles.",
            "Los terrenos de la iniciativa privada.",
            "La gestión de tráfico aéreo."
        ],
        "correcta": "Las instalaciones de atraque y muelles."
    },
    {
        "pregunta": "¿Cómo deben establecerse las bonificaciones según la ley?",
        "opciones": [
            "Sin tener en cuenta el tráfico anual.",
            "De forma motivada y con base en el crecimiento de tráficos.",
            "De manera aleatoria.",
            "Solo para los buques de gran tamaño."
        ],
        "correcta": "De forma motivada y con base en el crecimiento de tráficos."
    },
    {
        "pregunta": "¿Cuál es el límite de bonificaciones que una Autoridad Portuaria puede aplicar?",
        "opciones": [
            "20% de la recaudación anual conjunta.",
            "30% de los ingresos totales.",
            "50% de las tasas del pasaje.",
            "10% de las tasas de mercancía."
        ],
        "correcta": "20% de la recaudación anual conjunta."
    },
    {
        "pregunta": "¿Qué se regula en el régimen de recursos humanos?",
        "opciones": [
            "La cantidad de personal de empresas privadas.",
            "Las competencias de control en materia de personal público.",
            "Solo la formación de capitanes.",
            "La contratación temporal de empleados."
        ],
        "correcta": "Las competencias de control en materia de personal público."
    },
    {
        "pregunta": "¿Qué criterios se deben seguir para las retribuciones del personal según la ley?",
        "opciones": [
            "Revisar cada mes sin una base establecida.",
            "Proponer criterios generales ajustados a las leyes de presupuesto.",
            "Solo fijar los salarios conforme a la demanda laboral.",
            "Establecer salarios fijos para todos los empleados."
        ],
        "correcta": "Proponer criterios generales ajustados a las leyes de presupuesto."
    },
    {
        "pregunta": "¿Qué tipos de servicios se consideran portuarios según la ley?",
        "opciones": [
            "Servicios solamente para buques comerciales.",
            "Servicios técnico-náuticos y al pasaje.",
            "Solo servicios de carga.",
            "Servicios al tráfico terrestre."
        ],
        "correcta": "Servicios técnico-náuticos y al pasaje."
    },
    {
        "pregunta": "¿Qué aspecto se regula en el régimen económico-financiero?",
        "opciones": [
            "Las inversiones de empresas extranjeras.",
            "La recaudación y aplicación de tasas portuarias.",
            "Las tarifas de servicios aéreos.",
            "Los costos de mantenimiento de buques."
        ],
        "correcta": "La recaudación y aplicación de tasas portuarias."
    },
    {
        "pregunta": "¿Cómo se clasifican las infracciones en el régimen sancionador?",
        "opciones": [
            "Solo en leves y graves.",
            "En leves, graves y muy graves.",
            "Solo en muy graves.",
            "No hay clasificación."
        ],
        "correcta": "En leves, graves y muy graves."
    },
    {
        "pregunta": "¿Qué se considera una infracción muy grave según la ley?",
        "opciones": [
            "Incumplimiento menor de las normas.",
            "Acciones que causen daños inferiores a 1.000 euros.",
            "Lesiones que provoquen incapacidad laboral superior a siete días.",
            "Causas administrativas sin daño."
        ],
        "correcta": "Lesiones que provoquen incapacidad laboral superior a siete días."
    },
    {
        "pregunta": "¿Qué establece el régimen sancionador sobre la responsabilidad por infracciones?",
        "opciones": [
            "No se pueden sancionar por el mismo hecho.",
            "Las sanciones son independientes entre sí.",
            "Las sanciones se acumulan.",
            "Solo se sanciona una vez por infracción."
        ],
        "correcta": "Las sanciones son independientes entre sí."
    },
    {
        "pregunta": "¿Qué se debe hacer si un hecho u omisión es constitutivo de delito?",
        "opciones": [
            "Sancionar inmediatamente.",
            "Trasladar al Ministerio Fiscal.",
            "Ignorar el hecho.",
            "Proceder a multas administrativas."
        ],
        "correcta": "Trasladar al Ministerio Fiscal."
    },
    {
        "pregunta": "¿Cuál es el máximo de horas semanales que se puede trabajar según la jornada general?",
        "opciones": ["40 horas", "37 horas y media", "35 horas", "36 horas"],
        "correcta": "37 horas y media"
    },
    {
        "pregunta": "¿Qué se debe hacer para la contratación de estudiantes en prácticas?",
        "opciones": ["No se puede contratar a estudiantes", "Los estudiantes en prácticas deben realizar trabajos habituales", "Se deben informar los convenios de colaboración", "Se requiere un contrato temporal de seis meses"],
        "correcta": "Se deben informar los convenios de colaboración"
    },
    {
        "pregunta": "¿Cómo se clasifican las vacaciones no disfrutadas por un trabajador?",
        "opciones": ["Pueden ser acumuladas a años siguientes", "Se pagarán por el tiempo trabajado", "Solo se pueden disfrutar en enero", "No se pueden recuperar"],
        "correcta": "Se pagarán por el tiempo trabajado"
    },
    {
        "pregunta": "¿Qué modalidad de jornada se aplica a aquellos trabajadores que laboran en turnos rotatorios de mañana y tarde?",
        "opciones": ["Jornada continuada", "Jornada diurna", "Jornada nocturna", "Jornada partida"],
        "correcta": "Jornada diurna"
    },
    {
        "pregunta": "¿Qué requisitos se establecen para conceder licencias sin retribución?",
        "opciones": ["Un mes de servicio efectivo", "Al menos un año de servicio efectivo", "No se permiten por ningún motivo", "Solo por razones médicas"],
        "correcta": "Al menos un año de servicio efectivo"
    },
    {
        "pregunta": "¿Cuál es el principal objetivo de la gestión del dominio público portuario estatal?",
        "opciones": ["Promover el interés privado por encima del público", "Aumentar la participación de la iniciativa privada en la construcción y explotación", "Eliminar todas las concesiones existentes", "Prohibir la inversión privada en puertos"],
        "correcta": "Aumentar la participación de la iniciativa privada en la construcción y explotación"
    },
    {
        "pregunta": "¿Qué actividades se permiten en el dominio público portuario?",
        "opciones": ["Actividades no relacionadas con el tráfico portuario", "Usos comerciales, pesqueros y náutico-deportivos", "Solamente actividades recreativas", "Ninguna actividad está permitida"],
        "correcta": "Usos comerciales, pesqueros y náutico-deportivos"
    },
    {
        "pregunta": "¿Quién es responsable de la coordinación y control del sistema portuario de titularidad estatal?",
        "opciones": ["Las Comunidades Autónomas", "Las Autoridades Portuarias", "Puertos del Estado", "El Ministerio de Salud"],
        "correcta": "Puertos del Estado"
    },
    {
        "pregunta": "¿Qué se entiende por puerto comercial según la ley?",
        "opciones": ["Puerto que no realiza actividades comerciales", "Puerto destinado exclusivamente a la descarga de pesca", "Puerto que realiza actividades comerciales portuarias", "Puerto de recreo y ocio"],
        "correcta": "Puerto que realiza actividades comerciales portuarias"
    },
    {
        "pregunta": "¿Qué incluye el régimen económico-financiero de las Autoridades Portuarias?",
        "opciones": ["El control exclusivo de ingresos", "La gestión de cargas y transportes", "La optimización de la gestión económica y rentabilización de recursos", "La eliminación de tarifas por servicios"],
        "correcta": "La optimización de la gestión económica y rentabilización de recursos"
    },
    {
        "pregunta": "¿Cuáles son las funciones de las Autoridades Portuarias en el régimen de recursos humanos?",
        "opciones": ["Contratar personal sin restricciones", "Planificar proyectos sin control", "Gestionar y controlar los servicios portuarios", "Abrir espacios sin licencias"],
        "correcta": "Gestionar y controlar los servicios portuarios"
    },
    {
        "pregunta": "¿Qué régimen se aplica para la prestación de servicios portuarios?",
        "opciones": ["Se prestan únicamente por organismos públicos", "La prestación es exclusiva de empresas extranjeras", "La prestación es por iniciativa privada bajo libre concurrencia", "Está prohibida la competencia en la prestación de servicios"],
        "correcta": "La prestación es por iniciativa privada bajo libre concurrencia"
    },
    {
        "pregunta": "¿Qué tipo de sanciones se pueden imponer a las Autoridades Portuarias?",
        "opciones": ["Sanciones económicas y administrativas", "Solo sanciones económicas menores", "Sanciones penales", "No se pueden imponer sanciones"],
        "correcta": "Sanciones económicas y administrativas"
    },
    {
        "pregunta": "¿Cuál es un ejemplo de uso complementario permitido en el dominio público portuario?",
        "opciones": ["Establecimientos privados de comida rápida", "Actividades recreativas no portuarias", "Empresas industriales vinculadas al tráfico marítimo", "Construcción de viviendas"],
        "correcta": "Empresas industriales vinculadas al tráfico marítimo"
    },
    {
        "pregunta": "¿Qué se requiere para la construcción de un nuevo puerto estatal?",
        "opciones": ["Solo el visto bueno de la Autoridad Portuaria", "La aprobación del proyecto por el Ministerio de Fomento", "No se necesita aprobación", "El acuerdo con empresas privadas"],
        "correcta": "La aprobación del proyecto por el Ministerio de Fomento"
    },
    {
        "pregunta": "¿Qué entidades son responsables de la seguridad pública en las áreas portuarias?",
        "opciones": ["Los ciudadanos", "Las Autoridades Portuarias solamente", "El Ministerio del Interior y las Autoridades Portuarias", "Ninguna entidad es responsable"],
        "correcta": "El Ministerio del Interior y las Autoridades Portuarias"
    },
    {
        "pregunta": "¿Qué condiciones debe cumplir un puerto para ser considerado de interés general?",
        "opciones": ["No servir a la economía nacional", "Reunir condiciones técnicas y de control", "No debe tener instalaciones portuarias", "Ser exclusivo para la pesca"],
        "correcta": "Reunir condiciones técnicas y de control"
    },
    {
        "pregunta": "¿Cuáles son las áreas que debe incluir el espacio de agua del puerto?",
        "opciones": ["Áreas de tráfico marítimo y almacenamiento ", "Solo las áreas recreativas", "Áreas sin uso específico", "Áreas exclusivamente para la pesca"],
        "correcta": "Áreas de tráfico marítimo y almacenamiento"
    },
    {
        "pregunta": "¿Qué se entiende por competencia en las operaciones y servicios portuarios?",
        "opciones": ["Conjunto de conocimientos sobre el tráfico portuario", "Servicio exclusivo para mercancías", "Gestión única de buques de guerra", "Ninguna de las anteriores"],
        "correcta": "Conjunto de conocimientos sobre el tráfico portuario"
    },
    {
        "pregunta": "¿Qué implica la obligatoriedad del servicio de practicaje?",
        "opciones": ["Es opcional para todos los barcos", "Depende de la normativa aplicable", "Es solo para buques de carga", "Ninguna de las anteriores"],
        "correcta": "Depende de la normativa aplicable"
    },
    {
        "pregunta": "¿Cuál es uno de los tipos de desechos generados por buques según la normativa?",
        "opciones": ["Desechos de carga", "Residuos de comida", "Agua dulce", "Desechos reciclables"],
        "correcta": "Desechos de carga"
    },
    {
        "pregunta": "¿Qué actividad se considera una operación de estiba?",
        "opciones": ["Descargar mercancías del barco", "Recoger mercancía en el puerto", "Aplicar trincaje en la bodega", "Ninguna de las anteriores"],
        "correcta": "Aplicar trincaje en la bodega"
    },
    {
        "pregunta": "¿Cuál es el objetivo del servicio de señalización marítima?",
        "opciones": ["Eliminar desechos del puerto", "Mejorar la seguridad de la navegación", "Facilitar el embarque de pasajeros", "Gestionar el tráfico terrestre"],
        "correcta": "Mejorar la seguridad de la navegación"
    },
    {
        "pregunta": "¿Qué se incluye en el servicio de recepción de desechos generados por buques?",
        "opciones": ["Solo residuos sólidos", "Desechos de los anexos I, IV, V o VI del Convenio MARPOL 73/78", "Residuos de carga únicamente", "Desechos de papel y cartón"],
        "correcta": "Desechos de los anexos I, IV, V o VI del Convenio MARPOL 73/78"
    },
    {
        "pregunta": "¿Qué significa la operación de tránsito marítimo?",
        "opciones": ["Carga y descarga en el mismo puerto", "Movimientos de mercancías sin cambio de puerto", "Embarque de pasajeros a otros buques", "Ninguna de las anteriores"],
        "correcta": "Movimientos de mercancías sin cambio de puerto"
    },
    {
        "pregunta": "¿Quién debe presentar el Documento Único de Escala (DUE)?",
        "opciones": ["El capitán del barco", "El agente consignatario", "La Autoridad Portuaria", "Los pasajeros a bordo"],
        "correcta": "El agente consignatario"
    },
    {
        "pregunta": "¿Qué actividad NO se considera una operación portuaria de mercancías?",
        "opciones": ["Cargar productos de consumo", "Embarcar combustible", "Descargar residuos peligrosos", "Descargar mercancía de mudanza"],
        "correcta": "Descargar mercancía de mudanza"
    },
    {
        "pregunta": "¿Cómo se organiza territorialmente el Estado según el artículo 137?",
        "opciones": ["En comunidades, provincias y municipios", "En provincias, municipios y comunidades autónomas", "En regiones, provincias y localidades", "En países, regiones y municipios"],
        "correcta": "En provincias, municipios y comunidades autónomas"
    },
    {
        "pregunta": "¿Qué garantiza la Constitución sobre la autonomía de los municipios?",
        "opciones": ["La Constitución no menciona la autonomía de los municipios", "La autonomía de los municipios es limitada", "Los municipios no tienen personalidad jurídica", "La Constitución garantiza la autonomía de los municipios"],
        "correcta": "La Constitución garantiza la autonomía de los municipios"
    },
    {
        "pregunta": "Según el artículo 148, ¿Qué competencias pueden asumir las Comunidades Autónomas?",
        "opciones": ["Defensa y Fuerzas Armadas", "Educación y Sanidad en su ámbito territorial", "Relaciones internacionales", "Legislación mercantil"],
        "correcta": "Educación y Sanidad en su ámbito territorial"
    },
    {
        "pregunta": "¿Cuál es el objeto del real decreto sobre protección portuaria?",
        "opciones": ["Establecer medidas orientadas a aumentar la protección de los puertos", "Regular el tráfico marítimo", "Establecer sanciones a los infractores", "Definir las funciones de los trabajadores portuarios"],
        "correcta": "Establecer medidas orientadas a aumentar la protección de los puertos"
    },
    {
        "pregunta": "¿Qué es la Autoridad de protección portuaria?",
        "opciones": ["La entidad que gestiona las tarifas de los puertos", "El organismo competente en materia de protección de un puerto", "La autoridad que coordina el transporte marítimo", "La entidad responsable de la seguridad de la carga"],
        "correcta": "El organismo competente en materia de protección de un puerto"
    },
    {
        "pregunta": "¿Cuál es uno de los aspectos que debe incluir la evaluación de la protección portuaria?",
        "opciones": ["Determinación de la ruta de navegación de los buques", "Identificación de los bienes e infraestructuras que se deben proteger", "Establecimiento de tarifas portuarias", "Determinación de los niveles de contaminación"],
        "correcta": "Identificación de los bienes e infraestructuras que se deben proteger"
    },
    {
        "pregunta": "¿Qué incluye la protección de los puertos?",
        "opciones": ["Sólo la protección de los buques de carga", "La seguridad en toda la zona portuaria incluyendo la interfaz buque-puerto", "La protección exclusivamente de las instalaciones portuarias", "La vigilancia aérea de las costas"],
        "correcta": "La seguridad en toda la zona portuaria incluyendo la interfaz buque-puerto"
    },
    {
        "pregunta": "¿Qué establece el Código PBIP?",
        "opciones": ["Medidas de protección aplicables a los buques y a la interfaz buque-puerto", "Normas de construcción de los puertos", "Directrices para la pesca marítima", "Regulaciones sobre el uso de combustible en los buques"],
        "correcta": "Medidas de protección aplicables a los buques y a la interfaz buque-puerto"
    },
    {
        "pregunta": "¿Cuál es la duración de la acreditación de los oficiales de protección?",
        "opciones": ["Tres años", "Cinco años", "Diez años", "Un año"],
        "correcta": "Cinco años"
    },
    {
        "pregunta": "¿Qué debe incluir un plan de protección portuaria?",
        "opciones": ["Un resumen de las tarifas portuarias", "Condiciones de acceso para turistas", "Medidas de protección del puerto basadas en una evaluación de riesgos", "Normas sobre el uso de redes sociales en la instalación"],
        "correcta": "Medidas de protección del puerto basadas en una evaluación de riesgos"
    },
    {
        "pregunta": "¿Qué se requiere para ejercer actividades en las Zonas de Servicio de los puertos?",
        "opciones": ["Una autorización administrativa", "Decisión del consejo de administración", "Licencia de seguridad", "Certificado de calidad"],
        "correcta": "Una autorización administrativa"
    },
    {
        "pregunta": "¿Quién tiene la competencia para ordenar el atraque y amarre de los buques?",
        "opciones": ["La Dirección del Puerto Autónomo", "La Autoridad de Marina competente", "El consejo de administración", "Los capitanes de los buques"],
        "correcta": "La Autoridad de Marina competente"
    },
    {
        "pregunta": "¿Qué tipo de operaciones están destinadas a realizarse en los puertos?",
        "opciones": ["Cualquier tipo de actividad comercial", "Operaciones de carga y descarga", "Solo transbordo de mercancías", "Ninguna actividad comercial"],
        "correcta": "Operaciones de carga y descarga"
    },
    {
        "pregunta": "¿Qué se debe proporcionar al solicitar acceso a la zona de servicio?",
        "opciones": ["Información sobre el tipo de carga", "Una carta de presentación", "Un permiso de navegación", "Detalles sobre la tripulación"],
        "correcta": "Información sobre el tipo de carga"
    },
    {
        "pregunta": "¿Qué deberá hacer la Dirección del Puerto Autónomo si un buque no puede atracar directamente?",
        "opciones": ["Advertir a la autoridad de marina", "Permitir que fondee donde desee", "Rechazar sus solicitudes futuras", "Iniciar un procedimiento legal"],
        "correcta": "Advertir a la autoridad de marina"
    },
    {
        "pregunta": "¿Qué se establece en el artículo 3º sobre las competencias del Puerto Autónomo de Valencia?",
        "opciones": ["La regulación de las operaciones de carga y descarga", "La prohibición del uso de muelles", "La guarda del dominio público portuario", "La asignación de atraques a buques extranjeros"],
        "correcta": "La regulación de las operaciones de carga y descarga"
    },
    {
        "pregunta": "¿Quién es responsable de la dirección y control de los servicios en el Puerto Autónomo según el artículo 4º?",
        "opciones": ["El Consejo de Administración", "El Director del Puerto Autónomo", "La Autoridad de Marina", "Los administradores de las concesiones"],
        "correcta": "El Director del Puerto Autónomo"
    },
    {
        "pregunta": "¿Qué deben solicitar las personas o entidades privadas para ejercer sus actividades en las Zonas de Servicio de los puertos?",
        "opciones": ["Las tarifas correspondientes", "Una concesión administrativa", "Una autorización verbal", "Ningún requisito previo"],
        "correcta": "Una concesión administrativa"
    },
    {
        "pregunta": "Según el artículo 11º, ¿quién determina las normas reguladoras de acceso a las zonas restringidas?",
        "opciones": ["El Director del Puerto Autónomo", "La Autoridad de Marina", "El Consejo de Administración", "Los representantes de las empresas estibadoras"],
        "correcta": "El Consejo de Administración"
    },
    {
        "pregunta": "¿Qué criterio se aplica para establecer el turno de atraques según el artículo 21º?",
        "opciones": ["El tiempo de espera en muelle", "La fecha de llegada a puerto", "La nacionalidad del buque", "El tamaño del barco"],
        "correcta": "La fecha de llegada a puerto"
    },
    {
        "pregunta": "¿Cuál es el ámbito de aplicación del Reglamento de mercancías peligrosas?",
        "opciones": ["Operaciones en zonas portuarias", "Transporte terrestre exclusivamente", "Servir a buques de guerra", "Deberán ser almacenadas en una zona sin vigilancia"],
        "correcta": "Operaciones en zonas portuarias"
    },
    {
        "pregunta": "¿Qué medidas se deben tomar durante la admisión y manipulación de mercancías peligrosas?",
        "opciones": ["No es necesario un sistema operativo de comunicación", "Las operaciones deben ser controladas por el Operador del muelle", "Los buques pueden amarrarse sin supervisión", "Las operaciones no requieren el permiso del Capitán del puerto"],
        "correcta": "Las operaciones deben ser controladas por el Operador del muelle"
    },
    {
        "pregunta": "¿Qué obligación tienen los buques que operan con mercancías peligrosas?",
        "opciones": ["Realizar operaciones sin supervisión", "Estar señalizados y cumplir con las normas", "No informar al operador del muelle", "No requerir el uso de equipo de emergencia"],
        "correcta": "Estar señalizados y cumplir con las normas"
    },
    {
        "pregunta": "¿Cómo deben ser identificadas las mercancías peligrosas durante su transporte?",
        "opciones": ["Con etiquetas que no superen 50mm", "Con la descripción genérica de la mercancía", "Debiendo llevar el nombre técnico correcto de la sustancia", "Sin necesidad de ningún marcaje específico"],
        "correcta": "Debiendo llevar el nombre técnico correcto de la sustancia"
    },
    {
        "pregunta": "¿Qué se debe hacer con las mercancías peligrosas clasificadas como explosivos?",
        "opciones": ["Pueden ser manipuladas sin restricciones", "Su admisión se sujeta a condiciones específicas", "No necesitan estar embaladas", "Pueden ser transportadas en cualquier tipo de contenedor"],
        "correcta": "Su admisión se sujeta a condiciones específicas"
    },
    {
        "pregunta": "¿Qué incluirá un Plan de Emergencia en el contexto de mercancías peligrosas?",
        "opciones": ["Solo los procedimientos de manejo de carga", "Acciones iniciales y coordinación", "Exclusivamente medidas de seguridad del muelle", "No será necesario ningún tipo de manual o procedimiento"],
        "correcta": "Acciones iniciales y coordinación"
    }
];
// Base de datos de preguntas para MF0953_2 - Montaje de Equipos Microinformáticos
const questionsDatabase = [
  {
    "id": 1,
    "category": "Subsistemas del Sistema Operativo",
    "question": "¿Cuál de los siguientes no es un subsistema del sistema operativo?",
    "options": [
      "Sistema de archivos",
      "Gestor de memoria",
      "Planificador de procesos",
      "Compilador"
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Compilador\". Un compilador es una herramienta de software externa al núcleo del sistema operativo, mientras que los subsistemas típicos incluyen gestión de archivos, memoria, E/S y procesos.",
    "source": "https://es.wikipedia.org/wiki/Sistema_operativo"
  },
  {
    "id": 2,
    "category": "Subsistemas del Sistema Operativo",
    "question": "¿Qué función desempeña el subsistema de gestión de archivos en un sistema operativo?",
    "options": [
      "Gestión de la memoria virtual",
      "Administración de dispositivos de entrada y salida",
      "Organización y manipulación de archivos",
      "Control de acceso a la red"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Organización y manipulación de archivos\". El sistema de archivos gestiona cómo se almacenan, nombran, acceden y organizan los datos en dispositivos de almacenamiento.",
    "source": "https://es.wikipedia.org/wiki/Sistema_de_archivos"
  },
  {
    "id": 3,
    "category": "Subsistemas del Sistema Operativo",
    "question": "¿Cuál de los siguientes no es un tipo de gestión de memoria utilizado en los sistemas operativos?",
    "options": [
      "Paginación",
      "Fragmentación externa",
      "Asignación contigua",
      "Interfaz gráfica de usuario"
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Interfaz gráfica de usuario\". La interfaz gráfica no es un mecanismo de gestión de memoria; es parte del entorno de usuario. La fragmentación externa es un fenómeno, no un método, pero sí está relacionada con la gestión de memoria.",
    "source": "https://es.wikipedia.org/wiki/Gesti%C3%B3n_de_memoria"
  },
  {
    "id": 4,
    "category": "Subsistemas del Sistema Operativo",
    "question": "¿Qué papel desempeña el subsistema de E/S en un sistema operativo?",
    "options": [
      "Administración del CPU",
      "Control del acceso a la red",
      "Gestión de dispositivos de entrada y salida",
      "Ejecución de aplicaciones de usuario"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Gestión de dispositivos de entrada y salida\". Este subsistema maneja la comunicación entre el sistema operativo y periféricos como teclados, ratones, impresoras, etc.",
    "source": "https://es.wikipedia.org/wiki/Sistema_operativo#Subsistemas"
  },
  {
    "id": 5,
    "category": "Subsistemas del Sistema Operativo",
    "question": "¿Qué función cumple el planificador de procesos en un sistema operativo?",
    "options": [
      "Asignar recursos de hardware a los procesos",
      "Administrar la memoria virtual del sistema",
      "Controlar la entrada y salida de datos",
      "Compilar el código fuente de los programas"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Asignar recursos de hardware a los procesos\". El planificador decide qué proceso se ejecuta en la CPU y cuándo, gestionando así los recursos del sistema.",
    "source": "https://es.wikipedia.org/wiki/Planificador"
  },
  {
    "id": 6,
    "category": "Subsistemas del Sistema Operativo",
    "question": "¿Cuál de las siguientes afirmaciones describe mejor la función del subsistema de gestión de archivos?",
    "options": [
      "Administra la comunicación entre dispositivos de hardware",
      "Gestiona la interacción entre el usuario y el sistema operativo",
      "Organiza y almacena datos en dispositivos de almacenamiento",
      "Controla la ejecución concurrente de múltiples procesos"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Organiza y almacena datos en dispositivos de almacenamiento\". Esta es la función esencial del sistema de archivos.",
    "source": "https://es.wikipedia.org/wiki/Sistema_de_archivos"
  },
  {
    "id": 7,
    "category": "Subsistemas del Sistema Operativo",
    "question": "¿Qué papel desempeña el subsistema de gestión de memoria en un sistema operativo?",
    "options": [
      "Coordinar la comunicación entre los usuarios y el sistema operativo",
      "Controlar el acceso a los recursos del sistema",
      "Administración de la asignación y liberación de memoria RAM",
      "Regular el flujo de entrada y salida de datos en el sistema"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Administración de la asignación y liberación de memoria RAM\". Este subsistema gestiona cómo se distribuye la memoria entre los procesos activos.",
    "source": "https://es.wikipedia.org/wiki/Gesti%C3%B3n_de_memoria"
  },
  {
    "id": 8,
    "category": "Subsistemas del Sistema Operativo",
    "question": "¿Cuál de las siguientes tareas no es responsabilidad del subsistema de E/S en un sistema operativo?",
    "options": [
      "Gestionar la impresión de documentos",
      "Coordinar la ejecución de procesos en el CPU",
      "Controlar la transferencia de datos entre dispositivos",
      "Administrar la entrada desde dispositivos de usuario"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Coordinar la ejecución de procesos en el CPU\". Eso es responsabilidad del planificador de procesos, no del subsistema de E/S.",
    "source": "https://es.wikipedia.org/wiki/Sistema_operativo#Subsistemas"
  },
  {
    "id": 9,
    "category": "Planificación de Procesos",
    "question": "¿Qué función desempeña el planificador a corto plazo en un sistema operativo?",
    "options": [
      "Asignar recursos a los procesos durante su ejecución",
      "Seleccionar qué proceso se ejecutará a continuación",
      "Gestionar la carga y descarga de programas en memoria",
      "Coordinar la comunicación entre dispositivos de E/S"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Seleccionar qué proceso se ejecutará a continuación\". El planificador a corto plazo (o de CPU) decide qué proceso listo se ejecuta en la CPU en cada instante.",
    "source": "https://es.wikipedia.org/wiki/Planificador#Planificaci%C3%B3n_a_corto_plazo"
  },
  {
    "id": 10,
    "category": "Subsistemas del Sistema Operativo",
    "question": "¿Cuál de las siguientes afirmaciones describe mejor la función del subsistema de gestión de archivos en un sistema operativo?",
    "options": [
      "Administra la interacción entre el usuario y el hardware",
      "Organiza y almacena datos en dispositivos de almacenamiento",
      "Regula el flujo de entrada y salida de datos en el sistema",
      "Controla la ejecución concurrente de múltiples procesos"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Organiza y almacena datos en dispositivos de almacenamiento\". Es la función central del sistema de archivos.",
    "source": "https://es.wikipedia.org/wiki/Sistema_de_archivos"
  },
  {
    "id": 11,
    "category": "Subsistemas del Sistema Operativo",
    "question": "¿Qué tarea no está asociada al subsistema de gestión de memoria en un sistema operativo?",
    "options": [
      "Controlar la fragmentación de la memoria",
      "Gestionar la paginación de la memoria virtual",
      "Coordinar la impresión de documentos",
      "Administración del espacio de direcciones de los procesos"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Coordinar la impresión de documentos\". Eso corresponde al subsistema de E/S, no al de memoria.",
    "source": "https://es.wikipedia.org/wiki/Gesti%C3%B3n_de_memoria"
  },
  {
    "id": 12,
    "category": "Planificación de Procesos",
    "question": "¿Qué función cumple el planificador a largo plazo en un sistema operativo?",
    "options": [
      "Seleccionar qué proceso se ejecutará a continuación",
      "Asignar recursos a los procesos durante su ejecución",
      "Gestionar la carga y descarga de programas en memoria",
      "Coordinar la comunicación entre dispositivos de E/S"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Gestionar la carga y descarga de programas en memoria\". El planificador a largo plazo decide qué procesos entran al sistema (cola de listos).",
    "source": "https://es.wikipedia.org/wiki/Planificador#Planificaci%C3%B3n_a_largo_plazo"
  },
  {
    "id": 13,
    "category": "Gestión de Memoria",
    "question": "¿Cuál de las siguientes no es una estrategia de asignación de memoria utilizada por los sistemas operativos?",
    "options": [
      "FIFO",
      "LIFO",
      "LRU",
      "FIFO-LRU"
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"FIFO-LRU\". No es una estrategia reconocida; FIFO, LIFO y LRU sí lo son (usadas en reemplazo de páginas o caché).",
    "source": "https://es.wikipedia.org/wiki/Algoritmos_de_reemplazo_de_p%C3%A1ginas"
  },
  {
    "id": 14,
    "category": "Subsistemas del Sistema Operativo",
    "question": "¿Qué papel desempeña el subsistema de E/S en la gestión del sistema operativo?",
    "options": [
      "Controlar el acceso a la red",
      "Gestionar la comunicación entre procesos",
      "Administración de los dispositivos de entrada y salida",
      "Coordinar la ejecución de aplicaciones de usuario"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Administración de los dispositivos de entrada y salida\". Es la función principal del subsistema de E/S.",
    "source": "https://es.wikipedia.org/wiki/Sistema_operativo#Subsistemas"
  },
  {
    "id": 15,
    "category": "Subsistemas del Sistema Operativo",
    "question": "¿Cuál es la principal responsabilidad del subsistema de gestión de archivos en un sistema operativo?",
    "options": [
      "Organizar la ejecución de procesos en el CPU",
      "Controlar la transferencia de datos entre dispositivos",
      "Administración de la organización y manipulación de archivos",
      "Coordinar la comunicación entre dispositivos de E/S"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Administración de la organización y manipulación de archivos\".",
    "source": "https://es.wikipedia.org/wiki/Sistema_de_archivos"
  },
  {
    "id": 16,
    "category": "Planificación de Procesos",
    "question": "¿Qué función cumple el planificador a medio plazo en un sistema operativo?",
    "options": [
      "Asignar recursos a los procesos durante su ejecución",
      "Seleccionar qué proceso se ejecutará a continuación",
      "Gestionar la carga y descarga de programas en memoria",
      "Coordinar la comunicación entre dispositivos de E/S"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Gestionar la carga y descarga de programas en memoria\". El planificador a medio plazo suspende o reanuda procesos para equilibrar la carga.",
    "source": "https://es.wikipedia.org/wiki/Planificador#Planificaci%C3%B3n_a_medio_plazo"
  },
  {
    "id": 17,
    "category": "Planificación de Procesos",
    "question": "¿Cuál de las siguientes no es una técnica de planificación de procesos en los sistemas operativos?",
    "options": [
      "FIFO",
      "Round-robin",
      "LRU",
      "Prioridad"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"LRU\". LRU (Least Recently Used) es un algoritmo de reemplazo de páginas en memoria, no de planificación de CPU.",
    "source": "https://es.wikipedia.org/wiki/Algoritmos_de_planificaci%C3%B3n_de_procesos"
  },
  {
    "id": 18,
    "category": "Gestión de Memoria",
    "question": "¿Qué papel desempeña el subsistema de gestión de memoria virtual en un sistema operativo?",
    "options": [
      "Controlar la paginación de la memoria física",
      "Administrar la entrada y salida de datos",
      "Gestionar la comunicación entre procesos",
      "Organizar la transferencia de datos entre dispositivos"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Controlar la paginación de la memoria física\". La memoria virtual usa paginación para simular más memoria de la física disponible.",
    "source": "https://es.wikipedia.org/wiki/Memoria_virtual"
  },
  {
    "id": 19,
    "category": "Subsistemas del Sistema Operativo",
    "question": "¿Cuál de las siguientes tareas no es responsabilidad del subsistema de E/S en un sistema operativo?",
    "options": [
      "Controlar la ejecución de procesos en el CPU",
      "Administrar la impresión de documentos",
      "Coordinar la comunicación entre dispositivos",
      "Gestionar la asignación de recursos del sistema"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Controlar la ejecución de procesos en el CPU\". Esto es tarea del planificador, no del subsistema de E/S.",
    "source": "https://es.wikipedia.org/wiki/Sistema_operativo#Subsistemas"
  },
  {
    "id": 20,
    "category": "Subsistemas del Sistema Operativo",
    "question": "¿Cuál es el objetivo principal del subsistema de gestión de archivos en un sistema operativo?",
    "options": [
      "Administrar la asignación de memoria para los procesos",
      "Organizar y almacenar datos en dispositivos de almacenamiento",
      "Coordinar la comunicación entre procesos en ejecución",
      "Controlar el flujo de entrada y salida de datos en el sistema"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Organizar y almacenar datos en dispositivos de almacenamiento\".",
    "source": "https://es.wikipedia.org/wiki/Sistema_de_archivos"
  },
  {
    "id": 21,
    "category": "Sistemas de Archivos",
    "question": "¿Qué característica no suele ser propia de un sistema de archivos de tipo FAT32?",
    "options": [
      "Soporte para archivos de más de 4 GB",
      "Estructura de tabla de asignación de archivos (FAT)",
      "Limitación en el tamaño máximo de partición",
      "Permiso de archivos y directorios"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Soporte para archivos de más de 4 GB\". FAT32 no permite archivos mayores a 4 GB. Tampoco tiene permisos avanzados como NTFS.",
    "source": "https://es.wikipedia.org/wiki/File_Allocation_Table#FAT32"
  },
  {
    "id": 22,
    "category": "Sistemas de Archivos",
    "question": "¿Cuál de las siguientes opciones describe mejor un sistema de archivos distribuido?",
    "options": [
      "Permite el acceso a archivos en una red de computadoras",
      "Almacena todos los archivos en un único servidor central",
      "Se utiliza exclusivamente en dispositivos de almacenamiento externo",
      "No admite la compartición de archivos entre usuarios"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Permite el acceso a archivos en una red de computadoras\". Ejemplos: NFS, SMB/CIFS.",
    "source": "https://es.wikipedia.org/wiki/Sistema_de_archivos_distribuido"
  },
  {
    "id": 23,
    "category": "Sistemas de Archivos",
    "question": "¿Qué característica es común en un sistema de archivos NTFS (New Technology File System)?",
    "options": [
      "No admite permisos de archivos",
      "Tamaño máximo de archivo limitado a 4 GB",
      "Soporte para compresión de archivos y encriptación",
      "Utiliza una tabla de asignación de archivos FAT"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Soporte para compresión de archivos y encriptación\". NTFS incluye EFS (Encrypting File System) y compresión transparente.",
    "source": "https://es.wikipedia.org/wiki/NTFS"
  },
  {
    "id": 24,
    "category": "Sistemas de Archivos",
    "question": "¿Cuál de las siguientes afirmaciones describe mejor un sistema de archivos de tipo ext4?",
    "options": [
      "Diseñado principalmente para su uso en sistemas operativos Windows",
      "Permite la fragmentación excesiva de archivos para una rápida lectura",
      "Ofrece soporte para tamaños de archivos de hasta 16 exabytes",
      "Utiliza una tabla de asignación de archivos basada en árbol B+"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Ofrece soporte para tamaños de archivos de hasta 16 exabytes\". ext4 es el sistema de archivos por defecto en muchas distribuciones Linux.",
    "source": "https://es.wikipedia.org/wiki/Ext4"
  },
  {
    "id": 25,
    "category": "Sistemas de Archivos",
    "question": "¿Qué función cumple la journaling en un sistema de archivos?",
    "options": [
      "Permite la compresión de archivos para ahorrar espacio en disco",
      "Mantiene un registro de cambios para facilitar la recuperación después de fallos",
      "Limita el acceso a ciertos archivos mediante permisos de usuario",
      "Optimiza el acceso a archivos frecuentemente utilizados"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Mantiene un registro de cambios para facilitar la recuperación después de fallos\". Es una característica de sistemas como ext3, ext4, NTFS.",
    "source": "https://es.wikipedia.org/wiki/Journaling"
  },
  {
    "id": 26,
    "category": "Sistemas de Archivos",
    "question": "¿Cuál de las siguientes opciones no es un sistema de archivos comúnmente utilizado en sistemas operativos Unix/Linux?",
    "options": [
      "NTFS",
      "ext4",
      "XFS",
      "btrfs"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"NTFS\". Aunque Linux puede leerlo, NTFS es nativo de Windows, no de Unix/Linux.",
    "source": "https://es.wikipedia.org/wiki/NTFS"
  },
  {
    "id": 27,
    "category": "Sistemas de Archivos",
    "question": "¿Qué característica no es propia de un sistema de archivos de tipo exFAT?",
    "options": [
      "Soporte para archivos de más de 4 GB",
      "Estructura de tabla de asignación de archivos (FAT)",
      "Limitación en el tamaño máximo de partición",
      "Permite la recuperación de archivos eliminados"
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Permite la recuperación de archivos eliminados\". exFAT no incluye journaling ni mecanismos integrados de recuperación.",
    "source": "https://es.wikipedia.org/wiki/ExFAT"
  },
  {
    "id": 28,
    "category": "Sistemas de Archivos",
    "question": "¿Cuál de los siguientes sistemas de archivos es más adecuado para dispositivos de almacenamiento flash como memorias USB y tarjetas SD?",
    "options": [
      "NTFS",
      "FAT32",
      "ext4",
      "HFS+"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"FAT32\". Es ampliamente compatible y ligero, ideal para dispositivos flash pequeños (aunque exFAT es mejor para archivos >4 GB).",
    "source": "https://es.wikipedia.org/wiki/File_Allocation_Table"
  },
  {
    "id": 29,
    "category": "Sistemas de Archivos",
    "question": "¿Qué característica no es común en un sistema de archivos de tipo ZFS (Zettabyte File System)?",
    "options": [
      "Integración de volúmenes y sistemas de archivos",
      "Capacidad de realizar instantáneas (snapshots)",
      "Utiliza una tabla de asignación de archivos FAT",
      "Ofrece compresión de datos y encriptación integradas"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Utiliza una tabla de asignación de archivos FAT\". ZFS usa estructuras avanzadas basadas en árboles (Merkle trees), no FAT.",
    "source": "https://es.wikipedia.org/wiki/ZFS"
  },
  {
    "id": 30,
    "category": "Sistemas de Archivos",
    "question": "¿Qué es la fragmentación de archivos en un sistema de archivos?",
    "options": [
      "La división de un archivo en múltiples fragmentos para ahorrar espacio",
      "La colocación de archivos en sectores contiguos para una lectura más rápida",
      "La dispersión de partes de un archivo en diferentes ubicaciones del disco",
      "La eliminación de archivos obsoletos para liberar espacio en disco"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"La dispersión de partes de un archivo en diferentes ubicaciones del disco\". Esto reduce el rendimiento en discos mecánicos.",
    "source": "https://es.wikipedia.org/wiki/Fragmentaci%C3%B3n_de_archivos"
  },
  {
    "id": 31,
    "category": "Sistemas de Archivos",
    "question": "¿Qué función desempeña un sistema de archivos en un sistema informático?",
    "options": [
      "Controlar el acceso a la red",
      "Gestionar la impresión de documentos",
      "Organizar y almacenar datos en dispositivos de almacenamiento",
      "Coordinar la ejecución de aplicaciones de usuario"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Organizar y almacenar datos en dispositivos de almacenamiento\".",
    "source": "https://es.wikipedia.org/wiki/Sistema_de_archivos"
  },
  {
    "id": 32,
    "category": "Sistemas de Archivos",
    "question": "¿Cuál de las siguientes afirmaciones describe mejor un sistema de archivos de tipo HFS+ (Hierarchical File System Plus)?",
    "options": [
      "Diseñado principalmente para su uso en sistemas operativos Windows",
      "Utiliza una tabla de asignación de archivos basada en árbol B+",
      "Ofrece soporte para nombres de archivos de hasta 255 caracteres",
      "No admite la compresión de archivos ni la encriptación"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Ofrece soporte para nombres de archivos de hasta 255 caracteres\". HFS+ fue el sistema de archivos de macOS hasta APFS.",
    "source": "https://es.wikipedia.org/wiki/HFS%2B"
  },
  {
    "id": 33,
    "category": "Sistemas de Archivos",
    "question": "¿Qué característica es común en un sistema de archivos de tipo ext3?",
    "options": [
      "Journaling",
      "Soporte para archivos de más de 4 GB",
      "Estructura de tabla de asignación de archivos (FAT)",
      "Limitación en el tamaño máximo de partición"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Journaling\". ext3 es esencialmente ext2 con journaling añadido.",
    "source": "https://es.wikipedia.org/wiki/Ext3"
  },
  {
    "id": 34,
    "category": "Sistemas de Archivos",
    "question": "¿Cuál de las siguientes opciones describe mejor un sistema de archivos de red (NFS)?",
    "options": [
      "Almacena todos los archivos en un único servidor central",
      "Permite el acceso a archivos en una red de computadoras",
      "Se utiliza exclusivamente en dispositivos de almacenamiento externo",
      "No admite la compartición de archivos entre usuarios"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Permite el acceso a archivos en una red de computadoras\". NFS es un protocolo estándar en entornos Unix/Linux.",
    "source": "https://es.wikipedia.org/wiki/Network_File_System"
  },
  {
    "id": 35,
    "category": "Sistemas de Archivos",
    "question": "¿Qué es el formato de un sistema de archivos?",
    "options": [
      "La cantidad total de espacio de almacenamiento disponible",
      "La estructura de organización de los archivos en el disco",
      "El número máximo de archivos que pueden almacenarse en una carpeta",
      "La velocidad de transferencia de datos entre el disco y la memoria RAM"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"La estructura de organización de los archivos en el disco\". Formatear implica aplicar esa estructura.",
    "source": "https://es.wikipedia.org/wiki/Formateo_de_disco"
  },
  {
    "id": 36,
    "category": "Sistemas de Archivos",
    "question": "¿Qué característica no es propia de un sistema de archivos de tipo APFS (Apple File System)?",
    "options": [
      "Diseñado principalmente para su uso en sistemas operativos macOS",
      "Utiliza una tabla de asignación de archivos basada en árbol B+",
      "Ofrece soporte para instantáneas (snapshots) y encriptación",
      "Limitación en el tamaño máximo de partición"
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Limitación en el tamaño máximo de partición\". APFS soporta volúmenes de hasta 9 quintillones de bloques.",
    "source": "https://es.wikipedia.org/wiki/Apple_File_System"
  },
  {
    "id": 37,
    "category": "Sistemas de Archivos",
    "question": "¿Cuál de las siguientes afirmaciones describe mejor un sistema de archivos de tipo ReFS (Resilient File System)?",
    "options": [
      "Utiliza una estructura de tabla de asignación de archivos FAT",
      "Diseñado principalmente para su uso en sistemas operativos Linux",
      "Ofrece resistencia a la corrupción de datos y integridad avanzada",
      "Limitación en el tamaño máximo de archivo de 4 GB"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Ofrece resistencia a la corrupción de datos y integridad avanzada\". ReFS es de Microsoft, para servidores y entornos críticos.",
    "source": "https://es.wikipedia.org/wiki/Resilient_File_System"
  },
  {
    "id": 38,
    "category": "Sistemas de Archivos",
    "question": "¿Cuál de los siguientes sistemas de archivos es más adecuado para sistemas operativos Windows?",
    "options": [
      "ext4",
      "NTFS",
      "HFS+",
      "exFAT"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"NTFS\". Es el sistema de archivos predeterminado y más completo en Windows moderno.",
    "source": "https://es.wikipedia.org/wiki/NTFS"
  },
  {
    "id": 39,
    "category": "Sistemas de Archivos",
    "question": "¿Qué característica no es común en un sistema de archivos de tipo Btrfs (B-tree File System)?",
    "options": [
      "Utiliza una estructura de árbol B para la asignación de bloques",
      "Ofrece soporte para compresión de archivos y encriptación",
      "Limitación en el tamaño máximo de partición",
      "Capacidad de realizar instantáneas (snapshots)"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Limitación en el tamaño máximo de partición\". Btrfs soporta volúmenes de hasta 16 exbibytes.",
    "source": "https://es.wikipedia.org/wiki/Btrfs"
  },
  {
    "id": 40,
    "category": "Sistemas de Archivos",
    "question": "¿Qué es la indexación en un sistema de archivos?",
    "options": [
      "La capacidad de buscar archivos utilizando un índice predefinido",
      "La organización de archivos en una estructura jerárquica de directorios",
      "La fragmentación excesiva de archivos para una rápida lectura",
      "La compresión de archivos para ahorrar espacio en disco"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"La capacidad de buscar archivos utilizando un índice predefinido\". Mejora la velocidad de búsqueda (ej. Windows Search, Spotlight).",
    "source": "https://es.wikipedia.org/wiki/Indexaci%C3%B3n_de_archivos"
  },
  {
    "id": 41,
    "category": "Planificación de Procesos",
    "question": "¿Cuál es el objetivo principal del planificador de CPU en un sistema operativo?",
    "options": [
      "Maximizar el tiempo de ejecución de cada proceso",
      "Minimizar el uso de la memoria RAM",
      "Asignar recursos de CPU a los procesos de manera eficiente",
      "Controlar el acceso a los dispositivos de E/S"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Asignar recursos de CPU a los procesos de manera eficiente\". El planificador de CPU busca maximizar el rendimiento, la equidad y la utilización del procesador.",
    "source": "https://es.wikipedia.org/wiki/Planificador"
  },
  {
    "id": 42,
    "category": "Planificación de Procesos",
    "question": "¿Qué tipo de algoritmo de planificación prioriza los procesos con mayor tiempo restante de ejecución?",
    "options": [
      "FIFO (First In, First Out)",
      "SJF (Shortest Job First)",
      "Round-robin",
      "Prioridad"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"SJF (Shortest Job First)\". SJF prioriza los procesos con menor tiempo de ejecución restante (no mayor). Nota: la pregunta contiene un error conceptual; sin embargo, entre las opciones, SJF es el único que se basa en la duración del trabajo, y se interpreta que la intención era \"menor tiempo\".",
    "source": "https://es.wikipedia.org/wiki/Shortest_Job_Next"
  },
  {
    "id": 43,
    "category": "Planificación de Procesos",
    "question": "¿Cuál de los siguientes algoritmos de planificación utiliza un quantum de tiempo para cada proceso?",
    "options": [
      "FIFO",
      "SJF",
      "Round-robin",
      "Prioridad"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Round-robin\". Este algoritmo asigna un intervalo de tiempo fijo (quantum) a cada proceso en la cola de listos.",
    "source": "https://es.wikipedia.org/wiki/Planificaci%C3%B3n_por_turnos"
  },
  {
    "id": 44,
    "category": "Planificación de Procesos",
    "question": "¿Qué característica describe mejor el algoritmo de planificación Round-robin?",
    "options": [
      "Asigna un tiempo de ejecución fijo a cada proceso",
      "Prioriza los procesos de acuerdo a su tiempo restante de ejecución",
      "Asigna prioridades estáticas a los procesos",
      "Utiliza una cola de prioridades para planificar los procesos"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Asigna un tiempo de ejecución fijo a cada proceso\". Este es el principio básico del Round-robin.",
    "source": "https://es.wikipedia.org/wiki/Planificaci%C3%B3n_por_turnos"
  },
  {
    "id": 45,
    "category": "Planificación de Procesos",
    "question": "¿Qué es la inversión de prioridades en el contexto de la planificación de procesos?",
    "options": [
      "Un proceso con menor prioridad se ejecuta antes que uno con mayor prioridad",
      "Un proceso bloqueado impide que procesos de mayor prioridad sean ejecutados",
      "Un proceso hereda la prioridad de otro proceso",
      "Un proceso es suspendido temporalmente para permitir la ejecución de otro de mayor prioridad"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Un proceso bloqueado impide que procesos de mayor prioridad sean ejecutados\". Ocurre cuando un proceso de baja prioridad mantiene un recurso que necesita un proceso de alta prioridad, y un proceso de prioridad intermedia se ejecuta en su lugar.",
    "source": "https://es.wikipedia.org/wiki/Inversi%C3%B3n_de_prioridad"
  },
  {
    "id": 46,
    "category": "Planificación de Procesos",
    "question": "¿Cuál es una desventaja del algoritmo de planificación SJF (Shortest Job First)?",
    "options": [
      "Puede causar inanición de procesos largos",
      "No garantiza un tiempo de respuesta rápido para todos los procesos",
      "Requiere conocimiento previo de la duración de cada proceso",
      "No es adecuado para sistemas con múltiples núcleos de CPU"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Requiere conocimiento previo de la duración de cada proceso\". Esto es impráctico en sistemas interactivos, aunque se pueden usar estimaciones.",
    "source": "https://es.wikipedia.org/wiki/Shortest_Job_Next"
  },
  {
    "id": 47,
    "category": "Planificación de Procesos",
    "question": "¿Qué es el tiempo de espera (waiting time) en el contexto de la planificación de procesos?",
    "options": [
      "El tiempo total que un proceso ha estado esperando en la cola de listos",
      "El tiempo de ejecución total de un proceso",
      "El tiempo transcurrido desde que se creó un proceso hasta que se termina",
      "El tiempo que un proceso pasa realizando operaciones de E/S"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"El tiempo total que un proceso ha estado esperando en la cola de listos\".",
    "source": "https://es.wikipedia.org/wiki/Planificaci%C3%B3n_de_procesos"
  },
  {
    "id": 48,
    "category": "Planificación de Procesos",
    "question": "¿Cuál es una característica del algoritmo de planificación por prioridades?",
    "options": [
      "Todos los procesos tienen la misma prioridad",
      "Los procesos se ejecutan en el orden en que llegan al sistema",
      "Los procesos pueden tener diferentes niveles de prioridad",
      "La planificación se realiza en base a la cantidad de tiempo que un proceso ha estado esperando"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Los procesos pueden tener diferentes niveles de prioridad\". Este algoritmo asigna una prioridad a cada proceso y elige el de mayor prioridad para ejecutar.",
    "source": "https://es.wikipedia.org/wiki/Planificaci%C3%B3n_de_procesos#Planificaci%C3%B3n_por_prioridades"
  },
  {
    "id": 49,
    "category": "Planificación de Procesos",
    "question": "¿Qué es la rotación de procesos en el contexto del algoritmo de planificación Round-robin?",
    "options": [
      "Cambiar la prioridad de los procesos en función de su tiempo de ejecución",
      "Permitir que los procesos esperen en la cola de listos hasta que su turno de ejecución llegue",
      "Asignar un tiempo de ejecución fijo a cada proceso antes de pasar al siguiente",
      "Suspender temporalmente un proceso para dar prioridad a otro"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Asignar un tiempo de ejecución fijo a cada proceso antes de pasar al siguiente\". Esto define la rotación cíclica del Round-robin.",
    "source": "https://es.wikipedia.org/wiki/Planificaci%C3%B3n_por_turnos"
  },
  {
    "id": 50,
    "category": "Planificación de Procesos",
    "question": "¿Cuál de los siguientes algoritmos de planificación es más adecuado para evitar la inanición de procesos?",
    "options": [
      "FIFO",
      "SJF",
      "Round-robin",
      "Prioridad"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Round-robin\". Al dar a todos los procesos una porción de tiempo equitativa, evita que alguno espere indefinidamente.",
    "source": "https://es.wikipedia.org/wiki/Planificaci%C3%B3n_por_turnos"
  },
  {
    "id": 51,
    "category": "Planificación de Procesos",
    "question": "¿Qué es la prioridad de un proceso en el contexto de la planificación de procesos?",
    "options": [
      "El tiempo total que un proceso ha estado en ejecución",
      "La cantidad de recursos asignados a un proceso",
      "El nivel de importancia relativa de un proceso en comparación con otros",
      "El tiempo que un proceso pasa esperando en la cola de listos"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"El nivel de importancia relativa de un proceso en comparación con otros\".",
    "source": "https://es.wikipedia.org/wiki/Planificaci%C3%B3n_de_procesos#Planificaci%C3%B3n_por_prioridades"
  },
  {
    "id": 52,
    "category": "Planificación de Procesos",
    "question": "¿Cuál de los siguientes algoritmos de planificación es más adecuado para sistemas en tiempo real?",
    "options": [
      "FIFO",
      "SJF",
      "Round-robin",
      "Prioridad"
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Prioridad\". Los sistemas en tiempo real suelen usar planificación basada en prioridades estáticas o dinámicas para garantizar plazos.",
    "source": "https://es.wikipedia.org/wiki/Sistema_de_tiempo_real"
  },
  {
    "id": 53,
    "category": "Planificación de Procesos",
    "question": "¿Qué es la inanición de procesos en el contexto de la planificación de procesos?",
    "options": [
      "Un proceso consume todos los recursos del sistema",
      "Un proceso bloqueado no permite que otros procesos sean ejecutados",
      "Un proceso espera indefinidamente por recursos del sistema",
      "Un proceso con mayor prioridad nunca es seleccionado para ejecución"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Un proceso espera indefinidamente por recursos del sistema\". Es común en algoritmos como SJF o prioridad sin envejecimiento.",
    "source": "https://es.wikipedia.org/wiki/Inanici%C3%B3n_(inform%C3%A1tica)"
  },
  {
    "id": 54,
    "category": "Planificación de Procesos",
    "question": "¿Qué es el quantum de tiempo en el contexto del algoritmo de planificación Round-robin?",
    "options": [
      "La cantidad de tiempo que un proceso ha estado en ejecución",
      "El tiempo total que un proceso ha estado esperando en la cola de listos",
      "El tiempo máximo permitido para la ejecución de un proceso antes de ser suspendido",
      "La cantidad de recursos asignados a un proceso"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"El tiempo máximo permitido para la ejecución de un proceso antes de ser suspendido\".",
    "source": "https://es.wikipedia.org/wiki/Planificaci%C3%B3n_por_turnos"
  },
  {
    "id": 55,
    "category": "Planificación de Procesos",
    "question": "¿Cuál es una ventaja del algoritmo de planificación Round-robin?",
    "options": [
      "Garantiza tiempos de espera mínimos para todos los procesos",
      "Es fácil de implementar y entender",
      "No requiere conocimiento previo de la duración de cada proceso",
      "Proporciona una ejecución rápida para procesos cortos"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"No requiere conocimiento previo de la duración de cada proceso\". A diferencia de SJF, Round-robin no necesita estimar tiempos de ejecución.",
    "source": "https://es.wikipedia.org/wiki/Planificaci%C3%B3n_por_turnos"
  },
  {
    "id": 56,
    "category": "Planificación de Procesos",
    "question": "¿Qué es la planificación preemptiva en el contexto de la planificación de procesos?",
    "options": [
      "Los procesos se ejecutan hasta que completan su tiempo asignado",
      "Un proceso puede ser suspendido en cualquier momento para dar paso a otro de mayor prioridad",
      "Los procesos solo se ejecutan cuando todos los recursos necesarios están disponibles",
      "La prioridad de un proceso puede cambiar durante su ejecución"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Un proceso puede ser suspendido en cualquier momento para dar paso a otro de mayor prioridad\". Esto permite mayor responsividad.",
    "source": "https://es.wikipedia.org/wiki/Planificaci%C3%B3n_de_procesos#Planificaci%C3%B3n_preemptiva"
  },
  {
    "id": 57,
    "category": "Planificación de Procesos",
    "question": "¿Cuál de las siguientes opciones describe mejor la planificación basada en eventos?",
    "options": [
      "Los procesos se ejecutan en un orden específico definido por el usuario",
      "La ejecución de procesos se basa en la llegada de eventos externos",
      "Los procesos se ejecutan en función de su tiempo restante de ejecución",
      "La prioridad de los procesos se asigna estáticamente durante la creación"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"La ejecución de procesos se basa en la llegada de eventos externos\". Es común en sistemas embebidos y en tiempo real.",
    "source": "https://es.wikipedia.org/wiki/Sistema_dirigido_por_eventos"
  },
  {
    "id": 58,
    "category": "Planificación de Procesos",
    "question": "¿Qué es el tiempo de respuesta en el contexto de la planificación de procesos?",
    "options": [
      "El tiempo total que un proceso ha estado en ejecución",
      "El tiempo que un proceso pasa esperando en la cola de listos",
      "El tiempo transcurrido desde que se creó un proceso hasta que se termina",
      "El tiempo que tarda un sistema en responder a una solicitud de usuario"
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"El tiempo que tarda un sistema en responder a una solicitud de usuario\". En sistemas interactivos, es clave para la percepción de rendimiento.",
    "source": "https://es.wikipedia.org/wiki/Tiempo_de_respuesta"
  },
  {
    "id": 59,
    "category": "Planificación de Procesos",
    "question": "¿Cuál de los siguientes algoritmos de planificación puede causar inanición de procesos largos?",
    "options": [
      "FIFO",
      "SJF",
      "Round-robin",
      "Prioridad"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"SJF\". Si llegan continuamente procesos cortos, los largos pueden esperar indefinidamente.",
    "source": "https://es.wikipedia.org/wiki/Shortest_Job_Next"
  },
  {
    "id": 60,
    "category": "Planificación de Procesos",
    "question": "¿Qué es la planificación no preemptiva en el contexto de la planificación de procesos?",
    "options": [
      "Los procesos pueden ser suspendidos en cualquier momento para dar paso a otros",
      "Los procesos se ejecutan hasta que completan su tiempo asignado",
      "La ejecución de procesos se basa en la llegada de eventos externos",
      "La prioridad de un proceso puede cambiar durante su ejecución"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Los procesos se ejecutan hasta que completan su tiempo asignado\". En realidad, en planificación no preemptiva, un proceso se ejecuta hasta que termina o se bloquea voluntariamente.",
    "source": "https://es.wikipedia.org/wiki/Planificaci%C3%B3n_de_procesos#Planificaci%C3%B3n_no_preemptiva"
  },
  {
    "id": 61,
    "category": "Seguridad en Sistemas Operativos",
    "question": "¿Cuál de las siguientes no es una función típica del subsistema de seguridad en un sistema operativo?",
    "options": [
      "Autenticación de usuarios",
      "Control de acceso a recursos",
      "Compilación de programas",
      "Auditoría de actividades"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Compilación de programas\". Es una tarea de desarrollo, no de seguridad del sistema operativo.",
    "source": "https://es.wikipedia.org/wiki/Seguridad_inform%C3%A1tica"
  },
  {
    "id": 62,
    "category": "Seguridad en Sistemas Operativos",
    "question": "¿Qué es la autenticación en el contexto de la seguridad del sistema operativo?",
    "options": [
      "Proceso de verificar la integridad de los archivos del sistema",
      "Verificación de la identidad de un usuario o entidad",
      "Control de acceso a los recursos del sistema",
      "Encriptación de datos sensibles en la memoria RAM"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Verificación de la identidad de un usuario o entidad\". Se logra mediante contraseñas, tokens, biométricos, etc.",
    "source": "https://es.wikipedia.org/wiki/Autenticaci%C3%B3n"
  },
  {
    "id": 63,
    "category": "Seguridad en Sistemas Operativos",
    "question": "¿Cuál de las siguientes opciones describe mejor la función del control de acceso en el subsistema de seguridad?",
    "options": [
      "Garantizar que todos los usuarios tengan los mismos privilegios de acceso",
      "Limitar el acceso a recursos del sistema según políticas de seguridad",
      "Asegurar que todos los archivos del sistema estén protegidos contra virus",
      "Optimizar el rendimiento del sistema operativo mediante la asignación de recursos"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Limitar el acceso a recursos del sistema según políticas de seguridad\". Ejemplos: ACLs, DAC, MAC.",
    "source": "https://es.wikipedia.org/wiki/Control_de_acceso"
  },
  {
    "id": 64,
    "category": "Seguridad en Sistemas Operativos",
    "question": "¿Qué es la autorización en el contexto de la seguridad del sistema operativo?",
    "options": [
      "Proceso de verificar la identidad de un usuario",
      "Establecimiento de políticas de seguridad para el sistema",
      "Concesión de permisos de acceso a recursos según la autenticación y el control de acceso",
      "Protección de datos confidenciales mediante técnicas de cifrado"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Concesión de permisos de acceso a recursos según la autenticación y el control de acceso\". Autenticación = quién eres; autorización = qué puedes hacer.",
    "source": "https://es.wikipedia.org/wiki/Autorizaci%C3%B3n"
  },
  {
    "id": 65,
    "category": "Seguridad en Sistemas Operativos",
    "question": "¿Qué es la auditoría en el subsistema de seguridad de un sistema operativo?",
    "options": [
      "Proceso de controlar y registrar eventos y actividades del sistema",
      "Verificación de la autenticidad de los archivos del sistema",
      "Evaluación de la seguridad del sistema mediante pruebas de penetración",
      "Protección de la red del sistema contra intrusiones externas"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Proceso de controlar y registrar eventos y actividades del sistema\". Permite detectar comportamientos sospechosos o fallos de seguridad.",
    "source": "https://es.wikipedia.org/wiki/Auditor%C3%ADa_inform%C3%A1tica"
  },
  {
    "id": 66,
    "category": "Seguridad en Sistemas Operativos",
    "question": "¿Qué es la integridad de los datos en el contexto de la seguridad del sistema operativo?",
    "options": [
      "Garantizar que los datos sean accesibles solo para usuarios autorizados",
      "Verificar que los datos no hayan sido alterados o corrompidos de manera no autorizada",
      "Controlar el acceso a los datos según su nivel de sensibilidad",
      "Optimizar el rendimiento del sistema mediante técnicas de compresión de datos"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Verificar que los datos no hayan sido alterados o corrompidos de manera no autorizada\". Es uno de los pilares de la CIA (Confidencialidad, Integridad, Disponibilidad).",
    "source": "https://es.wikipedia.org/wiki/Integridad_de_los_datos"
  },
  {
    "id": 67,
    "category": "Seguridad en Sistemas Operativos",
    "question": "¿Cuál de las siguientes opciones describe mejor la función del cifrado en el subsistema de seguridad?",
    "options": [
      "Verificar la autenticidad de los usuarios del sistema",
      "Proteger los datos mediante la conversión a un formato ilegible",
      "Controlar el acceso a los recursos del sistema",
      "Asegurar que todos los archivos del sistema estén libres de virus"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Proteger los datos mediante la conversión a un formato ilegible\". Solo los que poseen la clave pueden descifrarlos.",
    "source": "https://es.wikipedia.org/wiki/Cifrado"
  },
  {
    "id": 68,
    "category": "Seguridad en Sistemas Operativos",
    "question": "¿Qué es un cortafuegos (firewall) en el contexto de la seguridad del sistema operativo?",
    "options": [
      "Herramienta para proteger el sistema contra malware",
      "Dispositivo o software que controla el tráfico de red entrante y saliente",
      "Medida para prevenir la pérdida de datos por fallos de hardware",
      "Método para evitar la sobrecarga del sistema mediante la asignación de recursos"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Dispositivo o software que controla el tráfico de red entrante y saliente\". Filtra paquetes según reglas de seguridad.",
    "source": "https://es.wikipedia.org/wiki/Cortafuegos_(inform%C3%A1tica)"
  },
  {
    "id": 69,
    "category": "Seguridad en Sistemas Operativos",
    "question": "¿Cuál de las siguientes opciones describe mejor la función del antivirus en el subsistema de seguridad?",
    "options": [
      "Controlar el acceso a los recursos del sistema",
      "Proteger los datos mediante la detección y eliminación de software malicioso",
      "Garantizar la autenticidad de los archivos del sistema",
      "Asegurar que todos los usuarios tengan permisos adecuados para acceder a los recursos"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Proteger los datos mediante la detección y eliminación de software malicioso\".",
    "source": "https://es.wikipedia.org/wiki/Antivirus"
  },
  {
    "id": 70,
    "category": "Seguridad en Sistemas Operativos",
    "question": "¿Qué es la gestión de identidades en el contexto de la seguridad del sistema operativo?",
    "options": [
      "Proceso de controlar el acceso a los recursos del sistema",
      "Verificación de la autenticidad de los usuarios del sistema",
      "Administración de cuentas de usuario y sus privilegios",
      "Protección de datos mediante el cifrado de archivos"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Administración de cuentas de usuario y sus privilegios\". Incluye creación, modificación, eliminación y asignación de roles.",
    "source": "https://es.wikipedia.org/wiki/Gesti%C3%B3n_de_identidades_y_accesos"
  },
  {
    "id": 71,
    "category": "Seguridad en Sistemas Operativos",
    "question": "¿Cuál de las siguientes opciones describe mejor la función del control de cambios en el subsistema de seguridad?",
    "options": [
      "Supervisar y registrar los eventos y actividades del sistema",
      "Verificar la autenticidad de los usuarios del sistema",
      "Controlar el acceso a los recursos del sistema",
      "Gestionar y auditar los cambios realizados en la configuración del sistema"
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Gestionar y auditar los cambios realizados en la configuración del sistema\". Ayuda a mantener la integridad y trazabilidad.",
    "source": "https://es.wikipedia.org/wiki/Gesti%C3%B3n_de_cambios_(ingenier%C3%ADa_de_software)"
  },
  {
    "id": 72,
    "category": "Seguridad en Sistemas Operativos",
    "question": "¿Qué es la prevención de intrusiones en el contexto de la seguridad del sistema operativo?",
    "options": [
      "Protección de la red del sistema contra ataques externos",
      "Verificación de la integridad de los archivos del sistema",
      "Control de acceso a los recursos del sistema",
      "Aseguramiento de que todos los usuarios cumplan con las políticas de seguridad"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Protección de la red del sistema contra ataques externos\". Se implementa con sistemas IPS (Intrusion Prevention Systems).",
    "source": "https://es.wikipedia.org/wiki/Sistema_de_prevenci%C3%B3n_de_intrusiones"
  },
  {
    "id": 73,
    "category": "Seguridad en Sistemas Operativos",
    "question": "¿Qué es la seguridad de red en el subsistema de seguridad de un sistema operativo?",
    "options": [
      "Protección de datos mediante el cifrado de archivos",
      "Control del acceso a los recursos del sistema",
      "Seguridad de la comunicación entre dispositivos en una red",
      "Supervisión y auditoría de eventos del sistema"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Seguridad de la comunicación entre dispositivos en una red\". Incluye cifrado, autenticación y control de tráfico.",
    "source": "https://es.wikipedia.org/wiki/Seguridad_en_redes"
  },
  {
    "id": 74,
    "category": "Seguridad en Sistemas Operativos",
    "question": "¿Cuál de las siguientes opciones describe mejor la función del control de privilegios en el subsistema de seguridad?",
    "options": [
      "Verificar la autenticidad de los usuarios del sistema",
      "Limitar el acceso a los recursos del sistema según roles y permisos",
      "Proteger los datos mediante el cifrado de archivos",
      "Administración de cuentas de usuario y sus privilegios"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Limitar el acceso a los recursos del sistema según roles y permisos\". Ejemplo: principio de privilegio mínimo.",
    "source": "https://es.wikipedia.org/wiki/Control_de_acceso_basado_en_roles"
  },
  {
    "id": 75,
    "category": "Seguridad en Sistemas Operativos",
    "question": "¿Qué es la detección de intrusos en el contexto de la seguridad del sistema operativo?",
    "options": [
      "Protección de la red del sistema contra ataques externos",
      "Verificación de la integridad de los archivos del sistema",
      "Identificación y respuesta ante intentos de acceso no autorizados",
      "Control del acceso a los recursos del sistema"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Identificación y respuesta ante intentos de acceso no autorizados\". Se realiza con sistemas IDS (Intrusion Detection Systems).",
    "source": "https://es.wikipedia.org/wiki/Sistema_de_detecci%C3%B3n_de_intrusiones"
  },
  {
    "id": 76,
    "category": "Seguridad en Sistemas Operativos",
    "question": "¿Qué es la encriptación en el contexto de la seguridad del sistema operativo?",
    "options": [
      "Proceso de controlar el acceso a los recursos del sistema",
      "Protección de datos mediante la conversión a un formato ilegible",
      "Verificación de la autenticidad de los usuarios del sistema",
      "Aseguramiento de que todos los usuarios cumplan con las políticas de seguridad"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Protección de datos mediante la conversión a un formato ilegible\". Sinónimo de cifrado.",
    "source": "https://es.wikipedia.org/wiki/Cifrado"
  },
  {
    "id": 77,
    "category": "Seguridad en Sistemas Operativos",
    "question": "¿Cuál de las siguientes opciones describe mejor la función del registro de eventos en el subsistema de seguridad?",
    "options": [
      "Controlar el acceso a los recursos del sistema",
      "Supervisar y registrar eventos y actividades del sistema",
      "Proteger los datos mediante el cifrado de archivos",
      "Administración de cuentas de usuario y sus privilegios"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Supervisar y registrar eventos y actividades del sistema\". Esencial para auditoría y forense.",
    "source": "https://es.wikipedia.org/wiki/Registro_de_eventos"
  },
  {
    "id": 78,
    "category": "Seguridad en Sistemas Operativos",
    "question": "¿Qué es la gestión de parches en el contexto de la seguridad del sistema operativo?",
    "options": [
      "Proceso de controlar el acceso a los recursos del sistema",
      "Aplicación de actualizaciones de seguridad para corregir vulnerabilidades",
      "Verificación de la integridad de los archivos del sistema",
      "Protección de la red del sistema contra ataques externos"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Aplicación de actualizaciones de seguridad para corregir vulnerabilidades\".",
    "source": "https://es.wikipedia.org/wiki/Gesti%C3%B3n_de_parches"
  },
  {
    "id": 79,
    "category": "Seguridad en Sistemas Operativos",
    "question": "¿Qué es el análisis de vulnerabilidades en el subsistema de seguridad de un sistema operativo?",
    "options": [
      "Supervisión y auditoría de eventos del sistema",
      "Identificación y evaluación de posibles brechas de seguridad",
      "Protección de datos mediante el cifrado de archivos",
      "Control del acceso a los recursos del sistema"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Identificación y evaluación de posibles brechas de seguridad\". Precede a la aplicación de parches.",
    "source": "https://es.wikipedia.org/wiki/An%C3%A1lisis_de_vulnerabilidades"
  },
  {
    "id": 80,
    "category": "Seguridad en Sistemas Operativos",
    "question": "¿Qué es la gestión de políticas de seguridad en el contexto del subsistema de seguridad?",
    "options": [
      "Establecimiento y aplicación de reglas y directivas de seguridad",
      "Verificación de la autenticidad de los usuarios del sistema",
      "Control del acceso a los recursos del sistema",
      "Protección de datos mediante el cifrado de archivos"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Establecimiento y aplicación de reglas y directivas de seguridad\". Define cómo se implementa la seguridad en la organización.",
    "source": "https://es.wikipedia.org/wiki/Pol%C3%ADtica_de_seguridad"
  },
  {
    "id": 81,
    "category": "Gestión de Memoria",
    "question": "¿Cuál es el objetivo principal del subsistema de gestión de memoria en un sistema operativo?",
    "options": [
      "Maximizar el rendimiento del disco duro",
      "Garantizar que todos los procesos tengan suficiente memoria RAM",
      "Optimizar el uso de la memoria disponible en el sistema",
      "Limitar el acceso a los dispositivos de E/S"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Optimizar el uso de la memoria disponible en el sistema\". El subsistema de memoria gestiona la asignación, protección y reutilización eficiente de la RAM y la memoria virtual.",
    "source": "https://es.wikipedia.org/wiki/Gesti%C3%B3n_de_memoria"
  },
  {
    "id": 82,
    "category": "Gestión de Memoria",
    "question": "¿Qué es la fragmentación de la memoria en el contexto de la gestión de memoria?",
    "options": [
      "La división de la memoria principal en bloques de tamaño fijo",
      "La dispersión de procesos en la memoria principal",
      "La acumulación de espacios libres discontinuos en la memoria",
      "La asignación de memoria virtual a procesos en ejecución"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"La acumulación de espacios libres discontinuos en la memoria\". Esto ocurre cuando hay suficiente memoria total libre, pero no contigua para asignar a un nuevo proceso.",
    "source": "https://es.wikipedia.org/wiki/Fragmentaci%C3%B3n_de_memoria"
  },
  {
    "id": 83,
    "category": "Gestión de Memoria",
    "question": "¿Cuál es la diferencia entre la memoria virtual y la memoria física en un sistema operativo?",
    "options": [
      "La memoria virtual es más rápida que la memoria física",
      "La memoria física es una representación de los datos almacenados en el disco",
      "La memoria virtual es una abstracción que permite que el sistema opere como si tuviera más memoria de la que realmente tiene",
      "La memoria física es más grande que la memoria virtual"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"La memoria virtual es una abstracción que permite que el sistema opere como si tuviera más memoria de la que realmente tiene\". Usa espacio en disco como extensión de la RAM.",
    "source": "https://es.wikipedia.org/wiki/Memoria_virtual"
  },
  {
    "id": 84,
    "category": "Gestión de Memoria",
    "question": "¿Qué es la paginación en el contexto de la gestión de memoria?",
    "options": [
      "Un método de asignación de memoria que divide la memoria en segmentos de tamaño variable",
      "Un proceso de transferir datos entre la memoria principal y el disco",
      "Un método de asignación de memoria que divide la memoria en bloques de tamaño fijo",
      "Un método de asignación de memoria que divide la memoria en páginas de tamaño fijo"
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Un método de asignación de memoria que divide la memoria en páginas de tamaño fijo\". Es la base de la gestión moderna de memoria virtual.",
    "source": "https://es.wikipedia.org/wiki/Paginaci%C3%B3n_(inform%C3%A1tica)"
  },
  {
    "id": 85,
    "category": "Gestión de Memoria",
    "question": "¿Qué es la fragmentación externa en la gestión de memoria?",
    "options": [
      "La fragmentación causada por la acumulación de procesos en la memoria",
      "La fragmentación causada por la división de la memoria en segmentos de tamaño variable",
      "La fragmentación causada por la acumulación de espacios libres discontinuos en la memoria",
      "La fragmentación causada por la asignación de memoria virtual a procesos en ejecución"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"La fragmentación causada por la acumulación de espacios libres discontinuos en la memoria\". Es típica en sistemas con asignación contigua.",
    "source": "https://es.wikipedia.org/wiki/Fragmentaci%C3%B3n_de_memoria#Fragmentaci%C3%B3n_externa"
  },
  {
    "id": 86,
    "category": "Gestión de Memoria",
    "question": "¿Qué es la segmentación en el contexto de la gestión de memoria?",
    "options": [
      "Un método de asignación de memoria que divide la memoria en bloques de tamaño fijo",
      "Un método de asignación de memoria que divide la memoria en segmentos de tamaño variable",
      "Un método de asignación de memoria que divide la memoria en páginas de tamaño fijo",
      "Un método de asignación de memoria que divide la memoria en páginas de tamaño variable"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Un método de asignación de memoria que divide la memoria en segmentos de tamaño variable\". Cada segmento corresponde a una unidad lógica (código, datos, pila, etc.).",
    "source": "https://es.wikipedia.org/wiki/Segmentaci%C3%B3n_(inform%C3%A1tica)"
  },
  {
    "id": 87,
    "category": "Gestión de Memoria",
    "question": "¿Qué es el swapping en la gestión de memoria?",
    "options": [
      "Un método de compresión de datos para ahorrar espacio en la memoria",
      "Un método de transferencia de procesos entre la memoria principal y el disco",
      "Un método de asignación de memoria que divide la memoria en segmentos de tamaño variable",
      "Un método de asignación de memoria que divide la memoria en bloques de tamaño fijo"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Un método de transferencia de procesos entre la memoria principal y el disco\". Se usa cuando la RAM está llena.",
    "source": "https://es.wikipedia.org/wiki/Swapping"
  },
  {
    "id": 88,
    "category": "Gestión de Memoria",
    "question": "¿Cuál de las siguientes afirmaciones describe mejor la función del TLB (Translation Lookaside Buffer)?",
    "options": [
      "Almacena los datos más utilizados para un acceso rápido",
      "Traduce direcciones virtuales a direcciones físicas de memoria",
      "Gestiona la transferencia de datos entre la memoria principal y el disco",
      "Controla el acceso a los recursos del sistema"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Traduce direcciones virtuales a direcciones físicas de memoria\". El TLB es una caché del MMU que acelera la traducción de direcciones.",
    "source": "https://es.wikipedia.org/wiki/Translation_Lookaside_Buffer"
  },
  {
    "id": 89,
    "category": "Gestión de Memoria",
    "question": "¿Qué es la memoria compartida en la gestión de memoria?",
    "options": [
      "Un método de asignación de memoria que permite que múltiples procesos compartan una región de memoria",
      "Un método de asignación de memoria que divide la memoria en segmentos de tamaño variable",
      "Un método de asignación de memoria que divide la memoria en bloques de tamaño fijo",
      "Un método de asignación de memoria que divide la memoria en páginas de tamaño fijo"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Un método de asignación de memoria que permite que múltiples procesos compartan una región de memoria\". Es un mecanismo común de IPC (comunicación interprocesos).",
    "source": "https://es.wikipedia.org/wiki/Memoria_compartida"
  },
  {
    "id": 90,
    "category": "Gestión de Memoria",
    "question": "¿Cuál es el propósito principal de la paginación de memoria en un sistema operativo?",
    "options": [
      "Evitar la fragmentación interna de la memoria",
      "Facilitar la transferencia de datos entre la memoria y el disco",
      "Proporcionar un mecanismo de protección de memoria entre procesos",
      "Permitir la gestión eficiente de la memoria mediante la asignación de bloques de tamaño variable"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Proporcionar un mecanismo de protección de memoria entre procesos\". Cada proceso tiene su propio espacio de direcciones virtual, aislado del resto.",
    "source": "https://es.wikipedia.org/wiki/Paginaci%C3%B3n_(inform%C3%A1tica)"
  },
  {
    "id": 91,
    "category": "Gestión de Memoria",
    "question": "¿Qué es la memoria virtual en el contexto de la gestión de memoria?",
    "options": [
      "La cantidad total de memoria disponible en un sistema",
      "Un mecanismo que permite que el espacio de almacenamiento secundario se utilice como si fuera memoria principal",
      "La memoria que se utiliza para almacenar datos temporales durante la ejecución de un programa",
      "Un tipo de memoria de solo lectura que almacena el código de los programas"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Un mecanismo que permite que el espacio de almacenamiento secundario se utilice como si fuera memoria principal\".",
    "source": "https://es.wikipedia.org/wiki/Memoria_virtual"
  },
  {
    "id": 92,
    "category": "Gestión de Memoria",
    "question": "¿Qué es el swapping de páginas en la gestión de memoria?",
    "options": [
      "Un proceso mediante el cual se transfieren páginas completas entre la memoria principal y el disco",
      "Un método de compresión de datos para ahorrar espacio en la memoria",
      "Un método de asignación de memoria que divide la memoria en segmentos de tamaño variable",
      "Un método de asignación de memoria que divide la memoria en bloques de tamaño fijo"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Un proceso mediante el cual se transfieren páginas completas entre la memoria principal y el disco\". Es la base del reemplazo de páginas.",
    "source": "https://es.wikipedia.org/wiki/Swapping#Paginaci%C3%B3n_y_swapping"
  },
  {
    "id": 93,
    "category": "Gestión de Memoria",
    "question": "¿Qué es la paginación anticipada en la gestión de memoria?",
    "options": [
      "Un proceso mediante el cual se reservan páginas adicionales de memoria antes de que sean necesarias",
      "Un método de transferencia de procesos entre la memoria principal y el disco",
      "Un método de asignación de memoria que divide la memoria en segmentos de tamaño variable",
      "Un método de asignación de memoria que divide la memoria en bloques de tamaño fijo"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Un proceso mediante el cual se reservan páginas adicionales de memoria antes de que sean necesarias\". Se usa para mejorar el rendimiento predictivo.",
    "source": "https://es.wikipedia.org/wiki/Paginaci%C3%B3n_(inform%C3%A1tica)#Paginaci%C3%B3n_a_demand"
  },
  {
    "id": 94,
    "category": "Gestión de Memoria",
    "question": "¿Qué es la memoria caché en la gestión de memoria?",
    "options": [
      "Un tipo de memoria de solo lectura que almacena el código de los programas",
      "Un mecanismo que permite que el espacio de almacenamiento secundario se utilice como si fuera memoria principal",
      "Una memoria de acceso rápido que almacena copias de datos frecuentemente utilizados",
      "La cantidad total de memoria disponible en un sistema"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Una memoria de acceso rápido que almacena copias de datos frecuentemente utilizados\". Puede referirse a caché de CPU o de disco.",
    "source": "https://es.wikipedia.org/wiki/Cach%C3%A9_(inform%C3%A1tica)"
  },
  {
    "id": 95,
    "category": "Gestión de Memoria",
    "question": "¿Qué es la memoria física en el contexto de la gestión de memoria?",
    "options": [
      "Un tipo de memoria de solo lectura que almacena el código de los programas",
      "La memoria que se utiliza para almacenar datos temporales durante la ejecución de un programa",
      "La memoria principal del sistema, compuesta por módulos de memoria RAM",
      "Un mecanismo que permite que el espacio de almacenamiento secundario se utilice como si fuera memoria principal"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"La memoria principal del sistema, compuesta por módulos de memoria RAM\".",
    "source": "https://es.wikipedia.org/wiki/Memoria_principal"
  },
  {
    "id": 96,
    "category": "Gestión de Memoria",
    "question": "¿Qué es la fragmentación interna en la gestión de memoria?",
    "options": [
      "La fragmentación causada por la acumulación de procesos en la memoria",
      "La fragmentación causada por la división de la memoria en segmentos de tamaño variable",
      "La fragmentación causada por la asignación de memoria virtual a procesos en ejecución",
      "La fragmentación causada por la reserva de bloques de memoria más grandes de lo necesario"
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"La fragmentación causada por la reserva de bloques de memoria más grandes de lo necesario\". Es común en sistemas de paginación, donde una página puede no usarse completamente.",
    "source": "https://es.wikipedia.org/wiki/Fragmentaci%C3%B3n_de_memoria#Fragmentaci%C3%B3n_interna"
  },
  {
    "id": 97,
    "category": "Gestión de Memoria",
    "question": "¿Cuál es el propósito principal del MMU (Memory Management Unit) en un sistema operativo?",
    "options": [
      "Controlar el acceso a los recursos del sistema",
      "Traducir direcciones virtuales a direcciones físicas de memoria",
      "Gestionar la transferencia de datos entre la memoria principal y el disco",
      "Administrar cuentas de usuario y sus privilegios"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Traducir direcciones virtuales a direcciones físicas de memoria\". Es un componente hardware esencial para la memoria virtual.",
    "source": "https://es.wikipedia.org/wiki/Unidad_de_gesti%C3%B3n_de_memoria"
  },
  {
    "id": 98,
    "category": "Gestión de Memoria",
    "question": "¿Qué es la memoria paginada en la gestión de memoria?",
    "options": [
      "Un método de asignación de memoria que divide la memoria en bloques de tamaño fijo",
      "Un método de asignación de memoria que divide la memoria en segmentos de tamaño variable",
      "Un método de asignación de memoria que divide la memoria en páginas de tamaño fijo",
      "Un método de asignación de memoria que divide la memoria en páginas de tamaño variable"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Un método de asignación de memoria que divide la memoria en páginas de tamaño fijo\".",
    "source": "https://es.wikipedia.org/wiki/Paginaci%C3%B3n_(inform%C3%A1tica)"
  },
  {
    "id": 99,
    "category": "Gestión de Memoria",
    "question": "¿Qué es el swapping de segmentos en la gestión de memoria?",
    "options": [
      "Un proceso mediante el cual se transfieren segmentos completos entre la memoria principal y el disco",
      "Un método de transferencia de procesos entre la memoria principal y el disco",
      "Un método de asignación de memoria que divide la memoria en segmentos de tamaño variable",
      "Un método de asignación de memoria que divide la memoria en bloques de tamaño fijo"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Un proceso mediante el cual se transfieren segmentos completos entre la memoria principal y el disco\". Menos común que el swapping de páginas.",
    "source": "https://es.wikipedia.org/wiki/Segmentaci%C3%B3n_(inform%C3%A1tica)"
  },
  {
    "id": 100,
    "category": "Gestión de Memoria",
    "question": "¿Cuál es el propósito principal del TLB (Translation Lookaside Buffer) en la gestión de memoria?",
    "options": [
      "Almacenar datos frecuentemente utilizados para un acceso rápido",
      "Traducir direcciones virtuales a direcciones físicas de memoria",
      "Gestionar la transferencia de datos entre la memoria principal y el disco",
      "Controlar el acceso a los recursos del sistema"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Traducir direcciones virtuales a direcciones físicas de memoria\". El TLB acelera esta traducción al almacenar entradas recientes del mapa de páginas.",
    "source": "https://es.wikipedia.org/wiki/Translation_Lookaside_Buffer"
  },
  {
    "id": 101,
    "category": "Comunicación Interprocesos (IPC)",
    "question": "¿Cuál es el propósito principal del subsistema de comunicación en un sistema operativo?",
    "options": [
      "Coordinar la comunicación entre diferentes dispositivos de hardware",
      "Facilitar la interacción entre el usuario y el sistema operativo",
      "Gestionar la transferencia de datos entre procesos y dispositivos",
      "Optimizar el rendimiento del sistema en redes locales"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Gestionar la transferencia de datos entre procesos y dispositivos\". Incluye IPC local y comunicación en red.",
    "source": "https://es.wikipedia.org/wiki/Comunicaci%C3%B3n_interproceso"
  },
  {
    "id": 102,
    "category": "Comunicación Interprocesos (IPC)",
    "question": "¿Qué es un socket en el contexto del subsistema de comunicación?",
    "options": [
      "Un dispositivo de hardware utilizado para conectar periféricos al sistema",
      "Un punto final de comunicación bidireccional entre procesos en una red",
      "Una técnica de encriptación utilizada para proteger la transmisión de datos",
      "Una unidad de almacenamiento temporal para datos en tránsito"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Un punto final de comunicación bidireccional entre procesos en una red\". Es la abstracción fundamental de la programación de redes.",
    "source": "https://es.wikipedia.org/wiki/Socket_(inform%C3%A1tica)"
  },
  {
    "id": 103,
    "category": "Comunicación Interprocesos (IPC)",
    "question": "¿Qué es la comunicación punto a punto en el contexto del subsistema de comunicación?",
    "options": [
      "Un tipo de comunicación donde múltiples procesos pueden enviar datos simultáneamente",
      "Un tipo de comunicación donde solo dos procesos pueden intercambiar datos directamente",
      "Un método de comunicación que utiliza un único canal para la transmisión de datos",
      "Un método de comunicación que permite la conexión de múltiples dispositivos en una red"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Un tipo de comunicación donde solo dos procesos pueden intercambiar datos directamente\".",
    "source": "https://es.wikipedia.org/wiki/Comunicaci%C3%B3n_punto_a_punto"
  },
  {
    "id": 104,
    "category": "Comunicación Interprocesos (IPC)",
    "question": "¿Qué es la comunicación en grupo en el contexto del subsistema de comunicación?",
    "options": [
      "Un método de comunicación donde solo dos procesos pueden intercambiar datos directamente",
      "Un método de comunicación que utiliza un único canal para la transmisión de datos",
      "Un tipo de comunicación donde múltiples procesos pueden enviar datos simultáneamente",
      "Un tipo de comunicación donde un proceso puede enviar datos a múltiples receptores"
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Un tipo de comunicación donde un proceso puede enviar datos a múltiples receptores\". Ejemplo: multicast o broadcast.",
    "source": "https://es.wikipedia.org/wiki/Comunicaci%C3%B3n_multicast"
  },
  {
    "id": 105,
    "category": "Comunicación Interprocesos (IPC)",
    "question": "¿Qué es un FIFO (First-In, First-Out) en el contexto del subsistema de comunicación?",
    "options": [
      "Un tipo de canal de comunicación que prioriza los mensajes más recientes",
      "Un método de comunicación que garantiza la entrega ordenada de los mensajes",
      "Un tipo de tubería utilizada para la comunicación entre procesos",
      "Un algoritmo de planificación utilizado para la asignación de recursos"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Un tipo de tubería utilizada para la comunicación entre procesos\". Es una tubería con nombre (named pipe) en sistemas Unix.",
    "source": "https://es.wikipedia.org/wiki/FIFO_(inform%C3%A1tica)"
  },
  {
    "id": 106,
    "category": "Comunicación Interprocesos (IPC)",
    "question": "¿Qué es una tubería (pipe) en el contexto del subsistema de comunicación?",
    "options": [
      "Un tipo de canal de comunicación que prioriza los mensajes más recientes",
      "Un método de comunicación que garantiza la entrega ordenada de los mensajes",
      "Un conducto unidireccional utilizado para la comunicación entre procesos",
      "Un protocolo de red utilizado para la transmisión de datos entre dispositivos"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Un conducto unidireccional utilizado para la comunicación entre procesos\". Es un mecanismo básico de IPC en sistemas Unix.",
    "source": "https://es.wikipedia.org/wiki/Tuber%C3%ADa_(inform%C3%A1tica)"
  },
  {
    "id": 107,
    "category": "Comunicación Interprocesos (IPC)",
    "question": "¿Qué es la sincronización en el contexto del subsistema de comunicación?",
    "options": [
      "La coordinación de acciones entre procesos para evitar conflictos",
      "El proceso de enviar datos a través de una red de manera eficiente",
      "La transferencia de datos entre procesos sin la necesidad de coordinación",
      "El proceso de recibir datos de múltiples fuentes simultáneamente"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"La coordinación de acciones entre procesos para evitar conflictos\". Es esencial para el acceso seguro a recursos compartidos.",
    "source": "https://es.wikipedia.org/wiki/Sincronizaci%C3%B3n_de_procesos"
  },
  {
    "id": 108,
    "category": "Comunicación Interprocesos (IPC)",
    "question": "¿Qué es un semáforo en el contexto del subsistema de comunicación?",
    "options": [
      "Un dispositivo de hardware utilizado para conectar periféricos al sistema",
      "Un mecanismo de sincronización utilizado para controlar el acceso a recursos compartidos",
      "Un tipo de tubería utilizada para la comunicación entre procesos",
      "Una técnica de encriptación utilizada para proteger la transmisión de datos"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Un mecanismo de sincronización utilizado para controlar el acceso a recursos compartidos\". Puede ser binario o de conteo.",
    "source": "https://es.wikipedia.org/wiki/Sem%C3%A1foro_(programaci%C3%B3n)"
  },
  {
    "id": 109,
    "category": "Comunicación Interprocesos (IPC)",
    "question": "¿Qué es la comunicación asíncrona en el contexto del subsistema de comunicación?",
    "options": [
      "Un tipo de comunicación donde los procesos comparten un único canal de datos",
      "Un método de comunicación que requiere la sincronización precisa entre emisor y receptor",
      "Un tipo de comunicación donde los procesos pueden enviar y recibir datos en momentos diferentes",
      "Un método de comunicación que garantiza la entrega ordenada de los mensajes"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Un tipo de comunicación donde los procesos pueden enviar y recibir datos en momentos diferentes\". No bloquea al emisor.",
    "source": "https://es.wikipedia.org/wiki/Comunicaci%C3%B3n_as%C3%ADncrona"
  },
  {
    "id": 110,
    "category": "Comunicación Interprocesos (IPC)",
    "question": "¿Qué es el modelo cliente-servidor en el contexto del subsistema de comunicación?",
    "options": [
      "Un modelo de comunicación donde cada proceso puede actuar como cliente o servidor según sea necesario",
      "Un modelo de comunicación donde un proceso controla todos los aspectos de la comunicación",
      "Un modelo de comunicación donde un proceso solicita servicios a otro proceso dedicado (servidor)",
      "Un modelo de comunicación donde los procesos intercambian datos de manera independiente"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Un modelo de comunicación donde un proceso solicita servicios a otro proceso dedicado (servidor)\". Es el modelo predominante en redes.",
    "source": "https://es.wikipedia.org/wiki/Modelo_cliente-servidor"
  },
  {
    "id": 111,
    "category": "Comunicación Interprocesos (IPC)",
    "question": "¿Qué es la comunicación en bucle cerrado en el contexto del subsistema de comunicación?",
    "options": [
      "Un método de comunicación donde los procesos pueden enviar y recibir datos en momentos diferentes",
      "Un método de comunicación que requiere la sincronización precisa entre emisor y receptor",
      "Un método de comunicación donde los procesos comparten un único canal de datos",
      "Un método de comunicación que garantiza la entrega ordenada de los mensajes"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Un método de comunicación que requiere la sincronización precisa entre emisor y receptor\". También conocida como comunicación síncrona.",
    "source": "https://es.wikipedia.org/wiki/Comunicaci%C3%B3n_s%C3%ADncrona"
  },
  {
    "id": 112,
    "category": "Comunicación Interprocesos (IPC)",
    "question": "¿Qué es la comunicación en bucle abierto en el contexto del subsistema de comunicación?",
    "options": [
      "Un método de comunicación que garantiza la entrega ordenada de los mensajes",
      "Un método de comunicación que requiere la sincronización precisa entre emisor y receptor",
      "Un método de comunicación donde los procesos pueden enviar y recibir datos en momentos diferentes",
      "Un método de comunicación donde los procesos comparten un único canal de datos"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Un método de comunicación donde los procesos pueden enviar y recibir datos en momentos diferentes\". Sinónimo de comunicación asíncrona.",
    "source": "https://es.wikipedia.org/wiki/Comunicaci%C3%B3n_as%C3%ADncrona"
  },
  {
    "id": 113,
    "category": "Comunicación Interprocesos (IPC)",
    "question": "¿Qué es un mensaje en el contexto del subsistema de comunicación?",
    "options": [
      "Un método de comunicación que garantiza la entrega ordenada de los mensajes",
      "Un paquete de datos enviado entre procesos para transmitir información",
      "Un mecanismo de sincronización utilizado para controlar el acceso a recursos compartidos",
      "Un protocolo de red utilizado para la transmisión de datos entre dispositivos"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Un paquete de datos enviado entre procesos para transmitir información\". Es la unidad básica de comunicación en muchos IPC.",
    "source": "https://es.wikipedia.org/wiki/Paso_de_mensajes"
  },
  {
    "id": 114,
    "category": "Comunicación Interprocesos (IPC)",
    "question": "¿Qué es un canal en el contexto del subsistema de comunicación?",
    "options": [
      "Un dispositivo de hardware utilizado para conectar periféricos al sistema",
      "Un conducto utilizado para la transferencia de datos entre procesos",
      "Un método de comunicación que garantiza la entrega ordenada de los mensajes",
      "Un mecanismo de sincronización utilizado para controlar el acceso a recursos compartidos"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Un conducto utilizado para la transferencia de datos entre procesos\". Puede ser una tubería, socket, cola de mensajes, etc.",
    "source": "https://es.wikipedia.org/wiki/Canal_de_comunicaci%C3%B3n"
  },
  {
    "id": 115,
    "category": "Comunicación Interprocesos (IPC)",
    "question": "¿Qué es la comunicación en red en el contexto del subsistema de comunicación?",
    "options": [
      "Un método de comunicación donde los procesos pueden enviar y recibir datos en momentos diferentes",
      "Un método de comunicación que requiere la sincronización precisa entre emisor y receptor",
      "Un método de comunicación que se produce a través de una red de computadoras",
      "Un método de comunicación donde los procesos comparten un único canal de datos"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Un método de comunicación que se produce a través de una red de computadoras\".",
    "source": "https://es.wikipedia.org/wiki/Comunicaci%C3%B3n_en_red"
  },
  {
    "id": 116,
    "category": "Comunicación Interprocesos (IPC)",
    "question": "¿Qué es un puerto en el contexto del subsistema de comunicación?",
    "options": [
      "Un dispositivo de hardware utilizado para conectar periféricos al sistema",
      "Un número de identificación utilizado para direccionar datos a un proceso específico en una computadora",
      "Un conducto utilizado para la transferencia de datos entre procesos",
      "Un mecanismo de sincronización utilizado para controlar el acceso a recursos compartidos"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Un número de identificación utilizado para direccionar datos a un proceso específico en una computadora\". Ejemplo: puerto 80 para HTTP.",
    "source": "https://es.wikipedia.org/wiki/Puerto_(inform%C3%A1tica)"
  },
  {
    "id": 117,
    "category": "Comunicación Interprocesos (IPC)",
    "question": "¿Qué es la comunicación síncrona en el contexto del subsistema de comunicación?",
    "options": [
      "Un método de comunicación que garantiza la entrega ordenada de los mensajes",
      "Un método de comunicación que requiere la sincronización precisa entre emisor y receptor",
      "Un método de comunicación donde los procesos pueden enviar y recibir datos en momentos diferentes",
      "Un método de comunicación donde los procesos comparten un único canal de datos"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Un método de comunicación que requiere la sincronización precisa entre emisor y receptor\". El emisor espera la confirmación del receptor.",
    "source": "https://es.wikipedia.org/wiki/Comunicaci%C3%B3n_s%C3%ADncrona"
  },
  {
    "id": 118,
    "category": "Comunicación Interprocesos (IPC)",
    "question": "¿Qué es un mensaje broadcast en el contexto del subsistema de comunicación?",
    "options": [
      "Un mensaje enviado a un único destinatario específico",
      "Un mensaje enviado a todos los procesos en un grupo o red",
      "Un mensaje que contiene información sobre el estado del sistema",
      "Un mensaje enviado para solicitar una respuesta del receptor"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Un mensaje enviado a todos los procesos en un grupo o red\".",
    "source": "https://es.wikipedia.org/wiki/Broadcast"
  },
  {
    "id": 119,
    "category": "Comunicación Interprocesos (IPC)",
    "question": "¿Qué es un protocolo de comunicación en el contexto del subsistema de comunicación?",
    "options": [
      "Un conjunto de reglas y convenciones que define cómo se transmiten los datos entre dispositivos",
      "Un método de comunicación que garantiza la entrega ordenada de los mensajes",
      "Un mecanismo de sincronización utilizado para controlar el acceso a recursos compartidos",
      "Un dispositivo de hardware utilizado para conectar periféricos al sistema"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Un conjunto de reglas y convenciones que define cómo se transmiten los datos entre dispositivos\". Ejemplo: TCP/IP, HTTP.",
    "source": "https://es.wikipedia.org/wiki/Protocolo_de_comunicaciones"
  },
  {
    "id": 120,
    "category": "Comunicación Interprocesos (IPC)",
    "question": "¿Qué es la comunicación interprocesos (IPC) en el contexto del subsistema de comunicación?",
    "options": [
      "Un método de comunicación que garantiza la entrega ordenada de los mensajes",
      "Un conjunto de técnicas y mecanismos utilizados para permitir la comunicación entre procesos",
      "Un mecanismo de sincronización utilizado para controlar el acceso a recursos compartidos",
      "Un protocolo de red utilizado para la transmisión de datos entre dispositivos"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Un conjunto de técnicas y mecanismos utilizados para permitir la comunicación entre procesos\". Incluye tuberías, sockets, memoria compartida, colas de mensajes, etc.",
    "source": "https://es.wikipedia.org/wiki/Comunicaci%C3%B3n_interproceso"
  },
  {
    "id": 121,
    "category": "Historia de Windows",
    "question": "¿Cuál de las siguientes versiones de Windows fue la primera en presentar el menú de inicio?",
    "options": [
      "Windows 95",
      "Windows 98",
      "Windows XP",
      "Windows 2000"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Windows 95\". Introdujo el icónico menú Inicio, la barra de tareas y el escritorio moderno.",
    "source": "https://es.wikipedia.org/wiki/Windows_95"
  },
  {
    "id": 122,
    "category": "Historia de Windows",
    "question": "¿Cuál de las siguientes versiones de Windows fue la primera en introducir el sistema de archivos NTFS (New Technology File System)?",
    "options": [
      "Windows 95",
      "Windows NT 4.0",
      "Windows 98",
      "Windows 2000"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Windows NT 4.0\". NTFS fue introducido originalmente con Windows NT 3.1 en 1993, pero NT 4.0 lo popularizó en entornos empresariales.",
    "source": "https://es.wikipedia.org/wiki/NTFS"
  },
  {
    "id": 123,
    "category": "Historia de Windows",
    "question": "¿Cuál fue la primera versión de Windows diseñada específicamente para su uso en servidores?",
    "options": [
      "Windows NT 4.0 Server",
      "Windows Server 2003",
      "Windows Server 2008",
      "Windows Server 2012"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Windows NT 4.0 Server\". Aunque existían versiones server desde Windows NT 3.1, NT 4.0 Server fue la primera ampliamente adoptada para servidores.",
    "source": "https://es.wikipedia.org/wiki/Windows_NT_4.0"
  },
  {
    "id": 124,
    "category": "Historia de Windows",
    "question": "¿Cuál de las siguientes versiones de Windows introdujo la característica Aero Glass, que proporcionaba efectos visuales mejorados como transparencias y sombras?",
    "options": [
      "Windows Vista",
      "Windows 7",
      "Windows 8",
      "Windows 10"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Windows Vista\". Aero Glass fue una de las novedades visuales más destacadas de Windows Vista.",
    "source": "https://es.wikipedia.org/wiki/Windows_Vista"
  },
  {
    "id": 125,
    "category": "Historia de Windows",
    "question": "¿Cuál de las siguientes versiones de Windows fue la primera en incluir el navegador Internet Explorer?",
    "options": [
      "Windows 3.1",
      "Windows 95",
      "Windows 98",
      "Windows 2000"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Windows 95\". Internet Explorer 1.0 se incluyó en una actualización posterior de Windows 95.",
    "source": "https://es.wikipedia.org/wiki/Internet_Explorer"
  },
  {
    "id": 126,
    "category": "Historia de Windows",
    "question": "¿Cuál fue la primera versión de Windows que incluyó el sistema de búsqueda integrado llamado Windows Search?",
    "options": [
      "Windows Vista",
      "Windows 7",
      "Windows 8",
      "Windows 10"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Windows Vista\". Windows Search reemplazó al antiguo buscador de archivos y permitía indexación en tiempo real.",
    "source": "https://es.wikipedia.org/wiki/Windows_Vista"
  },
  {
    "id": 127,
    "category": "Historia de Windows",
    "question": "¿Qué versión de Windows introdujo por primera vez el Panel de Control?",
    "options": [
      "Windows 3.1",
      "Windows 95",
      "Windows XP",
      "Windows 7"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Windows 3.1\". El Panel de Control ya existía en versiones anteriores de Windows, pero se consolidó en Windows 3.1.",
    "source": "https://es.wikipedia.org/wiki/Windows_3.1x"
  },
  {
    "id": 128,
    "category": "Historia de Windows",
    "question": "¿Cuál de las siguientes versiones de Windows fue la primera en presentar la función de Cortana, el asistente virtual de Microsoft?",
    "options": [
      "Windows 7",
      "Windows 8",
      "Windows 8.1",
      "Windows 10"
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Windows 10\". Cortana debutó en Windows Phone y luego se integró en Windows 10 en 2015.",
    "source": "https://es.wikipedia.org/wiki/Cortana_(asistente_virtual)"
  },
  {
    "id": 129,
    "category": "Historia de Windows",
    "question": "¿Cuál de las siguientes versiones de Windows fue la primera en incluir el famoso juego \"Solitario\"?",
    "options": [
      "Windows 95",
      "Windows 98",
      "Windows 3.0",
      "Windows XP"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Windows 3.0\". Microsoft Solitaire se incluyó por primera vez en 1990 con Windows 3.0 para ayudar a los usuarios a familiarizarse con el ratón.",
    "source": "https://es.wikipedia.org/wiki/Microsoft_Solitaire"
  },
  {
    "id": 130,
    "category": "Historia de Windows",
    "question": "¿Qué versión de Windows fue la primera en incorporar el sistema de seguridad BitLocker?",
    "options": [
      "Windows Vista",
      "Windows 7",
      "Windows 8",
      "Windows 10"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Windows Vista\". BitLocker se introdujo en la edición Enterprise y Ultimate de Windows Vista.",
    "source": "https://es.wikipedia.org/wiki/BitLocker"
  },
  {
    "id": 131,
    "category": "Historia de Windows",
    "question": "¿Cuál fue la primera versión de Windows en introducir el concepto de cuentas de usuario con diferentes niveles de privilegios?",
    "options": [
      "Windows 95",
      "Windows NT",
      "Windows 2000",
      "Windows XP"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Windows NT\". Windows NT (1993) introdujo un modelo de seguridad basado en usuarios y privilegios, heredado de sistemas Unix.",
    "source": "https://es.wikipedia.org/wiki/Windows_NT"
  },
  {
    "id": 132,
    "category": "Historia de Windows",
    "question": "¿Qué versión de Windows fue la primera en introducir la función de restauración del sistema?",
    "options": [
      "Windows 98",
      "Windows Me",
      "Windows XP",
      "Windows Vista"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Windows Me\". System Restore debutó en Windows Millennium Edition (Me) en 2000.",
    "source": "https://es.wikipedia.org/wiki/Windows_Me"
  },
  {
    "id": 133,
    "category": "Historia de Windows",
    "question": "¿Cuál de las siguientes versiones de Windows fue la primera en presentar la interfaz de usuario basada en \"ventanas\"?",
    "options": [
      "Windows 1.0",
      "Windows 2.0",
      "Windows 3.0",
      "Windows 95"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Windows 1.0\". Lanzado en 1985, fue el primer sistema operativo gráfico de Microsoft con interfaz de ventanas.",
    "source": "https://es.wikipedia.org/wiki/Windows_1.0"
  },
  {
    "id": 134,
    "category": "Historia de Windows",
    "question": "¿Qué versión de Windows fue la primera en incorporar el sistema de administración de energía ACPI (Advanced Configuration and Power Interface)?",
    "options": [
      "Windows 95",
      "Windows 98",
      "Windows XP",
      "Windows 2000"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Windows 98\". Windows 98 fue el primero en soportar ACPI de forma amplia, permitiendo funciones como suspensión e hibernación.",
    "source": "https://es.wikipedia.org/wiki/Windows_98"
  },
  {
    "id": 135,
    "category": "Historia de Windows",
    "question": "¿Cuál de las siguientes versiones de Windows fue la primera en introducir el sistema de notificaciones conocido como \"Action Center\"?",
    "options": [
      "Windows Vista",
      "Windows 7",
      "Windows 8",
      "Windows 10"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Windows 7\". El Centro de Acción (Action Center) centralizaba alertas de seguridad y mantenimiento.",
    "source": "https://es.wikipedia.org/wiki/Windows_7"
  },
  {
    "id": 136,
    "category": "Historia de Windows",
    "question": "¿Qué versión de Windows fue la primera en incluir la función de escritorio remoto (Remote Desktop)?",
    "options": [
      "Windows XP Professional",
      "Windows Vista Ultimate",
      "Windows 7 Professional",
      "Windows 8 Enterprise"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Windows XP Professional\". Remote Desktop se introdujo en XP Pro en 2001, heredado de Windows NT/2000 Server.",
    "source": "https://es.wikipedia.org/wiki/Escritorio_remoto_de_Windows"
  },
  {
    "id": 137,
    "category": "Historia de Windows",
    "question": "¿Cuál de las siguientes versiones de Windows fue la primera en incluir el sistema de cifrado de archivos EFS (Encrypting File System)?",
    "options": [
      "Windows 2000",
      "Windows XP",
      "Windows Vista",
      "Windows 7"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Windows 2000\". EFS se introdujo en Windows 2000 para cifrar archivos y carpetas en volúmenes NTFS.",
    "source": "https://es.wikipedia.org/wiki/Encrypting_File_System"
  },
  {
    "id": 138,
    "category": "Historia de Windows",
    "question": "¿Cuál de las siguientes versiones de Windows fue la primera en introducir el sistema de navegación por pestañas en el Explorador de archivos?",
    "options": [
      "Windows 95",
      "Windows 98",
      "Windows XP",
      "Windows 7"
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Windows 7\". Aunque no tenía pestañas nativas, muchos confunden esta característica; en realidad, **ninguna versión de Windows hasta Windows 11 incluyó pestañas nativas en el Explorador**. Sin embargo, entre las opciones dadas, **Windows 7** introdujo mejoras visuales y de navegación que se asocian erróneamente con pestañas. Nota: la pregunta contiene un error histórico; las pestañas llegaron en **Windows 11**.",
    "source": "https://es.wikipedia.org/wiki/Explorador_de_Windows"
  },
  {
    "id": 139,
    "category": "Historia de Windows",
    "question": "¿Qué versión de Windows fue la primera en presentar el escritorio en mosaico (Tiles) en lugar del menú de inicio tradicional?",
    "options": [
      "Windows 8",
      "Windows 8.1",
      "Windows 10",
      "Windows 11"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Windows 8\". Eliminó el menú Inicio clásico y lo reemplazó por la interfaz Metro/Modern UI con mosaicos dinámicos.",
    "source": "https://es.wikipedia.org/wiki/Windows_8"
  },
  {
    "id": 140,
    "category": "Historia de Windows",
    "question": "¿Cuál de las siguientes versiones de Windows fue la primera en incluir el sistema de archivos exFAT (Extended File Allocation Table)?",
    "options": [
      "Windows Vista",
      "Windows 7",
      "Windows 8",
      "Windows 10"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Windows Vista\". exFAT se introdujo con el Service Pack 1 de Windows Vista en 2007 para dispositivos flash.",
    "source": "https://es.wikipedia.org/wiki/ExFAT"
  },
  {
    "id": 141,
    "category": "Sistemas Operativos",
    "question": "¿Qué sistema operativo es conocido por su arquitectura basada en UNIX y su uso predominante en servidores y estaciones de trabajo?",
    "options": [
      "macOS",
      "Linux",
      "Android",
      "Windows"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Linux\". Es un sistema operativo de código abierto inspirado en Unix, ampliamente usado en servidores, supercomputadoras y desarrollo.",
    "source": "https://es.wikipedia.org/wiki/Linux"
  },
  {
    "id": 142,
    "category": "Sistemas Operativos",
    "question": "¿Cuál de los siguientes sistemas operativos es una variante de Unix desarrollada por Apple Inc. y diseñada exclusivamente para hardware de Macintosh?",
    "options": [
      "Ubuntu",
      "Android",
      "iOS",
      "CentOS"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"iOS\". iOS está basado en Darwin (derivado de BSD, un Unix), al igual que macOS, y es exclusivo de dispositivos Apple móviles.",
    "source": "https://es.wikipedia.org/wiki/IOS"
  },
  {
    "id": 143,
    "category": "Sistemas Operativos",
    "question": "¿Qué sistema operativo es utilizado en dispositivos móviles y tabletas, desarrollado por Google y basado en el núcleo de Linux?",
    "options": [
      "iOS",
      "macOS",
      "Android",
      "Windows Phone"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Android\". Android utiliza el kernel de Linux y es el sistema operativo móvil más usado en el mundo.",
    "source": "https://es.wikipedia.org/wiki/Android"
  },
  {
    "id": 144,
    "category": "Sistemas Operativos",
    "question": "¿Cuál de las siguientes distribuciones de Linux es conocida por su enfoque en la simplicidad y la elegancia del diseño?",
    "options": [
      "Ubuntu",
      "Debian",
      "Fedora",
      "Arch Linux"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Ubuntu\". Ubuntu es famoso por su facilidad de uso, interfaz limpia y enfoque en la experiencia del usuario.",
    "source": "https://es.wikipedia.org/wiki/Ubuntu"
  },
  {
    "id": 145,
    "category": "Sistemas Operativos",
    "question": "¿Qué sistema operativo de código abierto es ampliamente utilizado en servidores y estaciones de trabajo y se basa en la filosofía de Unix?",
    "options": [
      "Android",
      "macOS",
      "Linux",
      "Windows"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Linux\".",
    "source": "https://es.wikipedia.org/wiki/Linux"
  },
  {
    "id": 146,
    "category": "Sistemas Operativos",
    "question": "¿Qué sistema operativo de código cerrado es utilizado exclusivamente en computadoras Macintosh?",
    "options": [
      "macOS",
      "Ubuntu",
      "Fedora",
      "CentOS"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"macOS\". Es el sistema operativo propietario de Apple para sus computadoras de escritorio y portátiles.",
    "source": "https://es.wikipedia.org/wiki/MacOS"
  },
  {
    "id": 147,
    "category": "Sistemas Operativos",
    "question": "¿Cuál de los siguientes sistemas operativos es conocido por su entorno gráfico llamado \"Finder\" y su facilidad de uso?",
    "options": [
      "Ubuntu",
      "macOS",
      "CentOS",
      "Fedora"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"macOS\". Finder es el gestor de archivos y el entorno gráfico principal de macOS.",
    "source": "https://es.wikipedia.org/wiki/Finder"
  },
  {
    "id": 148,
    "category": "Sistemas Operativos",
    "question": "¿Qué sistema operativo de código cerrado es utilizado en dispositivos móviles y tabletas, desarrollado exclusivamente por Apple Inc.?",
    "options": [
      "iOS",
      "Android",
      "Linux",
      "macOS"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"iOS\".",
    "source": "https://es.wikipedia.org/wiki/IOS"
  },
  {
    "id": 149,
    "category": "Sistemas Operativos",
    "question": "¿Cuál de las siguientes distribuciones de Linux es conocida por su enfoque en la estabilidad y la seguridad, y es ampliamente utilizada en servidores?",
    "options": [
      "Ubuntu",
      "Debian",
      "Fedora",
      "Arch Linux"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Debian\". Es la base de muchas distribuciones (incluyendo Ubuntu) y es valorada por su estabilidad y rigor en el software libre.",
    "source": "https://es.wikipedia.org/wiki/Debian"
  },
  {
    "id": 150,
    "category": "Sistemas Operativos",
    "question": "¿Qué sistema operativo es conocido por su flexibilidad y su capacidad para ejecutarse en una amplia variedad de hardware, incluidos dispositivos embebidos y supercomputadoras?",
    "options": [
      "macOS",
      "Android",
      "Linux",
      "Windows"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Linux\". Su kernel modular y su naturaleza de código abierto permiten adaptarlo a casi cualquier plataforma.",
    "source": "https://es.wikipedia.org/wiki/Linux"
  },
  {
    "id": 151,
    "category": "Sistemas Operativos",
    "question": "¿Cuál de los siguientes sistemas operativos de código abierto es utilizado principalmente en dispositivos móviles y tabletas?",
    "options": [
      "Ubuntu Touch",
      "macOS",
      "Android",
      "CentOS"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Android\". Aunque Ubuntu Touch existe, Android es el sistema de código abierto dominante en móviles.",
    "source": "https://es.wikipedia.org/wiki/Android"
  },
  {
    "id": 152,
    "category": "Sistemas Operativos",
    "question": "¿Qué sistema operativo de código abierto es conocido por su gran cantidad de distribuciones (distros) adaptadas a diferentes necesidades y preferencias de los usuarios?",
    "options": [
      "macOS",
      "Android",
      "Linux",
      "CentOS"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Linux\".",
    "source": "https://es.wikipedia.org/wiki/Distribuci%C3%B3n_de_Linux"
  },
  {
    "id": 153,
    "category": "Sistemas Operativos",
    "question": "¿Cuál de las siguientes distribuciones de Linux es conocida por su enfoque en la comunidad y su filosofía de software libre?",
    "options": [
      "Ubuntu",
      "Fedora",
      "openSUSE",
      "Arch Linux"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Ubuntu\". Aunque todas promueven el software libre, Ubuntu tiene una de las comunidades más grandes y accesibles para nuevos usuarios.",
    "source": "https://es.wikipedia.org/wiki/Ubuntu"
  },
  {
    "id": 154,
    "category": "Sistemas Operativos",
    "question": "¿Qué sistema operativo es conocido por su integración con servicios en la nube y su capacidad para ejecutarse en una amplia gama de dispositivos de hardware?",
    "options": [
      "Android",
      "macOS",
      "Linux",
      "Windows"
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Windows\". Microsoft ha integrado OneDrive, Azure y otras nubes, y Windows se ejecuta desde PCs hasta servidores y dispositivos IoT.",
    "source": "https://es.wikipedia.org/wiki/Microsoft_Windows"
  },
  {
    "id": 155,
    "category": "Sistemas Operativos",
    "question": "¿Cuál de los siguientes sistemas operativos es conocido por su seguridad, su robusto sistema de permisos y su diseño resistente a malware?",
    "options": [
      "macOS",
      "Linux",
      "Android",
      "Windows"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Linux\". Su modelo de permisos, la diversidad de distribuciones y la transparencia del código lo hacen menos vulnerable.",
    "source": "https://es.wikipedia.org/wiki/Linux"
  },
  {
    "id": 156,
    "category": "Sistemas Operativos",
    "question": "¿Qué sistema operativo es conocido por su sistema de gestión de paquetes llamado \"Homebrew\" y su potente terminal de línea de comandos?",
    "options": [
      "Windows",
      "Ubuntu",
      "macOS",
      "CentOS"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"macOS\". Homebrew es un gestor de paquetes de terceros muy popular en macOS para instalar software de línea de comandos.",
    "source": "https://es.wikipedia.org/wiki/Homebrew_(gestor_de_paquetes)"
  },
  {
    "id": 157,
    "category": "Sistemas Operativos",
    "question": "¿Cuál de las siguientes distribuciones de Linux es conocida por su enfoque en la velocidad y el rendimiento, así como por su diseño minimalista?",
    "options": [
      "Ubuntu",
      "Fedora",
      "Arch Linux",
      "openSUSE"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Arch Linux\". Es una distribución rolling release que permite a los usuarios construir su sistema desde cero, optimizado para sus necesidades.",
    "source": "https://es.wikipedia.org/wiki/Arch_Linux"
  },
  {
    "id": 158,
    "category": "Sistemas Operativos",
    "question": "¿Qué sistema operativo es utilizado principalmente en dispositivos de la familia iPhone, iPad y iPod Touch?",
    "options": [
      "macOS",
      "iOS",
      "Android",
      "Linux"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"iOS\".",
    "source": "https://es.wikipedia.org/wiki/IOS"
  },
  {
    "id": 159,
    "category": "Sistemas Operativos",
    "question": "¿Cuál de las siguientes distribuciones de Linux es conocida por su enfoque en la seguridad y la privacidad, así como por su integración con la red de anonimato Tor?",
    "options": [
      "Debian",
      "Fedora",
      "Kali Linux",
      "Ubuntu"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Kali Linux\". Es una distribución especializada en pruebas de penetración y seguridad informática.",
    "source": "https://es.wikipedia.org/wiki/Kali_Linux"
  },
  {
    "id": 160,
    "category": "Sistemas Operativos",
    "question": "¿Qué sistema operativo es utilizado en computadoras personales, estaciones de trabajo y servidores, desarrollado por Microsoft Corporation?",
    "options": [
      "macOS",
      "Linux",
      "Android",
      "Windows"
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Windows\".",
    "source": "https://es.wikipedia.org/wiki/Microsoft_Windows"
  },
  {
    "id": 161,
    "category": "Licencias de Software",
    "question": "¿Qué tipo de licencia de software permite a los usuarios utilizar, modificar y distribuir el código fuente del programa de forma gratuita?",
    "options": [
      "Licencia Propietaria",
      "Licencia Freeware",
      "Licencia Open Source",
      "Licencia Shareware"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Licencia Open Source\". Este tipo de licencia garantiza los derechos de uso, estudio, modificación y redistribución del software.",
    "source": "https://es.wikipedia.org/wiki/C%C3%B3digo_abierto"
  },
  {
    "id": 162,
    "category": "Licencias de Software",
    "question": "¿Qué tipo de licencia de software permite a los usuarios utilizar el software de forma gratuita, pero no proporciona acceso al código fuente ni permite modificaciones?",
    "options": [
      "Licencia Propietaria",
      "Licencia Freeware",
      "Licencia Open Source",
      "Licencia Shareware"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Licencia Freeware\". El software freeware es gratuito para usar, pero su código fuente no se distribuye y no se permite su modificación.",
    "source": "https://es.wikipedia.org/wiki/Freeware"
  },
  {
    "id": 163,
    "category": "Licencias de Software",
    "question": "¿Qué tipo de licencia de software permite a los usuarios utilizar el software de forma gratuita durante un período de tiempo limitado, después del cual deben pagar para continuar usándolo?",
    "options": [
      "Licencia Propietaria",
      "Licencia Freeware",
      "Licencia Open Source",
      "Licencia Shareware"
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Licencia Shareware\". El software shareware suele ofrecer una versión de prueba gratuita con funcionalidad completa o limitada por un tiempo determinado.",
    "source": "https://es.wikipedia.org/wiki/Shareware"
  },
  {
    "id": 164,
    "category": "Licencias de Software",
    "question": "¿Qué tipo de licencia de software permite a los usuarios utilizar, modificar y distribuir el software de forma gratuita, pero con la condición de que los derivados también se distribuyan bajo la misma licencia?",
    "options": [
      "Licencia Propietaria",
      "Licencia Freeware",
      "Licencia Copyleft",
      "Licencia Shareware"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Licencia Copyleft\". Es una estrategia legal usada en licencias como la GPL para garantizar que las modificaciones también permanezcan libres.",
    "source": "https://es.wikipedia.org/wiki/Copyleft"
  },
  {
    "id": 165,
    "category": "Licencias de Software",
    "question": "¿Qué tipo de licencia de software permite a los usuarios utilizar el software de forma gratuita, pero restringe su redistribución y modificación?",
    "options": [
      "Licencia Propietaria",
      "Licencia Freeware",
      "Licencia Open Source",
      "Licencia Shareware"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Licencia Freeware\". Aunque es gratuita, normalmente prohíbe la redistribución y modificación sin autorización explícita.",
    "source": "https://es.wikipedia.org/wiki/Freeware"
  },
  {
    "id": 166,
    "category": "Licencias de Software",
    "question": "¿Qué tipo de licencia de software permite a los usuarios utilizar, modificar y distribuir el software de forma gratuita, pero con la condición de que los derivados también se distribuyan bajo la misma licencia?",
    "options": [
      "Licencia Propietaria",
      "Licencia Freeware",
      "Licencia Copyleft",
      "Licencia Shareware"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Licencia Copyleft\". Es una estrategia legal usada en licencias como la GPL para garantizar que las modificaciones también permanezcan libres y se distribuyan bajo los mismos términos.",
    "source": "https://www.gnu.org/licenses/copyleft.html"
  },
  {
    "id": 167,
    "category": "Licencias de Software",
    "question": "¿Qué tipo de licencia de software permite a los usuarios utilizar el software de forma gratuita, pero no permite redistribuirlo ni modificarlo?",
    "options": [
      "Licencia Propietaria",
      "Licencia Freeware",
      "Licencia Open Source",
      "Licencia Shareware"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Licencia Freeware\". Es común en software gratuito que no es de código abierto.",
    "source": "https://es.wikipedia.org/wiki/Freeware"
  },
  {
    "id": 168,
    "category": "Licencias de Software",
    "question": "¿Qué tipo de licencia de software permite a los usuarios utilizar el software de forma gratuita, pero con la opción de pagar una tarifa para acceder a funciones adicionales o una versión premium?",
    "options": [
      "Licencia Propietaria",
      "Licencia Freeware",
      "Licencia Open Source",
      "Licencia Shareware"
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Licencia Shareware\". Muchos programas shareware ofrecen una versión básica gratuita y una versión completa de pago.",
    "source": "https://es.wikipedia.org/wiki/Shareware"
  },
  {
    "id": 169,
    "category": "Licencias de Software",
    "question": "¿Qué tipo de licencia de software permite a los usuarios utilizar, modificar y distribuir el software de forma gratuita, pero sin la obligación de que los derivados se distribuyan bajo la misma licencia?",
    "options": [
      "Licencia Propietaria",
      "Licencia Freeware",
      "Licencia Permisiva",
      "Licencia Shareware"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Licencia Permisiva\". Ejemplos incluyen la licencia MIT o BSD, que imponen muy pocos requisitos sobre el software derivado.",
    "source": "https://es.wikipedia.org/wiki/Licencia_MIT"
  },
  {
    "id": 170,
    "category": "Licencias de Software",
    "question": "¿Qué tipo de licencia permite a los usuarios utilizar contenido o software de forma gratuita, pero con restricciones en su uso, como la prohibición de uso comercial?",
    "options": [
      "Licencia Propietaria",
      "Licencia Freeware",
      "Licencia Creative Commons",
      "Licencia Shareware"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Licencia Creative Commons\". Las licencias Creative Commons, especialmente las variantes con restricción NC (No Comercial), permiten el uso gratuito pero prohíben el uso comercial del contenido o software.",
    "source": "https://creativecommons.org/licenses/by-nc/4.0/deed.es"
  },
  {
    "id": 171,
    "category": "Licencias de Software",
    "question": "¿Qué tipo de licencia de software otorga al usuario el derecho de usar, copiar, modificar y distribuir el software de forma gratuita?",
    "options": [
      "Licencia Propietaria",
      "Licencia Freeware",
      "Licencia Open Source",
      "Licencia Shareware"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Licencia Open Source\".",
    "source": "https://es.wikipedia.org/wiki/C%C3%B3digo_abierto"
  },
  {
    "id": 172,
    "category": "Licencias de Software",
    "question": "¿Qué tipo de licencia de software permite a los usuarios utilizar el software de forma gratuita solo para fines personales, pero requiere una licencia comercial para uso empresarial?",
    "options": [
      "Licencia Propietaria",
      "Licencia Freeware",
      "Licencia Open Source",
      "Licencia Shareware"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Licencia Propietaria\". Muchas licencias propietarias ofrecen versiones gratuitas para uso personal, pero exigen pago para uso comercial.",
    "source": "https://es.wikipedia.org/wiki/Software_propietario"
  },
  {
    "id": 173,
    "category": "Licencias de Software",
    "question": "¿Qué tipo de licencia de software permite a los usuarios utilizar el software de forma gratuita, pero prohíbe la redistribución y modificación?",
    "options": [
      "Licencia Propietaria",
      "Licencia Freeware",
      "Licencia Open Source",
      "Licencia Shareware"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Licencia Freeware\".",
    "source": "https://es.wikipedia.org/wiki/Freeware"
  },
  {
    "id": 174,
    "category": "Licencias de Software",
    "question": "¿Qué tipo de licencia de software permite a los usuarios utilizar, modificar y distribuir el software de forma gratuita, pero con la condición de que los derivados también se distribuyan bajo una licencia similar?",
    "options": [
      "Licencia Propietaria",
      "Licencia Freeware",
      "Licencia Copyleft",
      "Licencia Shareware"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Licencia Copyleft\".",
    "source": "https://es.wikipedia.org/wiki/Copyleft"
  },
  {
    "id": 175,
    "category": "Licencias de Software",
    "question": "¿Qué tipo de licencia de software permite a los usuarios utilizar el software de forma gratuita durante un período de tiempo limitado, después del cual deben pagar para continuar usando el software?",
    "options": [
      "Licencia Propietaria",
      "Licencia Freeware",
      "Licencia Open Source",
      "Licencia Shareware"
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Licencia Shareware\".",
    "source": "https://es.wikipedia.org/wiki/Shareware"
  },
  {
    "id": 176,
    "category": "Licencias de Software",
    "question": "¿Qué tipo de licencia de software permite a los usuarios utilizar, modificar y distribuir el software de forma gratuita, pero con la obligación de hacer públicos los cambios realizados?",
    "options": [
      "Licencia Propietaria",
      "Licencia Freeware",
      "Licencia Open Source",
      "Licencia Copyleft"
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Licencia Copyleft\". La GPL, por ejemplo, exige que el código fuente de las modificaciones se haga público si se distribuye el software derivado.",
    "source": "https://es.wikipedia.org/wiki/GNU_General_Public_License"
  },
  {
    "id": 177,
    "category": "Licencias de Software",
    "question": "¿Qué tipo de licencia de software permite a los usuarios utilizar el software de forma gratuita, pero prohíbe la redistribución y modificación sin autorización?",
    "options": [
      "Licencia Propietaria",
      "Licencia Freeware",
      "Licencia Open Source",
      "Licencia Shareware"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Licencia Freeware\".",
    "source": "https://es.wikipedia.org/wiki/Freeware"
  },
  {
    "id": 178,
    "category": "Licencias de Software",
    "question": "¿Qué tipo de licencia de software permite a los usuarios utilizar, modificar y distribuir el software de forma gratuita, pero con la condición de que se dé crédito al autor original?",
    "options": [
      "Licencia Propietaria",
      "Licencia Freeware",
      "Licencia Creative Commons",
      "Licencia Shareware"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Licencia Creative Commons\". La variante CC BY exige atribución al creador original.",
    "source": "https://es.wikipedia.org/wiki/Licencia_Creative_Commons"
  },
  {
    "id": 179,
    "category": "Instalación de Sistemas Operativos",
    "question": "¿Qué es un sistema operativo live?",
    "options": [
      "Un sistema operativo que se ejecuta directamente desde un CD o USB sin necesidad de instalación.",
      "Un sistema operativo diseñado exclusivamente para servidores en la nube.",
      "Un sistema operativo utilizado únicamente en dispositivos móviles.",
      "Un sistema operativo que requiere una activación en línea para funcionar."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Un sistema operativo que se ejecuta directamente desde un CD o USB sin necesidad de instalación.\". Es muy útil para pruebas, rescate o instalación.",
    "source": "https://es.wikipedia.org/wiki/Sistema_operativo_live"
  },
  {
    "id": 180,
    "category": "Instalación de Sistemas Operativos",
    "question": "¿Cuál es el propósito principal de un disco de instalación de un sistema operativo?",
    "options": [
      "Proporcionar una interfaz gráfica para el usuario.",
      "Instalar controladores de dispositivos automáticamente.",
      "Facilitar la instalación del sistema operativo en un equipo.",
      "Proporcionar herramientas de mantenimiento del sistema."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Facilitar la instalación del sistema operativo en un equipo.\".",
    "source": "https://es.wikipedia.org/wiki/Instalaci%C3%B3n_de_software"
  },
  {
    "id": 181,
    "category": "Instalación de Sistemas Operativos",
    "question": "¿Qué es la partición del disco duro durante la instalación de un sistema operativo?",
    "options": [
      "El proceso de eliminar todos los datos del disco duro.",
      "La creación de secciones lógicas en el disco duro para organizar y administrar los datos.",
      "La copia de seguridad de los datos del disco duro en otro medio de almacenamiento.",
      "La instalación de un sistema operativo en una memoria USB."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"La creación de secciones lógicas en el disco duro para organizar y administrar los datos.\".",
    "source": "https://es.wikipedia.org/wiki/Partici%C3%B3n_de_disco"
  },
  {
    "id": 182,
    "category": "Instalación de Sistemas Operativos",
    "question": "¿Qué es la elección del idioma durante la instalación de un sistema operativo?",
    "options": [
      "La configuración de la disposición del teclado.",
      "La selección del idioma en el que se mostrarán los mensajes y las opciones durante la instalación.",
      "La elección del país de residencia del usuario.",
      "La configuración de la zona horaria del sistema."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"La selección del idioma en el que se mostrarán los mensajes y las opciones durante la instalación.\".",
    "source": "https://es.wikipedia.org/wiki/Localizaci%C3%B3n_de_software"
  },
  {
    "id": 183,
    "category": "Instalación de Sistemas Operativos",
    "question": "¿Qué es el proceso de formateo durante la instalación de un sistema operativo?",
    "options": [
      "La eliminación de todos los archivos del disco duro.",
      "La creación de una estructura de carpetas en el disco duro.",
      "La instalación de controladores de dispositivos.",
      "La preparación del disco duro para el sistema operativo mediante la creación de un sistema de archivos."
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"La preparación del disco duro para el sistema operativo mediante la creación de un sistema de archivos.\".",
    "source": "https://es.wikipedia.org/wiki/Formateo_de_disco"
  },
  {
    "id": 184,
    "category": "Instalación de Sistemas Operativos",
    "question": "¿Cuál de las siguientes herramientas es utilizada comúnmente para crear un medio de instalación de un sistema operativo en una unidad USB?",
    "options": [
      "Disk Management (Administración de discos)",
      "Command Prompt (Símbolo del sistema)",
      "Windows Update (Actualización de Windows)",
      "Rufus"
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Rufus\". Es una herramienta popular en Windows para crear unidades USB de arranque.",
    "source": "https://es.wikipedia.org/wiki/Rufus_(software)"
  },
  {
    "id": 185,
    "category": "Instalación de Sistemas Operativos",
    "question": "Durante la instalación de un sistema operativo, ¿qué es la configuración de red?",
    "options": [
      "La selección del proveedor de servicios de Internet (ISP).",
      "La configuración de la conexión a una red Wi-Fi.",
      "La configuración de la dirección IP y otros ajustes de red.",
      "La elección del navegador web predeterminado."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"La configuración de la dirección IP y otros ajustes de red.\".",
    "source": "https://es.wikipedia.org/wiki/Configuraci%C3%B3n_de_red"
  },
  {
    "id": 186,
    "category": "Instalación de Sistemas Operativos",
    "question": "¿Qué es el proceso de activación durante la instalación de un sistema operativo?",
    "options": [
      "La instalación de programas adicionales para mejorar el rendimiento del sistema.",
      "La verificación de la autenticidad de la licencia del sistema operativo.",
      "La creación de una cuenta de usuario en línea.",
      "La configuración de la resolución de pantalla y otros ajustes de visualización."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"La verificación de la autenticidad de la licencia del sistema operativo.\".",
    "source": "https://es.wikipedia.org/wiki/Activaci%C3%B3n_de_Windows"
  },
  {
    "id": 187,
    "category": "Instalación de Sistemas Operativos",
    "question": "¿Qué es la instalación limpia de un sistema operativo?",
    "options": [
      "La instalación de un sistema operativo sin formatear el disco duro.",
      "La instalación de un sistema operativo sobre una versión existente sin eliminar los datos.",
      "La instalación de un sistema operativo sin la necesidad de introducir una clave de producto.",
      "La instalación de un sistema operativo en un nuevo equipo sin sistemas operativos previos."
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"La instalación de un sistema operativo en un nuevo equipo sin sistemas operativos previos.\". Aunque a veces implica formateo, el concepto clave es que no hay SO anterior.",
    "source": "https://es.wikipedia.org/wiki/Instalaci%C3%B3n_limpia"
  },
  {
    "id": 188,
    "category": "Instalación de Sistemas Operativos",
    "question": "¿Qué es el proceso de particionamiento durante la instalación de un sistema operativo?",
    "options": [
      "La eliminación de todos los datos del disco duro.",
      "La creación de secciones lógicas en el disco duro para organizar y administrar los datos.",
      "La copia de seguridad de los datos del disco duro en otro medio de almacenamiento.",
      "La instalación de un sistema operativo en una memoria USB."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"La creación de secciones lógicas en el disco duro para organizar y administrar los datos.\".",
    "source": "https://es.wikipedia.org/wiki/Partici%C3%B3n_de_disco"
  },
  {
    "id": 189,
    "category": "Gestores de Arranque",
    "question": "¿Qué es un gestor de arranque?",
    "options": [
      "Un programa que controla el inicio del sistema operativo y permite al usuario seleccionar entre varios sistemas operativos instalados.",
      "Un componente físico del disco duro que contiene la información de inicio del sistema operativo.",
      "Una herramienta de diagnóstico del sistema utilizada para reparar problemas de inicio.",
      "Un componente de software que controla la velocidad de inicio del sistema operativo."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Un programa que controla el inicio del sistema operativo y permite al usuario seleccionar entre varios sistemas operativos instalados.\".",
    "source": "https://es.wikipedia.org/wiki/Gestor_de_arranque"
  },
  {
    "id": 190,
    "category": "Gestores de Arranque",
    "question": "¿Cuál es una función común de un gestor de arranque?",
    "options": [
      "Optimizar la velocidad de conexión a Internet.",
      "Administrador las actualizaciones del sistema operativo.",
      "Permitir al usuario elegir entre diferentes sistemas operativos durante el arranque.",
      "Controlar el consumo de energía del equipo."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Permitir al usuario elegir entre diferentes sistemas operativos durante el arranque.\".",
    "source": "https://es.wikipedia.org/wiki/Gestor_de_arranque"
  },
  {
    "id": 191,
    "category": "Gestores de Arranque",
    "question": "¿Cuál de los siguientes gestores de arranque es utilizado comúnmente en sistemas operativos Windows?",
    "options": [
      "GRUB (Grand Unified Bootloader)",
      "LILO (LInux LOader)",
      "NTLDR (New Technology Loader)",
      "rEFInd (UEFI boot manager)"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"NTLDR (New Technology Loader)\". Fue usado en Windows NT, 2000, XP y Server 2003. A partir de Vista, se usa Windows Boot Manager.",
    "source": "https://es.wikipedia.org/wiki/NTLDR"
  },
  {
    "id": 192,
    "category": "Gestores de Arranque",
    "question": "¿Qué gestor de arranque es utilizado principalmente en sistemas basados en Linux?",
    "options": [
      "GRUB (Grand Unified Bootloader)",
      "LILO (LInux LOader)",
      "NTLDR (New Technology Loader)",
      "rEFInd (UEFI boot manager)"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"GRUB (Grand Unified Bootloader)\". Es el gestor de arranque predeterminado en la mayoría de las distribuciones modernas de Linux.",
    "source": "https://es.wikipedia.org/wiki/GNU_GRUB"
  },
  {
    "id": 193,
    "category": "Gestores de Arranque",
    "question": "¿Cuál es la función principal del gestor de arranque GRUB (Grand Unified Bootloader)?",
    "options": [
      "Controlar el acceso a los recursos del sistema.",
      "Administrar la configuración de red del equipo.",
      "Permitir al usuario seleccionar entre varios sistemas operativos durante el arranque.",
      "Gestionar las actualizaciones del sistema operativo."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Permitir al usuario seleccionar entre varios sistemas operativos durante el arranque.\".",
    "source": "https://es.wikipedia.org/wiki/GNU_GRUB"
  },
  {
    "id": 194,
    "category": "Gestores de Arranque",
    "question": "¿Qué gestor de arranque es comúnmente utilizado en sistemas macOS?",
    "options": [
      "GRUB (Grand Unified Bootloader)",
      "LILO (LInux LOader)",
      "NTLDR (New Technology Loader)",
      "rEFInd (UEFI boot manager)"
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"rEFInd (UEFI boot manager)\". Aunque macOS usa su propio gestor de arranque basado en EFI, rEFInd es una alternativa popular para arranque dual.",
    "source": "https://es.wikipedia.org/wiki/Extensible_Firmware_Interface"
  },
  {
    "id": 195,
    "category": "Gestores de Arranque",
    "question": "¿Qué gestor de arranque es utilizado en sistemas basados en UEFI?",
    "options": [
      "GRUB (Grand Unified Bootloader)",
      "LILO (LInux LOader)",
      "NTLDR (New Technology Loader)",
      "rEFInd (UEFI boot manager)"
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"rEFInd (UEFI boot manager)\". Es un gestor de arranque diseñado específicamente para sistemas UEFI.",
    "source": "https://es.wikipedia.org/wiki/Extensible_Firmware_Interface"
  },
  {
    "id": 196,
    "category": "Gestores de Arranque",
    "question": "¿Cuál es una característica de rEFInd (UEFI boot manager)?",
    "options": [
      "Compatible solo con sistemas operativos Windows.",
      "Permite arrancar sistemas operativos tanto en arquitectura x86 como en arquitectura ARM.",
      "Diseñado exclusivamente para sistemas Linux.",
      "Requiere una conexión a Internet para funcionar correctamente."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Permite arrancar sistemas operativos tanto en arquitectura x86 como en arquitectura ARM.\".",
    "source": "https://www.rodsbooks.com/refind/"
  },
  {
    "id": 197,
    "category": "Gestores de Arranque",
    "question": "¿Qué gestor de arranque es utilizado comúnmente en sistemas operativos Windows anteriores a Windows Vista?",
    "options": [
      "GRUB (Grand Unified Bootloader)",
      "LILO (LInux LOader)",
      "NTLDR (New Technology Loader)",
      "rEFInd (UEFI boot manager)"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"NTLDR (New Technology Loader)\".",
    "source": "https://es.wikipedia.org/wiki/NTLDR"
  },
  {
    "id": 198,
    "category": "Gestores de Arranque",
    "question": "¿Cuál es el gestor de arranque predeterminado en la mayoría de las distribuciones de Linux?",
    "options": [
      "GRUB (Grand Unified Bootloader)",
      "LILO (LInux LOader)",
      "NTLDR (New Technology Loader)",
      "rEFInd (UEFI boot manager)"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"GRUB (Grand Unified Bootloader)\".",
    "source": "https://es.wikipedia.org/wiki/GNU_GRUB"
  },
  {
    "id": 199,
    "category": "USB y Conectores",
    "question": "¿Cuál es la función principal de un conector USB?",
    "options": [
      "Transmitir señales de radio.",
      "Conectar dispositivos para la transferencia de datos y energía.",
      "Reproducir audio en altavoces.",
      "Capturar imágenes con una cámara."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Conectar dispositivos para la transferencia de datos y energía.\". USB es un estándar de comunicación que permite la transferencia de datos y energía entre dispositivos.",
    "source": "https://es.wikipedia.org/wiki/Universal_Serial_Bus"
  },

  {
    "id": 201,
    "category": "USB y Conectores",
    "question": "¿Qué función principal cumple el estándar USB en los sistemas informáticos modernos?",
    "options": [
      "Permitir la conexión exclusiva de impresoras",
      "Proporcionar energía solo a dispositivos móviles",
      "Conectar, comunicar y alimentar eléctricamente dispositivos periféricos",
      "Reemplazar únicamente a los puertos serie antiguos"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Conectar, comunicar y alimentar eléctricamente dispositivos periféricos\". USB es un estándar universal que combina transferencia de datos y suministro de energía.",
    "source": "https://es.wikipedia.org/wiki/Universal_Serial_Bus"
  },
  {
    "id": 202,
    "category": "USB y Conectores",
    "question": "¿Cuál de los siguientes dispositivos NO suele conectarse mediante un puerto USB?",
    "options": [
      "Teclado",
      "Disco duro externo",
      "Monitor VGA tradicional",
      "Memoria USB"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Monitor VGA tradicional\". Los monitores VGA usan conectores analógicos dedicados; aunque existen monitores USB modernos, los VGA clásicos no usan USB.",
    "source": "https://es.wikipedia.org/wiki/Universal_Serial_Bus"
  },

  {
    "id": 204,
    "category": "USB y Conectores",
    "question": "¿Qué versión de USB duplicó la velocidad máxima de transferencia a 10 Gbit/s respecto a USB 3.0?",
    "options": [
      "USB 2.0",
      "USB 3.0",
      "USB 3.1 Gen 2",
      "USB 3.2"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"USB 3.1 Gen 2\". USB 3.0 alcanzaba 5 Gbit/s, y USB 3.1 Gen 2 elevó la velocidad a 10 Gbit/s.",
    "source": "https://es.wikipedia.org/wiki/Universal_Serial_Bus#USB_3.1_con_conectores_Tipo-C_reversibles"
  },
  {
    "id": 205,
    "category": "USB y Conectores",
    "question": "¿Cuál es la velocidad máxima teórica del estándar USB 2.0?",
    "options": [
      "12 Mbit/s",
      "480 Mbit/s",
      "5 Gbit/s",
      "10 Gbit/s"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"480 Mbit/s\". Esta velocidad corresponde al modo 'High-Speed' de USB 2.0.",
    "source": "https://es.wikipedia.org/wiki/Universal_Serial_Bus#Velocidades_de_transmisi%C3%B3n"
  },
  {
    "id": 206,
    "category": "USB y Conectores",
    "question": "¿Qué característica introdujo USB 3.0 respecto a USB 2.0 en términos de comunicación?",
    "options": [
      "Comunicación half-duplex",
      "Comunicación full-duplex",
      "Solo carga eléctrica sin datos",
      "Compatibilidad exclusiva con Windows"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Comunicación full-duplex\". USB 3.0 permite enviar y recibir datos simultáneamente, a diferencia del half-duplex de USB 2.0.",
    "source": "https://es.wikipedia.org/wiki/Universal_Serial_Bus#USB_3.0"
  },
  {
    "id": 207,
    "category": "USB y Conectores",
    "question": "¿Qué función permite la especificación USB On-The-Go (OTG)?",
    "options": [
      "Cargar baterías más rápido",
      "Permitir que un dispositivo actúe como host o periférico",
      "Conectar múltiples monitores simultáneamente",
      "Aumentar la velocidad de Internet"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Permitir que un dispositivo actúe como host o periférico\". Por ejemplo, un teléfono puede leer una memoria USB directamente.",
    "source": "https://es.wikipedia.org/wiki/USB_On-The-Go"
  },
  {
    "id": 208,
    "category": "USB y Conectores",
    "question": "¿Cuál de los siguientes conectores USB es el más común en computadoras de escritorio para conectar periféricos?",
    "options": [
      "USB-C",
      "Micro-USB",
      "USB Tipo-A",
      "Mini-USB"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"USB Tipo-A\". Es el conector rectangular estándar en hosts como PCs y laptops.",
    "source": "https://es.wikipedia.org/wiki/Universal_Serial_Bus#Conectores_tipo_A_y_B"
  },
  {
    "id": 209,
    "category": "USB y Conectores",
    "question": "¿Qué pin en el conector micro-USB permite identificar si el dispositivo actúa como host o periférico en USB OTG?",
    "options": [
      "VCC",
      "D+",
      "ID",
      "GND"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"ID\". En USB OTG, el pin ID determina el rol: conectado a tierra (Tipo-A) = host; flotante (Tipo-B) = periférico.",
    "source": "https://es.wikipedia.org/wiki/Universal_Serial_Bus#Distribuci%C3%B3n_de_pines_de_los_tipos_%C2%ABmini%C2%BB_y_%C2%ABmicro%C2%BB"
  },

  {
    "id": 211,
    "category": "USB y Conectores",
    "question": "¿Cuál es la corriente máxima que puede suministrar un puerto USB 2.0 estándar?",
    "options": [
      "100 mA",
      "500 mA",
      "900 mA",
      "3 A"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"500 mA\". Esto equivale a 2.5 W a 5 V, suficiente para muchos periféricos de bajo consumo.",
    "source": "https://es.wikipedia.org/wiki/Universal_Serial_Bus#USB_3.0"
  },
  {
    "id": 212,
    "category": "USB y Conectores",
    "question": "¿Qué permite la especificación USB Power Delivery (USB-PD)?",
    "options": [
      "Transmitir video sin compresión",
      "Negociar voltajes y corrientes más altos para carga rápida",
      "Conectar redes Ethernet directamente",
      "Reemplazar completamente a los adaptadores de corriente"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Negociar voltajes y corrientes más altos para carga rápida\". USB-PD puede entregar hasta 100 W (20 V / 5 A).",
    "source": "https://es.wikipedia.org/wiki/USB-C#USB_Power_Delivery"
  },
  {
    "id": 213,
    "category": "USB y Conectores",
    "question": "¿Qué tipo de señal utilizan los pares de datos D+ y D- en USB 2.0?",
    "options": [
      "Señal diferencial",
      "Señal analógica",
      "Señal de radiofrecuencia",
      "Señal de corriente continua"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Señal diferencial\". Esta técnica reduce el ruido electromagnético y mejora la integridad de la señal.",
    "source": "https://es.wikipedia.org/wiki/Universal_Serial_Bus#Velocidades_de_transmisi%C3%B3n"
  },
  {
    "id": 214,
    "category": "USB y Conectores",
    "question": "¿Cuál de los siguientes NO es un tipo de conector USB definido en las especificaciones oficiales?",
    "options": [
      "USB Tipo-A",
      "USB Tipo-B",
      "USB Tipo-D",
      "USB Tipo-C"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"USB Tipo-D\". No existe en las especificaciones oficiales del USB-IF.",
    "source": "https://es.wikipedia.org/wiki/Universal_Serial_Bus#Compatibilidad_y_conectores"
  },
  {
    "id": 215,
    "category": "USB y Conectores",
    "question": "¿Qué ventaja ofrece el uso de un hub USB con fuente de alimentación externa?",
    "options": [
      "Aumenta la velocidad de transferencia de datos",
      "Permite conectar más dispositivos sin sobrecargar el puerto host",
      "Convierte automáticamente USB 2.0 en USB 3.0",
      "Elimina la necesidad de drivers"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Permite conectar más dispositivos sin sobrecargar el puerto host\". La fuente externa suministra energía adicional a los periféricos.",
    "source": "https://es.wikipedia.org/wiki/Universal_Serial_Bus#Uso"
  },
  {
    "id": 216,
    "category": "USB y Conectores",
    "question": "¿Qué significa la retrocompatibilidad en el contexto de USB?",
    "options": [
      "Que los dispositivos nuevos no funcionan con sistemas antiguos",
      "Que los dispositivos USB más antiguos pueden funcionar en puertos más nuevos",
      "Que solo se pueden usar cables del mismo estándar",
      "Que la velocidad siempre se mantiene constante"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Que los dispositivos USB más antiguos pueden funcionar en puertos más nuevos\". La velocidad se limitará al estándar más lento.",
    "source": "https://es.wikipedia.org/wiki/Universal_Serial_Bus#USB_3.1_con_conectores_Tipo-C_reversibles"
  },
  {
    "id": 217,
    "category": "USB y Conectores",
    "question": "¿Qué color suele tener el aislante del cable D+ en un cable USB estándar?",
    "options": [
      "Rojo",
      "Blanco",
      "Verde",
      "Negro"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Verde\". Según la especificación, D+ es verde y D− es blanco.",
    "source": "https://es.wikipedia.org/wiki/Universal_Serial_Bus#Distribuci%C3%B3n_de_pines_de_los_tipos_A_y_B"
  },
  {
    "id": 218,
    "category": "USB y Conectores",
    "question": "¿Qué función cumple el pin VCC en un conector USB?",
    "options": [
      "Transmitir datos positivos",
      "Transmitir datos negativos",
      "Suministrar +5 V de alimentación",
      "Actuar como tierra de referencia"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Suministrar +5 V de alimentación\". Es la fuente de energía para periféricos de bajo consumo.",
    "source": "https://es.wikipedia.org/wiki/Universal_Serial_Bus#Distribuci%C3%B3n_de_pines_de_los_tipos_A_y_B"
  },
  {
    "id": 219,
    "category": "Extensiones de Archivo",
    "question": "¿Qué es un archivo con extensión \".docx\"?",
    "options": [
      "Un archivo de video.",
      "Un archivo de texto sin formato.",
      "Un documento de Microsoft Word.",
      "Un archivo de imagen."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Un documento de Microsoft Word.\". La extensión .docx se introdujo con Microsoft Office 2007 y utiliza un formato basado en XML.",
    "source": "https://es.wikipedia.org/wiki/Office_Open_XML"
  },
  {
    "id": 220,
    "category": "Extensiones de Archivo",
    "question": "¿Qué tipo de archivo es comúnmente asociado con la extensión \".jpg\"?",
    "options": [
      "Un archivo de texto.",
      "Una hoja de cálculo.",
      "Una imagen.",
      "Un archivo de audio."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Una imagen.\". JPG (o JPEG) es un formato de compresión de imágenes ampliamente utilizado.",
    "source": "https://es.wikipedia.org/wiki/JPEG"
  },
  {
    "id": 221,
    "category": "Extensiones de Archivo",
    "question": "¿Qué significa la extensión \".pdf\"?",
    "options": [
      "Portable Document Format.",
      "Program Data File.",
      "Personal Digital File.",
      "Print Document File."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Portable Document Format.\". Fue desarrollado por Adobe para presentar documentos de forma independiente del software, hardware o sistema operativo.",
    "source": "https://es.wikipedia.org/wiki/Portable_Document_Format"
  },
  {
    "id": 222,
    "category": "Extensiones de Archivo",
    "question": "¿Cuál es la función principal de un archivo con extensión \".exe\"?",
    "options": [
      "Contiene datos de configuración.",
      "Es un archivo de imagen.",
      "Ejecuta un programa en Windows.",
      "Almacena datos de audio."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Ejecuta un programa en Windows.\". Los archivos .exe son ejecutables en sistemas Windows.",
    "source": "https://es.wikipedia.org/wiki/Portable_Executable"
  },
  {
    "id": 223,
    "category": "Extensiones de Archivo",
    "question": "¿Qué tipo de archivo suele tener la extensión \".xlsx\"?",
    "options": [
      "Un archivo de texto.",
      "Una presentación.",
      "Una hoja de cálculo de Microsoft Excel.",
      "Un archivo de audio."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Una hoja de cálculo de Microsoft Excel.\". Es el formato predeterminado desde Excel 2007.",
    "source": "https://es.wikipedia.org/wiki/Office_Open_XML"
  },
  {
    "id": 224,
    "category": "Extensiones de Archivo",
    "question": "¿Qué es un archivo comprimido con extensión \".zip\"?",
    "options": [
      "Un archivo que contiene varios archivos y/o carpetas comprimidos.",
      "Un archivo de imagen.",
      "Un documento de texto.",
      "Un archivo de audio."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Un archivo que contiene varios archivos y/o carpetas comprimidos.\". ZIP es un formato estándar de compresión sin pérdida.",
    "source": "https://es.wikipedia.org/wiki/ZIP_(formato_de_compresi%C3%B3n)"
  },
  {
    "id": 225,
    "category": "Permisos de Archivo",
    "question": "¿Qué significan los permisos de archivo \"lectura\", \"escritura\" y \"ejecución\" en un sistema operativo?",
    "options": [
      "Lectura: ver el contenido del archivo, Escritura: modificar el contenido del archivo, Ejecución: ejecutar el archivo como un programa.",
      "Escritura: ver el contenido del archivo, Lectura: modificar el contenido del archivo, Ejecución: ejecutar el archivo como un programa.",
      "Lectura: modificar el contenido del archivo, Escritura: ver el contenido del archivo, Ejecución: ejecutar el archivo como un programa.",
      "Ejecución: ver el contenido del archivo, Escritura: modificar el contenido del archivo, Lectura: ejecutar el archivo como un programa."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Lectura: ver el contenido del archivo, Escritura: modificar el contenido del archivo, Ejecución: ejecutar el archivo como un programa.\". Estos son los permisos básicos en sistemas Unix/Linux y similares en Windows.",
    "source": "https://es.wikipedia.org/wiki/Permisos_de_archivo"
  },
  {
    "id": 226,
    "category": "Extensiones de Archivo",
    "question": "¿Qué es un archivo con extensión \".txt\"?",
    "options": [
      "Un archivo de audio.",
      "Un documento de texto sin formato.",
      "Un archivo de imagen.",
      "Un archivo ejecutable."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Un documento de texto sin formato.\". No contiene formato de estilo, solo texto plano.",
    "source": "https://es.wikipedia.org/wiki/Archivo_de_texto"
  },
  {
    "id": 227,
    "category": "Extensiones de Archivo",
    "question": "¿Qué tipo de archivo es comúnmente asociado con la extensión \".mp3\"?",
    "options": [
      "Un archivo de video.",
      "Un archivo de audio.",
      "Un documento de texto.",
      "Un archivo de imagen."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Un archivo de audio.\". MP3 es un formato de compresión de audio con pérdida.",
    "source": "https://es.wikipedia.org/wiki/MP3"
  },
  {
    "id": 228,
    "category": "Extensiones de Archivo",
    "question": "¿Qué significa la extensión \".html\"?",
    "options": [
      "Hyper Text Markup Language.",
      "High-Tech Multimedia Link.",
      "Home Tool Management Language.",
      "Hybrid Text Mode Link."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Hyper Text Markup Language.\". Es el lenguaje estándar para crear páginas web.",
    "source": "https://es.wikipedia.org/wiki/HTML"
  },
  {
    "id": 229,
    "category": "Extensiones de Archivo",
    "question": "¿Qué es un archivo con extensión \".csv\"?",
    "options": [
      "Un archivo de audio.",
      "Un archivo de texto separado por comas.",
      "Un archivo de imagen.",
      "Un archivo ejecutable."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Un archivo de texto separado por comas.\". Se usa comúnmente para intercambiar datos entre hojas de cálculo y bases de datos.",
    "source": "https://es.wikipedia.org/wiki/Valores_separados_por_comas"
  },
  {
    "id": 230,
    "category": "Extensiones de Archivo",
    "question": "¿Qué tipo de archivo es comúnmente asociado con la extensión \".pptx\"?",
    "options": [
      "Una hoja de cálculo.",
      "Una presentación de PowerPoint.",
      "Un archivo de texto.",
      "Un archivo de audio."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Una presentación de PowerPoint.\". Es el formato desde Microsoft PowerPoint 2007.",
    "source": "https://es.wikipedia.org/wiki/Office_Open_XML"
  },
  {
    "id": 231,
    "category": "Extensiones de Archivo",
    "question": "¿Qué es un archivo con extensión \".gif\"?",
    "options": [
      "Un archivo de audio.",
      "Una imagen animada.",
      "Un archivo de texto.",
      "Un archivo ejecutable."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Una imagen animada.\". Aunque también puede ser estática, GIF soporta animación simple.",
    "source": "https://es.wikipedia.org/wiki/GIF"
  },
  {
    "id": 232,
    "category": "Permisos de Archivo",
    "question": "¿Qué significan los permisos de archivo \"lectura\" y \"escritura\" en un sistema operativo?",
    "options": [
      "Lectura: ver el contenido del archivo, Escritura: modificar el contenido del archivo.",
      "Escritura: ver el contenido del archivo, Lectura: modificar el contenido del archivo.",
      "Lectura: modificar el contenido del archivo, Escritura: ver el contenido del archivo.",
      "Ejecución: ver el contenido del archivo, Escritura: modificar el contenido del archivo."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Lectura: ver el contenido del archivo, Escritura: modificar el contenido del archivo.\".",
    "source": "https://es.wikipedia.org/wiki/Permisos_de_archivo"
  },
  {
    "id": 233,
    "category": "Extensiones de Archivo",
    "question": "¿Qué es un archivo con extensión \".png\"?",
    "options": [
      "Un archivo de audio.",
      "Una imagen sin pérdida de calidad.",
      "Un archivo de texto.",
      "Un archivo ejecutable."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Una imagen sin pérdida de calidad.\". PNG usa compresión sin pérdida y soporta transparencia.",
    "source": "https://es.wikipedia.org/wiki/Portable_Network_Graphics"
  },
  {
    "id": 234,
    "category": "Extensiones de Archivo",
    "question": "¿Qué es un archivo con extensión \".dll\"?",
    "options": [
      "Un archivo de audio.",
      "Una biblioteca de enlace dinámico.",
      "Un archivo de texto.",
      "Un archivo ejecutable."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Una biblioteca de enlace dinámico.\". Contiene código y datos que pueden usarse por múltiples programas simultáneamente en Windows.",
    "source": "https://es.wikipedia.org/wiki/Biblioteca_de_enlace_din%C3%A1mico"
  },
  {
    "id": 235,
    "category": "Permisos de Archivo",
    "question": "¿Qué significan los permisos de archivo \"lectura\" y \"ejecución\" en un sistema operativo?",
    "options": [
      "Lectura: ver el contenido del archivo, Ejecución: ejecutar el archivo como un programa.",
      "Ejecución: ver el contenido del archivo, Lectura: ejecutar el archivo como un programa.",
      "Lectura: ejecutar el archivo como un programa, Ejecución: ver el contenido del archivo.",
      "Escritura: ver el contenido del archivo, Ejecución: ejecutar el archivo como un programa."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Lectura: ver el contenido del archivo, Ejecución: ejecutar el archivo como un programa.\".",
    "source": "https://es.wikipedia.org/wiki/Permisos_de_archivo"
  },
  {
    "id": 236,
    "category": "Extensiones de Archivo",
    "question": "¿Qué es un archivo con extensión \".avi\"?",
    "options": [
      "Un archivo de audio.",
      "Un archivo de video.",
      "Un archivo de texto.",
      "Un archivo ejecutable."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Un archivo de video.\". AVI (Audio Video Interleave) es un contenedor multimedia desarrollado por Microsoft.",
    "source": "https://es.wikipedia.org/wiki/Audio_Video_Interleave"
  },
  {
    "id": 237,
    "category": "Extensiones de Archivo",
    "question": "¿Qué es un archivo con extensión \".zip\"?",
    "options": [
      "Un archivo de audio.",
      "Un archivo comprimido que puede contener múltiples archivos y carpetas.",
      "Un archivo de texto.",
      "Un archivo ejecutable."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Un archivo comprimido que puede contener múltiples archivos y carpetas.\".",
    "source": "https://es.wikipedia.org/wiki/ZIP_(formato_de_compresi%C3%B3n)"
  },
  {
    "id": 238,
    "category": "Extensiones de Archivo",
    "question": "¿Qué es un archivo con extensión \".bat\"?",
    "options": [
      "Un archivo de audio.",
      "Un script de procesamiento por lotes de Windows.",
      "Un archivo de texto.",
      "Un archivo ejecutable."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Un script de procesamiento por lotes de Windows.\". Contiene comandos que se ejecutan secuencialmente en el intérprete de comandos.",
    "source": "https://es.wikipedia.org/wiki/Archivo_batch"
  },
  {
    "id": 239,
    "category": "Extensiones de Archivo",
    "question": "¿Qué es un archivo con extensión \".rar\"?",
    "options": [
      "Un archivo de audio.",
      "Un archivo comprimido similar al formato ZIP.",
      "Un archivo de texto.",
      "Un archivo ejecutable."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Un archivo comprimido similar al formato ZIP.\". RAR es un formato propietario con alta compresión.",
    "source": "https://es.wikipedia.org/wiki/RAR"
  },
  {
    "id": 240,
    "category": "Extensiones de Archivo",
    "question": "¿Qué es un archivo con extensión \".mp4\"?",
    "options": [
      "Un archivo de audio.",
      "Un archivo de video.",
      "Un archivo de texto.",
      "Un archivo ejecutable."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Un archivo de video.\". MP4 es un contenedor multimedia estándar que puede incluir audio, video y subtítulos.",
    "source": "https://es.wikipedia.org/wiki/MPEG-4_Part_14"
  },
  {
    "id": 241,
    "category": "Extensiones de Archivo",
    "question": "¿Qué es un archivo con extensión \".ini\"?",
    "options": [
      "Un archivo de audio.",
      "Un archivo de configuración utilizado por programas en Windows.",
      "Un archivo de texto.",
      "Un archivo ejecutable."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Un archivo de configuración utilizado por programas en Windows.\". Contiene pares clave-valor en secciones.",
    "source": "https://es.wikipedia.org/wiki/Archivo_INI"
  },
  {
    "id": 242,
    "category": "Extensiones de Archivo",
    "question": "¿Qué es un archivo con extensión \".xml\"?",
    "options": [
      "Un archivo de audio.",
      "Un archivo utilizado para almacenar y transportar datos.",
      "Un archivo de texto.",
      "Un archivo ejecutable."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Un archivo utilizado para almacenar y transportar datos.\". XML es legible por humanos y máquinas, y es ampliamente usado en configuraciones y APIs.",
    "source": "https://es.wikipedia.org/wiki/Extensible_Markup_Language"
  },
  {
    "id": 243,
    "category": "Extensiones de Archivo",
    "question": "¿Qué es un archivo con extensión \".ppt\"?",
    "options": [
      "Un archivo de audio.",
      "Una presentación de PowerPoint anterior a la versión 2007.",
      "Un archivo de texto.",
      "Un archivo ejecutable."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Una presentación de PowerPoint anterior a la versión 2007.\". El formato .ppt fue reemplazado por .pptx.",
    "source": "https://es.wikipedia.org/wiki/Microsoft_PowerPoint"
  },
  {
    "id": 244,
    "category": "Extensiones de Archivo",
    "question": "¿Qué es un archivo con extensión \".cfg\"?",
    "options": [
      "Un archivo de audio.",
      "Un archivo de configuración utilizado por programas.",
      "Un archivo de texto.",
      "Un archivo ejecutable."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Un archivo de configuración utilizado por programas.\". Similar a .ini, pero sin una estructura estandarizada.",
    "source": "https://es.wikipedia.org/wiki/Archivo_de_configuraci%C3%B3n"
  },
  {
    "id": 245,
    "category": "Extensiones de Archivo",
    "question": "¿Qué es un archivo con extensión \".json\"?",
    "options": [
      "Un archivo de audio.",
      "Un formato de archivo utilizado para el intercambio de datos estructurados.",
      "Un archivo de texto.",
      "Un archivo ejecutable."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Un formato de archivo utilizado para el intercambio de datos estructurados.\". JSON es ligero y fácil de leer, común en APIs web.",
    "source": "https://es.wikipedia.org/wiki/JSON"
  },
  {
    "id": 246,
    "category": "Extensiones de Archivo",
    "question": "¿Qué es un archivo con extensión \".xlsx\"?",
    "options": [
      "Un archivo de audio.",
      "Una hoja de cálculo de Excel.",
      "Un archivo de texto.",
      "Un archivo ejecutable."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Una hoja de cálculo de Excel.\".",
    "source": "https://es.wikipedia.org/wiki/Office_Open_XML"
  },
  {
    "id": 247,
    "category": "Extensiones de Archivo",
    "question": "¿Qué es un archivo con extensión \".log\"?",
    "options": [
      "Un archivo de audio.",
      "Un archivo de registro que registra eventos y acciones.",
      "Un archivo de texto.",
      "Un archivo ejecutable."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Un archivo de registro que registra eventos y acciones.\". Usado por sistemas operativos y aplicaciones para auditoría y diagnóstico.",
    "source": "https://es.wikipedia.org/wiki/Archivo_de_registro"
  },
  {
    "id": 248,
    "category": "Extensiones de Archivo",
    "question": "¿Qué es un archivo con extensión \".iso\"?",
    "options": [
      "Un archivo de audio.",
      "Una imagen de disco que contiene una copia exacta de un CD o DVD.",
      "Un archivo de texto.",
      "Un archivo ejecutable."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Una imagen de disco que contiene una copia exacta de un CD o DVD.\". Se usa para distribuir sistemas operativos y software.",
    "source": "https://es.wikipedia.org/wiki/Imagen_ISO"
  },
  {
    "id": 249,
    "category": "Copias de Seguridad",
    "question": "¿Cuál de las siguientes opciones describe mejor el propósito de realizar copias de seguridad en sistemas Windows?",
    "options": [
      "Liberar espacio en disco.",
      "Proteger los datos contra pérdidas.",
      "Acelerar el rendimiento del sistema.",
      "Incrementar el tamaño de la memoria RAM."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Proteger los datos contra pérdidas.\". Las copias de seguridad permiten recuperar información en caso de fallos, errores o ataques.",
    "source": "https://es.wikipedia.org/wiki/Copia_de_seguridad"
  },
  {
    "id": 250,
    "category": "Copias de Seguridad",
    "question": "¿Cuál es una herramienta integrada en Windows que se puede utilizar para realizar copias de seguridad?",
    "options": [
      "Microsoft Word.",
      "File Explorer.",
      "Paint.",
      "Windows Backup."
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Windows Backup.\". En versiones modernas, se usa \"Historial de archivos\" y \"Copia de seguridad y restauración\" (heredado).",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 251,
    "category": "Copias de Seguridad",
    "question": "¿Qué tipo de archivo se utiliza comúnmente para almacenar una copia de seguridad en Windows?",
    "options": [
      ".docx",
      ".exe",
      ".bak",
      ".jpg"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \".bak\". Muchas aplicaciones usan esta extensión para archivos de respaldo, aunque Windows no la usa exclusivamente.",
    "source": "https://es.wikipedia.org/wiki/Extensi%C3%B3n_de_archivo"
  },
  {
    "id": 252,
    "category": "Copias de Seguridad",
    "question": "¿Qué opción de copia de seguridad en Windows 10/11 permite realizar copias de seguridad automáticas de archivos personales y de sistema?",
    "options": [
      "Windows Backup and Restore.",
      "File History.",
      "System Restore.",
      "Disk Cleanup."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"File History.\". Se enfoca en archivos personales y permite versiones anteriores.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 253,
    "category": "Copias de Seguridad",
    "question": "¿Qué es la característica \"File History\" en Windows 10/11?",
    "options": [
      "Una función para cambiar el nombre de archivos.",
      "Un sistema de cifrado de archivos.",
      "Una herramienta para crear y mantener copias de seguridad de archivos.",
      "Un programa de edición de imágenes."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Una herramienta para crear y mantener copias de seguridad de archivos.\".",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 254,
    "category": "Copias de Seguridad",
    "question": "¿Qué tipo de dispositivos de almacenamiento se pueden utilizar para almacenar copias de seguridad en Windows?",
    "options": [
      "Solo discos duros externos.",
      "Solo CDs y DVDs.",
      "Discos duros externos, unidades de red, unidades flash USB, etc.",
      "Solo en la nube."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Discos duros externos, unidades de red, unidades flash USB, etc.\". File History y otras herramientas admiten múltiples destinos.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 255,
    "category": "Copias de Seguridad",
    "question": "¿Cuál de las siguientes afirmaciones es cierta sobre las copias de seguridad en Windows?",
    "options": [
      "No es necesario comprobar regularmente si las copias de seguridad son exitosas.",
      "Se deben realizar las copias de seguridad únicamente una vez al año.",
      "Es importante almacenar las copias de seguridad en el mismo disco que el sistema operativo.",
      "Las copias de seguridad deben ser probadas regularmente para asegurarse de que se puedan restaurar correctamente."
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Las copias de seguridad deben ser probadas regularmente para asegurarse de que se puedan restaurar correctamente.\". Una copia no verificada no es confiable.",
    "source": "https://es.wikipedia.org/wiki/Copia_de_seguridad"
  },
  {
    "id": 256,
    "category": "Sistemas de Archivos",
    "question": "¿Qué es el \"Sistema de Archivos de Resilient File System (ReFS)\" en Windows?",
    "options": [
      "Un sistema operativo alternativo a Windows.",
      "Un sistema de archivos diseñado para mejorar la integridad de los datos y la resistencia contra fallos.",
      "Un software de edición de video.",
      "Una herramienta de limpieza de disco."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Un sistema de archivos diseñado para mejorar la integridad de los datos y la resistencia contra fallos.\". Desarrollado por Microsoft para entornos empresariales críticos.",
    "source": "https://es.wikipedia.org/wiki/Resilient_File_System"
  },
  {
    "id": 257,
    "category": "Copias de Seguridad",
    "question": "¿Qué característica de Windows 10/11 permite restaurar el sistema a un estado anterior en caso de problemas?",
    "options": [
      "System Backup.",
      "System Restore.",
      "File History.",
      "Disk Cleanup."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"System Restore.\". Crea puntos de restauración del sistema (no de archivos personales).",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 258,
    "category": "Copias de Seguridad",
    "question": "¿Cuál es una ventaja de usar un disco duro externo para almacenar copias de seguridad en comparación con la nube?",
    "options": [
      "Mayor accesibilidad desde cualquier lugar con conexión a internet.",
      "Mayor velocidad de transferencia de datos.",
      "Menor riesgo de pérdida de datos debido a problemas de conexión a internet.",
      "Mayor capacidad de almacenamiento."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Mayor velocidad de transferencia de datos.\". El acceso local es generalmente más rápido que la subida a la nube.",
    "source": "https://es.wikipedia.org/wiki/Copia_de_seguridad"
  },
  {
    "id": 299,
    "category": "Sistemas de Archivos",
    "question": "¿Cuál de los siguientes sistemas de archivos es más apropiado para discos ópticos como CDs y DVDs?",
    "options": [
      "NTFS",
      "FAT32",
      "ISO 9660",
      "HFS+"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"ISO 9660\". Es el estándar internacional para sistemas de archivos en discos ópticos como CD-ROM.",
    "source": "https://es.wikipedia.org/wiki/ISO_9660"
  },
  {
    "id": 300,
    "category": "Sistemas de Archivos",
    "question": "¿Qué es el \"filesystem defragmentation\" en sistemas de archivos como NTFS?",
    "options": [
      "Un proceso para eliminar archivos duplicados.",
      "Un proceso para desfragmentar archivos individuales.",
      "Un proceso para organizar y reordenar los datos en el disco para mejorar el rendimiento.",
      "Un registro de todas las acciones realizadas en el sistema de archivos."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Un proceso para organizar y reordenar los datos en el disco para mejorar el rendimiento.\". La desfragmentación reduce el tiempo de acceso al colocar fragmentos contiguos.",
    "source": "https://es.wikipedia.org/wiki/Desfragmentaci%C3%B3n"
  },
  {
    "id": 301,
    "category": "Sistemas de Archivos",
    "question": "¿Cuál de los siguientes sistemas de archivos es utilizado por defecto en sistemas operativos Linux?",
    "options": [
      "NTFS",
      "FAT32",
      "ext4",
      "exFAT"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"ext4\". Es el sistema de archivos predeterminado en la mayoría de las distribuciones Linux modernas.",
    "source": "https://es.wikipedia.org/wiki/Ext4"
  },
  {
    "id": 302,
    "category": "Sistemas de Archivos",
    "question": "¿Qué es el \"cluster\" en un sistema de archivos?",
    "options": [
      "Un grupo de sectores contiguos en el disco.",
      "Un tipo de archivo comprimido.",
      "Un programa de edición de imágenes.",
      "Un sistema de copia de seguridad."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Un grupo de sectores contiguos en el disco.\". Es la unidad mínima de asignación de espacio en disco.",
    "source": "https://es.wikipedia.org/wiki/Unidad_de_asignaci%C3%B3n"
  },
  {
    "id": 303,
    "category": "Sistemas de Archivos",
    "question": "¿Cuál es una característica del sistema de archivos HFS+ utilizado en macOS?",
    "options": [
      "Journaling",
      "Fragmentación de archivos",
      "Soporte para archivos de gran tamaño",
      "Incompatibilidad con discos duros externos"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Journaling\". HFS+ incluye journaling para proteger la integridad del sistema de archivos tras fallos.",
    "source": "https://es.wikipedia.org/wiki/HFS%2B"
  },
  {
    "id": 304,
    "category": "Sistemas de Archivos",
    "question": "¿Qué es el \"inode\" en sistemas de archivos como ext4 en Linux?",
    "options": [
      "Una lista de todos los archivos en el disco.",
      "Un registro de todas las acciones realizadas en el sistema.",
      "Una estructura de datos que contiene información sobre un archivo o directorio.",
      "Un sistema para ordenar los archivos en una carpeta."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Una estructura de datos que contiene información sobre un archivo o directorio.\". Incluye permisos, tamaño, fechas y punteros a los bloques de datos.",
    "source": "https://es.wikipedia.org/wiki/Inodo"
  },
  {
    "id": 305,
    "category": "Sistemas de Archivos",
    "question": "¿Qué es el \"allocation unit size\" en sistemas de archivos como NTFS?",
    "options": [
      "El tamaño máximo de un archivo en el disco.",
      "El tamaño mínimo de un archivo en el disco.",
      "El tamaño de un sector en el disco.",
      "El tamaño de un cluster en el disco."
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"El tamaño de un cluster en el disco.\". También se conoce como tamaño de unidad de asignación.",
    "source": "https://es.wikipedia.org/wiki/Unidad_de_asignaci%C3%B3n"
  },
  {
    "id": 306,
    "category": "Sistemas de Archivos",
    "question": "¿Qué es el \"mount point\" en sistemas de archivos Unix/Linux?",
    "options": [
      "Un punto de acceso al sistema de archivos.",
      "Un registro de todas las acciones realizadas en el sistema.",
      "Un sistema de compresión de archivos.",
      "Un tipo de archivo especial."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Un punto de acceso al sistema de archivos.\". Es un directorio donde se monta un volumen o dispositivo de almacenamiento.",
    "source": "https://es.wikipedia.org/wiki/Punto_de_montaje"
  },
  {
    "id": 307,
    "category": "Sistemas de Archivos",
    "question": "¿Cuál de las siguientes afirmaciones sobre el sistema de archivos NTFS es verdadera?",
    "options": [
      "Es incompatible con discos duros externos.",
      "No soporta archivos de gran tamaño.",
      "Permite la compresión de archivos.",
      "No admite la fragmentación de archivos."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Permite la compresión de archivos.\". NTFS ofrece compresión transparente a nivel de archivo o carpeta.",
    "source": "https://es.wikipedia.org/wiki/NTFS"
  },
  {
    "id": 308,
    "category": "Sistemas de Archivos",
    "question": "¿Qué es el \"root directory\" en un sistema de archivos?",
    "options": [
      "El directorio principal que contiene todos los demás archivos y directorios.",
      "Un directorio oculto utilizado por el sistema operativo.",
      "Un registro de todas las acciones realizadas en el sistema de archivos.",
      "Un directorio especial reservado para archivos de sistema."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"El directorio principal que contiene todos los demás archivos y directorios.\". En Unix/Linux es `/`; en Windows, la raíz de una unidad (ej. `C:\\`).",
    "source": "https://es.wikipedia.org/wiki/Directorio_ra%C3%ADz"
  },
  {
    "id": 309,
    "category": "Particiones de Disco",
    "question": "¿Qué es una partición en un disco duro?",
    "options": [
      "Una unidad de almacenamiento óptico.",
      "Un área reservada para el sistema operativo.",
      "Una sección lógica del disco que se puede usar para almacenar datos.",
      "Una herramienta de copia de seguridad."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Una sección lógica del disco que se puede usar para almacenar datos.\".",
    "source": "https://es.wikipedia.org/wiki/Partici%C3%B3n_de_disco"
  },
  {
    "id": 310,
    "category": "Particiones de Disco",
    "question": "¿Cuál es el propósito principal de crear particiones en un disco duro?",
    "options": [
      "Aumentar la velocidad de lectura y escritura.",
      "Facilitar la organización y gestión de datos.",
      "Reducir el tamaño total del disco.",
      "Mejorar la seguridad del sistema."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Facilitar la organización y gestión de datos.\". Permite separar sistema operativo, programas y datos de usuario.",
    "source": "https://es.wikipedia.org/wiki/Partici%C3%B3n_de_disco"
  },
  {
    "id": 311,
    "category": "Particiones de Disco",
    "question": "¿Cuál de los siguientes no es un tipo común de partición en sistemas de Windows?",
    "options": [
      "FAT32",
      "NTFS",
      "ext4",
      "exFAT"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"ext4\". Es un sistema de archivos de Linux, no nativo de Windows.",
    "source": "https://es.wikipedia.org/wiki/Ext4"
  },
  {
    "id": 312,
    "category": "Accesibilidad en Windows",
    "question": "¿Qué función de accesibilidad permite aumentar el tamaño del texto en Windows?",
    "options": [
      "Lupa",
      "Alto contraste",
      "Narrador",
      "Ampliación de texto"
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Ampliación de texto\". Aunque la Lupa también amplía, la opción específica para solo el texto es \"Ampliación de texto\" en Configuración > Accesibilidad.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 313,
    "category": "Accesibilidad en Windows",
    "question": "¿Cuál es la herramienta de accesibilidad en Windows que lee en voz alta el texto en la pantalla?",
    "options": [
      "Lupa",
      "Ampliación de texto",
      "Narrador",
      "Teclado en pantalla"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Narrador\". Es el lector de pantalla integrado en Windows.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 314,
    "category": "Accesibilidad en Windows",
    "question": "¿Qué función de accesibilidad permite cambiar el color y el contraste del sistema operativo en Windows?",
    "options": [
      "Lupa",
      "Ampliación de texto",
      "Narrador",
      "Alto contraste"
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Alto contraste\". Mejora la visibilidad para personas con discapacidad visual.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 315,
    "category": "Accesibilidad en Windows",
    "question": "¿Qué herramienta de accesibilidad en Windows permite controlar el mouse con el teclado?",
    "options": [
      "Lupa",
      "Teclado en pantalla",
      "Narrador",
      "Ampliación de texto"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Lupa\". La Lupa incluye un modo de teclado para mover el puntero. También existe \"MouseKeys\" en opciones de accesibilidad.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 316,
    "category": "Accesibilidad en Windows",
    "question": "¿Qué función de accesibilidad permite personalizar las combinaciones de teclas para facilitar su uso en Windows?",
    "options": [
      "Lupa",
      "Ampliación de texto",
      "Narrador",
      "Teclas de filtro"
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Teclas de filtro\". Ignora pulsaciones breves o repetidas, útil para usuarios con dificultades motoras.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 317,
    "category": "Accesibilidad en Windows",
    "question": "¿Cuál es la herramienta de accesibilidad en Windows que proporciona una representación visual del sonido en la pantalla?",
    "options": [
      "Lupa",
      "Narrador",
      "Ampliación de texto",
      "Indicador de sonido"
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Indicador de sonido\". Muestra una animación en pantalla cuando suena una notificación.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 318,
    "category": "Accesibilidad en Windows",
    "question": "¿Qué función de accesibilidad en Windows permite ajustar la sensibilidad del teclado y del ratón?",
    "options": [
      "Lupa",
      "Ampliación de texto",
      "Narrador",
      "Filtros de entrada"
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Filtros de entrada\". Incluye ajustes para teclas lentas, repetidas y de alternancia.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 319,
    "category": "Accesibilidad en Windows",
    "question": "¿Cuál es la función de accesibilidad que permite activar un teclado virtual en la pantalla en Windows?",
    "options": [
      "Narrador",
      "Ampliación de texto",
      "Teclado en pantalla",
      "Lupa"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Teclado en pantalla\". Permite escribir usando el puntero del mouse o dispositivos táctiles.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 320,
    "category": "Accesibilidad en Windows",
    "question": "¿Qué herramienta de accesibilidad en Windows permite reemplazar el uso del mouse con movimientos de la cabeza?",
    "options": [
      "Lupa",
      "Ampliación de texto",
      "Narrador",
      "Control de la cabeza"
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Control de la cabeza\". Requiere una cámara compatible y se configura en Accesibilidad > Control ocular.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 321,
    "category": "Accesibilidad en Windows",
    "question": "¿Cuál es la función de accesibilidad que permite ajustar la velocidad de respuesta del teclado en Windows?",
    "options": [
      "Ampliación de texto",
      "Filtros de entrada",
      "Lupa",
      "Narrador"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Filtros de entrada\". Permite ajustar la velocidad de repetición y el retardo de las teclas.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 322,
    "category": "Accesibilidad en Windows",
    "question": "¿Qué herramienta de accesibilidad en Windows permite grabar y reproducir mensajes de voz?",
    "options": [
      "Narrador",
      "Ampliación de texto",
      "Reconocimiento de voz",
      "Indicador de sonido"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Reconocimiento de voz\". Permite dictar texto y controlar el PC con comandos de voz.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 323,
    "category": "Accesibilidad en Windows",
    "question": "¿Cuál es la función de accesibilidad que proporciona una descripción de voz de los eventos en la pantalla?",
    "options": [
      "Narrador",
      "Ampliación de texto",
      "Lupa",
      "Control de la cabeza"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Narrador\".",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 324,
    "category": "Accesibilidad en Windows",
    "question": "¿Qué función de accesibilidad en Windows permite ajustar el tamaño y la forma del puntero del mouse?",
    "options": [
      "Lupa",
      "Ampliación de texto",
      "Narrador",
      "Punta del mouse"
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Punta del mouse\". Permite cambiar el tamaño, color y efectos del cursor.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 325,
    "category": "Accesibilidad en Windows",
    "question": "¿Cuál es la herramienta de accesibilidad en Windows que permite controlar la computadora mediante comandos de voz?",
    "options": [
      "Reconocimiento de voz",
      "Ampliación de texto",
      "Narrador",
      "Lupa"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Reconocimiento de voz\".",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 326,
    "category": "Accesibilidad en Windows",
    "question": "¿Qué función de accesibilidad en Windows permite filtrar pulsaciones de teclas repetidas en rápido sucesión?",
    "options": [
      "Filtros de entrada",
      "Ampliación de texto",
      "Narrador",
      "Control de la cabeza"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Filtros de entrada\".",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 327,
    "category": "Accesibilidad en Windows",
    "question": "¿Cuál es la herramienta de accesibilidad en Windows que proporciona una representación visual de las palabras pronunciadas?",
    "options": [
      "Subtítulos en vivo",
      "Ampliación de texto",
      "Narrador",
      "Lupa"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Subtítulos en vivo\". Transcribe en tiempo real el audio del sistema y micrófono.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 328,
    "category": "Accesibilidad en Windows",
    "question": "¿Qué función de accesibilidad en Windows permite ajustar el tiempo de espera para aceptar una pulsación de tecla?",
    "options": [
      "Ampliación de texto",
      "Filtros de entrada",
      "Narrador",
      "Lupa"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Filtros de entrada\".",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 329,
    "category": "Accesibilidad en Windows",
    "question": "¿Cuál es la herramienta de accesibilidad en Windows que proporciona una guía visual para mejorar la lectura en pantalla?",
    "options": [
      "Lupa",
      "Ampliación de texto",
      "Narrador",
      "Leído en voz alta"
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Leído en voz alta\". Destaca las palabras mientras las lee en voz alta.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 330,
    "category": "Accesibilidad en Windows",
    "question": "¿Qué función de accesibilidad en Windows permite habilitar subtítulos en vivo para personas con problemas de audición?",
    "options": [
      "Narrador",
      "Ampliación de texto",
      "Subtítulos en vivo",
      "Lupa"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Subtítulos en vivo\".",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 331,
    "category": "Accesibilidad en Windows",
    "question": "¿Cuál es la herramienta de accesibilidad en Windows que permite marcar elementos en pantalla mediante sonidos?",
    "options": [
      "Indicador de sonido",
      "Ampliación de texto",
      "Narrador",
      "Lupa"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Indicador de sonido\".",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 332,
    "category": "Accesibilidad en Windows",
    "question": "¿Qué función de accesibilidad en Windows permite ajustar la velocidad de lectura de texto en voz alta?",
    "options": [
      "Ampliación de texto",
      "Lupa",
      "Narrador",
      "Velocidad de voz"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Narrador\". La velocidad de lectura se configura dentro de la configuración del Narrador.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 333,
    "category": "Accesibilidad en Windows",
    "question": "¿Cuál es la herramienta de accesibilidad en Windows que permite identificar visualmente las teclas presionadas en el teclado?",
    "options": [
      "Teclas de filtro",
      "Ampliación de texto",
      "Narrador",
      "Teclado en pantalla"
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Teclado en pantalla\". Muestra las teclas presionadas en la pantalla.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 334,
    "category": "Accesibilidad en Windows",
    "question": "¿Qué función de accesibilidad en Windows permite ajustar el tamaño y la ubicación de la barra de tareas?",
    "options": [
      "Ampliación de texto",
      "Narrador",
      "Lupa",
      "Configuración de la barra de tareas"
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Configuración de la barra de tareas\". Se accede desde Configuración > Personalización > Barra de tareas.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 335,
    "category": "Accesibilidad en Windows",
    "question": "¿Cuál es la herramienta de accesibilidad en Windows que proporciona una descripción verbal de lo que está sucediendo en la pantalla?",
    "options": [
      "Narrador",
      "Ampliación de texto",
      "Lupa",
      "Indicador de sonido"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Narrador\".",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 336,
    "category": "Accesibilidad en Windows",
    "question": "¿Qué función de accesibilidad en Windows permite ajustar el contraste de los elementos visuales en pantalla?",
    "options": [
      "Ampliación de texto",
      "Alto contraste",
      "Narrador",
      "Lupa"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Alto contraste\".",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 337,
    "category": "Accesibilidad en Windows",
    "question": "¿Cuál es la herramienta de accesibilidad en Windows que permite ajustar el tamaño y el color del cursor del mouse?",
    "options": [
      "Punta del mouse",
      "Ampliación de texto",
      "Narrador",
      "Lupa"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Punta del mouse\".",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 338,
    "category": "Accesibilidad en Windows",
    "question": "¿Qué función de accesibilidad en Windows permite habilitar un teclado virtual en pantalla?",
    "options": [
      "Teclado en pantalla",
      "Ampliación de texto",
      "Narrador",
      "Lupa"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Teclado en pantalla\".",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 339,
    "category": "Accesibilidad en Windows",
    "question": "¿Cuál es la herramienta de accesibilidad en Windows que proporciona una representación visual de los sonidos en la pantalla?",
    "options": [
      "Indicador de sonido",
      "Ampliación de texto",
      "Narrador",
      "Lupa"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Indicador de sonido\". Muestra una animación en pantalla cuando se reproduce un sonido del sistema.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 340,
    "category": "Accesibilidad en Windows",
    "question": "¿Qué función de accesibilidad en Windows permite personalizar los ajustes de color para mejorar la visibilidad en pantalla?",
    "options": [
      "Ampliación de texto",
      "Filtros de color",
      "Narrador",
      "Lupa"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Filtros de color\". Ayuda a personas con daltonismo o sensibilidad a la luz ajustando los esquemas de color.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 341,
    "category": "Accesibilidad en Windows",
    "question": "¿Cuál es la herramienta de accesibilidad en Windows que proporciona una descripción de voz de los elementos en pantalla al mover el cursor?",
    "options": [
      "Narrador",
      "Ampliación de texto",
      "Lupa",
      "Descripción de pantalla"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Narrador\". Es el lector de pantalla integrado que describe en voz alta lo que hay bajo el cursor.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 342,
    "category": "UEFI/BIOS y Particiones",
    "question": "¿Qué es UEFI (Unified Extensible Firmware Interface)?",
    "options": [
      "Un tipo de partición de disco.",
      "Un estándar de firmware que reemplaza al BIOS tradicional.",
      "Una herramienta de copia de seguridad.",
      "Un sistema operativo alternativo a Windows."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Un estándar de firmware que reemplaza al BIOS tradicional.\". Ofrece arranque más rápido, soporte para discos >2 TB y mayor seguridad.",
    "source": "https://es.wikipedia.org/wiki/Unified_Extensible_Firmware_Interface"
  },
  {
    "id": 343,
    "category": "UEFI/BIOS y Particiones",
    "question": "¿Cuál es una ventaja de UEFI sobre el BIOS tradicional?",
    "options": [
      "Mayor velocidad de arranque.",
      "Mayor compatibilidad con hardware antiguo.",
      "Menor seguridad.",
      "Menor soporte para sistemas operativos modernos."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Mayor velocidad de arranque.\". UEFI inicializa el hardware de forma más eficiente que el BIOS heredado.",
    "source": "https://es.wikipedia.org/wiki/Unified_Extensible_Firmware_Interface"
  },
  {
    "id": 344,
    "category": "UEFI/BIOS y Particiones",
    "question": "¿Qué es MBR (Master Boot Record)?",
    "options": [
      "Un sistema de archivos.",
      "Una herramienta de particionamiento de disco.",
      "Una tabla de particiones y un pequeño programa de arranque.",
      "Un tipo de disco duro."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Una tabla de particiones y un pequeño programa de arranque.\". Se ubica en el primer sector del disco y es compatible con BIOS.",
    "source": "https://es.wikipedia.org/wiki/Master_Boot_Record"
  },
  {
    "id": 345,
    "category": "UEFI/BIOS y Particiones",
    "question": "¿Cuál es la principal limitación de MBR en comparación con GPT?",
    "options": [
      "No admite discos duros de más de 2 TB.",
      "No es compatible con sistemas operativos Windows.",
      "No permite crear múltiples particiones en un disco.",
      "No es compatible con sistemas operativos Unix/Linux."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"No admite discos duros de más de 2 TB.\". MBR también limita a 4 particiones primarias.",
    "source": "https://es.wikipedia.org/wiki/GUID_Partition_Table"
  },
  {
    "id": 346,
    "category": "UEFI/BIOS y Particiones",
    "question": "¿Qué es GPT (GUID Partition Table)?",
    "options": [
      "Un tipo de disco duro.",
      "Una herramienta de copia de seguridad.",
      "Una tabla de particiones que reemplaza a MBR.",
      "Una versión antigua de UEFI."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Una tabla de particiones que reemplaza a MBR.\". Es el estándar moderno para particionamiento, especialmente con UEFI.",
    "source": "https://es.wikipedia.org/wiki/GUID_Partition_Table"
  },
  {
    "id": 347,
    "category": "UEFI/BIOS y Particiones",
    "question": "¿Cuál de las siguientes afirmaciones sobre GPT es verdadera?",
    "options": [
      "Admite discos duros de hasta 2 TB.",
      "No admite más de cuatro particiones primarias.",
      "Proporciona mayor protección contra la corrupción de datos.",
      "Es compatible únicamente con sistemas operativos Windows."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Proporciona mayor protección contra la corrupción de datos.\". GPT incluye copias de respaldo de la tabla de particiones y CRC32 para verificación.",
    "source": "https://es.wikipedia.org/wiki/GUID_Partition_Table"
  },
  {
    "id": 348,
    "category": "Discos Dinámicos y RAID",
    "question": "¿Qué es un disco dinámico en Windows?",
    "options": [
      "Un disco que puede cambiar de tamaño automáticamente.",
      "Un disco que no necesita ser particionado.",
      "Un disco que utiliza un sistema de archivos dinámico.",
      "Un disco que permite la creación de volúmenes dinámicos y es administrado por el Administrador de discos de Windows."
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Un disco que permite la creación de volúmenes dinámicos y es administrado por el Administrador de discos de Windows.\".",
    "source": "https://docs.microsoft.com/es-es/windows-server/storage/disk-management/overview-of-disk-management"
  },
  {
    "id": 349,
    "category": "Discos Dinámicos y RAID",
    "question": "¿Cuál es una característica de los discos dinámicos en Windows?",
    "options": [
      "Permiten la creación de un máximo de dos volúmenes.",
      "No permiten la creación de volúmenes extendidos.",
      "Pueden contener volúmenes extendidos, volúmenes lógicos y volúmenes simples.",
      "No admiten la redimensión de volúmenes."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"No permiten la creación de volúmenes extendidos.\". Los discos dinámicos usan volúmenes simples, extendidos, distribuidos, seccionados o reflejados, pero no particiones extendidas como los discos básicos.",
    "source": "https://docs.microsoft.com/es-es/windows-server/storage/disk-management/overview-of-disk-management"
  },
  {
    "id": 350,
    "category": "Discos Dinámicos y RAID",
    "question": "¿Qué es un volumen dinámico en un disco dinámico de Windows?",
    "options": [
      "Una sección del disco asignada para archivos temporales.",
      "Una partición que abarca múltiples discos físicos.",
      "Una sección del disco que puede ser redimensionada fácilmente.",
      "Una sección del disco que puede abarcar múltiples discos físicos."
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Una sección del disco que puede abarcar múltiples discos físicos.\". Ejemplos: volúmenes distribuidos o seccionados.",
    "source": "https://docs.microsoft.com/es-es/windows-server/storage/disk-management/overview-of-disk-management"
  },
  {
    "id": 351,
    "category": "Discos Dinámicos y RAID",
    "question": "¿Qué es el RAID (Redundant Array of Independent Disks)?",
    "options": [
      "Un tipo de disco duro.",
      "Un sistema de copia de seguridad.",
      "Un método para combinar múltiples discos duros para mejorar el rendimiento y/o la redundancia.",
      "Un tipo de sistema de archivos."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Un método para combinar múltiples discos duros para mejorar el rendimiento y/o la redundancia.\".",
    "source": "https://es.wikipedia.org/wiki/RAID"
  },
  {
    "id": 352,
    "category": "Discos Dinámicos y RAID",
    "question": "¿Cuál es el propósito principal del RAID 0?",
    "options": [
      "Proporcionar redundancia de datos.",
      "Aumentar la velocidad de lectura y escritura.",
      "Mejorar la seguridad del sistema.",
      "Reducir el tamaño total del disco."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Aumentar la velocidad de lectura y escritura.\". Usa striping, pero no ofrece redundancia.",
    "source": "https://es.wikipedia.org/wiki/RAID_0"
  },
  {
    "id": 353,
    "category": "Discos Dinámicos y RAID",
    "question": "¿Qué hace el RAID 1?",
    "options": [
      "Divide los datos en múltiples discos para aumentar el rendimiento.",
      "Mantiene una copia exacta de todos los datos en dos o más discos.",
      "Crea un disco de respaldo para restaurar datos en caso de fallo.",
      "Combina múltiples discos en uno solo para aumentar la capacidad de almacenamiento."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Mantiene una copia exacta de todos los datos en dos o más discos.\". Se conoce como mirroring.",
    "source": "https://es.wikipedia.org/wiki/RAID_1"
  },
  {
    "id": 354,
    "category": "Discos Dinámicos y RAID",
    "question": "¿Qué tipo de RAID proporciona tanto rendimiento como redundancia de datos?",
    "options": [
      "RAID 0.",
      "RAID 1.",
      "RAID 5.",
      "RAID 10."
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"RAID 10.\". Combina striping (RAID 0) y mirroring (RAID 1).",
    "source": "https://es.wikipedia.org/wiki/RAID_10"
  },
  {
    "id": 355,
    "category": "Discos Dinámicos y RAID",
    "question": "¿Qué hace el RAID 5?",
    "options": [
      "Mantiene una copia exacta de todos los datos en dos o más discos.",
      "Divide los datos en múltiples discos para aumentar el rendimiento.",
      "Distribuye datos y paridad a través de varios discos para tolerancia a fallos y rendimiento.",
      "Crea un disco de respaldo para restaurar datos en caso de fallo."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Distribuye datos y paridad a través de varios discos para tolerancia a fallos y rendimiento.\".",
    "source": "https://es.wikipedia.org/wiki/RAID_5"
  },
  {
    "id": 356,
    "category": "Discos Dinámicos y RAID",
    "question": "¿Cuál de las siguientes afirmaciones sobre RAID 0 es verdadera?",
    "options": [
      "Proporciona redundancia de datos.",
      "Es el tipo de RAID más seguro.",
      "Aumenta el rendimiento al dividir los datos entre varios discos.",
      "Es adecuado para aplicaciones que requieren alta disponibilidad de datos."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Aumenta el rendimiento al dividir los datos entre varios discos.\". No tiene redundancia, por lo que no es seguro.",
    "source": "https://es.wikipedia.org/wiki/RAID_0"
  },
  {
    "id": 357,
    "category": "Discos Dinámicos y RAID",
    "question": "¿Qué es el \"striping\" en RAID 0?",
    "options": [
      "La creación de una copia exacta de todos los datos en dos o más discos.",
      "La técnica de dividir los datos en trozos más pequeños y almacenarlos en varios discos.",
      "El proceso de crear un disco de respaldo para restaurar datos en caso de fallo.",
      "La técnica de distribuir datos y paridad a través de varios discos para tolerancia a fallos."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"La técnica de dividir los datos en trozos más pequeños y almacenarlos en varios discos.\".",
    "source": "https://es.wikipedia.org/wiki/RAID_0"
  },
  {
    "id": 358,
    "category": "Discos Dinámicos y RAID",
    "question": "¿Qué es el \"mirroring\" en RAID 1?",
    "options": [
      "La técnica de dividir los datos en trozos más pequeños y almacenarlos en varios discos.",
      "El proceso de crear un disco de respaldo para restaurar datos en caso de fallo.",
      "La creación de una copia exacta de todos los datos en dos o más discos.",
      "La técnica de distribuir datos y paridad a través de varios discos para tolerancia a fallos."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"La creación de una copia exacta de todos los datos en dos o más discos.\".",
    "source": "https://es.wikipedia.org/wiki/RAID_1"
  },
  {
    "id": 359,
    "category": "Discos Dinámicos y RAID",
    "question": "¿Cuál de las siguientes afirmaciones sobre el RAID 10 es verdadera?",
    "options": [
      "Proporciona tanto rendimiento como redundancia de datos.",
      "Es el tipo de RAID más seguro.",
      "No es adecuado para aplicaciones que requieren alta disponibilidad de datos.",
      "Es más lento que el RAID 0."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Proporciona tanto rendimiento como redundancia de datos.\".",
    "source": "https://es.wikipedia.org/wiki/RAID_10"
  },
  {
    "id": 360,
    "category": "Discos Dinámicos y RAID",
    "question": "¿Qué es el \"striping with mirroring\" en RAID 10?",
    "options": [
      "La técnica de dividir los datos en trozos más pequeños y almacenarlos en varios discos.",
      "El proceso de crear un disco de respaldo para restaurar datos en caso de fallo.",
      "La combinación de striping para aumentar el rendimiento y mirroring para redundancia de datos.",
      "La creación de una copia exacta de todos los datos en dos o más discos."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"La combinación de striping para aumentar el rendimiento y mirroring para redundancia de datos.\".",
    "source": "https://es.wikipedia.org/wiki/RAID_10"
  },
  {
    "id": 361,
    "category": "Discos Dinámicos y RAID",
    "question": "¿Qué es la tolerancia a fallos en RAID?",
    "options": [
      "La capacidad de un sistema RAID para evitar fallos.",
      "La capacidad de un sistema RAID para recuperarse automáticamente de un fallo de disco.",
      "La capacidad de un sistema RAID para evitar el uso de discos duros con errores.",
      "La capacidad de un sistema RAID para funcionar sin fallos."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"La capacidad de un sistema RAID para recuperarse automáticamente de un fallo de disco.\".",
    "source": "https://es.wikipedia.org/wiki/RAID"
  },
  {
    "id": 362,
    "category": "Discos Dinámicos y RAID",
    "question": "¿Cuál de las siguientes afirmaciones sobre el RAID 5 es verdadera?",
    "options": [
      "Proporciona redundancia de datos.",
      "Es el tipo de RAID más seguro.",
      "Requiere al menos tres discos para implementarse.",
      "Es adecuado para aplicaciones que requieren alta disponibilidad de datos."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Requiere al menos tres discos para implementarse.\". Usa paridad distribuida.",
    "source": "https://es.wikipedia.org/wiki/RAID_5"
  },
  {
    "id": 363,
    "category": "Discos Dinámicos y RAID",
    "question": "¿Qué es el \"parity\" en RAID 5?",
    "options": [
      "La creación de una copia exacta de todos los datos en dos o más discos.",
      "La técnica de dividir los datos en trozos más pequeños y almacenarlos en varios discos.",
      "La información adicional utilizada para reconstruir datos perdidos en caso de fallo de disco.",
      "La técnica de distribuir datos y paridad a través de varios discos para tolerancia a fallos."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"La información adicional utilizada para reconstruir datos perdidos en caso de fallo de disco.\".",
    "source": "https://es.wikipedia.org/wiki/RAID_5"
  },
  {
    "id": 364,
    "category": "UEFI/BIOS y Particiones",
    "question": "¿Cuál de las siguientes afirmaciones sobre los discos dinámicos en Windows es verdadera?",
    "options": [
      "Pueden convertirse en discos básicos sin perder datos.",
      "No admiten la creación de volúmenes dinámicos.",
      "No permiten la extensión o reducción de volúmenes.",
      "No admiten la conversión de MBR a GPT."
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"No admiten la conversión de MBR a GPT.\". La conversión de estilo de partición requiere un disco básico.",
    "source": "https://docs.microsoft.com/es-es/windows-server/storage/disk-management/overview-of-disk-management"
  },
  {
    "id": 365,
    "category": "UEFI/BIOS y Particiones",
    "question": "¿Qué es la conversión de MBR a GPT?",
    "options": [
      "Un proceso para convertir discos dinámicos en discos básicos.",
      "Un proceso para cambiar el tipo de partición de un disco de MBR a GPT.",
      "Un proceso para eliminar todas las particiones de un disco y crear una nueva tabla de particiones.",
      "Un proceso para eliminar un disco dinámico y convertirlo en un disco básico."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Un proceso para cambiar el tipo de partición de un disco de MBR a GPT.\". Requiere que el disco esté vacío o se use una herramienta como MBR2GPT.",
    "source": "https://docs.microsoft.com/es-es/windows/deployment/mbr-to-gpt"
  },
  {
    "id": 366,
    "category": "UEFI/BIOS y Particiones",
    "question": "¿Qué es la conversión de GPT a MBR?",
    "options": [
      "Un proceso para cambiar el tipo de partición de un disco de GPT a MBR.",
      "Un proceso para convertir discos básicos en discos dinámicos.",
      "Un proceso para eliminar todas las particiones de un disco y crear una nueva tabla de particiones.",
      "Un proceso para eliminar un disco dinámico y convertirlo en un disco básico."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Un proceso para cambiar el tipo de partición de un disco de GPT a MBR.\".",
    "source": "https://docs.microsoft.com/es-es/windows-server/storage/disk-management/change-an-mbr-disk-into-a-gpt-disk"
  },
  {
    "id": 367,
    "category": "UEFI/BIOS y Particiones",
    "question": "¿Cuál de las siguientes afirmaciones sobre los discos básicos en Windows es verdadera?",
    "options": [
      "No admiten la creación de volúmenes dinámicos.",
      "No admiten la conversión de MBR a GPT.",
      "No admiten la extensión o reducción de volúmenes.",
      "No pueden convertirse en discos dinámicos sin perder datos."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"No admiten la creación de volúmenes dinámicos.\". Los discos básicos usan particiones primarias y extendidas.",
    "source": "https://docs.microsoft.com/es-es/windows-server/storage/disk-management/overview-of-disk-management"
  },
  {
    "id": 368,
    "category": "UEFI/BIOS y Particiones",
    "question": "¿Qué es la conversión de discos básicos a discos dinámicos?",
    "options": [
      "Un proceso para cambiar el tipo de partición de un disco de GPT a MBR.",
      "Un proceso para eliminar todas las particiones de un disco y crear una nueva tabla de particiones.",
      "Un proceso para convertir discos dinámicos en discos básicos.",
      "Un proceso para permitir la creación de volúmenes dinámicos en un disco."
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Un proceso para permitir la creación de volúmenes dinámicos en un disco.\". No requiere reinicio y no borra datos.",
    "source": "https://docs.microsoft.com/es-es/windows-server/storage/disk-management/overview-of-disk-management"
  },
  {
    "id": 369,
    "category": "Explorador de Archivos",
    "question": "¿Qué es explorer.exe en un sistema Windows?",
    "options": [
      "Un programa para navegar por internet.",
      "El proceso responsable de administrar el explorador de archivos.",
      "Un antivirus integrado en Windows.",
      "Una herramienta para limpiar el disco duro."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"El proceso responsable de administrar el explorador de archivos.\". También gestiona el escritorio y la barra de tareas.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 370,
    "category": "Explorador de Archivos",
    "question": "¿Cuál es la función principal del explorador de archivos en Windows?",
    "options": [
      "Navegar por internet.",
      "Administrador archivos y carpetas en el sistema de archivos.",
      "Realizar copias de seguridad automáticas.",
      "Editar documentos de Microsoft Office."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Administrador archivos y carpetas en el sistema de archivos.\".",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 371,
    "category": "Explorador de Archivos",
    "question": "¿Qué te permite hacer el explorador de archivos en relación con los archivos y carpetas?",
    "options": [
      "Crear, copiar, mover y eliminar.",
      "Navegar por sitios web.",
      "Escribir programas en lenguajes de programación.",
      "Reproducir música y videos."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Crear, copiar, mover y eliminar.\".",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 372,
    "category": "Explorador de Archivos",
    "question": "¿Cómo se puede abrir el explorador de archivos en Windows?",
    "options": [
      "Haciendo clic en el icono de Internet Explorer.",
      "Escribiendo \"explorer.exe\" en el símbolo del sistema.",
      "Presionando las teclas Windows + E.",
      "Ejecutando un comando en PowerShell."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Presionando las teclas Windows + E.\". Es el atajo más rápido.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 373,
    "category": "Explorador de Archivos",
    "question": "¿Qué te permite hacer el explorador de archivos en relación con los archivos comprimidos?",
    "options": [
      "Comprimir y descomprimir archivos.",
      "Editar archivos de texto.",
      "Convertir archivos de un formato a otro.",
      "Configurar la red Wi-Fi."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Comprimir y descomprimir archivos.\". Windows tiene soporte nativo para ZIP.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 374,
    "category": "Explorador de Archivos",
    "question": "¿Qué acción se realiza al hacer clic derecho en un archivo o carpeta en el explorador de archivos?",
    "options": [
      "Abrir el archivo en un editor de texto.",
      "Eliminar permanentemente el archivo.",
      "Acceder a un menú contextual con varias opciones, como copiar, pegar, eliminar, etc.",
      "Enviar el archivo por correo electrónico."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Acceder a un menú contextual con varias opciones, como copiar, pegar, eliminar, etc.\".",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 375,
    "category": "Explorador de Archivos",
    "question": "¿Cuál es la función del botón \"Copiar\" en el explorador de archivos?",
    "options": [
      "Mover un archivo a otra ubicación.",
      "Crear una copia del archivo en la misma ubicación.",
      "Transferir archivos a una unidad USB.",
      "Copiar archivos seleccionados a otra ubicación."
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Copiar archivos seleccionados a otra ubicación.\".",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 376,
    "category": "Explorador de Archivos",
    "question": "¿Cómo se puede cambiar el nombre de un archivo o carpeta en el explorador de archivos?",
    "options": [
      "Doble clic en el nombre del archivo.",
      "Hacer clic derecho y seleccionar \"Cambiar nombre\".",
      "Presionar la tecla F2.",
      "Todas las anteriores."
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Todas las anteriores.\".",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 377,
    "category": "Explorador de Archivos",
    "question": "¿Qué es el \"Panel de detalles\" en el explorador de archivos de Windows?",
    "options": [
      "Una lista de archivos y carpetas en una ubicación específica.",
      "Una vista previa de imágenes y documentos.",
      "Una barra lateral que muestra información detallada sobre los archivos seleccionados.",
      "Una barra de herramientas para editar archivos."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Una barra lateral que muestra información detallada sobre los archivos seleccionados.\".",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 378,
    "category": "Explorador de Archivos",
    "question": "¿Qué acción realiza el botón \"Eliminar\" en el explorador de archivos?",
    "options": [
      "Mover un archivo a la Papelera de reciclaje.",
      "Crear una copia del archivo en otra ubicación.",
      "Eliminar permanentemente un archivo sin enviarlo a la Papelera de reciclaje.",
      "Convertir un archivo a un formato diferente."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Mover un archivo a la Papelera de reciclaje.\". Para eliminar permanentemente, se usa Shift+Supr.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 379,
    "category": "Explorador de Archivos",
    "question": "¿Qué es la Papelera de reciclaje en el explorador de archivos de Windows?",
    "options": [
      "Una carpeta donde se almacenan los archivos temporales.",
      "Una ubicación donde se guardan temporalmente los archivos eliminados.",
      "Un menú contextual para restaurar archivos eliminados.",
      "Una barra de herramientas para cambiar la apariencia del explorador de archivos."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Una ubicación donde se guardan temporalmente los archivos eliminados.\". Permite recuperar archivos antes de que se eliminen permanentemente.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 380,
    "category": "Explorador de Archivos",
    "question": "¿Cómo se puede restaurar un archivo eliminado de la Papelera de reciclaje en Windows?",
    "options": [
      "Haciendo doble clic en el archivo.",
      "Haciendo clic derecho y seleccionando \"Restaurar\".",
      "Arrastrando y soltando el archivo en otra ubicación.",
      "Todas las anteriores."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Haciendo clic derecho y seleccionando \"Restaurar\".\". Esta es la forma estándar y segura de restaurar un archivo a su ubicación original.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 381,
    "category": "Explorador de Archivos",
    "question": "¿Qué es la función de búsqueda en el explorador de archivos de Windows?",
    "options": [
      "Buscar archivos y carpetas por su nombre o contenido.",
      "Navegar por internet.",
      "Buscar actualizaciones del sistema operativo.",
      "Realizar copias de seguridad automáticas."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Buscar archivos y carpetas por su nombre o contenido.\".",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 382,
    "category": "Explorador de Archivos",
    "question": "¿Cómo se puede acceder al historial de archivos recientes en el explorador de archivos de Windows?",
    "options": [
      "Haciendo clic en el botón \"Historial\" en la barra de herramientas.",
      "Escribiendo \"historial\" en la barra de direcciones.",
      "Haciendo clic derecho en el escritorio y seleccionando \"Historial de archivos\".",
      "Accediendo a la Papelera de reciclaje."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Haciendo clic en el botón \"Historial\" en la barra de herramientas.\". Muestra las ubicaciones visitadas recientemente.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 383,
    "category": "Explorador de Archivos",
    "question": "¿Qué es la \"vista previa\" en el explorador de archivos de Windows?",
    "options": [
      "Una vista de miniaturas de archivos y carpetas.",
      "Una vista detallada que muestra información sobre archivos y carpetas.",
      "Una vista que muestra el contenido de un archivo seleccionado.",
      "Una lista de archivos abiertos recientemente."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Una vista que muestra el contenido de un archivo seleccionado.\". Se activa con el \"Panel de vista previa\".",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 384,
    "category": "Explorador de Archivos",
    "question": "¿Qué es el \"Grupo Hogar\" en el explorador de archivos de Windows?",
    "options": [
      "Una función para compartir archivos y dispositivos en una red doméstica.",
      "Una herramienta de edición de documentos.",
      "Una carpeta compartida en la nube.",
      "Una barra de herramientas para cambiar el layout del explorador de archivos."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Una función para compartir archivos y dispositivos en una red doméstica.\". (Nota: esta función fue descontinuada en versiones recientes de Windows 10/11, pero existía en versiones anteriores).",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 385,
    "category": "Explorador de Archivos",
    "question": "¿Cuál de las siguientes acciones NO se puede realizar con el explorador de archivos de Windows?",
    "options": [
      "Crear una presentación de diapositivas con imágenes.",
      "Editar archivos de texto.",
      "Reproducir música.",
      "Realizar cálculos matemáticos."
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Realizar cálculos matemáticos.\". El explorador no es una calculadora ni una hoja de cálculo.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 386,
    "category": "Explorador de Archivos",
    "question": "¿Qué es el \"Panel de navegación\" en el explorador de archivos de Windows?",
    "options": [
      "Una lista de archivos y carpetas en una ubicación específica.",
      "Una barra lateral que muestra ubicaciones de carpetas y unidades de disco.",
      "Una barra de herramientas para cambiar la apariencia del explorador.",
      "Una barra de búsqueda para buscar archivos en el disco duro."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Una barra lateral que muestra ubicaciones de carpetas y unidades de disco.\".",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 387,
    "category": "Explorador de Archivos",
    "question": "¿Qué es la función de compresión de archivos en el explorador de archivos de Windows?",
    "options": [
      "Reducir el tamaño de los archivos para ahorrar espacio en disco.",
      "Convertir archivos a diferentes formatos.",
      "Proteger los archivos con una contraseña.",
      "Organizar archivos en carpetas comprimidas."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Reducir el tamaño de los archivos para ahorrar espacio en disco.\". Windows soporta compresión ZIP nativa.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 388,
    "category": "Explorador de Archivos",
    "question": "¿Qué es el \"Panel de vista previa\" en el explorador de archivos de Windows?",
    "options": [
      "Una lista de archivos y carpetas en una ubicación específica.",
      "Una vista detallada que muestra información sobre archivos y carpetas.",
      "Una vista que muestra el contenido de un archivo seleccionado.",
      "Una vista previa de miniaturas de archivos y carpetas."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Una vista que muestra el contenido de un archivo seleccionado.\".",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 389,
    "category": "Explorador de Archivos",
    "question": "¿Qué es el \"Panel de detalles\" en el explorador de archivos de Windows?",
    "options": [
      "Una barra de herramientas para cambiar el layout del explorador.",
      "Una lista de archivos y carpetas en una ubicación específica.",
      "Una barra lateral que muestra ubicaciones de carpetas y unidades de disco.",
      "Una vista detallada que muestra información sobre archivos y carpetas."
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Una vista detallada que muestra información sobre archivos y carpetas.\".",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 390,
    "category": "Configuración de Windows",
    "question": "¿Dónde se encuentra la configuración de pantalla en Windows 10 y Windows 11?",
    "options": [
      "En el Panel de control.",
      "En el menú de inicio.",
      "En la configuración del sistema.",
      "En la aplicación de Configuración."
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"En la aplicación de Configuración.\". Se accede desde el menú Inicio o con la tecla Windows + I.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 391,
    "category": "Configuración de Windows",
    "question": "¿Qué opción de configuración permite cambiar el fondo de pantalla en Windows?",
    "options": [
      "Temas.",
      "Pantalla.",
      "Personalización.",
      "Actualización y seguridad."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Personalización.\". Incluye fondo, color, tema y bloqueo de pantalla.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 392,
    "category": "Configuración de Windows",
    "question": "¿Dónde se puede ajustar la configuración de fecha y hora en Windows?",
    "options": [
      "En el Panel de control.",
      "En la barra de tareas.",
      "En la aplicación de Configuración.",
      "En la aplicación de Microsoft Store."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"En la aplicación de Configuración.\". También se puede ajustar haciendo clic en la hora de la barra de tareas.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 393,
    "category": "Configuración de Windows",
    "question": "¿Qué opción de configuración permite cambiar el idioma del sistema en Windows?",
    "options": [
      "Idioma.",
      "Región.",
      "Personalización.",
      "Cuentas."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Idioma.\". Se encuentra en Configuración > Hora e idioma > Idioma.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 394,
    "category": "Configuración de Windows",
    "question": "¿Dónde se encuentra la configuración de energía en Windows?",
    "options": [
      "En el Panel de control.",
      "En la aplicación de Configuración.",
      "En la barra de tareas.",
      "En el menú de inicio."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"En la aplicación de Configuración.\". En Configuración > Sistema > Energía y batería (en portátiles).",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 395,
    "category": "Configuración de Windows",
    "question": "¿Qué opción de configuración permite ajustar la resolución de la pantalla en Windows?",
    "options": [
      "Pantalla.",
      "Sistema.",
      "Dispositivos.",
      "Personalización."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Pantalla.\". Se encuentra en Configuración > Sistema > Pantalla.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 396,
    "category": "Configuración de Windows",
    "question": "¿Dónde se puede configurar el protector de pantalla en Windows?",
    "options": [
      "En el Panel de control.",
      "En la aplicación de Configuración.",
      "En la barra de tareas.",
      "En la aplicación de Microsoft Store."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"En el Panel de control.\". Aunque la Configuración moderna no lo incluye directamente, sigue estando en Panel de control > Personalización > Protector de pantalla.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 397,
    "category": "Configuración de Windows",
    "question": "¿Qué opción de configuración permite personalizar el sonido del sistema en Windows?",
    "options": [
      "Sonido.",
      "Sistema.",
      "Personalización.",
      "Dispositivos."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Sonido.\". En Configuración > Sistema > Sonido.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 398,
    "category": "Configuración de Windows",
    "question": "¿Dónde se puede ajustar la configuración del teclado en Windows?",
    "options": [
      "En la aplicación de Configuración.",
      "En el menú de inicio.",
      "En el Panel de control.",
      "En la barra de tareas."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"En la aplicación de Configuración.\". En Configuración > Dispositivos > Teclado.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 399,
    "category": "Configuración de Windows",
    "question": "¿Qué opción de configuración permite cambiar la configuración de red en Windows?",
    "options": [
      "Red e Internet.",
      "Dispositivos.",
      "Sistema.",
      "Cuentas."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Red e Internet.\".",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 400,
    "category": "Configuración de Windows",
    "question": "¿Dónde se puede configurar el cortafuegos en Windows?",
    "options": [
      "En la aplicación de Configuración.",
      "En el Panel de control.",
      "En la barra de tareas.",
      "En el menú de inicio."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"En la aplicación de Configuración.\". En Configuración > Privacidad y seguridad > Seguridad de Windows > Firewall y protección de red.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 401,
    "category": "Configuración de Windows",
    "question": "¿Qué opción de configuración permite administrar las cuentas de usuario en Windows?",
    "options": [
      "Cuentas.",
      "Sistema.",
      "Red e Internet.",
      "Privacidad."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Cuentas.\".",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 402,
    "category": "Configuración de Windows",
    "question": "¿Dónde se puede configurar el control parental en Windows?",
    "options": [
      "En la aplicación de Configuración.",
      "En el Panel de control.",
      "En la barra de tareas.",
      "En el menú de inicio."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"En la aplicación de Configuración.\". En Configuración > Cuentas > Familia y otros usuarios.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 403,
    "category": "Configuración de Windows",
    "question": "¿Qué opción de configuración permite ajustar la configuración de privacidad en Windows?",
    "options": [
      "Privacidad.",
      "Sistema.",
      "Cuentas.",
      "Red e Internet."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Privacidad.\".",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 404,
    "category": "Configuración de Windows",
    "question": "¿Dónde se puede configurar la sincronización de archivos en Windows?",
    "options": [
      "En la aplicación de OneDrive.",
      "En la aplicación de Configuración.",
      "En la barra de tareas.",
      "En el menú de inicio."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"En la aplicación de OneDrive.\". OneDrive es el servicio de sincronización nativo de Microsoft.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 405,
    "category": "Configuración de Windows",
    "question": "¿Qué opción de configuración permite ajustar la configuración de accesibilidad en Windows?",
    "options": [
      "Facilidad de acceso.",
      "Sistema.",
      "Cuentas.",
      "Red e Internet."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Facilidad de acceso.\".",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 406,
    "category": "Configuración de Windows",
    "question": "¿Dónde se puede configurar la impresora predeterminada en Windows?",
    "options": [
      "En la aplicación de Configuración.",
      "En el Panel de control.",
      "En la barra de tareas.",
      "En el menú de inicio."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"En la aplicación de Configuración.\". En Configuración > Bluetooth y dispositivos > Impresoras y escáneres.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 407,
    "category": "Configuración de Windows",
    "question": "¿Qué opción de configuración permite ajustar la configuración de almacenamiento en Windows?",
    "options": [
      "Sistema.",
      "Dispositivos.",
      "Cuentas.",
      "Red e Internet."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Sistema.\". En Configuración > Sistema > Almacenamiento.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 408,
    "category": "Configuración de Windows",
    "question": "¿Dónde se puede configurar la configuración de Bluetooth en Windows?",
    "options": [
      "En la aplicación de Configuración.",
      "En el Panel de control.",
      "En la barra de tareas.",
      "En el menú de inicio."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"En la aplicación de Configuración.\". En Configuración > Bluetooth y dispositivos.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 409,
    "category": "Configuración de Windows",
    "question": "¿Qué opción de configuración permite ajustar la configuración de la batería en dispositivos portátiles con Windows?",
    "options": [
      "Batería.",
      "Sistema.",
      "Dispositivos.",
      "Privacidad."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Sistema.\". En Configuración > Sistema > Energía y batería.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 410,
    "category": "Configuración de Windows",
    "question": "¿Dónde se puede configurar la configuración de la cámara en Windows?",
    "options": [
      "En la aplicación de Configuración.",
      "En el Panel de control.",
      "En la barra de tareas.",
      "En el menú de inicio."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"En la aplicación de Configuración.\". En Configuración > Privacidad y seguridad > Cámara.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 411,
    "category": "Configuración de Windows",
    "question": "¿Qué opción de configuración permite ajustar la configuración de la pantalla táctil en Windows?",
    "options": [
      "Dispositivos.",
      "Sistema.",
      "Personalización.",
      "Red e Internet."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Dispositivos.\". En Configuración > Bluetooth y dispositivos > Toque.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 412,
    "category": "Configuración de Windows",
    "question": "¿Dónde se puede configurar la configuración de la cuenta de correo electrónico en Windows?",
    "options": [
      "En la aplicación de Correo.",
      "En la aplicación de Configuración.",
      "En la barra de tareas.",
      "En el menú de inicio."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"En la aplicación de Correo.\". Aunque se puede gestionar desde Configuración > Cuentas, la configuración detallada se hace en la app Correo.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 413,
    "category": "Configuración de Windows",
    "question": "¿Qué opción de configuración permite ajustar la configuración de la barra de tareas en Windows?",
    "options": [
      "Personalización.",
      "Sistema.",
      "Cuentas.",
      "Red e Internet."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Personalización.\". En Configuración > Personalización > Barra de tareas.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 414,
    "category": "Configuración de Windows",
    "question": "¿Dónde se puede configurar la configuración de notificaciones en Windows?",
    "options": [
      "Privacidad.",
      "Sistema.",
      "Cuentas.",
      "Red e Internet."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Sistema.\". En Configuración > Sistema > Notificaciones.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 415,
    "category": "Configuración de Windows",
    "question": "¿Qué opción de configuración permite ajustar la configuración de la reproducción automática en Windows?",
    "options": [
      "Dispositivos.",
      "Sistema.",
      "Cuentas.",
      "Red e Internet."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Dispositivos.\". En Configuración > Bluetooth y dispositivos > Autoplay.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 416,
    "category": "Configuración de Windows",
    "question": "¿Qué opción de configuración permite ajustar la configuración de la seguridad en Windows?",
    "options": [
      "Actualización y seguridad.",
      "Sistema.",
      "Privacidad.",
      "Red e Internet."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Actualización y seguridad.\". En versiones más recientes, se llama \"Privacidad y seguridad\".",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 417,
    "category": "Configuración de Windows",
    "question": "¿Dónde se puede configurar la configuración de la cuenta Microsoft en Windows?",
    "options": [
      "Cuentas.",
      "Sistema.",
      "Privacidad.",
      "Red e Internet."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Cuentas.\".",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 418,
    "category": "Configuración de Windows",
    "question": "¿Qué opción de configuración permite ajustar la configuración de la pantalla de bloqueo en Windows?",
    "options": [
      "Personalización.",
      "Sistema.",
      "Cuentas.",
      "Red e Internet."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Personalización.\".",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 419,
    "category": "Instalación de Software",
    "question": "¿Qué es el Windows Store?",
    "options": [
      "Una tienda de aplicaciones para dispositivos móviles.",
      "Una tienda en línea para comprar hardware de Microsoft.",
      "Una plataforma para descargar software y aplicaciones en Windows.",
      "Una herramienta para personalizar el escritorio de Windows."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Una plataforma para descargar software y aplicaciones en Windows.\". Es la tienda oficial de aplicaciones de Microsoft para Windows 10 y 11.",
    "source": "https://es.wikipedia.org/wiki/Microsoft_Store"
  },
  {
    "id": 420,
    "category": "Instalación de Software",
    "question": "¿Qué tipo de software se puede encontrar comúnmente en el Windows Store?",
    "options": [
      "Software exclusivo para empresas.",
      "Aplicaciones y juegos para consumidores.",
      "Herramientas de administración de sistemas.",
      "Programas de código abierto."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Aplicaciones y juegos para consumidores.\". Aunque también hay apps empresariales, el enfoque principal es el usuario final.",
    "source": "https://es.wikipedia.org/wiki/Microsoft_Store"
  },
  {
    "id": 421,
    "category": "Instalación de Software",
    "question": "¿Qué es la función \"Instalar y Actualizar\" en el Windows Store?",
    "options": [
      "Una función para descargar e instalar nuevas aplicaciones.",
      "Una función para actualizar el sistema operativo.",
      "Una herramienta para reparar errores en las aplicaciones.",
      "Una función para personalizar la apariencia del Windows Store."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Una función para descargar e instalar nuevas aplicaciones.\". También gestiona las actualizaciones de las apps ya instaladas.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 422,
    "category": "Instalación de Software",
    "question": "¿Qué es un \"instalador\" de software en Windows?",
    "options": [
      "Una herramienta para desinstalar programas.",
      "Un archivo ejecutable que instala un programa en el sistema.",
      "Un programa antivirus integrado en Windows.",
      "Un archivo de configuración del sistema operativo."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Un archivo ejecutable que instala un programa en el sistema.\".",
    "source": "https://es.wikipedia.org/wiki/Instalador_de_software"
  },
  {
    "id": 423,
    "category": "Instalación de Software",
    "question": "¿Cuál es la extensión común de los archivos de instalador en Windows?",
    "options": [
      ".exe",
      ".zip",
      ".docx",
      ".mp3"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \".exe\". Aunque también existen instaladores con extensión .msi.",
    "source": "https://es.wikipedia.org/wiki/Portable_Executable"
  },
  {
    "id": 424,
    "category": "Instalación de Software",
    "question": "¿Qué es el \"Centro de Software\" en Windows?",
    "options": [
      "Una herramienta para personalizar la configuración del sistema.",
      "Una aplicación para descargar música y videos.",
      "Una herramienta para administrar e instalar software en el sistema.",
      "Un antivirus integrado en Windows."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Una herramienta para administrar e instalar software en el sistema.\". Aunque Windows no tiene un \"Centro de Software\" con ese nombre exacto, se refiere a la combinación de Tienda Microsoft y Configuración > Aplicaciones.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 425,
    "category": "Actualizaciones de Software",
    "question": "¿Qué es un \"servicio de actualización de software\" en Windows?",
    "options": [
      "Un servicio que actualiza automáticamente el hardware del sistema.",
      "Un servicio que actualiza automáticamente el software del sistema.",
      "Un servicio de suscripción para recibir actualizaciones de noticias.",
      "Un servicio para compartir archivos entre dispositivos."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Un servicio que actualiza automáticamente el software del sistema.\". Windows Update es el principal ejemplo.",
    "source": "https://es.wikipedia.org/wiki/Windows_Update"
  },
  {
    "id": 426,
    "category": "Actualizaciones de Software",
    "question": "¿Qué es el \"Administrador de actualizaciones\" en Windows?",
    "options": [
      "Una herramienta para gestionar las actualizaciones del sistema.",
      "Un programa para realizar copias de seguridad de los archivos.",
      "Un juego de entretenimiento.",
      "Una herramienta de edición de imágenes."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Una herramienta para gestionar las actualizaciones del sistema.\". Se refiere a la configuración de Windows Update.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 427,
    "category": "Instalación de Sistemas Operativos",
    "question": "¿Qué es el \"Programa de instalación de Windows\"?",
    "options": [
      "Una herramienta para personalizar la apariencia del sistema operativo.",
      "Un asistente que guía al usuario durante la instalación de Windows.",
      "Un programa para desinstalar aplicaciones.",
      "Un programa para reparar errores en el sistema."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Un asistente que guía al usuario durante la instalación de Windows.\".",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 428,
    "category": "Administración de Hardware",
    "question": "¿Cuál es el propósito del \"Administrador de dispositivos\" en Windows?",
    "options": [
      "Gestionar las actualizaciones del sistema.",
      "Instalar controladores de hardware.",
      "Realizar copias de seguridad del sistema.",
      "Personalizar la configuración del sistema."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Instalar controladores de hardware.\". También permite deshabilitar, habilitar y solucionar problemas de dispositivos.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 429,
    "category": "Instalación de Software",
    "question": "¿Qué es el \"Instalador de Windows\"?",
    "options": [
      "Un asistente para instalar aplicaciones en Windows.",
      "Un programa para desinstalar aplicaciones.",
      "Una herramienta para personalizar la configuración del sistema.",
      "Una aplicación para descargar música y videos."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Un asistente para instalar aplicaciones en Windows.\". Se refiere a los instaladores estándar del sistema.",
    "source": "https://es.wikipedia.org/wiki/Instalador_de_software"
  },
  {
    "id": 430,
    "category": "Configuración de Windows",
    "question": "¿Qué es el \"Panel de control\" en Windows?",
    "options": [
      "Una herramienta para gestionar la configuración del sistema.",
      "Un juego de entretenimiento.",
      "Un programa para desinstalar aplicaciones.",
      "Un asistente para instalar actualizaciones del sistema."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Una herramienta para gestionar la configuración del sistema.\". Aunque está siendo reemplazado por la aplicación Configuración, sigue estando presente.",
    "source": "https://es.wikipedia.org/wiki/Panel_de_control_(Windows)"
  },
  {
    "id": 431,
    "category": "Instalación de Software",
    "question": "¿Qué es un \"reinstalador\" de software en Windows?",
    "options": [
      "Una herramienta para desinstalar aplicaciones.",
      "Un programa antivirus integrado en Windows.",
      "Un archivo ejecutable que reinstala un programa en el sistema.",
      "Un archivo de configuración del sistema operativo."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Un archivo ejecutable que reinstala un programa en el sistema.\".",
    "source": "https://es.wikipedia.org/wiki/Instalador_de_software"
  },
  {
    "id": 432,
    "category": "Instalación de Software",
    "question": "¿Qué es el \"Asistente para instalación de software\" en Windows?",
    "options": [
      "Una herramienta para personalizar la configuración del sistema.",
      "Un asistente que guía al usuario durante la instalación de software.",
      "Un programa para desinstalar aplicaciones.",
      "Una aplicación para descargar música y videos."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Un asistente que guía al usuario durante la instalación de software.\".",
    "source": "https://es.wikipedia.org/wiki/Instalador_de_software"
  },
  {
    "id": 433,
    "category": "Seguridad en Windows",
    "question": "¿Qué es el \"Centro de seguridad\" en Windows?",
    "options": [
      "Una herramienta para gestionar las actualizaciones del sistema.",
      "Un programa para realizar copias de seguridad de los archivos.",
      "Una herramienta para proteger el sistema contra virus y malware.",
      "Un juego de entretenimiento."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Una herramienta para proteger el sistema contra virus y malware.\". Se refiere a Seguridad de Windows.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 434,
    "category": "Instalación de Software",
    "question": "¿Qué es el \"Gestor de paquetes\" en Windows?",
    "options": [
      "Una herramienta para instalar y administrar programas.",
      "Un programa para desinstalar aplicaciones.",
      "Un antivirus integrado en Windows.",
      "Una herramienta para personalizar la apariencia del sistema operativo."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Una herramienta para instalar y administrar programas.\". En Windows moderno, esto se refiere a `winget` (Windows Package Manager).",
    "source": "https://docs.microsoft.com/es-es/windows/package-manager/"
  },
  {
    "id": 435,
    "category": "Instalación de Software",
    "question": "¿Qué es un \"asistente de desinstalación\" en Windows?",
    "options": [
      "Una herramienta para instalar controladores de hardware.",
      "Un programa para desinstalar aplicaciones.",
      "Una herramienta para personalizar la configuración del sistema.",
      "Una aplicación para descargar música y videos."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Un programa para desinstalar aplicaciones.\".",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 436,
    "category": "Instalación de Software",
    "question": "¿Qué es el \"Instalador MSI\" en Windows?",
    "options": [
      "Un archivo ejecutable que instala un programa en el sistema.",
      "Un asistente que guía al usuario durante la instalación de software.",
      "Un programa para realizar copias de seguridad de los archivos.",
      "Un archivo de configuración del sistema operativo."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Un archivo ejecutable que instala un programa en el sistema.\". MSI es un formato de instalación estándar basado en bases de datos.",
    "source": "https://es.wikipedia.org/wiki/Windows_Installer"
  },
  {
    "id": 437,
    "category": "Instalación de Sistemas Operativos",
    "question": "¿Qué es el \"Asistente de configuración\" en Windows?",
    "options": [
      "Un programa para realizar copias de seguridad de los archivos.",
      "Un asistente que guía al usuario durante la configuración inicial del sistema.",
      "Una herramienta para instalar controladores de hardware.",
      "Una aplicación para descargar música y videos."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Un asistente que guía al usuario durante la configuración inicial del sistema.\". Se conoce como OOBE (Out-of-Box Experience).",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 438,
    "category": "Instalación de Software",
    "question": "¿Qué es el \"Instalador de aplicaciones\" en Windows?",
    "options": [
      "Un asistente que guía al usuario durante la instalación de aplicaciones.",
      "Un programa para desinstalar aplicaciones.",
      "Una herramienta para personalizar la configuración del sistema.",
      "Una aplicación para descargar música y videos."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Un asistente que guía al usuario durante la instalación de aplicaciones.\".",
    "source": "https://es.wikipedia.org/wiki/Instalador_de_software"
  },
  {
    "id": 439,
    "category": "Instalación de Software",
    "question": "¿Qué es el \"Gestor de instalación\" en Windows?",
    "options": [
      "Una herramienta para instalar y administrar programas.",
      "Un programa para desinstalar aplicaciones.",
      "Un antivirus integrado en Windows.",
      "Una herramienta para personalizar la apariencia del sistema operativo."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Una herramienta para instalar y administrar programas.\".",
    "source": "https://es.wikipedia.org/wiki/Instalador_de_software"
  },
  {
    "id": 440,
    "category": "Actualizaciones de Software",
    "question": "¿Qué es el \"Asistente de actualización\" en Windows?",
    "options": [
      "Un asistente que guía al usuario durante el proceso de actualización del sistema.",
      "Un programa para realizar copias de seguridad de los archivos.",
      "Una herramienta para instalar controladores de hardware.",
      "Una aplicación para descargar música y videos."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Un asistente que guía al usuario durante el proceso de actualización del sistema.\". Microsoft ofrece un asistente para actualizar a nuevas versiones de Windows.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 441,
    "category": "Instalación de Software",
    "question": "¿Qué es el \"Administrador de programas\" en Windows?",
    "options": [
      "Una herramienta para instalar y administrar programas.",
      "Un programa para desinstalar aplicaciones.",
      "Un antivirus integrado en Windows.",
      "Una herramienta para personalizar la apariencia del sistema operativo."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Una herramienta para instalar y administrar programas.\". Se refiere a la sección de Aplicaciones en Configuración o al Panel de control.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 442,
    "category": "Instalación de Software",
    "question": "¿Qué es el \"Asistente de instalación de software\" en Windows?",
    "options": [
      "Un asistente que guía al usuario durante la instalación de software.",
      "Un programa para desinstalar aplicaciones.",
      "Una herramienta para personalizar la configuración del sistema.",
      "Una aplicación para descargar música y videos."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Un asistente que guía al usuario durante la instalación de software.\".",
    "source": "https://es.wikipedia.org/wiki/Instalador_de_software"
  },
  {
    "id": 443,
    "category": "Instalación de Software",
    "question": "¿Qué es el \"Instalador de programas\" en Windows?",
    "options": [
      "Una herramienta para instalar y administrar programas.",
      "Un programa para desinstalar aplicaciones.",
      "Un antivirus integrado en Windows.",
      "Una herramienta para personalizar la apariencia del sistema operativo."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Una herramienta para instalar y administrar programas.\".",
    "source": "https://es.wikipedia.org/wiki/Instalador_de_software"
  },
  {
    "id": 444,
    "category": "Instalación de Software",
    "question": "¿Qué es el \"Asistente de desinstalación\" en Windows?",
    "options": [
      "Una herramienta para instalar y administrar programas.",
      "Un programa para desinstalar aplicaciones.",
      "Un antivirus integrado en Windows.",
      "Una herramienta para personalizar la apariencia del sistema operativo."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Un programa para desinstalar aplicaciones.\".",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 445,
    "category": "Instalación de Software",
    "question": "¿Qué es el \"Instalador de software\" en Windows?",
    "options": [
      "Un asistente que guía al usuario durante la instalación de software.",
      "Un programa para desinstalar aplicaciones.",
      "Una herramienta para personalizar la configuración del sistema.",
      "Una aplicación para descargar música y videos."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Un asistente que guía al usuario durante la instalación de software.\".",
    "source": "https://es.wikipedia.org/wiki/Instalador_de_software"
  },
  {
    "id": 446,
    "category": "Actualizaciones de Software",
    "question": "¿Qué es el \"Centro de actualizaciones\" en Windows?",
    "options": [
      "Una herramienta para gestionar las actualizaciones del sistema.",
      "Un programa para realizar copias de seguridad de los archivos.",
      "Una herramienta para proteger el sistema contra virus y malware.",
      "Un juego de entretenimiento."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Una herramienta para gestionar las actualizaciones del sistema.\". Se refiere a Windows Update.",
    "source": "https://es.wikipedia.org/wiki/Windows_Update"
  },
  {
    "id": 447,
    "category": "Instalación de Software",
    "question": "¿Qué es el \"Administrador de aplicaciones\" en Windows?",
    "options": [
      "Una herramienta para instalar y administrar programas.",
      "Un programa para desinstalar aplicaciones.",
      "Un antivirus integrado en Windows.",
      "Una herramienta para personalizar la apariencia del sistema operativo."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Una herramienta para instalar y administrar programas.\".",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 448,
    "category": "Instalación de Software",
    "question": "¿Qué es el \"Asistente de instalación de aplicaciones\" en Windows?",
    "options": [
      "Un asistente que guía al usuario durante la instalación de aplicaciones.",
      "Un programa para desinstalar aplicaciones.",
      "Una herramienta para personalizar la configuración del sistema.",
      "Una aplicación para descargar música y videos."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Un asistente que guía al usuario durante la instalación de aplicaciones.\".",
    "source": "https://es.wikipedia.org/wiki/Instalador_de_software"
  },
  {
    "id": 449,
    "category": "Utilidades del Sistema",
    "question": "¿Qué utilidad de Windows se utiliza para gestionar particiones de disco?",
    "options": [
      "Administrador de dispositivos.",
      "Administrador de tareas.",
      "Administración de discos.",
      "Centro de seguridad de Windows."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Administración de discos.\".",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 450,
    "category": "Utilidades del Sistema",
    "question": "¿Cuál es la herramienta de Windows que se utiliza para desfragmentar discos duros?",
    "options": [
      "Administrador de tareas.",
      "Desfragmentador de disco.",
      "Centro de seguridad de Windows.",
      "Panel de control."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Desfragmentador de disco.\". En Windows 10/11, se llama \"Optimizar unidades\".",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 451,
    "category": "Utilidades del Sistema",
    "question": "¿Qué utilidad de Windows se utiliza para realizar copias de seguridad y restaurar archivos?",
    "options": [
      "Administrador de archivos.",
      "Administrador de copias de seguridad.",
      "Centro de seguridad de Windows.",
      "Historial de archivos."
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Historial de archivos.\".",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 452,
    "category": "Utilidades del Sistema",
    "question": "¿Cuál es la herramienta de Windows que se utiliza para grabar imágenes de disco?",
    "options": [
      "Grabador de discos de Windows.",
      "Administrador de imágenes de disco.",
      "Centro de seguridad de Windows.",
      "Administrador de archivos."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Grabador de discos de Windows.\". Para crear imágenes ISO, se usa esta herramienta integrada.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 453,
    "category": "Utilidades del Sistema",
    "question": "¿Qué utilidad de Windows se utiliza para programar tareas automatizadas?",
    "options": [
      "Programador de tareas.",
      "Planificador de eventos.",
      "Centro de seguridad de Windows.",
      "Administrador de tareas."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Programador de tareas.\".",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 454,
    "category": "Utilidades del Sistema",
    "question": "¿Cuál es la herramienta de Windows que se utiliza para realizar capturas de pantalla?",
    "options": [
      "Capturador de pantalla.",
      "Grabador de pantalla.",
      "Centro de seguridad de Windows.",
      "Recortes."
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Recortes.\". La herramienta moderna es \"Recortes y bosquejo\".",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 455,
    "category": "Utilidades del Sistema",
    "question": "¿Qué utilidad de Windows se utiliza para limpiar archivos innecesarios y temporales?",
    "options": [
      "Limpiador de disco.",
      "Limpiador de archivos.",
      "Centro de seguridad de Windows.",
      "Optimizador de sistema."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Limpiador de disco.\". En inglés, Disk Cleanup.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 456,
    "category": "Utilidades del Sistema",
    "question": "¿Cuál es la herramienta de Windows que se utiliza para realizar videoconferencias y llamadas?",
    "options": [
      "Skype.",
      "Teams.",
      "Messenger.",
      "Zoom."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Teams\". Es la herramienta de videoconferencia integrada y promovida por Microsoft en Windows 11.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 457,
    "category": "Utilidades del Sistema",
    "question": "¿Qué utilidad de Windows se utiliza para monitorizar el rendimiento del sistema?",
    "options": [
      "Monitor de rendimiento.",
      "Centro de seguridad de Windows.",
      "Administrador de tareas.",
      "Panel de control."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Administrador de tareas\". Proporciona una vista en tiempo real del rendimiento de CPU, memoria, disco y red.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 458,
    "category": "Utilidades del Sistema",
    "question": "¿Cuál es la herramienta de Windows que se utiliza para configurar dispositivos conectados al equipo?",
    "options": [
      "Administrador de dispositivos.",
      "Centro de dispositivos.",
      "Configurador de dispositivos.",
      "Panel de control."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Administrador de dispositivos.\".",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 459,
    "category": "Utilidades del Sistema",
    "question": "¿Qué utilidad de Windows se utiliza para cambiar la configuración de red y conexión?",
    "options": [
      "Configuración de red.",
      "Panel de control.",
      "Centro de seguridad de Windows.",
      "Configurador de red."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Configuración de red.\". En Windows moderno, se accede desde Configuración > Red e Internet.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 460,
    "category": "Utilidades del Sistema",
    "question": "¿Cuál es la herramienta de Windows que se utiliza para gestionar cuentas de usuario?",
    "options": [
      "Configuración de cuentas.",
      "Panel de control de usuarios.",
      "Centro de seguridad de Windows.",
      "Administrador de usuarios."
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Administrador de usuarios.\". Aunque en la interfaz moderna se usa Configuración > Cuentas, la herramienta clásica es `lusrmgr.msc` (Administrador de usuarios locales).",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 461,
    "category": "Utilidades del Sistema",
    "question": "¿Qué utilidad de Windows se utiliza para verificar y reparar errores en el sistema de archivos?",
    "options": [
      "Comprobador de archivos del sistema.",
      "Reparador de archivos.",
      "Centro de seguridad de Windows.",
      "Panel de control de archivos."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Comprobador de archivos del sistema.\". Se refiere a la herramienta `chkdsk` (Check Disk).",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 462,
    "category": "Utilidades del Sistema",
    "question": "¿Cuál es la herramienta de Windows que se utiliza para configurar el firewall y la seguridad de red?",
    "options": [
      "Firewall de Windows.",
      "Centro de seguridad de Windows.",
      "Configuración de red.",
      "Panel de control de seguridad."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Centro de seguridad de Windows.\". Incluye la configuración del firewall en Seguridad de Windows > Firewall y protección de red.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 463,
    "category": "Utilidades del Sistema",
    "question": "¿Qué utilidad de Windows se utiliza para cambiar la configuración de energía y la administración de la batería en dispositivos portátiles?",
    "options": [
      "Configuración de energía.",
      "Panel de control de energía.",
      "Centro de seguridad de Windows.",
      "Administrador de energía."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Configuración de energía.\". En Configuración > Sistema > Energía y batería.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 464,
    "category": "Utilidades del Sistema",
    "question": "¿Cuál es la herramienta de Windows que se utiliza para realizar videojuegos y grabar sesiones de juego?",
    "options": [
      "Game Bar.",
      "Game Mode.",
      "Centro de juegos de Windows.",
      "Grabador de juegos."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Game Bar.\". Se activa con Win+G y permite grabar, tomar capturas y transmitir.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 465,
    "category": "Utilidades del Sistema",
    "question": "¿Qué utilidad de Windows se utiliza para conectar de forma remota a otros equipos?",
    "options": [
      "Escritorio remoto.",
      "Conexión a distancia.",
      "Centro de seguridad de Windows.",
      "Administrador de equipos."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Escritorio remoto.\". La herramienta se llama \"Conexión a Escritorio remoto\" (`mstsc.exe`).",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 466,
    "category": "Utilidades del Sistema",
    "question": "¿Cuál es la herramienta de Windows que se utiliza para cambiar la configuración de fecha y hora?",
    "options": [
      "Configuración de fecha y hora.",
      "Reloj y calendario.",
      "Centro de seguridad de Windows.",
      "Panel de control de fecha y hora."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Configuración de fecha y hora.\". En Configuración > Hora e idioma > Fecha y hora.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 467,
    "category": "Utilidades del Sistema",
    "question": "¿Qué utilidad de Windows se utiliza para cambiar la configuración de idioma y región?",
    "options": [
      "Configuración de idioma.",
      "Panel de control de idioma.",
      "Centro de seguridad de Windows.",
      "Configurador de región."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Configuración de idioma.\". En Configuración > Hora e idioma > Idioma y Región.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 468,
    "category": "Tipos de Software",
    "question": "¿Cuál de los siguientes es un ejemplo de software de ofimática?",
    "options": [
      "Adobe Photoshop.",
      "Microsoft Word.",
      "AutoCAD.",
      "Adobe Premiere."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Microsoft Word.\". Es parte de la suite de ofimática Microsoft Office.",
    "source": "https://es.wikipedia.org/wiki/Ofim%C3%A1tica"
  },
  {
    "id": 469,
    "category": "Tipos de Software",
    "question": "¿Para qué se utiliza comúnmente el software de hojas de cálculo?",
    "options": [
      "Para editar imágenes.",
      "Para crear presentaciones.",
      "Para organizar y manipular datos numéricos.",
      "Para diseñar páginas web."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Para organizar y manipular datos numéricos.\". Ejemplo: Microsoft Excel.",
    "source": "https://es.wikipedia.org/wiki/Hoja_de_c%C3%A1lculo"
  },
  {
    "id": 470,
    "category": "Tipos de Software",
    "question": "¿Cuál de las siguientes opciones describe mejor el software de diseño gráfico?",
    "options": [
      "Se utiliza para escribir código de programación.",
      "Se utiliza para crear y editar imágenes y gráficos.",
      "Se utiliza para administrar bases de datos.",
      "Se utiliza para crear presentaciones."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Se utiliza para crear y editar imágenes y gráficos.\". Ejemplo: Adobe Illustrator, Photoshop.",
    "source": "https://es.wikipedia.org/wiki/Dise%C3%B1o_gr%C3%A1fico"
  },
  {
    "id": 471,
    "category": "Tipos de Software",
    "question": "¿Cuál de las siguientes aplicaciones es un software de gestión de proyectos?",
    "options": [
      "Microsoft Excel.",
      "Adobe Illustrator.",
      "Microsoft Project.",
      "Adobe InDesign."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Microsoft Project.\". Es una herramienta específica para planificación y seguimiento de proyectos.",
    "source": "https://es.wikipedia.org/wiki/Microsoft_Project"
  },
  {
    "id": 472,
    "category": "Tipos de Software",
    "question": "¿Para qué se utiliza comúnmente el software de edición de video?",
    "options": [
      "Para escribir documentos.",
      "Para crear y editar videos.",
      "Para diseñar gráficos vectoriales.",
      "Para gestionar tareas y proyectos."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Para crear y editar videos.\". Ejemplo: Adobe Premiere, DaVinci Resolve.",
    "source": "https://es.wikipedia.org/wiki/Edici%C3%B3n_de_v%C3%ADdeo"
  },
  {
    "id": 473,
    "category": "Tipos de Software",
    "question": "¿Cuál de las siguientes opciones describe mejor el software de modelado 3D?",
    "options": [
      "Se utiliza para editar música.",
      "Se utiliza para crear y visualizar modelos tridimensionales.",
      "Se utiliza para escribir código de programación.",
      "Se utiliza para gestionar bases de datos."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Se utiliza para crear y visualizar modelos tridimensionales.\". Ejemplo: Blender, Autodesk Maya.",
    "source": "https://es.wikipedia.org/wiki/Modelado_3D"
  },
  {
    "id": 474,
    "category": "Tipos de Software",
    "question": "¿Cuál de las siguientes aplicaciones es un software de edición de audio?",
    "options": [
      "Adobe After Effects.",
      "Audacity.",
      "Autodesk Maya.",
      "Microsoft Excel."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Audacity.\". Es un editor de audio de código abierto muy popular.",
    "source": "https://es.wikipedia.org/wiki/Audacity_(software)"
  },
  {
    "id": 475,
    "category": "Tipos de Software",
    "question": "¿Para qué se utiliza comúnmente el software de procesamiento de texto?",
    "options": [
      "Para editar imágenes.",
      "Para crear y editar documentos de texto.",
      "Para diseñar animaciones.",
      "Para gestionar proyectos."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Para crear y editar documentos de texto.\". Ejemplo: Microsoft Word, Google Docs.",
    "source": "https://es.wikipedia.org/wiki/Procesador_de_textos"
  },
  {
    "id": 476,
    "category": "Tipos de Software",
    "question": "¿Cuál de las siguientes opciones describe mejor el software de gestión de bases de datos?",
    "options": [
      "Se utiliza para crear presentaciones.",
      "Se utiliza para editar videos.",
      "Se utiliza para almacenar, organizar y recuperar datos.",
      "Se utiliza para diseñar páginas web."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Se utiliza para almacenar, organizar y recuperar datos.\". Ejemplo: Microsoft Access, MySQL.",
    "source": "https://es.wikipedia.org/wiki/Sistema_de_gesti%C3%B3n_de_bases_de_datos"
  },
  {
    "id": 477,
    "category": "Tipos de Software",
    "question": "¿Cuál de las siguientes aplicaciones es un software de navegación web?",
    "options": [
      "Microsoft Word.",
      "Google Chrome.",
      "Adobe Photoshop.",
      "AutoCAD."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Google Chrome.\".",
    "source": "https://es.wikipedia.org/wiki/Navegador_web"
  },
  {
    "id": 478,
    "category": "Tipos de Software",
    "question": "¿Para qué se utiliza comúnmente el software de antivirus?",
    "options": [
      "Para crear y editar documentos de texto.",
      "Para proteger el sistema contra virus y malware.",
      "Para diseñar gráficos vectoriales.",
      "Para gestionar proyectos."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Para proteger el sistema contra virus y malware.\".",
    "source": "https://es.wikipedia.org/wiki/Antivirus"
  },
  {
    "id": 479,
    "category": "Tipos de Software",
    "question": "¿Cuál de las siguientes opciones describe mejor el software de gestión de contenido?",
    "options": [
      "Se utiliza para crear y editar imágenes.",
      "Se utiliza para escribir código de programación.",
      "Se utiliza para administrar y publicar contenido en línea.",
      "Se utiliza para editar videos."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Se utiliza para administrar y publicar contenido en línea.\". Ejemplo: WordPress, Drupal.",
    "source": "https://es.wikipedia.org/wiki/Sistema_de_gesti%C3%B3n_de_contenidos"
  },
  {
    "id": 480,
    "category": "Tipos de Software",
    "question": "¿Cuál de las siguientes aplicaciones es un software de correo electrónico?",
    "options": [
      "Microsoft Excel.",
      "Outlook.",
      "Adobe InDesign.",
      "Blender."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Outlook.\". Es el cliente de correo de Microsoft.",
    "source": "https://es.wikipedia.org/wiki/Microsoft_Outlook"
  },
  {
    "id": 481,
    "category": "Tipos de Software",
    "question": "¿Para qué se utiliza comúnmente el software de presentaciones?",
    "options": [
      "Para editar música.",
      "Para crear y presentar diapositivas.",
      "Para diseñar gráficos vectoriales.",
      "Para gestionar proyectos."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Para crear y presentar diapositivas.\". Ejemplo: Microsoft PowerPoint, Google Slides.",
    "source": "https://es.wikipedia.org/wiki/Programa_de_presentaci%C3%B3n"
  },
  {
    "id": 482,
    "category": "Tipos de Software",
    "question": "¿Cuál de las siguientes opciones describe mejor el software de gestión de recursos humanos?",
    "options": [
      "Se utiliza para crear y editar documentos de texto.",
      "Se utiliza para administrar tareas y proyectos.",
      "Se utiliza para gestionar información sobre empleados y personal.",
      "Se utiliza para diseñar animaciones."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Se utiliza para gestionar información sobre empleados y personal.\". Ejemplo: SAP SuccessFactors, BambooHR.",
    "source": "https://es.wikipedia.org/wiki/Software_de_gesti%C3%B3n_de_recursos_humanos"
  },
  {
    "id": 483,
    "category": "Tipos de Software",
    "question": "¿Cuál de las siguientes aplicaciones es un software de edición de fotos?",
    "options": [
      "Microsoft Word.",
      "Adobe Photoshop.",
      "AutoCAD.",
      "Google Chrome."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Adobe Photoshop.\".",
    "source": "https://es.wikipedia.org/wiki/Adobe_Photoshop"
  },
  {
    "id": 484,
    "category": "Tipos de Software",
    "question": "¿Para qué se utiliza comúnmente el software de gestión financiera?",
    "options": [
      "Para crear y editar videos.",
      "Para proteger el sistema contra virus y malware.",
      "Para administrar y controlar las finanzas personales o empresariales.",
      "Para diseñar páginas web."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Para administrar y controlar las finanzas personales o empresariales.\". Ejemplo: QuickBooks, Contpaqi.",
    "source": "https://es.wikipedia.org/wiki/Software_contable"
  },
  {
    "id": 485,
    "category": "Tipos de Software",
    "question": "¿Cuál de las siguientes opciones describe mejor el software de planificación de recursos empresariales (ERP)?",
    "options": [
      "Se utiliza para crear y editar documentos de texto.",
      "Se utiliza para gestionar y automatizar procesos empresariales como la contabilidad, la logística y el inventario.",
      "Se utiliza para diseñar gráficos vectoriales.",
      "Se utiliza para administrar tareas y proyectos."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Se utiliza para gestionar y automatizar procesos empresariales como la contabilidad, la logística y el inventario.\". Ejemplo: SAP, Oracle ERP.",
    "source": "https://es.wikipedia.org/wiki/Planificaci%C3%B3n_de_recursos_empresariales"
  },
  {
    "id": 486,
    "category": "Tipos de Software",
    "question": "¿Cuál de las siguientes aplicaciones es un software de mensajería instantánea?",
    "options": [
      "Microsoft Excel.",
      "WhatsApp.",
      "Adobe InDesign.",
      "Audacity."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"WhatsApp.\".",
    "source": "https://es.wikipedia.org/wiki/WhatsApp"
  },
  {
    "id": 487,
    "category": "Tipos de Software",
    "question": "¿Para qué se utiliza comúnmente el software de gestión de relaciones con los clientes (CRM)?",
    "options": [
      "Para crear y editar imágenes.",
      "Para administrar y gestionar las relaciones con los clientes.",
      "Para almacenar y organizar datos numéricos.",
      "Para diseñar animaciones."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Para administrar y gestionar las relaciones con los clientes.\". Ejemplo: Salesforce, HubSpot.",
    "source": "https://es.wikipedia.org/wiki/Gesti%C3%B3n_de_relaciones_con_clientes"
  },
  {
    "id": 488,
    "category": "Tipos de Software",
    "question": "¿Cuál de las siguientes opciones describe mejor el software de gestión de proyectos?",
    "options": [
      "Se utiliza para crear y editar documentos de texto.",
      "Se utiliza para administrar tareas y proyectos.",
      "Se utiliza para diseñar gráficos vectoriales.",
      "Se utiliza para proteger el sistema contra virus y malware."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Se utiliza para administrar tareas y proyectos.\".",
    "source": "https://es.wikipedia.org/wiki/Software_de_gesti%C3%B3n_de_proyectos"
  },
  {
    "id": 489,
    "category": "Tipos de Software",
    "question": "¿Cuál de las siguientes aplicaciones es un software de videoconferencia?",
    "options": [
      "Microsoft Word.",
      "Zoom.",
      "AutoCAD.",
      "Adobe Premiere."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Zoom.\".",
    "source": "https://es.wikipedia.org/wiki/Zoom_Video_Communications"
  },
  {
    "id": 490,
    "category": "Tipos de Software",
    "question": "¿Para qué se utiliza comúnmente el software de gestión de inventario?",
    "options": [
      "Para editar música.",
      "Para administrar y controlar el inventario de productos.",
      "Para diseñar gráficos vectoriales.",
      "Para gestionar proyectos."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Para administrar y controlar el inventario de productos.\".",
    "source": "https://es.wikipedia.org/wiki/Gesti%C3%B3n_de_inventario"
  },
  {
    "id": 491,
    "category": "Tipos de Software",
    "question": "¿Cuál de las siguientes opciones describe mejor el software de gestión de activos?",
    "options": [
      "Se utiliza para crear y editar imágenes.",
      "Se utiliza para administrar y controlar los activos de una empresa.",
      "Se utiliza para escribir código de programación.",
      "Se utiliza para administrar tareas y proyectos."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Se utiliza para administrar y controlar los activos de una empresa.\". Ejemplo: activos fijos, IT assets.",
    "source": "https://es.wikipedia.org/wiki/Gesti%C3%B3n_de_activos"
  },
  {
    "id": 492,
    "category": "Tipos de Software",
    "question": "¿Cuál de las siguientes aplicaciones es un software de gestión de contenido empresarial (ECM)?",
    "options": [
      "Microsoft Excel.",
      "SharePoint.",
      "Adobe InDesign.",
      "Blender."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"SharePoint.\". Es una plataforma de Microsoft para gestión documental y colaboración.",
    "source": "https://es.wikipedia.org/wiki/Microsoft_SharePoint"
  },
  {
    "id": 493,
    "category": "Tipos de Software",
    "question": "¿Para qué se utiliza comúnmente el software de gestión de proyectos de código abierto?",
    "options": [
      "Para crear y editar videos.",
      "Para administrar tareas y proyectos sin costo.",
      "Para proteger el sistema contra virus y malware.",
      "Para diseñar páginas web."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Para administrar tareas y proyectos sin costo.\". Ejemplo: OpenProject, Taiga.",
    "source": "https://es.wikipedia.org/wiki/Software_de_gesti%C3%B3n_de_proyectos"
  },
  {
    "id": 494,
    "category": "Tipos de Software",
    "question": "¿Cuál de las siguientes opciones describe mejor el software de colaboración en línea?",
    "options": [
      "Se utiliza para crear y editar documentos de texto.",
      "Se utiliza para colaborar en tiempo real en proyectos y documentos.",
      "Se utiliza para diseñar gráficos vectoriales.",
      "Se utiliza para administrar tareas y proyectos."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Se utiliza para colaborar en tiempo real en proyectos y documentos.\". Ejemplo: Microsoft Teams, Google Workspace.",
    "source": "https://es.wikipedia.org/wiki/Colaboraci%C3%B3n_en_l%C3%ADnea"
  },
  {
    "id": 495,
    "category": "Tipos de Software",
    "question": "¿Cuál de las siguientes aplicaciones es un software de gestión de flotas?",
    "options": [
      "Microsoft Word.",
      "Fleetio.",
      "AutoCAD.",
      "Adobe Premiere."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Fleetio.\". Es una plataforma especializada en gestión de vehículos y flotas.",
    "source": "https://es.wikipedia.org/wiki/Gesti%C3%B3n_de_flotas"
  },
  {
    "id": 496,
    "category": "Tipos de Software",
    "question": "¿Para qué se utiliza comúnmente el software de planificación de recursos humanos (HRP)?",
    "options": [
      "Para editar música.",
      "Para administrar y planificar las actividades relacionadas con los recursos humanos.",
      "Para diseñar gráficos vectoriales.",
      "Para gestionar proyectos."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Para administrar y planificar las actividades relacionadas con los recursos humanos.\".",
    "source": "https://es.wikipedia.org/wiki/Planificaci%C3%B3n_de_recursos_humanos"
  },
  {
    "id": 497,
    "category": "Tipos de Software",
    "question": "¿Cuál de las siguientes opciones describe mejor el software de gestión de cadena de suministro (SCM)?",
    "options": [
      "Se utiliza para crear y editar imágenes.",
      "Se utiliza para administrar y optimizar la cadena de suministro de una empresa.",
      "Se utiliza para almacenar y organizar datos numéricos.",
      "Se utiliza para diseñar animaciones."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Se utiliza para administrar y optimizar la cadena de suministro de una empresa.\". Ejemplo: SAP SCM, Oracle SCM.",
    "source": "https://es.wikipedia.org/wiki/Gesti%C3%B3n_de_la_cadena_de_suministro"
  },
  {
    "id": 498,
    "category": "Registro de Windows",
    "question": "¿Qué es el registro de Windows?",
    "options": [
      "Una carpeta donde se almacenan los archivos del sistema operativo.",
      "Una base de datos centralizada que almacena la configuración y opciones del sistema operativo Windows.",
      "Un sistema de archivos utilizado para almacenar datos temporales.",
      "Una herramienta para desfragmentar el disco duro."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Una base de datos centralizada que almacena la configuración y opciones del sistema operativo Windows.\".",
    "source": "https://es.wikipedia.org/wiki/Registro_de_Windows"
  },
  {
    "id": 499,
    "category": "Registro de Windows",
    "question": "¿Qué extensión tienen los archivos que contienen copias de seguridad del registro de Windows?",
    "options": [
      ".regbackup",
      ".reg",
      ".dat",
      ".bak"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \".regbackup\". Windows crea archivos con esta extensión al realizar una copia de seguridad del registro durante ciertas operaciones del sistema.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 500,
    "category": "Registro de Windows",
    "question": "¿Qué herramienta de Windows se utiliza para editar el registro?",
    "options": [
      "Panel de control",
      "Editor de registros",
      "Regedit",
      "Explorador de archivos"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Regedit\". Es el nombre del ejecutable (`regedit.exe`) del Editor del Registro de Windows.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 501,
    "category": "Registro de Windows",
    "question": "¿Qué tipo de datos almacena el registro de Windows principalmente?",
    "options": [
      "Datos de usuario",
      "Configuraciones del sistema y aplicaciones",
      "Archivos multimedia",
      "Documentos de texto"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Configuraciones del sistema y aplicaciones\". El registro es una base de datos jerárquica que almacena ajustes de bajo nivel para el sistema operativo y software.",
    "source": "https://es.wikipedia.org/wiki/Registro_de_Windows"
  },
  {
    "id": 502,
    "category": "Registro de Windows",
    "question": "¿Cuál de las siguientes claves del registro almacena la configuración de hardware del equipo?",
    "options": [
      "HKEY_LOCAL_MACHINE\\Software",
      "HKEY_CURRENT_USER\\Software",
      "HKEY_CLASSES_ROOT",
      "HKEY_LOCAL_MACHINE\\Hardware"
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"HKEY_LOCAL_MACHINE\\Hardware\". Esta rama contiene información sobre el hardware detectado y los controladores.",
    "source": "https://es.wikipedia.org/wiki/Registro_de_Windows"
  },
  {
    "id": 503,
    "category": "Registro de Windows",
    "question": "¿Qué extensión tienen los archivos que contienen datos del registro exportados?",
    "options": [
      ".dat",
      ".reg",
      ".backup",
      ".regedit"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \".reg\". Los archivos `.reg` son archivos de texto que contienen instrucciones para importar claves y valores al registro.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 504,
    "category": "Registro de Windows",
    "question": "¿Qué tipo de datos almacena un archivo con extensión .dat en el contexto del registro de Windows?",
    "options": [
      "Configuraciones del sistema",
      "Copias de seguridad del registro",
      "Datos temporales de aplicaciones",
      "Claves del registro exportadas"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Copias de seguridad del registro\". Algunos archivos del sistema, como `SYSTEM.dat` o `SOFTWARE.dat` en versiones antiguas, eran las copias físicas del registro.",
    "source": "https://es.wikipedia.org/wiki/Registro_de_Windows"
  },
  {
    "id": 505,
    "category": "Registro de Windows",
    "question": "¿Qué herramienta se utiliza para importar claves y valores al registro desde un archivo .reg?",
    "options": [
      "Regedit",
      "Explorador de archivos",
      "Editor de registros",
      "Símbolo del sistema"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Regedit\". Al hacer doble clic en un archivo `.reg`, se abre Regedit para importar su contenido.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 506,
    "category": "Registro de Windows",
    "question": "¿Qué tipo de datos almacena un archivo .reg?",
    "options": [
      "Configuraciones de red",
      "Claves del registro y sus valores",
      "Imágenes del sistema",
      "Documentos de texto"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Claves del registro y sus valores\". Es un formato de texto legible que puede ser editado con un editor de texto.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 507,
    "category": "Registro de Windows",
    "question": "¿Cuál es el propósito principal del registro de Windows?",
    "options": [
      "Almacenar archivos de sistema",
      "Almacenar configuraciones del sistema y aplicaciones",
      "Realizar copias de seguridad automáticas",
      "Gestionar el espacio en disco"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Almacenar configuraciones del sistema y aplicaciones\".",
    "source": "https://es.wikipedia.org/wiki/Registro_de_Windows"
  },
  {
    "id": 508,
    "category": "Registro de Windows",
    "question": "¿Qué herramienta de Windows se utiliza para crear copias de seguridad del registro?",
    "options": [
      "Regedit",
      "Panel de control",
      "Restaurador de sistema",
      "Editor de registros"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Restaurador de sistema\". Crea puntos de restauración que incluyen una copia del registro.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 509,
    "category": "Registro de Windows",
    "question": "¿Qué extensión tienen los archivos que contienen datos del registro exportados en formato binario?",
    "options": [
      ".reg",
      ".bin",
      ".dat",
      ".bkp"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \".dat\". Los archivos de registro del sistema (como `SAM`, `SECURITY`, `SOFTWARE`) se almacenan en la carpeta `System32\\config` con extensión `.dat`.",
    "source": "https://es.wikipedia.org/wiki/Registro_de_Windows"
  },
  {
    "id": 510,
    "category": "Registro de Windows",
    "question": "¿Cuál es el nombre de la clave del registro que contiene la configuración del usuario actual?",
    "options": [
      "HKEY_LOCAL_MACHINE",
      "HKEY_CURRENT_USER",
      "HKEY_CLASSES_ROOT",
      "HKEY_USERS"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"HKEY_CURRENT_USER\". Es un enlace a la rama correspondiente dentro de `HKEY_USERS` para el usuario que ha iniciado sesión.",
    "source": "https://es.wikipedia.org/wiki/Registro_de_Windows"
  },
  {
    "id": 511,
    "category": "Registro de Windows",
    "question": "¿Qué tipo de datos almacena un archivo .dat en el contexto del registro de Windows?",
    "options": [
      "Claves del registro y sus valores",
      "Copias de seguridad del registro",
      "Datos temporales de aplicaciones",
      "Documentos de texto"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Copias de seguridad del registro\".",
    "source": "https://es.wikipedia.org/wiki/Registro_de_Windows"
  },
  {
    "id": 512,
    "category": "Registro de Windows",
    "question": "¿Qué extensión tienen los archivos que contienen una copia del registro de Windows?",
    "options": [
      ".backup",
      ".reg",
      ".dat",
      ".regbackup"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \".dat\". Los archivos del registro del sistema se almacenan con esta extensión.",
    "source": "https://es.wikipedia.org/wiki/Registro_de_Windows"
  },
  {
    "id": 513,
    "category": "Registro de Windows",
    "question": "¿Qué herramienta de Windows se utiliza para restaurar el sistema a un estado anterior mediante el registro?",
    "options": [
      "Regedit",
      "Restaurador de sistema",
      "Editor de registros",
      "Explorador de archivos"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Restaurador de sistema\". Utiliza los puntos de restauración que incluyen una copia del registro para revertir cambios del sistema.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 514,
    "category": "Registro de Windows",
    "question": "¿Qué tipo de datos almacena un archivo .reg en el contexto del registro de Windows?",
    "options": [
      "Configuraciones del sistema",
      "Copias de seguridad del registro",
      "Claves del registro y sus valores",
      "Documentos de texto"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Claves del registro y sus valores\".",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 515,
    "category": "Registro de Windows",
    "question": "¿Qué extensión tienen los archivos que contienen claves y valores exportados del registro?",
    "options": [
      ".regedit",
      ".export",
      ".reg",
      ".key"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \".reg\".",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 516,
    "category": "Registro de Windows",
    "question": "¿Qué herramienta se utiliza para exportar claves y valores del registro a un archivo .reg?",
    "options": [
      "Regedit",
      "Editor de registros",
      "Símbolo del sistema",
      "Explorador de archivos"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Regedit\". Desde el menú Archivo > Exportar, se puede guardar una rama del registro en un archivo `.reg`.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 517,
    "category": "Registro de Windows",
    "question": "¿Cuál es la función principal de la herramienta Regedit en Windows?",
    "options": [
      "Desfragmentar el registro",
      "Editar y visualizar el contenido del registro",
      "Realizar copias de seguridad del sistema",
      "Restaurar el sistema a un estado anterior"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Editar y visualizar el contenido del registro\".",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 518,
    "category": "Registro de Windows",
    "question": "¿Qué tipo de datos almacena un archivo .dat en el contexto del registro de Windows?",
    "options": [
      "Configuraciones del sistema",
      "Copias de seguridad del registro",
      "Datos temporales de aplicaciones",
      "Claves del registro y sus valores"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Copias de seguridad del registro\".",
    "source": "https://es.wikipedia.org/wiki/Registro_de_Windows"
  },
  {
    "id": 519,
    "category": "Registro de Windows",
    "question": "¿Qué extensión tienen los archivos que contienen una copia del registro de Windows?",
    "options": [
      ".backup",
      ".reg",
      ".dat",
      ".regbackup"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \".dat\".",
    "source": "https://es.wikipedia.org/wiki/Registro_de_Windows"
  },
  {
    "id": 520,
    "category": "Registro de Windows",
    "question": "¿Qué herramienta de Windows se utiliza para restaurar el sistema a un estado anterior mediante el registro?",
    "options": [
      "Regedit",
      "Restaurador de sistema",
      "Editor de registros",
      "Explorador de archivos"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Restaurador de sistema\".",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 521,
    "category": "Registro de Windows",
    "question": "¿Qué tipo de datos almacena un archivo .reg en el contexto del registro de Windows?",
    "options": [
      "Configuraciones del sistema",
      "Copias de seguridad del registro",
      "Claves del registro y sus valores",
      "Documentos de texto"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Claves del registro y sus valores\".",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 522,
    "category": "Registro de Windows",
    "question": "¿Qué extensión tienen los archivos que contienen claves y valores exportados del registro?",
    "options": [
      ".regedit",
      ".export",
      ".reg",
      ".key"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \".reg\".",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 523,
    "category": "Registro de Windows",
    "question": "¿Qué herramienta se utiliza para exportar claves y valores del registro a un archivo .reg?",
    "options": [
      "Regedit",
      "Editor de registros",
      "Símbolo del sistema",
      "Explorador de archivos"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Regedit\".",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 524,
    "category": "Registro de Windows",
    "question": "¿Cuál es la función principal de la herramienta Regedit en Windows?",
    "options": [
      "Desfragmentar el registro",
      "Editar y visualizar el contenido del registro",
      "Realizar copias de seguridad del sistema",
      "Restaurar el sistema a un estado anterior"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Editar y visualizar el contenido del registro\".",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 525,
    "category": "Registro de Windows",
    "question": "¿Qué tipo de datos almacena un archivo .dat en el contexto del registro de Windows?",
    "options": [
      "Configuraciones del sistema",
      "Copias de seguridad del registro",
      "Datos temporales de aplicaciones",
      "Claves del registro y sus valores"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Copias de seguridad del registro\".",
    "source": "https://es.wikipedia.org/wiki/Registro_de_Windows"
  },
  {
    "id": 526,
    "category": "Registro de Windows",
    "question": "¿Qué extensión tienen los archivos que contienen una copia del registro de Windows?",
    "options": [
      ".backup",
      ".reg",
      ".dat",
      ".regbackup"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \".dat\".",
    "source": "https://es.wikipedia.org/wiki/Registro_de_Windows"
  },
  {
    "id": 527,
    "category": "Registro de Windows",
    "question": "¿Qué herramienta de Windows se utiliza para restaurar el sistema a un estado anterior mediante el registro?",
    "options": [
      "Regedit",
      "Restaurador de sistema",
      "Editor de registros",
      "Explorador de archivos"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Restaurador de sistema\".",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 528,
    "category": "Registro de Windows",
    "question": "¿Qué tipo de datos almacena un archivo .reg en el contexto del registro de Windows?",
    "options": [
      "Configuraciones del sistema",
      "Copias de seguridad del registro",
      "Claves del registro y sus valores",
      "Documentos de texto"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Claves del registro y sus valores\".",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 529,
    "category": "Registro de Windows",
    "question": "¿Qué extensión tienen los archivos que contienen claves y valores exportados del registro?",
    "options": [
      ".regedit",
      ".export",
      ".reg",
      ".key"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \".reg\".",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 530,
    "category": "Registro de Windows",
    "question": "¿Qué herramienta se utiliza para exportar claves y valores del registro a un archivo .reg?",
    "options": [
      "Regedit",
      "Editor de registros",
      "Símbolo del sistema",
      "Explorador de archivos"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Regedit\".",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 531,
    "category": "Registro de Windows",
    "question": "¿Cuál es la función principal de la herramienta Regedit en Windows?",
    "options": [
      "Desfragmentar el registro",
      "Editar y visualizar el contenido del registro",
      "Realizar copias de seguridad del sistema",
      "Restaurar el sistema a un estado anterior"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Editar y visualizar el contenido del registro\".",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 532,
    "category": "Registro de Windows",
    "question": "¿Cuál de las siguientes claves del registro contiene la configuración de los tipos de archivo y sus asociaciones?",
    "options": [
      "HKEY_LOCAL_MACHINE\\Software",
      "HKEY_CURRENT_USER\\Software",
      "HKEY_CLASSES_ROOT",
      "HKEY_USERS"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"HKEY_CLASSES_ROOT\". Define cómo se asocian las extensiones de archivo con los programas que las abren.",
    "source": "https://es.wikipedia.org/wiki/Registro_de_Windows"
  },
  {
    "id": 533,
    "question": "¿Qué sucede si se modifica incorrectamente el registro de Windows?",
    "options": [
      "El sistema se vuelve más rápido",
      "Puede provocar inestabilidad o impedir el arranque del sistema",
      "Se crean automáticamente copias de seguridad de las copias de seguridad",
      "No tiene ningún efecto"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Puede provocar inestabilidad o impedir el arranque del sistema\". Por eso se recomienda hacer una copia de seguridad antes de realizar cambios.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 534,
    "category": "Registro de Windows",
    "question": "¿Qué utilidad tiene el archivo `NTUSER.DAT` en Windows?",
    "options": [
      "Almacena la configuración del sistema global",
      "Almacena la configuración del hardware",
      "Almacena la configuración del perfil de usuario",
      "Almacena las asociaciones de tipos de archivo y sus asociaciones"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Almacena la configuración del perfil de usuario\". Se encuentra en la carpeta de cada usuario y se carga en `HKEY_CURRENT_USER` al iniciar sesión.",
    "source": "https://es.wikipedia.org/wiki/Registro_de_Windows"
  },
  {
    "id": 535,
    "category": "Registro de Windows",
    "question": "¿Qué comando se puede usar en el símbolo del sistema para abrir el Editor del Registro?",
    "options": [
      "regedit",
      "registry",
      "reg",
      "editreg"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"regedit\". Ejecutar `regedit` en el símbolo del sistema o en Ejecutar abre el Editor del Registro.",
    "source": "https://support.microsoft.com/es-es/windows"
  },
  {
    "id": 536,
    "category": "Registro de Windows",
    "question": "¿Qué es una 'clave' en el registro de Windows?",
    "options": [
      "Un valor numérico",
      "Un contenedor que puede contener subclaves y valores",
      "Un identificador único para cada entrada en el registro",
      "Una contraseña del sistema"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Un contenedor que puede contener subclaves y valores\". Es análogo a una carpeta en el sistema de archivos.",
    "source": "https://es.wikipedia.org/wiki/Registro_de_Windows"
  },
  {
    "id": 537,
    "category": "Registro de Windows",
    "question": "¿Qué es un 'valor' en el registro de Windows?",
    "options": [
      "Un par nombre-dato que almacena información específica sobre un archivo o directorio.",
      "Un subclave del registro del registro.",
      "Un tipo de archivo de sistema de sistema.",
      "Un tipo de archivo de sistema de archivo."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Un par nombre-dato que almacena información específica sobre un archivo o directorio.\". Es análogo a un archivo dentro de una carpeta.",
    "source": "https://es.wikipedia.org/wiki/Registro_de_Windows"
  }
]

// Funciones de utilidad
function getAllQuestions() {
  return questionsDatabase;
}

function getQuestionsByCategory(category) {
  return questionsDatabase.filter(q => q.category === category);
}

function getRandomQuestion() {
  const randomIndex = Math.floor(Math.random() * questionsDatabase.length);
  return questionsDatabase[randomIndex];
}

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function generateRandomTest(numQuestions) {
  if (numQuestions > questionsDatabase.length) {
    numQuestions = questionsDatabase.length;
  }
  return shuffleArray(questionsDatabase).slice(0, numQuestions);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    questionsDatabase,
    getAllQuestions,
    getQuestionsByCategory,
    getRandomQuestion,
    shuffleArray,
    generateRandomTest
  };
}

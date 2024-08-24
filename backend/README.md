# SkillUp - Backend 🏢 🌐 🔗

RESTFul API que consumirá la aplicación web SkillUp - FrontEnd

### Indice 📑

- [Descripción](#descripción)
- [Instalación](#instalación)
- [Licencia](#licencia)

### Descripción

SkillUp - Backend es el servidor para la aplicación web de E-Learning de cursos online como parte de la simulación organizada por No Country basado en una arquitectura cliente-servidor. Esta RESTful API privada maneja la administración de cursos, usuarios y seguimiento del progreso, proporcionando la lógica y el almacenamiento necesarios para la plataforma de formación en línea.


### Instalación

SkillUp - Backend está construido en Django, framework de Python. La versión requerida de Python es **3.11**. El ambiente local esta contenerizado en Docker brindando la flexibilidad de portabilidad sin necesidad de instalar dependencias directamente en su local. 
Para ejecutar correctamente este proyecto, es necesario seguir estos pasos:

#### 1. Verificar versión de Python:

    En su terminal o CMD correr el siguiente comando:
    python --version (windows)
    python3 --version (MacOS/Linux)
Nota: Si la version instalada es inferior a la requerida por este proyecto, proceda a actualizarla o en su defecto a instalarla desde la documentación oficial de Python:
[Instalación de python](https://www.python.org/downloads/)

#### 2. Clonar el repositorio:

    $ git clone <URL del repositorio>

#### 2.1 Configuración del entorno

Deben cambiar el nombre del archivo **_.env-example_** a **_.env_**. luego de cambiar el nombre abren el archivo y ejecutan el codigo debajo para generar una clave segura:

```
1 from django.core.management.utils import get_random_secret_key 

3 DJANGO_SECRET_KEY=get_random_secret_key()
```


Una vez clonado el proyecto ejecutarlo en su editor o IDE de preferencia.

#### 3. Configurar Editor o IDE con el interprete de Python y Creación de un entorno virtual para poder correr comandos desde la terminal.

#### 4. Instalación de Docker y Docker Desktop

Si su editor o IDE no posee las extensiones para manejar docker, proceda a instalarlas en el apartado de extensiones.

_(Se recomienda instalar Docker Desktop por la separación de los entornos y acceso a una serie de herramientas, pero no es estrictamente necesario)_

Para instalar Docker Desktop puede acceder a este enlance:
    [Docker Desktop](https://www.docker.com/products/docker-desktop/)

#### 5. Para poner en marcha el servidor web asi como la base de datos, ejecutar el siguiente comando en la terminal:
    
    $ docker-compose up --build

Esto automaticamente creará los contenedores necesarios para la ejecución de este proyecto, asi como tambien ejecutará los comandos necesarios para hacer migraciones, ejecutarlas e instalar las dependencias necesarias.

### Licencia
#### _c20-14-m-python-react - Equipo de Back End ©2024 Todos los derechos reservados._



    











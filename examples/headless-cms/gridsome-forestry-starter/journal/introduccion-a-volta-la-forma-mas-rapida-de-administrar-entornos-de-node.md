---
date: 2021-11-03
author: Nichlas W. Andersen
title: Introducción a Volta, la forma más rápida de administrar entornos de Node
excerpt: 'Volta, es una herramienta que abre las posibilidades para una experiencia
  de desarrollo más fluida con Node.js. Esto es especialmente relevante para trabajar
  en equipo. '

---
Volta, es una herramienta que abre las posibilidades para una experiencia de desarrollo más fluida con Node.js. Esto es especialmente relevante para trabajar en equipo. Volta te permite automatizar tu entorno de desarrollo Node.js. Permite a tu equipo usar las mismas versiones consistentes de Node y otras dependencias. Aún mejor, permite mantener las versiones consistentes en los entornos de producción y desarrollo, eliminando los errores sutiles que vienen con los desajustes de versiones.

### Volta elimina los problemas de "Funciona en mi máquina ..."

Los desajustes de versiones causan dolores de cabeza cuando se desarrolla en equipo.

Supongamos este escenario:

El equipo X creó su aplicación en máquinas locales que ejecutaban Node 10, pero la canalización de compilación adoptó de forma predeterminada la versión de Node más baja que tenía a mano, Node 6, y la aplicación no se iniciaba en producción. Tuvieron que revertir el despliegue, averiguar qué salió mal, se convirtió en una noche muy larga.

Si hubieran usado Volta esto pudo haberse evitado.

## Como trabaja Volta?

> Volta es "una forma sencilla de administrar sus herramientas de línea de comandos de JavaScript". Hace que la administración de Node, npm, yarn u otros ejecutables de JavaScript enviados como parte de los paquetes, sea realmente fácil.

Volta tiene mucho en común con herramientas como NVM, pero NVM no es la más fácil de configurar inicialmente y, lo que es más importante, el desarrollador que lo usa todavía tiene que recordar cambiar a la versión correcta de Node para el proyecto en el que están trabajando.

Volta, por otro lado, es fácil de instalar y elimina la parte pensante de la ecuación: una vez que Volta esté configurado en un proyecto e instalado en una máquina local, cambiará automáticamente a las versiones adecuadas de Node.

No solo eso, sino que también le permitirá definir versiones de yarn y npm en un proyecto, y si la versión de Node definida en un proyecto no se descarga localmente, Volta saldrá y descargará la versión apropiada.

Pero cuando cambia a otro proyecto, Volta cederá a los ajustes preestablecidos en ese proyecto o volverá a las variables de entorno predeterminadas.

## Volta en acción

Demos a Volta a dar una vuelta. Primero, cree una nueva aplicación `React` con `Create React App`.

Ejecute el siguiente comando desde una terminal.

    npx create-react-app volta-sample-app

Una vez que haya creado su nueva aplicación React, abra el código en un IDE e inícielo a través de la línea de comando.

    npm run start

Si todo va según el plan, verá un logotipo de React giratorio cuando abra un navegador en [http://localhost:3000/](http://localhost:3000/)

Ahora que tenemos una aplicación, agreguemos Volta.

### Descarga Volta localmente

Para instalar Volta, ejecute el siguiente comando:

    curl https://get.volta.sh | bash

Si tiene Windows, descargue y ejecute el instalador de Windows y siga las instrucciones.

### Defina sus variables de entorno

Antes de agregar nuestras versiones de Node y npm específicas de Volta a nuestro proyecto, veamos cuáles son las variables de entorno predeterminadas.

### Obtenga una lectura de referencia

En una terminal en la raíz de su proyecto, ejecute el siguiente comando.

    node -v && npm -v

Para mí, mis versiones predeterminadas de Node y npm son v14.18.1 y v6.14.15, respectivamente.

Con nuestra línea de base establecida, podemos cambiar nuestras versiones solo para este proyecto con la ayuda de Volta.

### Fijar una version de node.js

Empezaremos con Node. Dado que v16 es la versión actual de Node, agreguemos eso a nuestro proyecto.

En nuestro proyecto en el nivel raíz donde vive nuestro archivo package.json, ejecute el siguiente comando.

    volta pin node@16

El uso de `volta pin [JS_TOOL]@[VERSION]` pondrá esta herramienta JavaScript en particular en nuestra versión especificada en el package.json de nuestra aplicación. Después de enviar esto a nuestro repositorio con git, cualquier desarrollador futuro que use Volta para administrar dependencias podrá leer esto del repositorio y usar exactamente la misma versión.

Con Volta podemos ser tan específicos o genéricos como deseamos definir las versiones, y Volta llenará cualquier vacío. Especifiqué la versión principal de Node que quería (16) y luego Volta completó las versiones menores y de parche por mí.

Después de anclar, verá el siguiente mensaje de éxito en su terminal: `pinned node@16.11.1 in package.json.`

> Consejo: haga que su versión de node anclada coincida con la versión de Node de su servidor de compilación

### Fijar una version de npm

Ahora abordemos nuestra versión npm. Aún en la raíz de nuestro proyecto en la terminal, ejecute este comando:

    volta pin npm

Sin una versión especificada, Volta elige por defecto la última versión de LTS para agregar a nuestro proyecto.

La versión actual de LTS para npm es 8, por lo que ahora nuestro proyecto tiene npm v8.1.0 como su versión predeterminada.

### Verificar el `package.json`

Para confirmar que las nuevas versiones del entorno de JavaScript son parte de nuestro proyecto, verifique el archivo `package.json` de la aplicación.

Desplácese hacia abajo y debería ver una nueva propiedad llamada `"volta"`. Dentro de la propiedad `"volta"` debe haber un `"node": "16.11.1"` y una versión `"npm": "8.1.0"`

A partir de ahora, cualquier desarrollador que tenga Volta instalado en su máquina y baje este repositorio tendrá la configuración de estas herramientas para cambiar automáticamente para usar estas versiones particulares de node y npm.

Para estar doblemente seguro, también puede volver a ejecutar el primer comando que hicimos antes de anclar nuestras versiones con Volta para ver cómo está configurado nuestro entorno de desarrollo actual.

    node -v && npm -v

Después de esto, su terminal debería decirle que está usando esas mismas versiones: Node.js v16 y npm v8.

## Mira cómo sucede la magia

Ahora, puedes sentarte y dejar que Volta se encargue de las cosas por ti.

Si deseas ver qué sucede cuando no hay nada especificado para Volta, intente subir un nivel desde la raíz de su proyecto y verifique sus versiones de Node y npm nuevamente.

Abramos dos terminales una al lado de la otra: la primera dentro de nuestro proyecto con versiones de Volta, la otra un nivel más alto en nuestra estructura de carpetas.

Ahora ejecute el siguiente comando en ambos:

    node -v && npm -v

Y en nuestro proyecto, Node v16 y npm v8 se están ejecutando, pero fuera del proyecto, Node v14 y npm v6 están presentes. No hicimos nada más que cambiar de directorio y Volta se encargó del resto.

Al usar Volta, eliminamos las conjeturas de nuestras variables de entorno de JavaScript y, de hecho, dificultamos que un miembro del equipo de desarrollo use las versiones incorrectas que las correctas.
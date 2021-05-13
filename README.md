# typescript-guide
Guia de typescript

## Comandos de typescript

- Instalar typescript de forma global

    $ sudo npm install -g typescript

- Compilar un archivo de typescript

    $ tsc \[nombre-archivo.ts\]

- Ejecutar typescript en modo observador

    $ tsc \[nombre-archivo.ts\] --watch | tsc \[nombre-archivo.ts\] -w

- Inicializar un proyecto con typescript, crear el archivo tsconfig.json

    $ tsc --init | tsc -i

- Compilar todos los archivos con extencion ts

    $ tsc *.ts -w

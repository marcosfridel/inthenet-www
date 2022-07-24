export default [
    { 
        id: 1, 
        title: "Docker",
        text: "", 
        slug: ['docker'],
        content: [
            {
                title: "Login",
                text: "<i>docker login</i><br><br>",
                slug: ['docker'],
                content: []
            },
            {
                title: "Ejecución",
                text: "<i>docker run [nombreimagen]:{tag}</i><br><br>Si no esta descargada la imagen, se descarga y ejecuta.",
                slug: ['docker'],
                content: [
                    { 
                        id: 1, 
                        title: "Ejecución en background", 
                        text: "<i>docker run -d [nombreimagen]:{tag}</i><br><br>Si no esta descargada la imagen, se descarga y ejecuta.",
                        slug: ['docker'],
                    },
                    { 
                        id: 2, 
                        title: "Ejecución exponiendo puerto", 
                        text: "<i>docker run -p [puerto ini]:[puerto fin] [nombreimagen]:{tag}</i><br><br>Si no esta descargada la imagen, se descarga y ejecuta.",
                        slug: ['docker'],
                    },
                    { 
                        id: 3, 
                        title: "Ejecución en background exponiendo puerto", 
                        text: "<i>docker run -dp [puerto ini]:[puerto fin] [nombreimagen]:{tag}</i><br><br>Si no esta descargada la imagen, se descarga y ejecuta.",
                        slug: ['docker'],
                    },
                    { 
                        id: 4, 
                        title: "Frenar", 
                        text: "<i>docker stop [contenedor_id]</i>",
                        slug: ['docker'],
                    },,
                    { 
                        id: 5, 
                        title: "Listar contenedores ejecutandose", 
                        text: "<i>docker ps</i>",
                        slug: ['docker'],
                    },
                    { 
                        id: 6, 
                        title: "Listar corriendo con poco tiempo de ejecución", 
                        text: "<i>docker ps -a</i>",
                        slug: ['docker'],
                    },
                    { 
                        id: 6, 
                        title: "Listar corriendo con poco tiempo de ejecución", 
                        text: "<i>docker ps -a</i>",
                        slug: ['docker'],
                    },
                ]
            },
            {
                title: "Imagen",
                slug: ['docker'],
                content: [
                    { 
                        id: 7, 
                        title: "Descargar",
                        text: "<i>docker pull [nombre_imagen]:{tag}</i>",
                        slug: ['docker']
                    },
                    { 
                        id: 8, 
                        title: "Compartir/subir imagen",
                        text: "<i>docker push [nombre_imagen]:{tag}</i>",
                        slug: ['docker']
                    },
                    { 
                        id: 9, 
                        title: "Listar imagenes instaladas", 
                        text: "<i>docker images</i>",
                        slug: ['docker'],
                    },
                ]
            },
            {
                title: "Construcción",
                text: "<i>docker build -t [nombre_tag]:{version_tag} .</i><br><br>Ejecuta los comandos de Dockerfile",
                slug: ['docker'],
                content: []
            },
            {
                title: "Logs",
                text: '<i>docker logs [container_id]</i>',
                slug: ['docker'],
                content: [
                    { 
                        id: 10, 
                        title: "Listar logs y esperar",
                        text: "<i>docker logs -f [container_id]</i>",
                        slug: ['docker']
                    },
                ]
            },
            {
                title: "Network",
                slug: ['docker'],
                content: [
                    { 
                        id: 11, 
                        title: "Crear red para varios contenedores interactúen entre si",
                        text: "<i>docker network create [nombre_red]</i>",
                        slug: ['docker']
                    },
                    { 
                        id: 12, 
                        title: "Ejecutar contenedor con alias dentro de la red de contenedores",
                        text: "<i>docker run -d --network [nombre red] --network-alias [nombre alias] {se puede usar comando -v}</i>",
                        slug: ['docker']
                    },
                ]
            },
            {
                title: "Comandos",
                slug: ['docker'],
                content: [
                    { 
                        id: 11, 
                        title: "Ejecutar comando dentro de contenedor",
                        text: "<i>docker exec -it [container_id] [comando]</i>",
                        slug: ['docker']
                    },
                    { 
                        id: 12, 
                        title: "Modificación de proyecto / persistir datos sin reconstruir Docker",
                        text: "<i>docker exec -v [ubicacion_origen]:[ubicacion_docker] [nombre_imagen]</i>",
                        slug: ['docker']
                    },
                ]
            },
        ]
    }
]
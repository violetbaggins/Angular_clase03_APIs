angular.module('miApp', [])
    .controller('miCtrl', function ($scope, $http, $log, $window, $timeout) {
        $scope.mensaje = "HTTP AJS"

        $scope.comentarios = [
            /*   {
                "postId": 1,
                "id": 1,
                "name": "id labore ex et quam laborum",
                "email": "Eliseo@gardner.biz",
                "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
            },
            {
                "postId": 1,
                "id": 2,
                "name": "quo vero reiciendis velit similique earum",
                "email": "Jayne_Kuhic@sydney.com",
                "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
            } */
        ]

        var exito = function (respuesta) {
            $scope.comentarios = respuesta.data
        }

        var fracaso = function (respuesta) {
            $scope.error = 'Error de HTTP GET'
            $log.info('Error get info: ', respuesta.data)
            $log.warn('Error get warn: ', respuesta.status)
            $log.error('Error get error: ', respuesta.config)
            $timeout(function () {
                $window.location.href = "error.html"
            }, 2000)
        }


        $scope.error = ''

        $http.get('mensajes.php')
            .then(exito, fracaso)


        /* OTRA FORMA DE USAR EL HTTP */
        /*  $http({
             method: 'get',
             url: 'https://jsonplaceholder.typicode.com/comments'})
                 .then(function(respuesta){
                     $scope.comentarios = respuesta.data
         }) */

        $scope.email = ''
        $scope.body = ''
        $scope.agregar = function () {
            /*  $log.info('click agregar',$scope.email, $scope.body ) */

            var datos = 'email=' + $scope.email + '&body=' + $scope.body


            $http({
                method: 'post',
                url: 'https://jsonplaceholder.typicode.com/comments',
                headers: { 'content-type': 'application/x-www-form-urlencoded' },
                data: datos
            })
                .then(function (respuesta) {
                    $log.info(respuesta.data)
                    $scope.comentarios.unshift(respuesta.data)
                },function (respuesta) {
                    $scope.error = 'Error de HTTP PHP'
                    $log.info('Error PHP info: ', respuesta.data)
                    $log.warn('Error PHP warn: ', respuesta.status)
                    $log.error('Error PHP error: ', respuesta.config)
                    $timeout(function () {
                        $window.location.href = "error.html"
                    }, 2000)
                })

        }


        $scope.usuario = ''
        $scope.clave = ''
        $scope.login = function () {

            $log.info('click login', $scope.usuario, $scope.clave)

             var datos = 'usuario='+$scope.usuario+'&clave='+$scope.clave
     
            $http({
                method: 'post',
                url: 'codigo.php',
                headers: {'content-type' : 'application/x-www-form-urlencoded'},
                data: datos
            })
                .then(function(respuesta){
                    $log.info('respuesta PHP',respuesta.data)
                    
                    if (respuesta.data.status == 'logueado') {
                        $window.location.href="loginok.html"
                    }else{
                        $window.alert('error en login')
                    }
                })  
        }

    })
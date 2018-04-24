var app = angular.module('ManoAppsas', ["ngRoute"]);

app.controller('menuController', function ($http) {
    let vm = this;

    $http.get("/meniu.json")
        .then(function(response) {
            vm.meniu = response.data;
        });
});

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/",{
            templateUrl:"/inc/apie.html"
        })
        .when("/zaidimas",{
            templateUrl:"/inc/zaidimas.html"
        })
        .when("/kontaktai",{
            templateUrl:"/inc/kontaktai.html"
        });
$locationProvider.html5Mode(true);
});














// var app = angular.module('ManoAppsas', []);
//
// app.controller('menuController', function ($scope) {
//     let vm = this;
//
//     vm.meniu = [
//         {adresas: '/apie.html', pavadinimas: 'Pradžia'},
//         {adresas: '/zaidimas.html', pavadinimas: 'Žaidimas'},
//         {adresas: '/202/apie.html', pavadinimas: 'Kontaktai'},
//         {
//             adresas:'/202/apie.html',
//             pavadinimas: 'Kontaktai',
//             submeniu:[
//                 {
//                     adresas: '/apie.html',
//                     pavadinimas: 'Pradžia',
//                     fja:function () {
//                         alert('0');
//                     }
//                 }
//             ]
//         }
//     ];
//
// });
//
// app.controller('sarasas', function ($scope) {
//     let vm = this;
//     vm.sar = [
//         {adresas: 'http://www.google.lt', pavadinimas: "Google"},
//         {adresas: 'https://en.wikipedia.org/', pavadinimas: "Wiki"},
//         {adresas: 'https://www.delfi.lt', pavadinimas: "Delfi"},
//         {
//             adresas: 'http://www.google.lt',
//             pavadinimas: 'Goog',
//             subsar: [
//                 {
//                     adresas: '/apie.html',
//                     pavadinimas: 'PVD',
//                 },
//                 ]
//         }
//     ];
// });
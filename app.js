var tinaapp=angular.module('tinaApp',['ngRoute']);

tinaapp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){

  $locationProvider.html5Mode(true);


  $routeProvider
  .when('/simpleInit',{templateUrl:'views/simpleInit.html',controller:'tinaController'})
  .when('/contact-success',{templateUrl:'views/contact-success.html',controller:'ContactController'})
  .when('/contact',{templateUrl:'views/contact.html',controller:'ContactController'})
  .when('/dynamicView',{templateUrl:'views/dynamicView.html',controller:'tinaController'})
  .otherwise({ redirectTo:'/simpleInit'})
}]);


/*
tinaapp.config(function(){});

tinaapp.run(function(){console.log('fires whenever the app runs');}); */

//defining custom directives



tinaapp.controller('tinaController',function($scope,$http){

    $scope.message="I am Tina";


    $scope.removeObject=function(myobject) {
       var removedObjects=$scope.myObjects.indexOf(myobject);
       $scope.myObjects.splice(removedObjects,1);

    };

    $scope.addOb=function(myobject) {
            $scope.myObjects.push({
              name:$scope.newOb.name,
              roll:parseInt($scope.newOb.roll),
              worth:parseInt($scope.newOb.worth),
              status:true,
              edu:$scope.newOb.edu,
              color:$scope.newOb.color
            });

            $scope.newOb.name="";
            $scope.newOb.roll="";
            $scope.newOb.worth="";
            $scope.newOb.edu="";
            $scope.newOb.color="";
     

   };



/*
    $scope.myObjects=[
      {name:'Tina',roll:14235427,worth:34500,status:false,edu:'B.Sc Eng.',color:'lightblue'},
      {name:'Tanjilla',roll:27,worth:5000,status:true,edu:'S.S.C',color:'darkblue'},
      {name:'Sarkar',roll:133,worth:55000,status:true,edu:'H.S.C',color:'grey'}
    ];




  //console.log('Printing Data '+data);


});
  */


$http.get('data/myObjects.json').then(function(response){
 //console.log(data);
 $scope.myObjects=response.data;
 ///console.log($scope.myObjects);
});

  

    //console.log(angular.toJson($scope.myObjects));
});



tinaapp.controller('ContactController',['$scope','$location',function($scope,$location){

$scope.sendMessage=function(){
  $location.path('/contact-success');
};

}]);
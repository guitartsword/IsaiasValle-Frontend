angular.module('AngularScaffold.Controllers')
  .controller('RegisterController', ['$location','$scope', 'HomeService', '$sessionStorage', function ($location,$scope, HomeService, $sessionStorage) {
      $scope.user = {};

      $scope.getStudents = function(){
        HomeService.GetStudents().then(function(response){
          $scope.students = response.data;
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message)
        });
      }

      $scope.postStudents = function(){
        HomeService.PostStudents($scope.student).then(function(response){
          alert("Posted to /students");
          $scope.getStudents();
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        });
      }

      $scope.isAdmin = function(){
        return $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('admin') > -1;
      }

      $scope.isRegular = function(){
        return $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('regular') > -1;
      }
      $scope.show = function(view,object){
        $location.path(view);
        alert(object.name + " con cuenta # " +object.account);
      }
  }]);

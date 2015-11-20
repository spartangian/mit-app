'use strict';

/**
 * @ngdoc function
 * @name mitAppApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the mitAppApp
 */
var my = angular.module('mitAppApp');
  my.controller('LoginCtrl', ['$scope', '$http', function ($scope, $http) {

    	$scope.submit = function(user)
    	{
    		console.log('testa asdsa das');
    		console.log(user);
    		if(user == '' || user == undefined)
    			return;
    		// var url			= 'controllers/MockController.php';

    		$http.post('controllers/MockController.php', user).success(function(result){
    			//result	= angular.fromJson(result);
    			 console.log(result);
    			  $('.alert-success').hide();
    			 $('.alert-danger').hide();
    			 if(result.success)
    			 {
    			 	 $('.alert-success').fadeIn();
    			 	 $('.alert-success > p').text(result.message);
    			 	 setTimeout(function(){
    			 		$('.alert-success').fadeOut();
    			 	},10000);
    			 }
    			 else
    			 {
    			 	if(result.message == '' || result.message == undefined)
    			 		return;

    			 	$('.alert-danger').fadeIn();
    			 	$('.alert-danger > p').text(result.message);
    			 	setTimeout(function(){
    			 		$('.alert-danger').fadeOut();
    			 	},10000);
    			 }
    			 console.log(result.message);
    		});
    	}
  }]);


lmapp.controller("personSet",["$scope",function($scope){
        $scope.return=function(){
            window.history.back()
        };
        $scope.num=false;
        $scope.sexSet=function(){
            $scope.num=true;
            console.log($scope.num);
         }
        $scope.down=function(){
            $scope.num=false;
            console.log($scope.num);
        }



}]);

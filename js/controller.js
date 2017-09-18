/**

 * Created by shady on १६-०९-२०१७.
 */
//controller for two way data binding page
app.controller("twowaydata",twowaydata);
function twowaydata($scope) {
    $scope.msg="Hello World";
}

//custom directive for directive page
app.directive("hello",function(){
    return{
        restrict:"EAC",
        template:"hello world"
    }
})

//custom services for services page
app.service("hello",function () {
    this.squa=function () {
        return "HELLO WORLD";
    }
});
//controller for services page and using DI of predefined service http
app.controller("service",function ($scope,hello,$http) {
    $http.get("hello.txt").then(function (response) {
        $scope.http=response.data;
    });
    $scope.squ=function () {
        $scope.sq=hello.squa();
    }

});
app.controller("ctrl_one",function ($scope,$rootScope) {
    $scope.print_hello=function () {
        $scope.var_one = "hello";
        $rootScope.print_world();
    }
})
app.controller("ctrl_two",function ($rootScope) {
    $rootScope.print_world=function () {
        $rootScope.var_two="hello world";
    }
})

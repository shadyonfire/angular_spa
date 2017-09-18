/**
 * Created by shady on १५-०९-२०१७.
 */
app.config(config);
config.$inject["$routeProvider"];
function config($routeProvider) {
    $routeProvider.when("/services", {
            templateUrl : "services.html",
            controller: "service"
        })
        .when("/scoping", {
            templateUrl : "scoping.html"
        })
        .when("/directives", {
            templateUrl : "directives.html",
            controller: "directive"
        }).when("/twowaydata",{
        templateUrl:"twowaydata.html",
        controller:"twowaydata"
    }).when("/aboutme",{
        templateUrl:"aboutme.html"
    }).otherwise(
        {
            templateUrl:"main.html"
        }
    );
}

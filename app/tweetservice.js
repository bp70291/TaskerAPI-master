app.factory('tweetservice', ['$http', function($http) {
        return $http.get('');
     
 }]);
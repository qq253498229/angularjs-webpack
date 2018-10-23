'use strict';

angular.module('app').provider('RouteHelpers', function RouteHelpersProvider() {

    /* jshint validthis:true */
    return {
        // provider access level
        resolveFor: resolveFor,
        // controller access level
        $get: function () {
            return {
                resolveFor: resolveFor
            };
        }
    };

    function resolveFor() {
        var _args = arguments;
        return {
            deps: [
                '$ocLazyLoad',
                '$q',
                function ($ocLL, $q) {
                    var promise = $q.when(1); // empty promise
                    for (var i = 0, len = _args.length; i < len; i++) {
                        promise = andThen(_args[i]);
                    }
                    return promise;

                    function andThen(_arg) {
                        if (typeof _arg === 'function')
                            return promise.then(_arg);
                        else
                            return promise
                                .then(function () {
                                    var whatToLoad = _arg;
                                    if (!whatToLoad)
                                        return $
                                            .error('Route resolve: Bad resource name [' + _arg + ']');
                                    return $ocLL.load(whatToLoad);
                                });
                    }
                }]
        };
    } // resolveFor

});



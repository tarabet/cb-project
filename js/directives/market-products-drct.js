ngApp.directive('marketProducts', function ($compile, ajaxSvc) {

    var url = "https://apex.oracle.com/pls/apex/aleksey_ws_2015/interface/homepage/GetMarketingBlocks";
    var templateUrl = "js/partials/dir-tmpl/key-advantage-tmpl.html";
    var template;


    function link(scope, element, attrs) {

        ajaxSvc.getData(templateUrl)

            .then(function(response) {
            template = response.data;
            })

            .then(function() {
            ajaxSvc.getData(url)
                .then(function(response) {
                    scope.marketData = response.data;
                    console.log(scope.marketData);
                },
                function(response) {
                    console.log('Some error happened: ', response);
                })

            .then(function() {
                element.html(template).show();

                setTimeout(function(){
                    $(".key-advantage .container .text").each(function( i ) {
                        var _parentH = $(this).parent().innerHeight();
                        var _thisH = $(this).innerHeight();

                        var _padding = (_parentH - _thisH)/2;
                        $(this).css("padding-top", _padding);
                    });
                },500);

                setTimeout(function(){
                    $('.key-advantage .text').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
                        if (isInView) {
                            $(this).addClass('animated');
                        }
                    });
                    $('.key-advantage .img').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
                        if (isInView) {
                            $(this).addClass('animated');
                        }
                    });
                },1);

                $compile(element.contents())(scope);
            });
        });
    }

    return {
        restrict: 'E',
        link: link,
        //scope: {},
        //templateUrl: 'js/partials/key-advantage-tmpl.html',
        replace: true
    };
});



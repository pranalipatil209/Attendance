angular.module('attendanceApp').directive('autoManager', function(){
    var options={
        'up_class': 'moveUp'
    };
    var dict=["apple","boy","cat","pranali","sharz","apolo","ashes","apop"];

    return {
        restrict: 'A',
        scope: {
            autocomplete: '=autocomplete'
        },
        link: function ($scope, element) {
            var input = '';
            //moves input field up
            element.bind('focus', function (event) {
                $scope.isDisabled = true;
                $(element).parent().parent().addClass(options.up_class);
            });
            //takes the entered value on each keyup
            element.bind('keyup', function (event) {
               var input=$(element).val().toString();
                if(input.length >= 2)
                {
                    search_input(input);
                }
            });
        }
    };
    //search from array and returns match values
        function search_input(str)
        {
            console.log(str);
            var show = new Set();
            //angular.forEach(dict,function(value){
            //   if()
            //});
            for(var i=0;i<dict.length;i++){
                for(var j=0;j<str.length;j++) {
                    if (dict[i].charAt(j) == str.charAt(j))
                        show.add(dict[i]);
                    //else
                    //    show.clear();
                }
                //show.clear();
            }
            console.log(show);
        }
    });


//console.log("inside directive");
//var input = angular.element($element).find('input');
//// setup autocomplete
//if ($scope.autocomplete) {
//    $scope.autocompleteFocus = function (event, ui) {
//        input.val(ui.item.value);
//        return false;
//    };
//    $scope.autocompleteSelect = function (event, ui) {
//        $scope.newValue = ui.item.value;
//        return false;
//    };
//    $($element).find('input').autocomplete({
//        minLength: 0,
//        source: function (request, response) {
//            var item;
//            return response((function () {
//                var i, len, ref, results;
//                ref = $scope.autocomplete;
//                results = [];
//                for (i = 0, len = ref.length; i < len; i++) {
//                    item = ref[i];
//                    if (item.toLowerCase().indexOf(request.term.toLowerCase()) !== -1) {
//                        results.push(item);
//                    }
//                }
//                return results;
//            })());
//        },
//        //focus: (function (_this) {
//        //    return function (event, ui) {
//        //        return $scope.autocompleteFocus(event, ui);
//        //    };
//        //})(this),
//        //select: (function (_this) {
//        //    return function (event, ui) {
//        //        return $scope.autocompleteSelect(event, ui);
//        //    };
//        //})(this)
//    });
//}
//
//
////elem.autocomplete({
////    source: autoCompleteDataService.getSource(), //from your service
////    minLength: 1
////});
//}
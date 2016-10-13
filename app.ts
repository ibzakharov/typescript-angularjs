angular.module("app", ["kendo.directives"]).controller("MyCtrl", function ($scope) {

    $scope.source = new kendo.data.DataSource({
        data: [
            { amount: 1111, total: 7777 },
            { amount: 2222, total: 8888 },
           	{ amount: 3333, total: 9999 },
           	{ amount: 4444, total: 0}
        ]
    });

    $scope.columns = [
        {
            field: "amount",
            title: "Jan",
            template: "#= amount + '<br>' + total #",
            editor: $scope.numericEditor
        }
    ];

    $scope.numericEditor = function (container, options) {
        // create an input element
        var input = $("<input name='amount' />");
        // set its name to the field to which the column is bound ('name' in this case)
        input.appendTo(container);
        // initialize a Kendo UI AutoComplete
    }


});
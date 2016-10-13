namespace Controllers {
    'use strict';

    @Registration.controller('MainCtrl')
    export class MainController {
        public dataSource: kendo.data.DataSource;
        public columns: kendo.ui.GridColumn[];

        public static $inject: string[] = [
        ];

        constructor() {

            this.dataSource = new kendo.data.DataSource({
                data: [
                    { amountJan: 1111, totalJan: 2111, amountFeb: 3111, totalFeb: 4111},
                    { amountJan: 1222, totalJan: 2222, amountFeb: 3222, totalFeb: 4222},
                    { amountJan: 1333, totalJan: 2333, amountFeb: 3333, totalFeb: 4333},
                    { amountJan: 1444, totalJan: 2444, amountFeb: 3444, totalFeb: 4444}
                ]
            });

            this.columns = [
                {
                    field: "amountJan",
                    title: "Feb",
                    template: "#= amountJan + '<br>' + totalJan #",
                    editor: this.numericEditor
                    
                },
                {
                    field: "amountFeb",
                    title: "Feb",
                    template: "#= amountFeb + '<br>' + totalFeb #",
                    editor: this.numericEditor
                }
            ];

        }

        numericEditor = function(container, options) {
            // create an input element
            var input = $("<input kendo-numeric-text-box name='" + options.field +"' />");
            // set its name to the field to which the column is bound ('name' in this case)
            input.appendTo(container);
            // initialize a Kendo UI AutoComplete
        }
    }
}
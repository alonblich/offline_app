(function ($) {
    EmployeeDataSource = OfflineDataSource.extend({
        options: {
            schema: {
                model: {
                    FullName: function () {
                        return this.LastName + ', ' + this.FirstName;
                    },

                    ImageURI: function () {
                        return "img/" + (this.EmpNum <= 10 ? this.EmpNum : "unknown") + ".jpg";
                    }
                }
            },

            jsdo: {
                name: "Employee"
            }
        }
    });
})(jQuery);
/**
 * Created by firestrand on 1/28/14.
 * Initial Code from http://lostechies.com/derickbailey/2014/01/28/killing-switch-statements-with-a-registry-an-example-and-screencast/
 */

function Registry(defaultValue){
    this._defaultValue = defaultValue;
    this._values = Object.create(null);
}

Registry.prototype.register = function(name, value){
    this._values[name] = value;
};

Registry.prototype.getValue = function(name){
    var value;
    if (Object.prototype.hasOwnProperty.call(this._values, name)){
        value = this._values[name];
    } else {
        value = this._defaultValue;
    }
    return value;
};

/**USAGE
var viewRegistry = new Registry();
viewRegistry.register("view", showEmployee);
viewRegistry.register("edit", editEmployee);

function showEmployee(employee) {
    var view = new ShowEmployeeForm({
        model: employee
    });
    view.render();
    $("#wizard").html(view.$el);
}

function editEmployee(employee) {
    var form = new EditEmployeeForm({
        model: employee
    });
    form.render();
    $("#wizard").html(form.$el);
}

var actionName = "view";
var action = viewRegistry.getValue(actionName);

var employee = getSomeEmployee();
action(employee);
 */
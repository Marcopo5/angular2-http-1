"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_service_1 = require("../shared/services/auth.service");
var LoginComponent = (function () {
    function LoginComponent(service, router) {
        this.service = service;
        this.router = router;
        this.credentials = { username: '', password: '' };
        this.successMessage = '';
        this.errorMessage = '';
    }
    LoginComponent.prototype.ngOnInit = function () { };
    /**
     * Login a user
     */
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.service.login(this.credentials.username, this.credentials.password)
            .subscribe(function (data) {
            _this.router.navigate(['']);
            console.log('data', data);
        }, function (error) {
            console.log(error);
            _this.errorMessage = "Wrong email/username or password.";
            _this.clearMessages();
        });
    };
    /**
     * clear all messages after 5 seconds
     */
    LoginComponent.prototype.clearMessages = function () {
        var _this = this;
        setTimeout(function () {
            _this.successMessage = '';
            _this.errorMessage = '';
        }, 5000);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        templateUrl: './app/login/login.component.html'
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map
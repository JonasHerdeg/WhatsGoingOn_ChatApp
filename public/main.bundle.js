webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body {\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-size: cover; \t\r\n\tposition: fixed;\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-navbar></app-navbar>\n\n\n<ngx-flash-messages></ngx-flash-messages>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__ = __webpack_require__("../../../../ngx-flash-messages/lib-dist/flash-messages.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_socket_io_service__ = __webpack_require__("../../../../../src/app/services/socket-io.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_userprofile_userprofile_component__ = __webpack_require__("../../../../../src/app/components/userprofile/userprofile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_14__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_13__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_15__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_16__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'userprofile', component: __WEBPACK_IMPORTED_MODULE_17__components_userprofile_userprofile_component__["a" /* UserprofileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]] },
];












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_userprofile_userprofile_component__["a" /* UserprofileComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__["a" /* FlashMessagesModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["HttpModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_9__services_socket_io_service__["a" /* SocketIoService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.chatWindow{\r\n\tborder: 1px solid lightgrey;\r\n  border-radius: 5px;\r\n  padding: 5px;\r\n  background: white;\r\n  height: 300px;\r\n  overflow: auto; \r\n}\r\n\r\n.row{\r\n  background: lightgrey;\r\n  position: center;\r\n  margin: 20px;\r\n  padding: 15px;\r\n  border-radius: 10px;\r\n  border: 3px solid darkgrey;\r\n  box-shadow: 10px 10px 10px black;\r\n}\r\n\r\na:link{\r\n  color: rgb(54,80,103);\r\n}\r\n\r\na:hover{\r\n  color: steelblue;\r\n}\r\n\r\n.welcomeText{\r\n  color: rgb(54,80,103);\r\n}\r\n\r\n.submitBtn{\r\n  background-color: rgb(54,80,103);\r\n}\r\n\r\nlabel{\r\n  color: rgb(54,80,103);\r\n}\r\n\r\ntextarea{\r\n  resize: none;\r\n}\r\n\r\nul{\r\n  margin-top: 15px;\r\n  max-height: 400px;\r\n  overflow: auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n\t\t<div id=\"messageArea\" class=\"row\">\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"well\">\n\t\t\t\t\t<h5 id=\"welcome\" class=\"welcomeText\"></h5>\n\t\t\t\t\t<h3>Online Users</h3>\n\t\t\t\t\t<ul class=\"list-group\" id=\"users\"></ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-8\">\n\t\t\t\t<h4 ><a href=\"#\" id=\"msgTo\"></a></h4>\n\t\t\t\t<div id=\"chat\" class=\"chatWindow\"></div>\n\t\t\t\t<form id=\"MessageForm\">\n\t\t\t\t\t<div class=\"form-group\" id=\"formGroup\">\n\t\t\t\t\t\t<label>Enter Message!</label>\n\t\t\t\t\t\t<textarea id=\"message\" class=\"form-control\" autofocus></textarea>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<input type=\"submit\" class=\"btn btn-primary submitBtn\" value=\"Send Message\">\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\n\t\t\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_socket_io_service__ = __webpack_require__("../../../../../src/app/services/socket-io.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(authService, router, socketService) {
        this.authService = authService;
        this.router = router;
        this.socketService = socketService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        //Deklaration von Variablen: 
        //user = Nutzerdaten des eigenen Clienten
        var self = this;
        var user = this.socketService.socketUser();
        //Vereinfachung der HTML-Elemente
        var $messageForm = $('#MessageForm');
        var $messageBox = $('#message');
        var $chat = $('#chat');
        var $welcome = $('#welcome');
        var $users = $('#users');
        var $msgToUser = $('#msgTo');
        var $msgTo = this.socketService.setMsgTo('ALL');
        $msgToUser.text('Chat to: ' + 'ALL');
        $msgToUser.attr('href', 'javascript:;');
        //Ausgabe der Willkommensschrift
        $welcome.text("Welcome " + user.name + "!");
        console.log(user.name);
        //Connecten des Sockets und Laden alter Nachrichten
        this.socketService.login();
        this.socketService.load('ALL');
        //Absenden einer neuen Nachricht
        $messageForm.submit(function (e) {
            e.preventDefault();
            var val = $messageBox.val();
            var to = self.socketService.getMsgTo();
            self.socketService.sendMessage(val, $chat, to);
            $messageBox.val('');
        });
        //Ausgabe der OnlineUser Liste
        this.socketService.usernames($users, user);
        this.socketService.updateNicknames();
        console.log('oninit');
        //Bei Click auf einen Name der OnlineUser Liste
        $users.on('click', 'li', function (event) {
            event.preventDefault();
            var to = $(this).text();
            $msgToUser.text('Chat to: ' + to);
            if (to != 'ALL') {
                $msgToUser.attr('href', '/userprofile?username=' + to);
            }
            ;
            if (to == 'ALL') {
                $msgToUser.attr('href', 'javascript:;');
            }
            $chat.empty();
            self.socketService.load(to);
            self.socketService.setMsgTo(to);
        });
        //Beim Empfangen einer neuen Nachricht
        this.socketService.newMessage($chat, this.socketService);
        //Hier werden Nachrichten die in der Datenbank gespeichert sind ausgegeben
        this.socketService.output($chat, $msgTo, this.socketService);
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_socket_io_service__["a" /* SocketIoService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\r\n\tfont-family: 'Open Sans Condensed', sans-serif;\r\n}\r\n\r\n\r\n\r\n\r\n.form{\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\ttext-align: center;\r\n  font-size: 13pt;\r\n  float: left;\r\n  position:  relative;\r\n}\r\n\r\n.form .login-form{\r\n\twidth: 100%;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n\ttext-align: center;\r\n\tfont-size: 13pt;\r\n}\r\n\r\n.form .register-form{\r\n\twidth: 100%;\r\n\tmargin-top: 20px;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n\ttext-align: center;\r\n\tfont-size: 13pt;\r\n\tfloat: left;\r\n\tposition: relative;\r\n}\r\n\r\n.form #errorWarnings{\r\n\twidth: 1000px;\r\n\theight: 50px;\r\n\ttext-align: center;\r\n\tmargin: 20px auto 20px auto;\r\n\tpadding-top: 12px;\r\n\tbackground: transparent;\r\n\tborder-radius: 10px;\r\n\tborder: transparent;\r\n}\r\n\r\n.form h1{\r\n\tcolor: white;\r\n\twidth: 100%;\r\n\tmargin-top: 70px;\r\n\ttext-align: center;\r\n\tfont-size: 70pt;\r\n\tmargin-bottom: 20px;\r\n\tposition: relative;\r\n\ttext-decoration: underline;\r\n\ttext-shadow: 0 0 80px rgba(255,255,255,0.25);\r\n\t}\r\n\r\n.form p{\r\n\twidth: 1000px;\r\n\tcolor: white;\r\n\ttext-align: center;\r\n\tmargin: 40px auto 20px auto;\r\n\tpadding-top: 12px;\r\n\tpadding-bottom: 12px;\r\n\tbackground: transparent;\r\n\tborder-radius: 10px;\r\n\tborder: 2px solid white;\r\n}\r\n\r\n.form input{\r\n\twidth: 250px;\r\n\tmargin-bottom: 10px;\r\n\tpadding-top: 5px;\r\n\tpadding-bottom: 5px;\r\n\tpadding-left: 10px;\r\n\tborder-radius: 10px;\r\n\tbackground: #e5e4ee;\r\n}\r\n\r\n.form .message{\r\n\tmargin-left: 30px;\r\n}\r\n\r\n.form .message a{\r\n  color: #f2f2f2;\r\n}\r\n\r\n#login{\r\n\twidth: 250px;\r\n\theight: 40px;\r\n\tcolor: black;\r\n\tfont-size: 14pt;\r\n  margin-top: 20px;\r\n\tmargin-bottom: 50px;\r\n\tmargin-left: 27px;\r\n\tborder-radius: 10px;\r\n\tbackground: #e5e4ee;\r\n}\r\n\r\n#create{\r\n\twidth: 250px;\r\n\theight: 40px;\r\n\tcolor: black;\r\n\tfont-size: 14pt;\r\n\tmargin-top: 20px;\r\n\tmargin-bottom: 20px;\r\n\tmargin-left: 27px;\r\n\tborder-radius: 10px;\r\n\tbackground: #e5e4ee;\r\n}\r\n\r\n#loginButton{\r\n\twidth: 250px;\r\n\theight: 40px;\r\n\tcolor: black;\r\n\tfont-size: 14pt;\r\n\tmargin-top: 20px;\r\n\tmargin-left: 27px;\r\n\tborder-radius: 10px;\r\n\tbackground: #e5e4ee;\r\n}\r\n\r\n#registerButton{\r\n\twidth: 250px;\r\n\theight: 40px;\r\n\tcolor: black;\r\n\tfont-size: 14pt;\r\n\tmargin-top: 20px;\r\n\tmargin-bottom: 30px;\r\n\tmargin-left: 27px;\r\n\tborder-radius: 10px;\r\n\tbackground: #e5e4ee;\r\n}\r\n\r\n .login-page h2 {\r\n\twidth: 21ch;\r\n\theight: 100px;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n\t-webkit-animation: typing-text 3s steps(23), blink 0.5s infinite alternate;\r\n\t        animation: typing-text 3s steps(23), blink 0.5s infinite alternate;\r\n\tfont-size: 50pt;\r\n\tcolor: white;\r\n\ttext-align: center;\r\n\toverflow: hidden;\r\n\twhite-space: nowrap;\r\n\tborder-right: 3px solid white;\r\n}\r\n\r\n@-webkit-keyframes typing-text {\r\n\tfrom{\r\n\t\twidth: 0;\r\n\t}\r\n\tto {\r\n\t\twidth: 21ch;\r\n\t}\r\n}\r\n\r\n@keyframes typing-text {\r\n\tfrom{\r\n\t\twidth: 0;\r\n\t}\r\n\tto {\r\n\t\twidth: 21ch;\r\n\t}\r\n}\r\n\r\n@-webkit-keyframes blink {\r\n\tfrom {\r\n\t\tborder-color: transparent;\r\n\t}\r\n\tto {\r\n\t\tborder-color: white;\r\n\t}\r\n}\r\n\r\n@keyframes blink {\r\n\tfrom {\r\n\t\tborder-color: transparent;\r\n\t}\r\n\tto {\r\n\t\tborder-color: white;\r\n\t}\r\n}\r\n\r\n#icon{\r\n\tcolor: white;\r\n}\r\n\r\n#icon2{\r\n\tcolor: white;\r\n}\r\n\r\n#icon3{\r\n\tcolor: white;\r\n}\r\n\r\n#iconUsername{\r\n  margin-right: 6px;\r\n  margin-left: 3px;\r\n\tcolor: white;\r\n}\r\n\r\n#login:active{\r\n\tcursor: pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<head>\n\t<title>Welcome to WhatsGoingON</title>\n\t<meta charset=\"utf-8\">\n\t\n\t\n\t<link href=\"https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300Playfair+Display\" rel=\"stylesheet\">\n\t<link href=\"http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n</head>\n\n\n<div class=\"login-page\">\n<div class=\"form\">\n\t<div class=\"header\">\n\t\t<h1><i class=\"fa fa-comments\"></i>WhatsGoingON</h1>\n\t</div>\n\n  <p>Simple. Secure.Reliable messaging.<br>\n    With WhatsGoingOn, you'll get fast, simple, secure messaging which is available on phones and computers all over the world.</p>\n  <button id=\"loginButton\" onclick=\"location.href = '/login'\">LOGIN</button><br>\n  <button id=\"registerButton\"  onclick=\"location.href = '/register'\">REGISTER</button>\n</div>\n\n\t\t\t<h2 id=\"typedText\">Welcome to our Chatapp.</h2>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_socket_io_service__ = __webpack_require__("../../../../../src/app/services/socket-io.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(socketService) {
        this.socketService = socketService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        //Beim refreshen der Seite Socket neu connecten
        if (localStorage.getItem('user'))
            this.socketService.login();
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_socket_io_service__["a" /* SocketIoService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\r\n\tfont-family: 'Open Sans Condensed', sans-serif;\r\n}\r\n\r\n\r\n\r\n\r\n.form{\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\ttext-align: center;\r\n  font-size: 13pt;\r\n  float: left;\r\n  position:  relative;\r\n}\r\n\r\n.form .login-form{\r\n\twidth: 100%;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n\ttext-align: center;\r\n\tfont-size: 13pt;\r\n}\r\n\r\n.form .register-form{\r\n\twidth: 100%;\r\n\tmargin-top: 20px;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n\ttext-align: center;\r\n\tfont-size: 13pt;\r\n\tfloat: left;\r\n\tposition: relative;\r\n}\r\n\r\n.form #errorWarnings{\r\n\twidth: 1000px;\r\n\theight: 50px;\r\n\ttext-align: center;\r\n\tmargin: 20px auto 20px auto;\r\n\tpadding-top: 12px;\r\n\tbackground: transparent;\r\n\tborder-radius: 10px;\r\n\tborder: transparent;\r\n}\r\n\r\n.form h1{\r\n\tcolor: white;\r\n\twidth: 100%;\r\n\tmargin-top: 70px;\r\n\ttext-align: center;\r\n\tfont-size: 70pt;\r\n\tmargin-bottom: 20px;\r\n\tposition: relative;\r\n\ttext-decoration: underline;\r\n\ttext-shadow: 0 0 80px rgba(255,255,255,0.25);\r\n\t}\r\n\r\n.form p{\r\n\twidth: 1000px;\r\n\tcolor: white;\r\n\ttext-align: center;\r\n\tmargin: 40px auto 20px auto;\r\n\tpadding-top: 12px;\r\n\tpadding-bottom: 12px;\r\n\tbackground: transparent;\r\n\tborder-radius: 10px;\r\n\tborder: 2px solid white;\r\n}\r\n\r\n.form input{\r\n\twidth: 250px;\r\n\tmargin-bottom: 10px;\r\n\tpadding-top: 5px;\r\n\tpadding-bottom: 5px;\r\n\tpadding-left: 10px;\r\n\tborder-radius: 10px;\r\n\tbackground: #e5e4ee;\r\n}\r\n\r\n.form .message{\r\n\tmargin-left: 30px;\r\n}\r\n\r\n.form .message a{\r\n  color: #f2f2f2;\r\n}\r\n\r\n#login{\r\n\twidth: 250px;\r\n\theight: 40px;\r\n\tcolor: black;\r\n\tfont-size: 14pt;\r\n  margin-top: 20px;\r\n\tmargin-bottom: 50px;\r\n\tmargin-left: 27px;\r\n\tborder-radius: 10px;\r\n\tbackground: #e5e4ee;\r\n}\r\n\r\n#create{\r\n\twidth: 250px;\r\n\theight: 40px;\r\n\tcolor: black;\r\n\tfont-size: 14pt;\r\n\tmargin-top: 20px;\r\n\tmargin-bottom: 20px;\r\n\tmargin-left: 27px;\r\n\tborder-radius: 10px;\r\n\tbackground: #e5e4ee;\r\n}\r\n\r\n#loginButton{\r\n\twidth: 250px;\r\n\theight: 40px;\r\n\tcolor: black;\r\n\tfont-size: 14pt;\r\n\tmargin-top: 20px;\r\n\tmargin-left: 27px;\r\n\tborder-radius: 10px;\r\n\tbackground: #e5e4ee;\r\n}\r\n\r\n#registerButton{\r\n\twidth: 250px;\r\n\theight: 40px;\r\n\tcolor: black;\r\n\tfont-size: 14pt;\r\n\tmargin-top: 20px;\r\n\tmargin-bottom: 30px;\r\n\tmargin-left: 27px;\r\n\tborder-radius: 10px;\r\n\tbackground: #e5e4ee;\r\n}\r\n\r\n .login-page h2 {\r\n\twidth: 21ch;\r\n\theight: 100px;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n\t-webkit-animation: typing-text 3s steps(23), blink 0.5s infinite alternate;\r\n\t        animation: typing-text 3s steps(23), blink 0.5s infinite alternate;\r\n\tfont-size: 50pt;\r\n\tcolor: white;\r\n\ttext-align: center;\r\n\toverflow: hidden;\r\n\twhite-space: nowrap;\r\n\tborder-right: 3px solid white;\r\n}\r\n\r\n@-webkit-keyframes typing-text {\r\n\tfrom{\r\n\t\twidth: 0;\r\n\t}\r\n\tto {\r\n\t\twidth: 21ch;\r\n\t}\r\n}\r\n\r\n@keyframes typing-text {\r\n\tfrom{\r\n\t\twidth: 0;\r\n\t}\r\n\tto {\r\n\t\twidth: 21ch;\r\n\t}\r\n}\r\n\r\n@-webkit-keyframes blink {\r\n\tfrom {\r\n\t\tborder-color: transparent;\r\n\t}\r\n\tto {\r\n\t\tborder-color: white;\r\n\t}\r\n}\r\n\r\n@keyframes blink {\r\n\tfrom {\r\n\t\tborder-color: transparent;\r\n\t}\r\n\tto {\r\n\t\tborder-color: white;\r\n\t}\r\n}\r\n\r\n#icon{\r\n\tcolor: white;\r\n}\r\n\r\n#icon2{\r\n\tcolor: white;\r\n}\r\n\r\n#icon3{\r\n\tcolor: white;\r\n}\r\n\r\n#iconUsername{\r\n  margin-right: 6px;\r\n  margin-left: 3px;\r\n\tcolor: white;\r\n}\r\n\r\n#login:active{\r\n\tcursor: pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<head>\n\t<title>Login WhatsGoingON</title>\n\t\n\t<meta charset=\"utf-8\">\n\t<link href=\"https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300Playfair+Display\" rel=\"stylesheet\">\n\t<link href=\"http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n</head>\n\n\n<div class=\"login-page\">\n<div class=\"form\">\n\n\t<div class=\"header\">\n\t\t<h1><i class=\"fa fa-comments\"></i>WhatsGoingON</h1>\n\t\t<p id=\"errorWarnings\"></p>\n\t</div>\n\n\t\t<form class=\"login-form\"  action=\"/dashboard\" method=\"post\" (submit)=\"checkLogin()\">\n\t\t\t<div class=\"login\">\n\t\t\t\t<i id=\"iconUsername\" class=\"fa fa-user\"></i>\n\t\t\t\t\t<input type=\"text\" id=\"usernameLogin\" placeholder=\"Username\"><br>\n\t\t\t\t<i id=\"icon\" class=\"fa fa-key fa-fw\"></i>\n\t\t\t\t\t<input type=\"password\" id=\"passwordLogin\" placeholder=\"Password\"><br>\n\t\t\t\t\t<input type=\"submit\" id=\"login\" value=\"Login\"><br>\n\t\t\t</div>\n\t\t</form>\n</div>\n\t\t\t<h2 id=\"typedTextLogin\">______Please Login_____</h2>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_flash_messages__ = __webpack_require__("../../../../ngx-flash-messages/lib-dist/flash-messages.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_socket_io_service__ = __webpack_require__("../../../../../src/app/services/socket-io.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(authService, flashMessage, router, validateService, socketService) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.validateService = validateService;
        this.socketService = socketService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    //Beim bestätigen des Logins
    LoginComponent.prototype.checkLogin = function () {
        var _this = this;
        var checkUsername = /^([A-Za-z0-9_]){1,}$/;
        var checkPassword = /^([A-Za-z0-9_\-\.\@\!\?\§\%\&\#]){8,20}$/;
        var textUsernameLogin = $("#usernameLogin").val();
        var textPasswordLogin = $("#passwordLogin").val();
        var user = {
            username: textUsernameLogin,
            password: textPasswordLogin
        };
        if (textUsernameLogin == "" || textPasswordLogin == "") {
            $("#errorWarnings").html("Please fill in all fields ...");
            $("#errorWarnings").css("background-color", "pink");
            $("#errorWarnings").css("border", "2px solid red");
            return false;
        }
        else if (checkUsername.test(textUsernameLogin) == false) {
            $("#errorWarnings").html("Invalid Username. Please try it again ...");
            $("#errorWarnings").css("background-color", "pink");
            $("#errorWarnings").css("border", "2px solid red");
            return false;
        }
        else if (checkPassword.test(textPasswordLogin) == false) {
            $("#errorWarnings").html("Invalid Password. You have to type at least 8 chracters. Please try it again ...");
            $("#errorWarnings").css("background-color", "pink");
            $("#errorWarnings").css("border", "2px solid red");
            return false;
        }
        else {
            this.authService.authenticateUser(user).subscribe(function (data) {
                console.log('huhuhu');
                if (data.success) {
                    _this.authService.storeUserData(data.token, data.user);
                    _this.flashMessage.show('You are now logged in!', { classes: ['alert-success'], timeout: 5000 });
                    _this.router.navigate(['/dashboard']);
                    return true;
                }
                else {
                    _this.flashMessage.show(data.msg, { classes: ['alert-danger'], timeout: 5000 });
                    _this.router.navigate(['/login']);
                    return false;
                }
            });
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_flash_messages__["b" /* FlashMessagesService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_5__services_socket_io_service__["a" /* SocketIoService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<head>\n  <meta charset=\"utf-8\">\n  <title>What'sGoingOn</title>\n  <link rel=\"stylesheet\" href=\"https://bootswatch.com/4/sandstone/bootstrap.min.css\">\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css\" integrity=\"sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb\" crossorigin=\"anonymous\">\n\n\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n  <script src=\"/socket.io/socket.io.js\"></script>\n\n</head>\n\n\n\n\n <nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n      <a class=\"navbar-brand\" href=\"#\">What'sGoingOn</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n\n      <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n        <ul class=\"navbar-nav navbar-left\">\n          <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n            <a class=\"nav-link\" [routerLink]=\"['/']\">Home <span class=\"sr-only\">(current)</span></a>\n          </li>\n        </ul>\n\n        <ul class=\"nav navbar-nav ml-auto\">\n\n          <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard<span class=\"sr-only\">(current)</span></a>\n          </li>\n\n          <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n            <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile<span class=\"sr-only\">(current)</span></a>\n          </li>\n\n\n\n          <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n            <a class=\"nav-link\" [routerLink]=\"['/register']\">Register<span class=\"sr-only\">(current)</span></a>\n          </li>\n\n          <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n            <a class=\"nav-link\" [routerLink]=\"['/login']\">Login<span class=\"sr-only\">(current)</span></a>\n          </li>\n\n          <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\">\n            <a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Logout<span class=\"sr-only\">(current)</span></a>\n          </li>\n\n        </ul>\n      </div>\n    </nav>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_flash_messages__ = __webpack_require__("../../../../ngx-flash-messages/lib-dist/flash-messages.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_socket_io_service__ = __webpack_require__("../../../../../src/app/services/socket-io.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = (function () {
    function NavbarComponent(authService, flashMessage, router, socketService) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.socketService = socketService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    //Ausloggen: Löschen der lokalen Nutzerdaten + Token, Disconnecten des Sockets, Navigation zum Login
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', { classes: ['alert-success'], timeout: 5000 });
        this.router.navigate(['/login']);
        this.socketService.logout();
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_flash_messages__["b" /* FlashMessagesService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_socket_io_service__["a" /* SocketIoService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n\t<h2 class=\"page-header\">{{user.name}}</h2>\n\t<ul class=\"list-group\">\n\t\t<li class=\"list-group-item\">Username: {{user.username}}</li>\n\t\t<li class=\"list-group-item\">Email: {{user.email}}</li>\n\t</ul>\n</div>\n\n<div id=\"huhu\"></div>\n\n<form id=\"upload\" enctype=\"multipart/form-data\">\n\t<input type=\"file\" id=\"fileid\" hidden/>\n\t<input type=\"button\" id=\"buttonid\" value=\"Upload Profile Picture\" class=\"btn btn-primary\">\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_socket_io_service__ = __webpack_require__("../../../../../src/app/services/socket-io.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__ = __webpack_require__("../../../../ngx-flash-messages/lib-dist/flash-messages.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_buffer__ = __webpack_require__("../../../../buffer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_buffer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_buffer__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = (function () {
    function ProfileComponent(authService, router, flashMessage, socketService) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.socketService = socketService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var self = this;
        //Laden des Profils
        this.user = JSON.parse(this.authService.getUser());
        console.log(this.user.img.data.data);
        var base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(this.user.img.data.data)));
        var output = document.createElement('img');
        output.src = 'data:image/png;base64,' + base64String;
        output.alt = 'Error! Failed to load image...';
        var $div = $('#huhu');
        $div.append(output);
        var $button = $('#buttonid');
        var $fileid = $('#fileid');
        var $upload = $('#upload');
        this.formData = new FormData();
        $button.on('click', function (e) {
            e.preventDefault();
            $fileid.click();
        });
        var fileid = document.getElementById('fileid');
        fileid.addEventListener('change', function () {
            var reader = new FileReader();
            reader.onload = function (e) {
                var img = reader.result;
                console.log(reader.result);
                var base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(img)));
                output.src = 'data:image/png;base64,' + base64String;
                var change = JSON.parse(self.authService.getUser());
                console.log(change);
                var buff = new __WEBPACK_IMPORTED_MODULE_5_buffer__["Buffer"](img.byteLength);
                var view = new Uint8Array(img);
                for (var i = 0; i < buff.length; i++)
                    buff[i] = view[i];
                change.img.data = buff;
                console.log(change.img.data);
                localStorage.removeItem('user');
                localStorage.setItem('user', JSON.stringify(change));
                var send = {
                    username: change.username,
                    img: change.img.data
                };
                self.authService.setProfile(send).subscribe(function (data) {
                    console.log('yay');
                });
            };
            reader.readAsArrayBuffer(this.files[0]);
        });
        //Reonnecten des Sockets bei Refresh
        this.socketService.login();
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__["b" /* FlashMessagesService */],
            __WEBPACK_IMPORTED_MODULE_3__services_socket_io_service__["a" /* SocketIoService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\r\n\tfont-family: 'Open Sans Condensed', sans-serif;\r\n}\r\n\r\n.form{\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\ttext-align: center;\r\n  font-size: 13pt;\r\n  float: left;\r\n  position:  relative;\r\n}\r\n\r\n.form .login-form{\r\n\twidth: 100%;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n\ttext-align: center;\r\n\tfont-size: 13pt;\r\n}\r\n\r\n.form .register-form{\r\n\twidth: 100%;\r\n\tmargin-top: 20px;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n\ttext-align: center;\r\n\tfont-size: 13pt;\r\n\tfloat: left;\r\n\tposition: relative;\r\n}\r\n\r\n.form #errorWarnings{\r\n\twidth: 1000px;\r\n\theight: 50px;\r\n\ttext-align: center;\r\n\tmargin: 20px auto 20px auto;\r\n\tpadding-top: 12px;\r\n\tbackground: transparent;\r\n\tborder-radius: 10px;\r\n\tborder: transparent;\r\n}\r\n\r\n.form h1{\r\n\tcolor: white;\r\n\twidth: 100%;\r\n\tmargin-top: 70px;\r\n\ttext-align: center;\r\n\tfont-size: 70pt;\r\n\tmargin-bottom: 20px;\r\n\tposition: relative;\r\n\ttext-decoration: underline;\r\n\ttext-shadow: 0 0 80px rgba(255,255,255,0.25);\r\n\t}\r\n\r\n.form p{\r\n\twidth: 1000px;\r\n\tcolor: white;\r\n\ttext-align: center;\r\n\tmargin: 40px auto 20px auto;\r\n\tpadding-top: 12px;\r\n\tpadding-bottom: 12px;\r\n\tbackground: transparent;\r\n\tborder-radius: 10px;\r\n\tborder: 2px solid white;\r\n}\r\n\r\n.form input{\r\n\twidth: 250px;\r\n\tmargin-bottom: 10px;\r\n\tpadding-top: 5px;\r\n\tpadding-bottom: 5px;\r\n\tpadding-left: 10px;\r\n\tborder-radius: 10px;\r\n\tbackground: #e5e4ee;\r\n}\r\n\r\n.form .message{\r\n\tmargin-left: 30px;\r\n}\r\n\r\n.form .message a{\r\n  color: #f2f2f2;\r\n}\r\n\r\n#login{\r\n\twidth: 250px;\r\n\theight: 40px;\r\n\tcolor: black;\r\n\tfont-size: 14pt;\r\n  margin-top: 20px;\r\n\tmargin-bottom: 50px;\r\n\tmargin-left: 27px;\r\n\tborder-radius: 10px;\r\n\tbackground: #e5e4ee;\r\n}\r\n\r\n#create{\r\n\twidth: 250px;\r\n\theight: 40px;\r\n\tcolor: black;\r\n\tfont-size: 14pt;\r\n\tmargin-top: 20px;\r\n\tmargin-bottom: 20px;\r\n\tmargin-left: 27px;\r\n\tborder-radius: 10px;\r\n\tbackground: #e5e4ee;\r\n}\r\n\r\n#loginButton{\r\n\twidth: 250px;\r\n\theight: 40px;\r\n\tcolor: black;\r\n\tfont-size: 14pt;\r\n\tmargin-top: 20px;\r\n\tmargin-left: 27px;\r\n\tborder-radius: 10px;\r\n\tbackground: #e5e4ee;\r\n}\r\n\r\n#registerButton{\r\n\twidth: 250px;\r\n\theight: 40px;\r\n\tcolor: black;\r\n\tfont-size: 14pt;\r\n\tmargin-top: 20px;\r\n\tmargin-bottom: 30px;\r\n\tmargin-left: 27px;\r\n\tborder-radius: 10px;\r\n\tbackground: #e5e4ee;\r\n}\r\n\r\n .login-page h2 {\r\n\twidth: 21ch;\r\n\theight: 100px;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n\t-webkit-animation: typing-text 3s steps(23), blink 0.5s infinite alternate;\r\n\t        animation: typing-text 3s steps(23), blink 0.5s infinite alternate;\r\n\tfont-size: 50pt;\r\n\tcolor: white;\r\n\ttext-align: center;\r\n\toverflow: hidden;\r\n\twhite-space: nowrap;\r\n\tborder-right: 3px solid white;\r\n}\r\n\r\n@-webkit-keyframes typing-text {\r\n\tfrom{\r\n\t\twidth: 0;\r\n\t}\r\n\tto {\r\n\t\twidth: 21ch;\r\n\t}\r\n}\r\n\r\n@keyframes typing-text {\r\n\tfrom{\r\n\t\twidth: 0;\r\n\t}\r\n\tto {\r\n\t\twidth: 21ch;\r\n\t}\r\n}\r\n\r\n@-webkit-keyframes blink {\r\n\tfrom {\r\n\t\tborder-color: transparent;\r\n\t}\r\n\tto {\r\n\t\tborder-color: white;\r\n\t}\r\n}\r\n\r\n@keyframes blink {\r\n\tfrom {\r\n\t\tborder-color: transparent;\r\n\t}\r\n\tto {\r\n\t\tborder-color: white;\r\n\t}\r\n}\r\n\r\n#icon{\r\n\tcolor: white;\r\n}\r\n\r\n#icon2{\r\n\tcolor: white;\r\n}\r\n\r\n#icon3{\r\n\tcolor: white;\r\n}\r\n\r\n#iconUsername{\r\n  margin-right: 6px;\r\n  margin-left: 3px;\r\n\tcolor: white;\r\n}\r\n\r\n#login:active{\r\n\tcursor: pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<head>\n\t<title>Welcome to WhatsGoingON</title>\n\t\n\t<meta charset=\"utf-8\">\n\t<link href=\"https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300Playfair+Display\" rel=\"stylesheet\">\n\t<link href=\"http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n</head>\n\n\n<div class=\"login-page\">\n<div class=\"form\">\n\n\t<div class=\"header\">\n\t\t<h1><i class=\"fa fa-comments\"></i>WhatsGoingON</h1>\n\t\t<p id=\"errorWarnings\"></p>\n\t</div>\n\n\t\t<form class=\"register-form\"  method=\"post\" (submit)=\"checkRegister()\">\n\t\t\t<div class=\"create\">\n\t\t\t\t<i id=\"iconUsername\" class=\"fa fa-user\"></i>\n\t\t\t\t\t<input type=\"text\" id=\"username\" placeholder=\"Username\"><br>\n\t\t\t\t<i id=\"icon\" class=\"fa fa-envelope-o fa-fw\"></i>\n\t\t\t\t\t<input type=\"email\" id=\"email\" placeholder=\"Email\"><br>\n\t\t\t\t<i id=\"icon2\" class=\"fa fa-key fa-fw\"></i>\n\t\t\t\t\t<input type=\"password\" id=\"password\" placeholder=\"Password\"><br>\n\t\t\t\t<i id=\"icon3\" class=\"fa fa-key fa-fw\"></i>\n\t\t\t\t\t<input type=\"password\" id=\"passwordConfirm\" placeholder=\"Confirm Password\"><br>\n\t\t\t\t\t<input type=\"submit\" id=\"create\" value=\"Create\"><br>\n\t\t\t</div>\n\t\t</form>\n\n</div>\n\t\t\t<h2 id=\"typedText\">_____Please Register____</h2>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_flash_messages__ = __webpack_require__("../../../../ngx-flash-messages/lib-dist/flash-messages.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.checkRegister = function () {
        var _this = this;
        var checkUsername = /^([A-Za-z0-9_]){1,}$/;
        var checkEmail = /^([A-Za-z0-9_\-\.]){1,}\@([A-Za-z0-9_\-\.]){1,}\.([A-Za-z]){2,4}$/;
        var checkPassword = /^([A-Za-z0-9_\-\.\@\!\?\§\%\&\#]){8,20}$/;
        var textUsername = $("#username").val();
        var textEmail = $("#email").val();
        var textPassword = $("#password").val();
        var textpasswordConfirm = $("#passwordConfirm").val();
        var user = {
            name: textUsername,
            username: textUsername,
            email: textEmail,
            password: textPassword
        };
        if (textUsername == "" || textEmail == "" || textPassword == "" || textpasswordConfirm == "") {
            $("#errorWarnings").html("Please fill in all fields ...");
            $("#errorWarnings").css("background-color", "pink");
            $("#errorWarnings").css("border", "2px solid red");
            return false;
        }
        else if (checkUsername.test(textUsername) == false) {
            $("#errorWarnings").html("Invalid Username. Please try it again ...");
            $("#errorWarnings").css("background-color", "pink");
            $("#errorWarnings").css("border", "2px solid red");
            return false;
        }
        else if (checkEmail.test(textEmail) == false) {
            $("#errorWarnings").html("Invalid Email. Please try it again ...");
            $("#errorWarnings").css("background-color", "pink");
            $("#errorWarnings").css("border", "2px solid red");
            return false;
        }
        else if (checkPassword.test(textPassword) == false) {
            $("#errorWarnings").html("Invalid Password. You have to type at least 8 characters. Please try it again ...");
            $("#errorWarnings").css("background-color", "pink");
            $("#errorWarnings").css("border", "2px solid red");
            return false;
        }
        else if (!(textPassword === textpasswordConfirm)) {
            $("#errorWarnings").html("Your Password does not match. Please try it again ...");
            $("#errorWarnings").css("background-color", "pink");
            $("#errorWarnings").css("border", "2px solid red");
            return false;
        }
        else {
            this.authService.registerUser(user).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessage.show('You are now registered and can log in!', { classes: ['alert-success'], timeout: 3000 });
                    _this.router.navigate(['/login']);
                    return true;
                }
                else {
                    _this.flashMessage.show('Something went wrong!', { classes: ['alert-danger'], timeout: 3000 });
                    _this.router.navigate(['/register']);
                    return false;
                }
            });
        }
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_flash_messages__["b" /* FlashMessagesService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/userprofile/userprofile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/userprofile/userprofile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\r\n\t<h2 class=\"page-header\">{{user.name}}</h2>\r\n\t<ul class=\"list-group\">\r\n\t\t<li class=\"list-group-item\">Username: {{user.username}}</li>\r\n\t\t<li class=\"list-group-item\">Email: {{user.email}}</li>\r\n\t</ul>\r\n</div>\r\n\r\n<div id=\"huhu\"></div>"

/***/ }),

/***/ "../../../../../src/app/components/userprofile/userprofile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserprofileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_socket_io_service__ = __webpack_require__("../../../../../src/app/services/socket-io.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserprofileComponent = (function () {
    function UserprofileComponent(authService, router, socketService) {
        this.authService = authService;
        this.router = router;
        this.socketService = socketService;
    }
    UserprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        var url = window.location.href;
        var help = parseURLParams(url);
        var urlParam = help['username'][0];
        var send = {
            username: urlParam
        };
        this.authService.getUserprofile(send).subscribe(function (data) {
            _this.user = data.user;
            var base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(_this.user.img.data.data)));
            var output = document.createElement('img');
            output.src = 'data:image/png;base64,' + base64String;
            output.alt = 'Error! Failed to load image...';
            var $div = $('#huhu');
            $div.append(output);
        });
        function parseURLParams(url) {
            var queryStart = url.indexOf("?") + 1, queryEnd = url.indexOf("#") + 1 || url.length + 1, query = url.slice(queryStart, queryEnd - 1), pairs = query.replace(/\+/g, " ").split("&"), parms = {}, i, n, v, nv;
            if (query === url || query === "")
                return;
            for (i = 0; i < pairs.length; i++) {
                nv = pairs[i].split("=", 2);
                n = decodeURIComponent(nv[0]);
                v = decodeURIComponent(nv[1]);
                if (!parms.hasOwnProperty(n))
                    parms[n] = [];
                parms[n].push(nv.length === 2 ? v : null);
            }
            return parms;
        }
        this.socketService.login();
    };
    UserprofileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-userprofile',
            template: __webpack_require__("../../../../../src/app/components/userprofile/userprofile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/userprofile/userprofile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_socket_io_service__["a" /* SocketIoService */]])
    ], UserprofileComponent);
    return UserprofileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            //this.router.navigate(['/login']);
            //return false;
            return true;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    //Funktionen hier sollten dem Namen nach selbsterklärend sein
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.setProfile = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/profile', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.getUserprofile = function (username) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/userprofile', username, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.getUser = function () {
        var x = localStorage.getItem('user');
        return x;
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/socket-io.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketIoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SocketIoService = (function () {
    function SocketIoService(authService) {
        this.authService = authService;
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__({
            autoConnect: false
        });
        var msgTo;
    }
    //Übergabe der Nutzerdaten des eigenen Clienten
    SocketIoService.prototype.socketUser = function () {
        var x = this.authService.getUser();
        var user = JSON.parse(x);
        return user;
    };
    //Erstellen der OnlinUsersList
    SocketIoService.prototype.usernames = function (users, user) {
        this.socket.on('usernames', function (data) {
            var html = '<li class="list-group-item" style="cursor: pointer; border: 1px solid grey; margin: 2px; border-radius: 4px"><a href="javascript:;" style="color: black">ALL</a></li>';
            for (var i = 0; i < data.length; i++) {
                if (data[i] !== user.username) {
                    html += '<li class="list-group-item" style="cursor: pointer; border: 1px solid grey; margin: 2px; border-radius: 4px"><a href="javascript:;" style="color: black">' + data[i] + '</a></li>';
                }
            }
            users.html(html);
        });
    };
    //Senden von Nachrichten
    SocketIoService.prototype.sendMessage = function (msg, chat, to) {
        this.socket.emit('send message', msg, to, function (data) {
            chat.append('<div class="well">' + data + '</div>');
        });
    };
    //Emfangen von Nachrichten
    SocketIoService.prototype.newMessage = function (chat, ss) {
        this.socket.on('new message', function (data) {
            var active = localStorage.getItem('msgTo');
            if (data.from == active && data.to != 'ALL') {
                ss.displayMsg(data, chat);
            }
            ;
            if (active == data.to) {
                ss.displayMsg(data, chat);
            }
            ;
        });
        this.socket.on('new own message', function (data) {
            ss.displayOwnMsg(data, chat);
        });
    };
    //Ausgeben alter Nachrichten aus der Datenbank
    SocketIoService.prototype.output = function (chat, active, ss) {
        var _this = this;
        this.socket.on('output', function (data) {
            var user = _this.socketUser();
            for (var i = data.length - 1; i > -1; i--) {
                if (data[i].from == user.username) {
                    ss.displayOwnMsg(data[i], chat);
                }
                ;
                if (data[i].from != user.username) {
                    ss.displayMsg(data[i], chat);
                }
                ;
            }
        });
    };
    SocketIoService.prototype.displayOwnMsg = function (data, chat) {
        chat.append('<div class="well" style="text-align: right">' + data.message + '<b> : ' + data.from + '</b></div>');
    };
    ;
    SocketIoService.prototype.displayMsg = function (data, chat) {
        chat.append('<div class="well"><b>' + data.from + ': </b>' + data.message + '</div>');
    };
    ;
    SocketIoService.prototype.setMsgTo = function (data) {
        localStorage.setItem('msgTo', data);
    };
    SocketIoService.prototype.getMsgTo = function () {
        return localStorage.getItem('msgTo');
    };
    //Laden alter Nachrichten
    SocketIoService.prototype.load = function (active) {
        this.socket.emit('load old msg', active);
    };
    //Ausloggen des Sockets
    SocketIoService.prototype.logout = function () {
        this.socket.disconnect();
    };
    SocketIoService.prototype.updateNicknames = function () {
        this.socket.emit('update nicknames');
    };
    //Einloggen des Sockets
    SocketIoService.prototype.login = function () {
        if (!this.socket.connected) {
            this.socket.open();
            var user = JSON.parse(this.authService.getUser());
            this.socket.emit('new user', user.username);
        }
        ;
    };
    SocketIoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]])
    ], SocketIoService);
    return SocketIoService;
}());



/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    //Valdierung von Registrierung, Login und Email
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.username == undefined || user.email == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateLogin = function (username, password) {
        if (username == undefined || password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
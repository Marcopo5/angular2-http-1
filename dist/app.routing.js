"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var users_component_1 = require("./users/users.component");
exports.routes = [
    {
        path: '',
        redirectTo: '/users',
        pathMatch: 'full'
    },
    {
        path: 'users',
        component: users_component_1.UsersComponent
        // children: [
        // 	{
        // 		path: '',
        // 		component: UserListComponent
        // 	},
        // 	{
        // 		path: 'create',
        // 		component: UserCreateComponent
        // 	},
        // 	{
        // 		path: ':id',
        // 		component: UserSingleComponent
        // 	},
        // 	{
        // 		path: ':id/edit',
        // 		component: UserEditComponent
        // 	}
        // ]
    }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routing.js.map
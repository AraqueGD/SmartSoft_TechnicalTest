"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Controllers
var ProductsController_1 = require("./controller/ProductsController");
var ProfileController_1 = require("./controller/ProfileController");
var UserController_1 = require("./controller/UserController");
var CategoryController_1 = require("./controller/CategoryController");
var AuthController_1 = require("./controller/AuthController");
// Helpers
var validateToken_1 = require("./helpers/validateToken");
exports.Routes = [{
        // API USER
        method: "get",
        route: "/api/users",
        controller: UserController_1.UserController,
        action: "getUsers"
    }, {
        method: "get",
        route: "/api/users/:id",
        controller: UserController_1.UserController,
        action: "getUser"
    },
    {
        method: "delete",
        route: "/api/users/:id",
        controller: UserController_1.UserController,
        action: "deleteUser"
    },
    {
        method: "put",
        route: "/api/users/:id",
        controller: UserController_1.UserController,
        action: "updateUser"
    },
    /* API USER END */
    {
        // API PROFILE
        method: "get",
        route: "/api/profile/:id",
        middleware: validateToken_1.TokenValidation,
        controller: ProfileController_1.ProfileController,
        action: "getProfile"
    },
    {
        method: "put",
        route: "/api/profile/:id",
        controller: ProfileController_1.ProfileController,
        action: "updateProfile"
    },
    /* API PROFILE END */
    {
        // API PRODUCTS
        method: "get",
        route: "/api/products",
        controller: ProductsController_1.ProductsController,
        action: "getProducts"
    },
    {
        method: "post",
        route: "/api/products",
        controller: ProductsController_1.ProductsController,
        action: "createProduct"
    },
    {
        method: "put",
        route: "/api/products/:id",
        controller: ProductsController_1.ProductsController,
        action: "updateProducts"
    },
    {
        method: "delete",
        route: "/api/products/:id",
        controller: ProductsController_1.ProductsController,
        action: "deleteProduct"
    },
    /* API PRODUCTS END */
    {
        // API CATEGORY
        method: "get",
        route: "/api/category",
        controller: CategoryController_1.CategoryController,
        action: "getCategorys"
    },
    {
        method: "post",
        route: "/api/category",
        controller: CategoryController_1.CategoryController,
        action: "createCategory"
    },
    /* API CATEGORY END */
    {
        // API AUTH
        method: "post",
        route: "/api/signup",
        controller: AuthController_1.AuthController,
        action: "signUp"
    },
    {
        method: "post",
        route: "/api/signin",
        controller: AuthController_1.AuthController,
        action: "signIn"
    }
    /* API AUTH END */
];
//# sourceMappingURL=routes.js.map
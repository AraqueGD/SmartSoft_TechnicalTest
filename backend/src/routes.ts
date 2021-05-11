// Controllers
import { ProductsController } from "./controller/ProductsController";
import { ProfileController } from "./controller/ProfileController";
import {UserController} from "./controller/UserController";
import {CategoryController} from "./controller/CategoryController"
import { AuthController } from "./controller/AuthController";

// Helpers
import { TokenValidation } from "./helpers/validateToken";

export const Routes = [{
    // API USER
    method: "get",
    route: "/api/users",
    controller: UserController,
    action: "getUsers"
}, {
    method: "get",
    route: "/api/users/:id",
    controller: UserController,
    action: "getUser"
}, 
{
    method: "delete",
    route: "/api/users/:id",
    controller: UserController,
    action: "deleteUser"
},
{
    method: "put",
    route: "/api/users/:id",
    controller: UserController,
    action: "updateUser"
},
    /* API USER END */
{
    // API PROFILE
    method: "get",
    route: "/api/profile/:id",
    middleware: TokenValidation,
    controller: ProfileController,
    action: "getProfile"
},
{
    method: "put",
    route: "/api/profile/:id",
    controller: ProfileController,
    action: "updateProfile"
},
    /* API PROFILE END */
{
    // API PRODUCTS
    method: "get",
    route: "/api/products",
    controller: ProductsController,
    action: "getProducts"
},
{
    method: "post",
    route: "/api/products",
    controller: ProductsController,
    action: "createProduct"
},
{
    method: "put",
    route: "/api/products/:id",
    controller: ProductsController,
    action: "updateProducts"
},
{
    method: "delete",
    route: "/api/products/:id",
    controller: ProductsController,
    action: "deleteProduct"
},

    /* API PRODUCTS END */

{
    // API CATEGORY
    method: "get",
    route: "/api/category",
    controller: CategoryController,
    action: "getCategorys"
},
{
    method: "post",
    route: "/api/category",
    controller: CategoryController,
    action: "createCategory"
},

    /* API CATEGORY END */
{
    // API AUTH
    method: "post",
    route: "/api/signup",
    controller: AuthController,
    action: "signUp"
},
{
    method: "post",
    route: "/api/signin",
    controller: AuthController,
    action: "signIn"
}
    /* API AUTH END */
];
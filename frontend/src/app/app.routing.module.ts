import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductsCategoryComponent } from "./views/products-category/products-category.component";
import { CreateProductComponent } from "./views/create-product/create-product.component";
import { EditProductComponent } from "./views/edit-product/edit-product.component";
import { HomeComponent } from "./views/home/home.component";

// Components Pages
import {LoginComponent} from "./views/login/login.component";
import { ProfileComponent } from "./views/profile/profile.component";
import { RegisterComponent } from "./views/register/register.component";

// Routes Guards
import { AuthGuard } from "./auth.guard";


const routes: Routes = [
    {path: "", redirectTo: "login", pathMatch: "full"},
    {path: "login", component: LoginComponent},
    {path: "register", component: RegisterComponent},
    {path: "home", component: HomeComponent, canActivate: [AuthGuard]},
    {path: "profile", component: ProfileComponent, canActivate: [AuthGuard]},
    {path: "products-category/:id", component: ProductsCategoryComponent, canActivate: [AuthGuard]},
    {path: "create-product", component: CreateProductComponent, canActivate: [AuthGuard]},
    {path: "edit-product/:id", component: EditProductComponent, canActivate: [AuthGuard]},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: "reload"})],
    exports: [RouterModule]
})

export class AppRoutingModule {}
export const routingComponents = [LoginComponent, RegisterComponent, HomeComponent, ProfileComponent, ProductsCategoryComponent, CreateProductComponent, EditProductComponent]

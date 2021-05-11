import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateCategoryComponent } from "./views/create-category/create-category.component";
import { CreateProductComponent } from "./views/create-product/create-product.component";
import { EditProductComponent } from "./views/edit-product/edit-product.component";
import { HomeComponent } from "./views/home/home.component";

// Components Pages
import {LoginComponent} from "./views/login/login.component";
import { ProfileComponent } from "./views/profile/profile.component";
import { RegisterComponent } from "./views/register/register.component";

const routes: Routes = [
    {path: "", redirectTo: "login", pathMatch: "full"},
    {path: "login", component: LoginComponent},
    {path: "register", component: RegisterComponent},
    {path: "home", component: HomeComponent},
    {path: "profile", component: ProfileComponent},
    {path: "create-category", component: CreateCategoryComponent},
    {path: "create-product", component: CreateProductComponent},
    {path: "edit-product", component: EditProductComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
export const routingComponents = [LoginComponent, RegisterComponent, HomeComponent, ProfileComponent, CreateCategoryComponent, CreateProductComponent, EditProductComponent]

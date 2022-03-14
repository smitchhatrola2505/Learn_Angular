import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
// import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path:'admin' , loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule)
  },
  {
    path:'user',loadChildren:()=>import('./user/user.module').then(mod=>mod.UserModule)
  },
  {
    path:'footer',
    component : FooterComponent
  },
  {
    path:'header',
    component : HeaderComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contact',
    component:ContactComponent
  }
  // {
  //   path:"",
  //   redirectTo:"home",
  //   pathMatch:"full"
  // }
  // {
  //   path:'**',
  //   // component:NotfoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

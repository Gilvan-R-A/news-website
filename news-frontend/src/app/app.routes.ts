import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroPostagemComponent } from './components/cadastro-postagem/cadastro-postagem.component';
import { CadastroUsuarioComponent } from './components/cadastro-usuario/cadastro-usuario.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'cadastro-usuario', component: CadastroUsuarioComponent},
    {path: 'cadastro-postagem', component:CadastroPostagemComponent, canActivate: [AuthGuard]},
    { path: '**', redirectTo: 'login'}
];

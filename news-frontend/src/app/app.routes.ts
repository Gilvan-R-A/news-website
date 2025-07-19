import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroPostagemComponent } from './components/cadastro-postagem/cadastro-postagem.component';
import { CadastroUsuarioComponent } from './components/cadastro-usuario/cadastro-usuario.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'cadastro-usuario', component: CadastroUsuarioComponent},
    {
        path: 'cadastro-postagem',
        component: CadastroPostagemComponent,
        canActivate: [AuthGuard]
    }
];

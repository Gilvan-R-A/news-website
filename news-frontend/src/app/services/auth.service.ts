import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment.prod";
import { Observable, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private apiUrl = `${environment.apiUrl}/usuarioLogin`;

    constructor(private http: HttpClient) {}

    login(email: string, senha: string): Observable<any> {
        return this.http.post<any>(this.apiUrl, { email, senha }).pipe(
            tap(response => {
                localStorage.setItem('token', response.token);
            })
        );
    }

    logout(): void {
        localStorage.removeItem('token');
    }

    getToken(): string | null {
        return localStorage.getItem('token');
    }

    isAuthenticated(): boolean {
        return !!this.getToken();
    }
}



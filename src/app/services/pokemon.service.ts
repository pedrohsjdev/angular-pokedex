import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PokemonService {

    constructor(private httpClient: HttpClient) {
    }

    carregarPokemons()  {
        return this.httpClient.get('https://pokeapi.co/api/v2/pokemon?limit=151').pipe(
            map((response: any) => response.results)
        );
    }
} 

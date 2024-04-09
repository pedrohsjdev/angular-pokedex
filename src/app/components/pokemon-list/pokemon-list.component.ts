import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent {

    pokemons: any = [];

    constructor(private pokemonService: PokemonService) {}

    ngOnInit() {
        this.pokemonService.carregarPokemons().subscribe((pokemons: any) => {
            this.pokemons = pokemons;
        });
    }

}

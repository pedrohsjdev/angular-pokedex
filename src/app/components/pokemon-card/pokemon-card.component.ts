import { Component, Input } from "@angular/core";

@Component({
    selector: "app-pokemon-card",
    templateUrl: "./pokemon-card.component.html",
    styleUrl: "./pokemon-card.component.css",
})
export class PokemonCardComponent {
    @Input()
    pokemon: string = "";

    @Input()
    numero: number = 0;

    pegarImagemPokemon() {
        const numeroFormatado = this.leadingZeroes(this.numero);
        return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${numeroFormatado}.png`;
    }

    leadingZeroes(str: string | number, size = 3): string {
        let s = String(str);

        while (s.length < (size || 2)) {
            s = "0" + s;
        }

        return s;
    }
}

import { Component } from '@angular/core';

interface heroes {
  name: string;
  age: number;
}

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    const heroesArray: heroes[] = [
      {
        name: 'ironman',
        age: 45,
      },
      {
        name: 'spiderman',
        age: 24,
      },
      {
        name: 'thor',
        age: 32,
      },
      {
        name: 'hulk',
        age: 40,
      },
      {
        name: 'black window',
        age: 30,
      },
    ];

    const randomVal = Math.floor(Math.random() * heroesArray.length);
    const hero: heroes = heroesArray[randomVal];

    this.name = hero.name;
  }

  changeAge(): void {
    const heroesArray: heroes[] = [
      {
        name: 'ironman',
        age: 45,
      },
      {
        name: 'spiderman',
        age: 24,
      },
      {
        name: 'thor',
        age: 32,
      },
      {
        name: 'hulk',
        age: 40,
      },
      {
        name: 'black window',
        age: 30,
      },
    ];

    const randomVal = Math.floor(Math.random() * heroesArray.length);
    const hero: heroes = heroesArray[randomVal];

    this.age = hero.age;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;
  }
}

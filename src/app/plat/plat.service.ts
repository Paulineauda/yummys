import { Injectable } from '@angular/core';
import { Plat } from './plat.model';

@Injectable({
  providedIn: 'root'
})
export class PlatService {
  private plats: Plat[] = [
    { id: 1, nom: 'Le Kebbe nayeh', description: 'Un tartare de viande crue, agrémentée de blé concassé (boulghour), d’oignons, de menthe et d’épices (poivre, cumin, cannelle). Le tout est généralement pilé à nouveau et servi avec de l’huile d’olive, de la menthe fraîche et des oignons blancs et mangé avec du pain pita.', prix: 15, image: 'lien1' },
    { id: 2, nom: 'Le Kafta bil Sanieh', description: 'Littéralement, « Kafta dans le plat », le Kafta bil sanieh est un plat à base de viande hachée aux herbes, servi avec des pommes de terre, des tomates, et accessoirement du riz au vermicelle.', prix: 18, image: 'lien_vers_image_spaghetti' },
    
  ];

  getPlats(): Plat[] {
    return this.plats;
  }
}

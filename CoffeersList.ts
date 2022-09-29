import expressoTradicionalIMG from './src/assets/coffees/coffee-tradicional.svg'
import expressoAmericanoIMG from './src/assets/coffees/expresso-americano.svg'
import expressoCremosoIMG from './src/assets/coffees/expresso-cremoso.svg'
import expressoGeladoIMG from './src/assets/coffees/expresso-gelado.svg'
import cafeComLeiteIMG from './src/assets/coffees/cafe-com-leite.svg'
import latteIMG from './src/assets/coffees/latte.svg'
import capuccinoIMG from './src/assets/coffees/capuccino.svg'
import macchiatoIMG from './src/assets/coffees/macchiato.svg'
import mocaccinoIMG from './src/assets/coffees/mocaccino.svg'
import chocolateQuenteIMG from './src/assets/coffees/chocolate-quente.svg'
import CubanoIMG from './src/assets/coffees/cubano.svg'
import havaianoIMG from './src/assets/coffees/havaiano.svg'
import arabeIMG from './src/assets/coffees/arabe.svg'
import irlandesIMG from './src/assets/coffees/irlandes.svg'

export interface Coffee {
  id: number
  image: string
  name: string
  tags: string[]
  description: string
  value: number
}

export const CoffeersList: Coffee[] = [
  {
    id: 1,
    image: expressoTradicionalIMG,
    tags: ['Tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    value: 9.9,
  },
  {
    id: 2,
    image: expressoAmericanoIMG,
    tags: ['Tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    value: 9.9,
  },
  {
    id: 3,
    image: expressoCremosoIMG,
    tags: ['Tradicional'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    value: 9.9,
  },
  {
    id: 4,
    image: expressoGeladoIMG,
    tags: ['Tradicional', 'gelado'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    value: 9.9,
  },
  {
    id: 5,
    image: cafeComLeiteIMG,
    tags: ['Tradicional', 'com leite'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    value: 9.9,
  },
  {
    id: 6,
    image: latteIMG,
    tags: ['Tradicional', 'com leite'],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    value: 9.9,
  },
  {
    id: 7,
    image: capuccinoIMG,
    tags: ['Tradicional', 'com leite'],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    value: 9.9,
  },
  {
    id: 8,
    image: macchiatoIMG,
    tags: ['Tradicional', 'com leite'],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    value: 9.9,
  },
  {
    id: 9,
    image: mocaccinoIMG,
    tags: ['Tradicional'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    value: 9.9,
  },
  {
    id: 10,
    image: chocolateQuenteIMG,
    tags: ['Tradicional', 'com leite'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    value: 9.9,
  },
  {
    id: 11,
    image: CubanoIMG,
    tags: ['Tradicional', 'alcoólico', 'gelado'],
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    value: 9.9,
  },
  {
    id: 12,
    image: havaianoIMG,
    tags: ['especial'],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    value: 9.9,
  },
  {
    id: 13,
    image: arabeIMG,
    tags: ['especial'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    value: 9.9,
  },
  {
    id: 14,
    image: irlandesIMG,
    tags: ['especial', 'alcoólico'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    value: 9.9,
  },
]

import imageSushi from '../assets/image-01.png'
import imagePasta from '../assets/banner-img.png'
import imagePizza from '../assets/pizza-img.png'

export type MenuDataProps = {
  id: number
  nome: string
  descricao: string
  foto: string
  porcao: string
  preco: number
}

export type RestaurantsDataProps = {
  id: number
  titulo: string
  avaliacao: string
  destacado: boolean
  tipo: string
  descricao: string
  capa: string
  cardapio: MenuDataProps[]
}

const pizzaDescription =
  'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'

const japaneseDescription =
  'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis delicados e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!'

const italianDescription =
  'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'

const pizzaMenu = (idOffset: number): MenuDataProps[] => [
  {
    id: idOffset + 1,
    nome: 'Pizza Marguerita',
    descricao: pizzaDescription,
    foto: imagePizza,
    porcao: '2 pessoas',
    preco: 54.9
  },
  {
    id: idOffset + 2,
    nome: 'Pizza Marguerita',
    descricao: pizzaDescription,
    foto: imagePizza,
    porcao: '2 pessoas',
    preco: 54.9
  },
  {
    id: idOffset + 3,
    nome: 'Pizza Marguerita',
    descricao: pizzaDescription,
    foto: imagePizza,
    porcao: '2 pessoas',
    preco: 54.9
  },
  {
    id: idOffset + 4,
    nome: 'Pizza Marguerita',
    descricao: pizzaDescription,
    foto: imagePizza,
    porcao: '2 pessoas',
    preco: 54.9
  },
  {
    id: idOffset + 5,
    nome: 'Pizza Marguerita',
    descricao: pizzaDescription,
    foto: imagePizza,
    porcao: '2 pessoas',
    preco: 54.9
  },
  {
    id: idOffset + 6,
    nome: 'Pizza Marguerita',
    descricao: pizzaDescription,
    foto: imagePizza,
    porcao: '2 pessoas',
    preco: 54.9
  }
]

const italianRestaurant = (id: number): RestaurantsDataProps => ({
  id,
  titulo: 'La Dolce Vita Trattoria',
  avaliacao: '4.6',
  destacado: false,
  tipo: 'Italiana',
  descricao: italianDescription,
  capa: imagePasta,
  cardapio: pizzaMenu(id * 100)
})

export const restaurantsData: RestaurantsDataProps[] = [
  {
    id: 1,
    titulo: 'Hioki Sushi',
    avaliacao: '4.9',
    destacado: true,
    tipo: 'Japonesa',
    descricao: japaneseDescription,
    capa: imageSushi,
    cardapio: pizzaMenu(100)
  },
  italianRestaurant(2),
  italianRestaurant(3),
  italianRestaurant(4),
  italianRestaurant(5),
  italianRestaurant(6)
]

export const getRestaurantById = (id: number) =>
  restaurantsData.find((restaurant) => restaurant.id === id)

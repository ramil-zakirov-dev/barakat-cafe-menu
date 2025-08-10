import pilafficImg from "@/assets/pilaf-dish.jpg";
import tukmach_soup_1 from "@/assets/photos/tukmach_soup_1.jpg";
import tukmach_soup_2 from "@/assets/photos/tukmach_soup_2.jpg";
import pelmeni_1 from "@/assets/photos/pelmeni_1.jpg";
import pelmeni_2 from "@/assets/photos/pelmeni_2.jpg";
import krem_soup_grib_1 from "@/assets/photos/krem_soup_grib_1.jpg";
import krem_soup_grib_2 from "@/assets/photos/krem_soup_grib_2.jpg";
import solyanka_1 from "@/assets/photos/solyanka_1.jpg";
import solyanka_2 from "@/assets/photos/solyanka_2.jpg";
import lagman_soup_1 from "@/assets/photos/lagman_soup_1.jpg";
import lagman_soup_2 from "@/assets/photos/lagman_soup_2.jpg";
import baklavaImg from "@/assets/baklava-dessert.jpg";

export interface Dish {
  name: string;
  longDescription: string;
  price: number;
  image: string;
  images: string[];
  category: string;
  isSpecial?: boolean;
}

export const dishes: Dish[] = [
  // Первые блюда
  {
    name: "Токмач Ашы",
    longDescription: "Курица суповая, соль, морковь, домашняя лапша (яйцо, мука пшеничная)",
    price: 170,
    image: tukmach_soup_1,
    images: [tukmach_soup_1, tukmach_soup_2],
    category: "Первые блюда"
  },
  {
    name: "Борщ",
    longDescription: "Говядина суповая, свекольная заправка (морковь, лук, уксус, свекла, томатная паста, масло подсолненчное), капуста белокочанная, картофель, лавровый лист. Подается со сметаной или майонезом",
    price: 190,
    image: tukmach_soup_1,
    images: [tukmach_soup_1, tukmach_soup_2],
    category: "Первые блюда"
  },
  {
    name: "Пельмени",
    longDescription: "Мука пшеничная, мясо говядины, лук репчатый, яйцо куриное, соль, перец черный молотый",
    price: 220,
    image: pelmeni_1,
    images: [pelmeni_1, pelmeni_2],
    category: "Первые блюда"
  },
  {
    name: "Крем суп грибной",
    longDescription: "Шампиньоны, картофель, соль, сыр голландский (ферменты микробного происхождения), чиабатта (обжаренный батон), вода, сливки",
    price: 230,
    image: krem_soup_grib_1,
    images: [krem_soup_grib_1, krem_soup_grib_2],
    category: "Первые блюда"
  },
  {
    name: "Солянка",
    longDescription: "Говядина суповая, вода, пепперони, окорок (говядина / конина), колбаса вареная, лук, огурцы маринованные, оливки, томатная паста, лавровый лист, масло подсолнечное",
    price: 225,
    image: solyanka_1,
    images: [solyanka_1, solyanka_2],
    category: "Первые блюда"
  },
  {
    name: "Лагман",
    longDescription: "Говядина суповая, лук, масло подсолнечное, морковь, фасоль стручковая, капуста пекинская, томатная паста, аджика, перец болгарский, сельдерей, чеснок, лапша лагманная (вода, мука, яйцо)",
    price: 230,
    image: lagman_soup_1,
    images: [lagman_soup_1, lagman_soup_2],
    category: "Первые блюда"
  },

  // Вторые блюда
  {
    name: "Плов узбекский",
    longDescription: "Король узбекской кухни - плов из отборного риса с бараниной, морковью, луком и специальным набором специй. Готовится в казане по традиционной рецептуре. Подается с салатом из редьки и зеленым чаем.",
    price: 450,
    image: pilafficImg,
    images: [pilafficImg, baklavaImg],
    category: "Вторые блюда",
    isSpecial: true
  },
  {
    name: "Шашлык из баранины",
    longDescription: "Отборные кусочки молодой баранины, маринованные в специальном соусе с луком и специями. Готовится на открытом огне до золотистой корочки. Подается с маринованным луком, помидорами и лавашом.",
    price: 520,
    image: pilafficImg,
    images: [pilafficImg, baklavaImg],
    category: "Вторые блюда"
  },
  {
    name: "Манты с мясом",
    longDescription: "Традиционные манты с начинкой из рубленой баранины и говядины с луком. Тесто раскатывается тонко, начинка готовится из свежего мяса. Готовятся на пару в специальной мантышнице. Подаются со сметаной или соусом.",
    price: 380,
    image: pilafficImg,
    images: [pilafficImg, baklavaImg],
    category: "Вторые блюда"
  },

  // Десерты
  {
    name: "Пахлава медовая",
    longDescription: "Традиционная восточная сладость из тончайших слоев теста фило с начинкой из грецких орехов, миндаля и фисташек. Пропитывается ароматным медовым сиропом с розовой водой. Подается охлажденной.",
    price: 180,
    image: baklavaImg,
    images: [baklavaImg, pilafficImg],
    category: "Десерты",
    isSpecial: true
  },
  {
    name: "Халва кунжутная",
    longDescription: "Натуральная халва собственного приготовления из отборных семян кунжута. Готовится по традиционной рецептуре без добавления искусственных консервантов. Богата витаминами и минералами.",
    price: 150,
    image: baklavaImg,
    images: [baklavaImg, pilafficImg],
    category: "Десерты"
  },
  {
    name: "Чак-чак",
    longDescription: "Традиционная башкирская сладость из мелких кусочков теста, обжаренных в масле и залитых медовым сиропом. Формуется в виде горки и украшается орехами. Подается в качестве десерта к чаю.",
    price: 160,
    image: baklavaImg,
    images: [baklavaImg, pilafficImg],
    category: "Десерты"
  },

  // Чай и Напитки
  {
    name: "Зеленый чай",
    longDescription: "Высококачественный зеленый чай из горных районов Узбекистана. Обладает тонким ароматом и освежающим вкусом. Подается в традиционных пиалах с восточными сладостями. Способствует пищеварению.",
    price: 100,
    image: baklavaImg,
    images: [baklavaImg, pilafficImg],
    category: "Чай и Напитки"
  },
  {
    name: "Айран",
    longDescription: "Традиционный кисломолочный напиток на основе йогурта с добавлением соли и мяты. Отлично утоляет жажду и способствует пищеварению. Подается охлажденным в стеклянных стаканах.",
    price: 80,
    image: baklavaImg,
    images: [pilafficImg, baklavaImg],
    category: "Чай и Напитки"
  },
  {
    name: "Компот из сухофруктов",
    longDescription: "Ароматный компот из отборных сухофруктов: кураги, изюма, инжира и чернослива. Готовится без добавления сахара, сладость достигается естественными фруктовыми сахарами. Подается теплым или охлажденным.",
    price: 120,
    image: baklavaImg,
    images: [baklavaImg, pilafficImg],
    category: "Чай и Напитки"
  }
];

export const categories = [
  "Первые блюда",
  "Вторые блюда",
  "Салаты",
  "Гарниры",
  "Шашлыки",
  "Бургеры",
  "Шаурма",
  "Роллы",
  "Пицца",
  "Выпечка",
  "Кондитерские изделия",
  "Десерты",
  "Кофе",
  "Чай и Напитки"
];
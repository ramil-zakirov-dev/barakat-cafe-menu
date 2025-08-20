import withoutPhoto from "@/assets/without_photo.png";
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
import shurpa_soup_1 from "@/assets/photos/shurpa_soup_1.jpg";
import shurpa_soup_2 from "@/assets/photos/shurpa_soup_2.jpg";
import tom_yam_1 from "@/assets/photos/tom-yam_1.jpg";
import tom_yam_2 from "@/assets/photos/tom-yam_2.jpg";
import gorbusha_1 from "@/assets/photos/gorbusha_1.jpg";
import gorbusha_2 from "@/assets/photos/gorbusha_2.jpg";
import plov_1 from "@/assets/photos/plov_1.jpg";
import plov_2 from "@/assets/photos/plov_2.jpg";
import lagman_zharen_1 from "@/assets/photos/lagman_zharen_1.jpg";
import lagman_zharen_2 from "@/assets/photos/lagman_zharen_2.jpg";
import manty_1 from "@/assets/photos/manty_1.jpg";
import manty_2 from "@/assets/photos/manty_2.jpg";
import pasta_w_krevetk_1 from "@/assets/photos/pasta_w_krevetk_1.jpg";
import pasta_w_krevetk_2 from "@/assets/photos/pasta_w_krevetk_2.jpg";
import kurin_kril_1 from "@/assets/photos/kurin_kril_1.jpg";
import kurin_kril_2 from "@/assets/photos/kurin_kril_2.jpg";
import kurin_kril_teriyaki_1 from "@/assets/photos/kurin_kril_teriyaki_1.jpg";
import kurin_kril_teriyaki_2 from "@/assets/photos/kurin_kril_teriyaki_2.jpg";
import kazan_kebab_1 from "@/assets/photos/kazan_kebab_1.jpg";
import kazan_kebab_2 from "@/assets/photos/kazan_kebab_2.jpg";
import staick_1 from "@/assets/photos/staick_1.jpg";
import staick_2 from "@/assets/photos/staick_2.jpg";
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
    image: withoutPhoto,
    images: [withoutPhoto],
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
  {
    name: "Уха по царски",
    longDescription: "Набор суповой рыбный (форель),соль, лавровый лист, болгарский перец, морковь, лук, картофель",
    price: 235,
    image: withoutPhoto,
    images: [withoutPhoto],
    category: "Первые блюда"
  },
  {
    name: "Чучвара",
    longDescription: "Пельмени, Бульон мясной (говядина), лук, масло подсолнечное, морковь, фасоль стручковая, капуста пекинская, томатная паста, аджика, перец болгарский, сельдерей",
    price: 240,
    image: pelmeni_1,
    images: [pelmeni_1, pelmeni_2],
    category: "Первые блюда"
  },
  {
    name: "Шурпа говядина",
    longDescription: "Говядина суповая, соль, перец, лавровый лист, картофель, морковь",
    price: 320,
    image: shurpa_soup_1,
    images: [shurpa_soup_1, shurpa_soup_2],
    category: "Первые блюда"
  },
  {
    name: "Шурпа баранина",
    longDescription: "Баранина суповая, соль, перец, лавровый лист, картофель, морковь",
    price: 340,
    image: shurpa_soup_1,
    images: [shurpa_soup_1, shurpa_soup_2],
    category: "Первые блюда"
  },
  {
    name: "Уха по норвежски",
    longDescription: "Набор суповой рыбный (форель), соль, лавровый лист, болгарский перец, морковь, лук, картофель, сливки",
    price: 370,
    image: withoutPhoto,
    images: [withoutPhoto],
    category: "Первые блюда"
  },
  {
    name: "Том ям",
    longDescription: "Куриное мясо, вода, паста (лемонграсс, красный перец, чеснок, имбирь, лук, рыбный соус, креветочная паста, чеснок), креветки, мидии, кокосовое молоко. Подается с холодным рисом (кунжут). Лимон/лайм",
    price: 440,
    image: tom_yam_1,
    images: [tom_yam_1, tom_yam_2],
    category: "Первые блюда",
    isSpecial: true
  },

  // Вторые блюда
  {
    name: "Котлета куриная",
    longDescription: "Куриное мясо, белый хлеб, соль, перец, лук, чеснок, молоко, яйцо, панировочные сухари",
    price: 150,
    image: withoutPhoto,
    images: [withoutPhoto],
    category: "Вторые блюда",
  },
  {
    name: "Котлета говяжья",
    longDescription: "Мясо говядины, белый хлеб, соль, перец, лук, чеснок, яйцо, панировочные сухари",
    price: 165,
    image: withoutPhoto,
    images: [withoutPhoto],
    category: "Вторые блюда",
  },
  {
    name: "Горбуша запеченая",
    longDescription: "Филе горбуши, лук, морковь, масло, майонез, сыр моцарелла (с ферментами микробного происхождения)",
    price: 220,
    image: gorbusha_1,
    images: [gorbusha_1, gorbusha_2],
    category: "Вторые блюда",
  },
  {
    name: "Восточный плов",
    longDescription: "Мясо говядины, масло, лук, морковь, рис, чеснок, соль, зира",
    price: 215,
    image: plov_1,
    images: [plov_1, plov_2],
    category: "Вторые блюда",
  },
  {
    name: "Лагман жареный",
    longDescription: "Мясо говядины, фасоль стручковая, томатная паста, соль, перец, подсолнечное масло, лапша лагманная (яйцо, мука)",
    price: 215,
    image: lagman_zharen_1,
    images: [lagman_zharen_1, lagman_zharen_2],
    category: "Вторые блюда",
  },
  {
    name: "Мясо по французски",
    longDescription: "Куриное филе, помидоры, шампиньоны, соль, перец, сыр Моцарелла (ферменты микробного происхождения), майонез, яйцо",
    price: 230,
    image: withoutPhoto,
    images: [withoutPhoto],
    category: "Вторые блюда",
  },
  {
    name: "Манты (4 шт)",
    longDescription: "Мука, вода, яйцо, соль, филе говядины, лук, перец, соль, зира",
    price: 230,
    image: manty_1,
    images: [manty_1, manty_2],
    category: "Вторые блюда",
  },
  {
    name: "Паста с креветками ",
    longDescription: "Паста, сливки, креветки, сыр голландский (ферментный препарат микробного происхождения), соль",
    price: 235,
    image: pasta_w_krevetk_1,
    images: [pasta_w_krevetk_1, pasta_w_krevetk_2],
    category: "Вторые блюда",
  },
  {
    name: "Куриные крылышки ",
    longDescription: "Куриные крылышки, майонез, томат, паста, соль, перец, жидкий дым, аджика",
    price: 230,
    image: kurin_kril_1,
    images: [kurin_kril_1, kurin_kril_2],
    category: "Вторые блюда",
  },
  {
    name: "Гуляш говядина",
    longDescription: "Мясо говядины, лук, морковь, томатная паста, соль, перец",
    price: 260,
    image: withoutPhoto,
    images: [withoutPhoto],
    category: "Вторые блюда",
  },
  {
    name: "Крылышки в соусе терияки",
    longDescription: "Куриные крылышки, томат, соус терияки (вода, сахар, соевый соус, соль, уксус, имбирь, чеснок, сахарный колер, собрат калия, перец). Возможно наличие следов арахиса, кунжута, рыбы, яиц и продуктов их переработки",
    price: 265,
    image: kurin_kril_teriyaki_1,
    images: [kurin_kril_teriyaki_1, kurin_kril_teriyaki_2],
    category: "Вторые блюда",
  },
  {
    name: "Стрипсы",
    longDescription: "Куриные крылышки, яйцо, панировка (панировочные сухари), соль",
    price: 260,
    image: withoutPhoto,
    images: [withoutPhoto, withoutPhoto],
    category: "Вторые блюда",
  },
  {
    name: "Мясо по-чешски",
    longDescription: "Отварное мясо говядины, фасоль стручковая, болгарский перец, помидоры, шампиньоны, морковча, соль, перец, сыр моцарелла, майонез, яйцо",
    price: 300,
    image: withoutPhoto,
    images: [withoutPhoto, withoutPhoto],
    category: "Вторые блюда",
  },
  {
    name: "Мясо по-тайски из говядины",
    longDescription: "Вырезка говядины, соус (соевый соус, аджика, томатная паста, свежие огурцы), соль, перец, зира",
    price: 310,
    image: withoutPhoto,
    images: [withoutPhoto, withoutPhoto],
    category: "Вторые блюда",
  },
  {
    name: "Стейк семга 100 гр.",
    longDescription: "Семга, соль, оливковое масло",
    price: 450,
    image: gorbusha_1,
    images: [gorbusha_1, gorbusha_2],
    category: "Вторые блюда",
  },
  {
    name: "Казан-кебаб из говядины",
    longDescription: "Мясо говядины (вырезка, ребро) болгарский перец, соль, перец, зира, лук маринованный в уксусе. Подается с огурцами и помидорами",
    price: 490,
    image: kazan_kebab_1,
    images: [kazan_kebab_1, kazan_kebab_2],
    category: "Вторые блюда",
  },
  {
    name: "Казан-кебаб из баранины",
    longDescription: "Мясо баранины (вырезка, ребро) болгарский перец, соль, перец, зира, лук маринованный в уксусе. Подается с огурцами и помидорами",
    price: 540,
    image: kazan_kebab_1,
    images: [kazan_kebab_1, kazan_kebab_2],
    category: "Вторые блюда",
  },
  {
    name: "Стейк говядина",
    longDescription: "Вырезка говяжья, приправа (соль морская, сушеный чеснок, перец), оливковое масло",
    price: 550,
    image: staick_1,
    images: [staick_1, staick_2],
    category: "Вторые блюда",
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
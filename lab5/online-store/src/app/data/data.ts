import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

export const CATEGORIES: Category[] = [
  { id: 1, name: 'Smartphones' },
  { id: 2, name: 'Laptops' },
  { id: 3, name: 'Headphones' },
  { id: 4, name: 'Tablets' }
];

export const PRODUCTS: Product[] = [
    {
        id: 1,
        name: 'Смартфон Apple iPhone 17 Pro 256Gb оранжевый',
        description: 'Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе непревзойденную производительность, потрясающую камеру и яркий OLED-дисплей.',
        price: 848700,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pc3/p95/64168416.png?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000',
        likes: 0,
        categoryId: 1
      },
      {
        id: 2,
        name: 'Смартфон Xiaomi Redmi 13C 8 ГБ/256 ГБ черный',
        description: 'Представляем Xiaomi Redmi 13C — смартфон, который сочетает в себе высокую производительность, современные технологии и доступную цену.',
        price: 59997,
        rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/hf4/h4b/84526902771742.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h0f/h2d/84526902837278.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h94/heb/84957845651486.jpg?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000',
        likes: 0,
        categoryId: 1
      },
      {
        id: 3,
        name: 'Смартфон Redmi 9A 2 ГБ/32 ГБ зеленый',
        description: 'Xiaomi Redmi 9A - версия бюджетного смартфона, главными особенностями которого являются большой экран с диагональю 6.53" и емкий аккумулятор на 5000 мАч.',
        price: 100000,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/ha5/hb2/63939356950558.jpg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/h72/h71/63939361013790.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hb6/he2/63939367632926.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h07/h4f/63939476553758.jpg?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/redmi-9a-2-gb-32-gb-zelenyi-100436948/?c=750000000',
        likes: 0,
        categoryId: 1
      },
      {
        id: 4,
        name: 'Смартфон Samsung Galaxy A56 5G 8 ГБ/256 ГБ серый',
        description: 'Samsung Galaxy A56 5G — мощный и стильный смартфон с поддержкой сетей пятого поколения, который станет вашим надёжным помощником.',
        price: 207739,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pb5/pa3/30496239.png?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p49/pa1/30496240.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pd8/pa0/30496244.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p84/pa0/30496247.png?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-a56-5g-8-gb-256-gb-seryi-136420155/?c=750000000',
        likes:0,
        categoryId: 1
      },
      {
        id: 5,
        name: 'Смартфон Apple iPhone 15 128Gb розовый',
        description: 'Apple iPhone 15 - смартфон, сочетающий в себе передовую оптику, мощный процессор, долгоиграющую батарею и запоминающийся дизайн.',
        price: 403252,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h81/h37/86303335186462.jpg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/hea/h39/83559339655198.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hea/h39/83559339655198.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h22/hf6/83559333953566.png?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-rozovyi-113137949/?c=750000000',
        likes: 0,
        categoryId: 1
      },
      //
      {
        id: 6,
        name: 'Ноутбук PRYME N5095 15.6" / 16 Гб / SSD 512 Гб / Win 11 Pro / FHK14BK25',
        description: 'PRYME N5095 идеально подойдёт для студентов, офисных сотрудников и всех, кто ценит баланс между производительностью и мобильностью. Он легко справляется с повседневными задачами.',
        price: 189990,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p77/pfd/45122459.jpg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/pd2/pfa/45122462.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p9a/pfa/45122464.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p9a/pfa/45122464.jpg?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/pryme-n5095-15-6-16-gb-ssd-512-gb-win-11-pro-fhk14bk25-133963600/?c=750000000',
        likes: 0,
        categoryId: 2
      },
      {
        id: 7,
        name: 'Ноутбук Apple MacBook Air 13 2020 13.3" / 8 Гб / SSD 256 Гб / macOS / MGN63RU/A',
        description: 'Первый чип, разработанный специально для Mac. Поразительно, но система на чипе Apple M1 вмещает 16 миллиардов транзис­торов и объединяет центральный и графи­ческий процессоры',
        price: 439989,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/h2d/h82/83648592183326.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h3a/h0d/64213216755742.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hdb/hb3/64213181169694.jpg?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000',
        likes: 0,
        categoryId: 2
      },
      {
        id: 8,
        name: 'Ноутбук Acer Aspire 3 15.6" / 8 Гб / SSD 256 Гб / Win 11 / A315-35 / NX.A9AEX.00H',
        description: 'Воспроизводите видео быстро и без задержек, просматривайте веб-страницы или выполняйте рабочие задачи благодаря процессору и видеокарте от Intel®.',
        price: 159984,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h0d/hc8/84558388887582.jpg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/h0d/hc8/84558388887582.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h8f/h39/84558388953118.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hf7/h99/84558389084190.jpg?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/acer-aspire-3-15-6-8-gb-ssd-256-gb-win-11-a315-35-nx-a9aex-00h-114792265/?c=750000000',
        likes: 0,
        categoryId: 2
      },
      {
        id: 9,
        name: 'Ноутбук Acer Nitro Lite NL16-71G 16" / 16 Гб / SSD 512 Гб / Без ОС / NH.DAAER.001',
        description: 'Высококачественный дисплей с диагональю 16 дюймов гарантирует насыщенную и четкую картинку. Экран выполнен по технологии IPS с разрешением WUXGA и частотой обновления 165 Гц',
        price: 435899,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pcc/pc3/74964289.png?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p38/pc6/74964290.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p54/pc6/74964291.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p8d/pc6/74964293.png?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/acer-nitro-lite-nl16-71g-16-16-gb-ssd-512-gb-bez-os-nh-daaer-001-148703886/?c=750000000',
        likes: 0,
        categoryId: 2
      },
      {
        id: 10,
        name: 'Ноутбук Apple MacBook Air 13 2025 / 16 Гб / SSD 512 Гб / macOS / MW133',
        description: 'Стильный дизайн и фантастическая тонкость - все это о ноутбуках серии Apple MacBook Air. Невозможное возможно - мощные ноутбуки этой серии имеют толщину от 0,4 до 1,94 сантиметров.',
        price: 651607,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pb9/p57/37156055.jpg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/pb9/p57/37156055.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pd5/p57/37156056.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pb9/p57/37156055.jpg?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-512-gb-macos-mw133-138242483/?c=750000000',
        likes: 0,
        categoryId: 2
      },
      //
      {
        id: 11,
        name: 'Наушники HONOR Choice Headphones белый',
        description: 'Наушники HONOR CHOICE Headphones WRL ROS-ME01 — это беспроводная накладная стереогарнитура с пассивной системой шумоподавления и поддержкой Bluetooth',
        price: 23990,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pfe/p4a/40503534.jpg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/pe1/p4a/40503535.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pc5/p4a/40503536.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pa9/p4a/40503537.jpg?format=gallery-medium' ],
        link: 'https://kaspi.kz/shop/p/naushniki-honor-choice-headphones-belyi-139165804/?c=750000000',
        likes:0,
        categoryId: 3
      },
      {
        id: 12,
        name: 'Наушники NOTHING Headphone 1 белый',
        description: 'Nothing Headphone 1 – это воплощение инновационного дизайна и передовых технологий, созданное для тех, кто ценит безупречный звук и индивидуальность. ',
        price: 137198,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p2c/p19/56994687.jpg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p65/p19/56994689.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pd1/p1b/56994690.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p7a/p1c/56994696.jpg?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/naushniki-nothing-headphone-1-belyi-143636633/?c=750000000',
        likes: 0,
        categoryId: 3
      },
      {
        id: 13,
        name: 'Наушники Apple AirPods 4 белый цвет',
        description: 'Обновленные беспроводные наушники Apple AirPods 4 с персонализированным пространственным аудио и адаптивным эквалайзером сделают музыку неотъемлемой частью твоей жизни.',
        price: 59975,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/pec/pd7/97865769.jpeg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h9f/had/87309385662494.png?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-4-belyi-124333372/?c=750000000',
        likes: 0,
        categoryId: 3
      },
      {
        id: 14,
        name: 'Наушники Apple AirPods Pro white color',
        description: 'Как и предыдущая версия, наушники снабжены активным шумоподавлением, но теперь инженеры Apple улучшили в новых аирподсах режим прозрачности',
        price: 103368,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h14/h8a/84108189761566.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hf4/hf2/84108189827102.jpg?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000',
        likes: 0,
        categoryId: 3
      },
      {
        id: 15,
        name: 'Наушники JBL Tune 510BT черный/dark black ',
        description: 'Наушники JBL Tune 510BT позволяют наслаждаться мощными басами благодаря технологии JBL Pure Bass без проводов. Эти простые в использовании наушники работают до 40 часов',
        price: 14364,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hef/h29/64030233788446.jpg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/h36/ha0/64030236114974.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/he5/he2/64030238048286.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h87/h63/64030305714206.jpg?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/naushniki-jbl-tune-510bt-chernyi-101420081/?c=750000000',
        likes: 0,
        categoryId: 3
      },
      //
      {
        id: 16,
        name: 'Планшет Apple iPad A16 11 2025 Wi-Fi 11 дюйм 6 Гб/128 Гб',
        description: 'Представляем iPad A16 2025 — ваш идеальный спутник для работы и развлечений! Этот мощный планшет с 11-дюймовым экраном и высоким разрешением обеспечит вам яркие',
        price: 203182,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p85/pe5/37011897.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p69/pe5/37011898.png?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-serebristyi-138199634/?c=750000000',
        likes:0,
        categoryId: 4
      },
      {
        id: 17,
        name: 'Планшет Xiaomi Redmi Pad 2 4G 11 дюйм 8 Гб/256 Гб серый',
        description: 'Xiaomi Redmi Pad 2 4G — универсальный планшет с ярким 11-дюймовым экраном и поддержкой мобильной связи, идеально подходящий для работы, учебы и развлечений.',
        price: 129990,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p34/pcd/81439931.jpg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/pbd/p9b/46318883.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pa0/p9b/46318884.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p4c/p9b/46318887.jpg?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/xiaomi-redmi-pad-2-4g-11-djuim-8-gb-256-gb-seryi-140640417/?c=750000000',
        likes: 0,
        categoryId: 4
      },
      {
        id: 18,
        name: 'Планшет Huawei MatePad 11.5 2025 PaperMatte 11.5 дюйм 8 Гб/256 Гб',
        description: 'Huawei MatePad 11.5 2025 PaperMatte — универсальный планшет с ярким матовым экраном и мощным процессором Kirin T82B для работы и развлечений.',
        price: 224890,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p7f/p08/65766347.png?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/pf4/p12/65766379.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p7c/p15/65766381.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p98/p15/65766382.jpg?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/huawei-matepad-11-5-2025-papermatte-11-5-djuim-8-gb-256-gb-fioletovyi-podarok-145939369/?c=750000000',
        likes: 0,
        categoryId: 4
      },
      {
        id: 19,
        name: 'Планшет Huawei MatePad SE AGS6-W09 11 дюйм 6 Гб/128 Гб',
        description: 'Характеристики Планшет Huawei MatePad SE AGS6-W09 11 дюйм 6 Гб/128 Гб серый. Универсальный планшет с ярким матовым экраном для работы, учебы и развлечений',
        price: 73329,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hc5/h60/86746842595358.jpg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/h26/hdf/86746842660894.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hf8/hb7/86746842726430.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hca/h23/86746842988574.jpg?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/huawei-matepad-se-ags6-w09-11-djuim-6-gb-128-gb-seryi-122142537/?c=750000000',
        likes: 0,
        categoryId: 4
      },
      {
        id: 20,
        name: 'Планшет Samsung Galaxy Tab A9 LTE 8.7 дюйм 4 Гб/64 Гб серый',
        description: 'Samsung Galaxy Tab A9 LTE — универсальный планшет для работы, учебы и развлечений, сочетающий в себе производительность, портативность и стильный дизайн.',
        price: 119156,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p3b/p01/77344134.bin?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p57/p01/77344135.bin?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p73/p01/77344136.bin?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pac/p01/77344138.bin?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-a9-lte-8-7-djuim-4-gb-64-gb-seryi-113807107/?c=750000000',
        likes: 0,
        categoryId: 4
      }
];
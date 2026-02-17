import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';



@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products: Product[] = [
    {
      id: 1,
      name: 'Смартфон Apple iPhone 15 Pro 8/256 ГБ черный цвет iOS 17',
      description: 'Apple iPhone 15 Pro - сверхпрочный смартфон, изготовленный из титана. Устройство работает на мощном процессоре Apple A17 Pro и обладает передовой оптикой.',
      price: 750000,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/86302548557854.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc3/h33/86319885680670.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h7e/h70/86319885713438.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h54/h9a/86319885746206.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-chernyi-113138191/?srsltid=AfmBOopw5v-K685JQD4yJz7vs4N6P_7V0pyLLB6I2zsB-IvBi5jDOkWe'
    },
    {
      id: 2,
      name: 'Смартфон Samsung Galaxy S24 FE 5G 8 ГБ/128 ГБ черный',
      description: 'Samsung Galaxy S24 FE 5G — это мощный и стильный смартфон с передовыми технологиями, который станет вашим надёжным помощником в повседневной жизни.',
      price: 265985,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pdb/p79/1610315.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pbe/p79/1610316.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p60/p7d/1610304.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p0c/p7d/1610307.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-fe-5g-8-gb-128-gb-chernyi-128143528/?c=750000000'
    },
    {
        id: 3,
        name: 'Ноутбук ASUS VivoBook 15 X1502VA-BQ1274 15.6" / 16 Гб / SSD 512 Гб',
        description: 'ASUS VivoBook 15 X1502VA-BQ1274 — универсальный ноутбук для работы, учебы и развлечений, сочетающий в себе производительность, портативность и стильный дизайн.',
        price: 319563,
        rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pea/p77/53467074.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/pb1/p77/53467076.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p79/p77/53467078.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pce/p77/53467075.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/asus-vivobook-15-x1502va-bq1274-15-6-16-gb-ssd-512-gb-bez-os-90nb10t2-m01th0-142645394/?c=750000000'
      },
      {
        id: 4,
        name: 'Смарт-часы YUNTEKO Gi20 47 мм розовый-озовый',
        description: 'Смарт-часы YUNTEKO Gi20 — отличный выбор и стильный аксессуар для активной жизни, сочетающий функциональность и удобство в компактном корпусе.',
        price: 15888,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h49/h9a/84355202383902.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/ha0/h23/84353783431198.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/had/h80/84353783463966.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h24/h3f/84355202711582.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/yunteko-gi20-47-mm-rozovyi-rozovyi-114087319/?c=750000000'
      },
      {
        id: 5,
        name: 'Планшет Apple iPad A16 11 2025 Wi-Fi 11 дюйм 6 Гб/128 Гб розовый',
        description: 'Представляем iPad A16 2025 — ваш идеальный спутник для работы и развлечений! Этот планшет с мощным процессором Apple A16 и емким аккумулятором обеспечит вам высокую производительность и длительное время работы.',
        price: 212450,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pce/p96/37011919.png?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/pce/p96/37011919.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pad/p8c/37011948.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p91/p8c/37011949.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-rozovyi-138199640/?c=750000000'
      },
      {
        id: 6,
        name: 'Ноутбук Apple MacBook Air 13 2020 13.3" / 8 Гб / SSD 256 Гб / macOS',
        description: 'Первый чип, разработанный специально для Mac. Поразительно, но система на чипе Apple M1 вмещает 16 миллиардов транзис­торов и объединяет центральный и графи­ческий процессоры, систему Neural Engine, контроллеры ввода-вывода.',
        price: 419900,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h2d/h82/83648592183326.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h3a/h0d/64213216755742.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hdb/hb3/64213181169694.jpg?format=gallery-medium'
        ],
        link: 'http://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000'
      },
      {
        id: 7,
        name: 'Xerox Phaser 3020BI белый',
        description: 'Xerox Phaser 3020 - это монохромный лазерный принтер, который отлично подойдет для персонального использования. Белый матовый корпус и стильный дизайн будут смотреться органомично на любом письменном столе. Благодаря своему маленькому весу и компактным размерам.',
        price: 69990,
        rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hd2/hf9/63757710032926.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/hd2/hf9/63757710032926.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h6c/h70/63757710655518.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h3f/h91/63757714685982.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/xerox-phaser-3020bi-belyi-1500208/?c=750000000'
      },
      {
        id: 8,
        name: 'Холодильник Indesit DS 4180 G серебристый',
        description: 'Холодильник INDESIT DS 4180 G оборудован двумя камерами и имеет полезный объем 310 л. Морозильный отсек в данной модели располагается в нижней части устройства. Полки внутри камер холодильника изготовлены из прочного закаленного стекла, которое с легкостью выдержит продукты.',
        price: 185444,
        rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pf2/pec/17480122.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/pf2/pec/17480122.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p32/pea/17480118.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p2b/ped/17480124.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-watch-series-9-333/'
      },
      {
        id: 9,
        name: 'Игровая приставка Sony PlayStation 5 Slim',
        description: 'Иммерсивный игровой опыт в тонком форм-фактореПриготовьтесь встречать новую PlayStation 5 Slim. ',
        price: 304237,
        rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/pef/p29/78474502.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p0b/p2a/78474503.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p43/p2a/78474505.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000'
      },
      {
        id: 10,
        name: 'Наушники Apple AirPods Pro 3 белый',
        description: 'Наушники Apple AirPods Pro 3 — это идеальный выбор для тех, кто ценит превосходное качество звука.',
        price: 130626,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pa6/pc5/64466279.png?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p89/pc5/64466278.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p6d/pc5/64466277.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p12/pc8/64466280.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-3-belyi-145554533/?c=750000000'
      }
      
  ];
}

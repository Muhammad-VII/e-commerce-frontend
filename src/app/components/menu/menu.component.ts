import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  products:any[] = [
    {
      id:1,
      productName:"I Phone",
      productDes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eligendi ea culpa quam consequatur",
      productPrice: 3.99,
      productImage: `https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumables/XCM_Manual_1406245_4467557_Egypt_EG_GW_DC_Vday22_Makeup_Gifts_EN_379x304_1X._SY304_CB628229502_.jpg`
    },

    {
      id:1,
      productName:"I Phone",
      productDes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eligendi ea culpa quam consequatur",
      productPrice: 3.99,
      productImage: `https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumables/XCM_Manual_1406245_4467557_Egypt_EG_GW_DC_Vday22_Makeup_Gifts_EN_379x304_1X._SY304_CB628229502_.jpg`
    },

    {
      id:1,
      productName:"I Phone",
      productDes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eligendi ea culpa quam consequatur",
      productPrice: 3.99,
      productImage: `https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumables/XCM_Manual_1406245_4467557_Egypt_EG_GW_DC_Vday22_Makeup_Gifts_EN_379x304_1X._SY304_CB628229502_.jpg`
    },

    {
      id:1,
      productName:"I Phone",
      productDes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eligendi ea culpa quam consequatur",
      productPrice: 3.99,
      productImage: `https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumables/XCM_Manual_1406245_4467557_Egypt_EG_GW_DC_Vday22_Makeup_Gifts_EN_379x304_1X._SY304_CB628229502_.jpg`
    },

    {
      id:1,
      productName:"I Phone",
      productDes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eligendi ea culpa quam consequatur",
      productPrice: 3.99,
      productImage: `https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumables/XCM_Manual_1406245_4467557_Egypt_EG_GW_DC_Vday22_Makeup_Gifts_EN_379x304_1X._SY304_CB628229502_.jpg`
    },

    {
      id:1,
      productName:"I Phone",
      productDes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eligendi ea culpa quam consequatur",
      productPrice: 3.99,
      productImage: `https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumables/XCM_Manual_1406245_4467557_Egypt_EG_GW_DC_Vday22_Makeup_Gifts_EN_379x304_1X._SY304_CB628229502_.jpg`
    },

    {
      id:1,
      productName:"I Phone",
      productDes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eligendi ea culpa quam consequatur",
      productPrice: 3.99,
      productImage: `https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumables/XCM_Manual_1406245_4467557_Egypt_EG_GW_DC_Vday22_Makeup_Gifts_EN_379x304_1X._SY304_CB628229502_.jpg`
    },

    {
      id:1,
      productName:"I Phone",
      productDes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eligendi ea culpa quam consequatur",
      productPrice: 3.99,
      productImage: `https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumables/XCM_Manual_1406245_4467557_Egypt_EG_GW_DC_Vday22_Makeup_Gifts_EN_379x304_1X._SY304_CB628229502_.jpg`
    },
    
  ]
  constructor() { }
  addToCart(prodId:number) {
    console.log(prodId);
  }
  ngOnInit(): void {
  }

}

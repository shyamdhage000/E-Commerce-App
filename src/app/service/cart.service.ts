import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  sum:any=0
  sub:any=0

  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    

   
    
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return Math.round(grandTotal * 100) / 100;
  }
  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
  incrementQuantity(product:any){
    this.cartItemList.map((a:any,index:any)=>{
      if(product.id===a.id){
       
        this.sum=product.total+product.price;
        product.total=Math.round(this.sum * 100) / 100;
        product.quantity+=1;
       
        
      }
    })
  }

  decrementQuantity(product:any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id===a.id){
        if(product.total!==product.price)
        {
       this.sub=product.total-product.price;
        product.total=Math.round(this.sub*100)/100;
        product.quantity-=1;
        
        }
      }
    })
  }






}
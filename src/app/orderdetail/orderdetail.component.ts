import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.component.html',
  styleUrls: ['./orderdetail.component.css']
})
export class OrderdetailComponent implements OnInit {
  orderList:any[]=[];
  orderList2:any[]=[];
  val:any;
  orderID:any;
  orderName:any;
  amount:any;
  itemId:any;
  itemName:any;
  iamount:any;
  isEditOrder:any = false;
  isEditOrderItem:any = false;
  showOrderInput:any= 0;
  btn:any;
  showItemInput:any = 0;
  btn1:any;
  btn3:any = false;
  orderEditIndex:any;
  itemEditIndex:any;
  item:any;



  constructor() { }

  ngOnInit(): void {
  }
  openInput(){

  }
  addOrder(){
    if(this.isEditOrder == false){
      this.orderList.push({
        orderID: this.orderID,
        orderName: this.orderName,
        amount: this.amount,
        list: []
      })
    }else{
      this.orderList[this.orderEditIndex].orderID = this.orderID;
      this.orderList[this.orderEditIndex].orderName = this.orderName;
      this.orderList[this.orderEditIndex].amount = this.amount;
    };
    console.log(this.orderList);
    this.orderID="";
    this.orderName="";
    this.amount="";
    this.isEditOrder = false;
  }
  
  viewOrderItems(v:any){
    this.val=v;
    this.orderList2=this.orderList[this.val].list;
    this.btn3 = true;
    this.item = this.orderList[this.val].orderName;
  }

  addOrderItem(){
    if(this.isEditOrderItem == false){
      this.orderList[this.val].list.push({
        itemId: this.itemId,
        itemName: this.itemName,
        iamount: this.iamount
    })
    }else{
      this.orderList[this.val].list[this.itemEditIndex].itemId = this.itemId;
      this.orderList[this.val].list[this.itemEditIndex].itemName = this.itemName;
      this.orderList[this.val].list[this.itemEditIndex].iamount = this.iamount;
    }
    
    console.log(this.orderList[this.val].list[this.val])
    this.orderList2=this.orderList[this.val].list
    console.log(this.orderList)
    this.itemId='';
    this.itemName='';
    this.iamount='';
    this.isEditOrderItem = false;
  }
  delOrder(i:any){
    this.orderList.splice(i,1);
  }
  delOrderItems(del:any){
    this.orderList[this.val].list.splice(del,1)
  }
  editOrders(i:any){
    this.isEditOrder = true;
    this.orderEditIndex = i;
    this.orderID=this.orderList[i].orderID;
    this.orderName=this.orderList[i].orderName;
    this.amount=this.orderList[i].amount;
  }
  editOrderItems(i:any){
    this.isEditOrderItem = true;
    this.itemEditIndex = i;
    this.itemId=this.orderList[this.val].list[i].itemId;
    this.itemName=this.orderList[this.val].list[i].itemName;
    this.iamount=this.orderList[this.val].list[i].iamount;
  }
  cancelOrder(){
    this.orderID="";
    this.orderName="";
    this.amount=""
  }  
  cancelOrderItem(){
    this.itemId='';
    this.itemName='';
    this.iamount=''
  }
  btnToggle(){
    this.showOrderInput++;
    console.log(this.showOrderInput);
    if((this.showOrderInput)%2 == 0){
      this.btn = false;
      console.log(this.btn);
    }else{
      this.btn = true;
      console.log(this.btn);
    }
  }
  btnToggle1(){
    this.showItemInput++;
    console.log(this.showItemInput);
    if((this.showItemInput)%2 == 0){
      this.btn1 = false;
      console.log(this.btn1);
    }else{
      this.btn1 = true;
      console.log(this.btn1);
    }
  }
}
// function forEach(orders: { orderId: string; orderName: string; amount: string; list: never[]; }) {
//   throw new Error('Function not implemented.');
// }


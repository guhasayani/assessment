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
  flag:any = false;
  flag1:any = false;
  flag3:any= 0;
  btn:any;
  flag4:any = 0;
  btn1:any;
  btn3:any = false;
  index:any;
  index1:any;



  constructor() { }

  ngOnInit(): void {
  }
  openInput(){

  }
  addRow(){
    if(this.flag == false){
      this.orderList.push({
        orderID: this.orderID,
        orderName: this.orderName,
        amount: this.amount,
        list: []
      })
    }else{
      this.orderList[this.index].orderID = this.orderID;
      this.orderList[this.index].orderName = this.orderName;
      this.orderList[this.index].amount = this.amount;
    }

    console.log(this.orderList);
    this.orderID="";
    this.orderName="";
    this.amount=""
  }
  
  passValue(v:any){
    this.val=v;
    this.orderList2=this.orderList[this.val].list;
    this.btn3 = true;
  }

  addRow1(){
    if(this.flag1 == false){
      this.orderList[this.val].list.push({
        itemId: this.itemId,
        itemName: this.itemName,
        iamount: this.iamount
    })
    }else{
      this.orderList[this.val].list[this.index1].itemId = this.itemId;
      this.orderList[this.val].list[this.index1].itemName = this.itemName;
      this.orderList[this.val].list[this.index1].iamount = this.iamount;
    }
    
    console.log(this.orderList[this.val].list[this.val])
    this.orderList2=this.orderList[this.val].list
    console.log(this.orderList)
    this.itemId='';
    this.itemName='';
    this.iamount=''
  }
  delValue(i:any){
    this.orderList.splice(i,1);
  }
  delValue1(del:any){
    this.orderList[this.val].list.splice(del,1)
  }
  editValue(i:any){
    this.flag = true;
    this.index = i;
    this.orderID=this.orderList[i].orderID;
    this.orderName=this.orderList[i].orderName;
    this.amount=this.orderList[i].amount;
  }
  editValue1(i:any){
    this.flag1 = true;
    this.index1 = i;
    this.itemId=this.orderList[this.val].list[i].itemId;
    this.itemName=this.orderList[this.val].list[i].itemName;
    this.iamount=this.orderList[this.val].list[i].iamount;
  }
  cancel(){
    this.orderID="";
    this.orderName="";
    this.amount=""
  }  
  cancel1(){
    this.itemId='';
    this.itemName='';
    this.iamount=''
  }
  btnToggle(){
    this.flag3++;
    console.log(this.flag3);
    if((this.flag3)%2 == 0){
      this.btn = false;
      console.log(this.btn);
    }else{
      this.btn = true;
      console.log(this.btn);
    }
  }
  btnToggle1(){
    this.flag4++;
    console.log(this.flag4);
    if((this.flag4)%2 == 0){
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


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'erp';

contacts=[
  {name:"c1",phoneNo:123456},
  {name:"c2",phoneNo:12356},
  {name:"c3",phoneNo:12346}
]

saveContact(contact:{name:string,phoneNo:number}){
this.contacts.push({
  name:contact.name,
  phoneNo:contact.phoneNo

})
}


}

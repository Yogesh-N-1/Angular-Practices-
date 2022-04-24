import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
parentData:string='data from parent';//tp send data to child componet
arryObj=[
  {id:5,
    name:'yog',
    mob:99988
  },
  {
    city:'pune',
    country:'india'
}
]
arry={id:5,
  name:'yog',
  mob:99988
}


//from child to parent data below
childToParent:string='';

  constructor() { }

  ngOnInit() {
  }

}

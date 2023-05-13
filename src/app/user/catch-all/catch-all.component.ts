import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catch-all',
  templateUrl: './catch-all.component.html',
  styleUrls: ['./catch-all.component.css']
})
export class CatchAllComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // ==============================================
  selectedItem: string = "Human handoff";
  showList: boolean = false
  toggleList() {
    this.showList = !this.showList
  }
  selectItem(item: string) {
    this.selectedItem = item
  }
  // ==============================================
  selectedHandoffItem: string = "Assign agent";
  showHandoffList: boolean = false
  toggleHandoffList() {
    this.showHandoffList = !this.showHandoffList
  }
  selectHandoffItem(item: string) {
    this.selectedHandoffItem = item
  }
  // ======================================
  numberOfChar:string='';
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { GridOptions } from 'ag-grid-community';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  columnDefs = [];
  rowData = [];
  filter = '';
  gridOptions;

  constructor(public navCtrl: NavController,private http: HttpClient) {
    this.gridOptions = <GridOptions>{
      context: {
          componentParent: this
      }
     };

    this.columnDefs = [
      {headerName: 'ID', field: 'id' },
      {headerName: 'Make', field: 'make' },
      {headerName: 'Model', field: 'model', editable: true, cellClass: ['col-editable'] },
      {headerName: 'Price', field: 'price'},
      {headerName: 'Field 5', field: 'price'},
      {headerName: 'Field 6', field: 'price'},
      {headerName: 'Field 7', field: 'price'},
      {headerName: 'Field 8', field: 'price'},
      {headerName: 'Field 9', field: 'price'},
    ];

    let PotentialMake = ['Toyota', 'Ford', 'Porsche'];
    let PotentialModel = ['Celica', 'Mondeo', 'Boxter'];
    let PotentialPrice = ['350000', '32000', '72000'];
    let PotentialData = []
    for(let i = 0; i < 11; i++){
      let rand1 = Math.floor(Math.random()*3);
      let rand2 = Math.floor(Math.random()*3);
      let rand3 = Math.floor(Math.random()*3);
      PotentialData.push( { id: i, make: PotentialMake[rand1], model: PotentialModel[rand2], price: PotentialPrice[rand3] });
    }
    for(let i = 0; i < 3000; i++){
      for(let j = 0; j < 11; j++){
        this.rowData.push({
          id: PotentialData[j].id + (11*i), 
          make: PotentialData[j].make,
          model: PotentialData[j].model,
          price: PotentialData[j].price,
        });
      }
    }
  }

  onFilterTextChange(text){
    console.log("TEXT", text);
    // this.filter = text;
  }

  saveState(){
    let savedState = this.gridOptions.columnApi.getColumnState();
    localStorage.setItem('savedState', JSON.stringify(savedState));
  }

  loadState(){
    let savedState = JSON.parse(localStorage.getItem('savedState'));
    this.gridOptions.columnApi.setColumnState(savedState);
  }

}

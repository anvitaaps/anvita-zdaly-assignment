import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { AppService } from './app.service';

export interface UserData {
  id: string;
  label: string;
  progress: string;
  color: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'anvita-zdaly-assignment';
  displayedColumns: string[] = ['account_number', 'date', 'transc_details', 'value_date', 'withdrawal_amount', 'deposit_amt', 'balance_amt'];
  isLoader = true;
  dataSource: MatTableDataSource<UserData>;
  value_array: any[] = [{label: 'Jan' , value: 0}, {label: 'Feb' , value: 0}, {label: 'Mar' , value: 0}, {label: 'Apr' , value: 0}, {label: 'May' , value: 0}, {label: 'Jun' , value: 0}, {label: 'Jul' , value: 0}, {label: 'Aug' , value: 0}, {label: 'Sep' , value: 0}, {label: 'Oct' , value: 0}, {label: 'Nov' , value: 0}, {label: 'Dec' , value: 0}]

  data = {
    chart: {
      caption: "Transactions in a year 2017",
      plottooltext: "d",
      showlegend: "1",
      showpercentvalues: "1",
      legendposition: "bottom",
      usedataplotcolorforlabels: "1",
      theme: "fusion"
    },
    data: [
    ]
  };

  width = 900;
  height = 500;
  type = "pie2d";
  dataFormat = "json";
  dataSource2 = this.data;
  chart_data;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private appService: AppService) {
    
  }

  ngOnInit() {
    this.get_data();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  get_data() {
    this.appService.get_data().subscribe((res)=> {
      this.isLoader = false;
      console.log("response",res);
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
     
      res.map( item => {
        console.log('d',item.Date.split(' ')[1])
        if ((this.value_array.findIndex(val => val.label == item.Date.split(' ')[1])) > -1) {
          console.log('dd',this.value_array.findIndex(val => val.label == item.Date.split(' ')[1]))
          let index = this.value_array.findIndex(val => val.label == item.Date.split(' ')[1]);
          this.value_array[index].value = this.value_array[index].value + 1;
        }
      })

      console.log('..',this.value_array, this.data);
      this.data.data = this.value_array;
    },
  (error)=>{
      console.log(error);
  });
  }

}
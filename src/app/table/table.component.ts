import { Component, OnInit } from '@angular/core';
import { TableService } from './table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
	colors: Table[];

	settings = {
    columns: {
      colorName: {
        title: 'Color name'
      },
      hexValue: {
        title: 'Color'
      }
    }
  };

  constructor(private tservice: TableService) { }


  ngOnInit() {
    this
      .tservice
      .getColors()
      .subscribe((data: Table[]) => {
        this.colors = data;
    });

  }

}

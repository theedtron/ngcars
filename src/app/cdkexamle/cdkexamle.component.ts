import { Component, OnInit } from '@angular/core';
import {ExampleDataSource} from "./exampleDatasource";
import {ExampleDatabase} from "./exampleDatabase";


@Component({
  selector: 'app-cdkexamle',
  templateUrl: './cdkexamle.component.html',
  styleUrls: ['./cdkexamle.component.css']
})
export class CdkexamleComponent implements OnInit {

    displayedColumns = ['userId', 'userName', 'progress', 'color'];
    exampleDatabase = new ExampleDatabase();
    dataSource: ExampleDataSource | null;

    ngOnInit() {
        this.dataSource = new ExampleDataSource(this.exampleDatabase);
    }

}

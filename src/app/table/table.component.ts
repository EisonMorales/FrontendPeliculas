import { Component, OnInit, ViewChild } from '@angular/core';
import { PeliculaService } from 'src/_services/pelicula.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['movieId', 'title', " "];
  dataSource = new MatTableDataSource<any>();

  
@ViewChild(MatPaginator) paginator!: MatPaginator;

  listaPeliculas: any;
  value = 0;

  constructor(
    private peliService: PeliculaService
  ) { }

  ngOnInit(): void {
    this.peliService.obtener().subscribe(
      data => {
        this.listaPeliculas = data;
        this.dataSource = new MatTableDataSource(data);
        console.log(data)
        this.dataSource.paginator = this.paginator;
      },

      error => {
        console.log(error);
      }
      
    )
  }

}

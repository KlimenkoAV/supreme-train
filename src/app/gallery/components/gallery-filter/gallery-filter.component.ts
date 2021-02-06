import { Component, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { FilterService } from '@app/gallery/services/filter.services';

@Component({
  selector: 'app-gallery-filter',
  templateUrl: './gallery-filter.component.html',
  styleUrls: ['./gallery-filter.component.scss']
})
export class GalleryFilterComponent implements OnInit{

  genreFilterControl: AbstractControl;
  sortFilterControl: AbstractControl;

  genreItems = [
    {id: 0, name: 'Все телеканалы'},
    {id: 6, name: 'Федеральные'},
    {id: 1, name: 'жанр 1'},
    {id: 2, name: 'жанр 2'},
  ];

  sortItems = [
    {value: '', name: 'По умолчанию'},
    {value: 'name:asc', name: 'По возрастанию (А-Я)'},
    {value: 'name:desc', name: 'По убыванию (Я-А)'},
  ];

  constructor(private filterService: FilterService){}

  ngOnInit(): void {
    this.genreFilterControl = this.filterService.getControl('genre');
    this.sortFilterControl = this.filterService.getControl('sort');
  }
}

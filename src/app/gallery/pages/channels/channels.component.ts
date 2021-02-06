import { combineLatest, Observable } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import { DataService } from '@gallery/services/data.services';
import { Channel, Filter } from '@gallery/models';
import { Component, OnInit } from '@angular/core';
import { FilterService } from '@app/gallery/services/filter.services';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})

export class ChannelsComponent implements OnInit {
  channels$: Observable<Channel[]>;
  filterForm: FormGroup;
  filterObject: Filter = {};

  constructor(
    private dataService: DataService,
    private filterService: FilterService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {}

  ngOnInit(): void {
    const filterJson = this.activatedRoute.snapshot.queryParams.filter;
    if (typeof filterJson === 'string') {
      this.filterObject = JSON.parse(filterJson);
    }
    this.filterForm = this.filterService.getFilterForm();
    this.channels$ = combineLatest([
      this.dataService.getJSON(),
      this.filterForm.valueChanges.pipe(
        startWith(this.filterObject),
        tap(filter =>
          this.router.navigate(
            [],
            {
              relativeTo: this.activatedRoute,
              queryParams: { filter: JSON.stringify(filter) },
            }
          )
        )
    )]).pipe(
      map(([x, filter]) => x.channelDetails.filter(channel =>
        (filter.genre && !channel.genres) ||
        !filter.genre || channel.genres.find( genre => genre.genreID === filter.genre)
        ).slice(0, 24)
        ),
      );
  }
}

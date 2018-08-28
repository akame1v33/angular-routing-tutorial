import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-anime-list',
  template: `
    <h2>Anime List</h2>
    <ul>
      <li (click)="select(anime)" [class.selected] = "isSelected(anime)" *ngFor="let anime of animeList; index as i;"> {{anime.title | titlecase}} </li>
    </ul>
  `,
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {

  private selectedId;

  animeList = [
    {id:1, title:'attack on titan', episode:24, series:3},
    {id:2, title:'erased', episode:12, series:1},
    {id:3, title:'shakugan no shana', episode:24, series:3},
    {id:4, title:'sword art online', episode:25, series:3},
    {id:5, title:'sword gai', episode:12, series:2},
  ]

  constructor(private router:Router, private activatedRoute:ActivatedRoute, private userService:UserService) { }

  ngOnInit() {

    this.userService.testRequest().subscribe( response => {
      console.log( response );
    });

    this.activatedRoute.paramMap.subscribe( (params: ParamMap) => {
      let id = parseInt( params.get('id') );
      this.selectedId = id;
    });
  }

  select(anime){
    // this.router.navigate(['/anime', anime.id]);
    this.router.navigate([anime.id], {relativeTo:this.activatedRoute});
  }

  isSelected(anime){
    return anime.id === this.selectedId
  }

}

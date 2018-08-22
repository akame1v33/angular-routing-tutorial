import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-anime-detail',
  template: `
    <h2>You selected {{selectedAnime.title | titlecase}}</h2>
    <hr>
    <a (click)="previous()">Previous</a> <br>
    <a (click)="next()">Next</a>
    
    <div>
      <button (click)="back()">Back</button>
    </div>
    
  `,
  styleUrls: ['./anime-detail.component.css']
})
export class AnimeDetailComponent implements OnInit {
  animeList = [
    {id:1, title:'attack on titan', episode:24, series:3},
    {id:2, title:'erased', episode:12, series:1},
    {id:3, title:'shakugan no shana', episode:24, series:3},
    {id:4, title:'sword art online', episode:25, series:3},
    {id:5, title:'sword gai', episode:12, series:2},
  ]
  private selectedAnime:any;
  private animeId;
  constructor(private activatedRoute: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    // let selectedId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
 
    this.activatedRoute.paramMap.subscribe( (params: ParamMap) => {
      let id = parseInt( params.get('id') );
      this.animeId = id;
      this.selectedAnime = this.animeList.find( (anime) => {
        return (anime.id == id) ? true : false;
      });
    });

    

  }


  next(){
    let nextId = this.animeId +1;
    // this.router.navigate(['/anime', nextId]);
    // this.router.navigate([nextId], {relativeTo:this.activatedRoute});
    this.router.navigate(['../', nextId], {relativeTo:this.activatedRoute});
  }

  previous() {
    let previousId = this.animeId -1;
    this.router.navigate(['../', previousId], {relativeTo:this.activatedRoute});

  }

  back() {
    let selectedId = this.animeId ? this.animeId : null;

    // this.router.navigate(['/anime-list', {id: selectedId}]);

    this.router.navigate(['../', {id:selectedId}], {relativeTo:this.activatedRoute});
  }

  

}

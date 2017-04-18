import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {TourService} from "ng2-tour";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  query: string;

  blogTitle = 'YaTCM';

  constructor(private router: Router,
              private title: Title,
              private tourService: TourService) {
    this.title.setTitle('YaTCM')
  }

  home() {
    let link = ['/dashboard'];
    this.router.navigate(link)
  }

  ngOnInit() {
    this.tourService.initialize([
      {
        anchorId: '1',
        content: '我是第一步',
        title: 'First'
      },
      {
        anchorId: '2',
        content: '我是第二步',
        title: 'Second'
      },
      {
        anchorId: '3',
        content: '我是第三步',
        title: 'Third'
      }
    ], {
      placement: 'below'
    })
    // this.tourService.start()
  }

}

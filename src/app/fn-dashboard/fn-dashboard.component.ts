import {Component, OnInit} from "@angular/core";
import {TourService} from "ng2-tour";

declare function $(t: any): any
@Component({
  selector: 'app-fn-dashboard',
  templateUrl: './fn-dashboard.component.html',
  styleUrls: ['./fn-dashboard.component.css']
})
export class FnDashboardComponent implements OnInit {

  constructor(private tourService: TourService) {

  }

  ngOnInit() {
//     $(function () {
//       $('[tabindex="0"]').popover()
//     })
//     // this.tourService.initialize([
//     //   {
//     //     anchorId:'1',
//     //     content:'我是第一步',
//     //     title:'First'
//     //   },
//     //   {
//     //     anchorId:'2',
//     //     content:'我是第二步',
//     //     title:'Second'
//     //   },
//     //   {
//     //     anchorId:'3',
//     //     content:'我是第三步',
//     //     title:'Third'
//     //   }
//     // ],{
//     //
//     //   placement:'below'
//     // })
//     // this.tourService.start()
//   }

  }

}

import {Component, OnInit} from "@angular/core";
import {allPrescription} from "../../dataType";
import gql from "graphql-tag";
import {Pagination} from "../../services/pagination.service";
import {Router} from "@angular/router";

const myQuery = gql`
  query myPrescription($firstNum:Int,$lastNum:Int,$afterStr:String,$beforeStr:String){
    allPrescription (first:$firstNum,last:$lastNum,after:$afterStr,before:$beforeStr){
      pageInfo{
        hasNextPage,
        hasPreviousPage,
        startCursor,
        endCursor
        }
      edges{
        cursor,
        node{
          id,
          phoneticName,
          chineseName,
          herbs {
            edges {
              cursor,
              node {
                id
              }
            }
          }
        }
      }  
    }
  }
`;

@Component({
  templateUrl: 'prescriptions.component.html',
  styleUrls: ['prescriptions.component.css']
})
export class PrescriptionsComponent implements OnInit {
  edges: any[]; //get the data only 1 page in the data we fetched just now.
  pageList: any[];//create a new list includes 10 pages in one time, displaying 1 page firstly.
  endCursor: string;
  hasNextPage: boolean;
  loading: boolean;


  maxSize: number = 10;
  bigTotalItems: number;
  bigCurrentPage: number = 1;
  bigItemsPerPage: number = 10;
  numAllPages: number;

  finished: boolean;

  constructor(private pagination: Pagination,
              private router: Router) {
  }

  //采用预加载的形式来写pagination
  ngOnInit() {
    this.loading = true;
    this.pagination.dataInit(myQuery, 'allPrescription', 150, this.bigItemsPerPage)
      .subscribe(data => {
        this.loading = data.loading;
        this.endCursor = data.endCursor;
        this.hasNextPage = data.hasNextPage;

        this.pageList = data.pageList;
        this.finished = data.finished;

        this.bigTotalItems = this.pageList.length * this.bigItemsPerPage;
        this.edges = this.pageList[0];
      },err=>console.log(err));

  }

  gotoDetail(term: string) {
    this.router.navigate(['/browse/prescriptions-detail', term])
  }

  //Page changes when click the different pages.采用预加载的形式。
  pageChanged(event: any): void {
    if (event.page > this.pageList.length - Math.floor(this.maxSize / 2) && this.hasNextPage && this.finished) {
      this.finished = false;
      this.loading = true;
      this.pagination.fetchMore(myQuery, 'allPrescription', 100, this.endCursor, this.bigItemsPerPage)
        .distinctUntilChanged()
        .subscribe(data => {
          this.loading = data.loading;
          this.endCursor = data.endCursor;
          this.hasNextPage = data.hasNextPage;
          this.pageList = data.pageList;
          this.bigTotalItems = this.pageList.length * this.bigItemsPerPage;

          this.edges = this.pageList[event.page - 1];
          this.finished = data.finished;
        })
    }
    this.edges = this.pageList[event.page - 1];
  }

}

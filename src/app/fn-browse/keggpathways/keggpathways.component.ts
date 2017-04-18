import {Component, OnInit} from "@angular/core";
import gql from "graphql-tag";
import {allKeggpathway} from "../../dataType";
import {Pagination} from "../../services/pagination.service";

const myQuery = gql`
  query myKeggpathways($firstNum:Int,$lastNum:Int,$afterStr:String,$beforeStr:String){
    allKeggpathway (first:$firstNum,last:$lastNum,after:$afterStr,before:$beforeStr){
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
          name,
          keggId,
          kgml,
          image
        }
      }  
    }
  }
`;

@Component({
  selector: 'app-keggpathways',
  templateUrl: 'keggpathways.component.html',
  styleUrls: ['keggpathways.component.css']
})
export class KeggpathwaysComponent implements OnInit {
  edges: any[]; //get the data only 1 page in the data we fetched just now.
  pageList: any[];//create a new list includes 10 pages in one time, displaying 1 page firstly.
  endCursor: string;
  loading: boolean;
  hasNextPage: boolean;

  maxSize: number = 10;
  bigTotalItems: number;
  bigCurrentPage: number = 1;
  bigItemsPerPage: number = 10;
  numAllPages: number;
  finished: boolean;

  constructor(private pagination: Pagination) {
  }

  ngOnInit() {
    //采用预加载的形式来写pagination
    this.loading = true;
    this.pagination.dataInit(myQuery, 'allKeggpathway', 150, this.bigItemsPerPage)
      .subscribe(data => {
        this.loading = data.loading;
        this.endCursor = data.endCursor;
        this.hasNextPage = data.hasNextPage;

        this.pageList = data.pageList;
        this.finished = data.finished;

        this.bigTotalItems = this.pageList.length * this.bigItemsPerPage;
        this.edges = this.pageList[0];
      });
  }

  //Page changes when click the different pages.
  pageChanged(event: any): void {
    if (event.page > this.pageList.length - Math.floor(this.maxSize / 2) && this.hasNextPage && this.finished) {
      this.loading = true;
      this.finished = false;
      this.pagination.fetchMore(myQuery, 'allKeggpathway', 100, this.endCursor, this.bigItemsPerPage)
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

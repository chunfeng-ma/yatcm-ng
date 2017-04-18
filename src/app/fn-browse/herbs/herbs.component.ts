import {Component, OnInit} from "@angular/core";
import gql from "graphql-tag";
import {allHerb, CompoundNodeEdge} from "../../dataType";
import {Router} from "@angular/router";
import {Pagination} from "../../services/pagination.service";
import {Observable} from "rxjs/Observable";


const myQuery = gql`
  query myHerbs($firstNum:Int,$lastNum:Int,$afterStr:String,$beforeStr:String){
    allHerb (first:$firstNum,last:$lastNum,after:$afterStr,before:$beforeStr){
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
          imageUrl,
          name,
          phoneticName,
          chineseName,
          compounds {
            edges {
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
const myCompound = gql`
  query getCompound($Id:ID!){
    compound(id:$Id){
      englishName,
      formula,
      molImage
    }
  }
`
@Component({
  templateUrl: 'herbs.component.html',
  styleUrls: ['herbs.component.css']
})
export class HerbsComponent implements OnInit {
  edges: any[]; //get the data only 1 page in the data we fetched just now.
  pageList: any[]; //create a new list includes 10 pages in one time, displaying 1 page firstly.
  endCursor: string;
  loading: boolean;
  hasNextPage: boolean;

  maxSize: number = 10; //limit number for page links in pager
  bigTotalItems: number; //total number of items in all pages
  bigCurrentPage: number = 1; //current page
  bigItemsPerPage: number = 10; //maximum number of items per page. If value less than 1 will display all items on one page
  finished: boolean;

  constructor(private pagination: Pagination,
              private router: Router) {
  }

  ngOnInit() {
    //采用预加载的形式来写pagination
    this.loading = true;
    this.pagination.dataInit(myQuery, 'allHerb', 150, this.bigItemsPerPage)
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

  gotoIngre(terms: CompoundNodeEdge[]) {
    let idList = [];
    for (let term of terms) {
      idList.push(term.node.id)
    }
    this.router.navigate(['/browse/herb-ingredients', {IdList: idList}])

  }

  gotoDetail(term: string) {
    this.router.navigate(['/browse/herb-detail', term])
  }

  //Page changes when click the different pages.
  pageChanged(event: any): void {
    if (event.page > this.pageList.length - Math.floor(this.maxSize / 2) && this.hasNextPage && this.finished) {
      this.finished = false;
      this.loading = true;
      this.pagination.fetchMore(myQuery, 'allHerb', 100, this.endCursor, this.bigItemsPerPage)
        .distinctUntilChanged()
        .subscribe(
          data => {
          this.loading = data.loading;
          this.endCursor = data.endCursor;
          this.hasNextPage = data.hasNextPage;
          this.pageList = data.pageList;
          this.bigTotalItems = this.pageList.length * this.bigItemsPerPage;

          this.edges = this.pageList[event.page - 1];
          this.finished = data.finished;
        }
        )
    }
    this.edges = this.pageList[event.page - 1];

  }

}

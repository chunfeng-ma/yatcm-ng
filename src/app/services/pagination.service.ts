/**
 * Created by zyf on 3/30/17.
 */
import {Injectable} from "@angular/core";
import {DataQueryService} from "./data-query.service";
import _ from 'lodash';
@Injectable()
export class Pagination {
  allData: any;
  edges_all: any[]; //fetch some data, for instance 10 pages.
  edges_all_length: number;
  edges: any[]; //get the data only 1 page in the data we fetched just now.

  pageList: any[];//create a new list includes 10 pages in one time, displaying 1 page firstly.

  hasNextPage: boolean;
  endCursor: string;
  loading: boolean;
  finished: boolean;

  constructor(private dataqueryService: DataQueryService) {

  }

  dataInit(query: any, queryCategory: string, contentNum_AllPages: number, contentNum_everyPage: number) {
    this.pageList = [];
    return this.dataqueryService.dataFetch(query, contentNum_AllPages)
      .map(({data, loading}) => {
        this.loading = loading;
        this.allData = data[queryCategory];
        this.edges_all = this.allData.edges;
        this.edges_all_length = this.edges_all.length;

        this.endCursor = this.allData.pageInfo.endCursor;
        this.hasNextPage = this.allData.pageInfo.hasNextPage;

        // get the page_list
        this.pageList = _.chunk(this.edges_all,contentNum_everyPage);
        this.finished = true;
        return {
          finished: this.finished,
          loading: this.loading,
          endCursor: this.endCursor,
          hasNextPage: this.hasNextPage,
          pageList: this.pageList,
        }
      })
  }

  fetchMore(query: any, queryCategory: string, contentNum_AllPages: number, lastCursor: string, contentNum_everyPage: number) {

    return this.dataqueryService.dataFetch(query, contentNum_AllPages, lastCursor)
      .map(({data, loading}) => {
        this.loading = loading;
        this.allData = data[queryCategory];
        this.edges_all = this.allData.edges;
        this.edges_all_length = this.edges_all.length;

        this.endCursor = this.allData.pageInfo.endCursor;
        this.hasNextPage = this.allData.pageInfo.hasNextPage;

        // get the page_list

        let addedList = _.chunk(this.edges_all,contentNum_everyPage);
        this.pageList=this.pageList.concat(addedList);
        this.finished = true;
        return {
          finished: this.finished,
          loading: this.loading,
          endCursor: this.endCursor,
          hasNextPage: this.hasNextPage,
          pageList: this.pageList
        }
      });
  }


}

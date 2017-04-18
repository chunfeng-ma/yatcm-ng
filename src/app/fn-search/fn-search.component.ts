import {Component, OnInit} from "@angular/core";
import gql from "graphql-tag";

declare function jsme(): any;
declare function jsmeOnLoad(): any;
declare function show_smiles(): any;

const myQuery = gql`
  query selectedCompound($num:ID!,$firstNum:Int,$lastNum:Int,$afterStr:String,$beforeStr:String){
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
    compound(id:$num){
      id,
      englishName,
      smiles,
      molBlock
  }
}
`;
@Component({

  templateUrl: './fn-search.component.html',
  styleUrls: ['./fn-search.component.css']
})
export class FnSearchComponent implements OnInit {
  tt: any

  constructor() {
  }

  ngOnInit() {
    jsme()

  }

  search(term: string) {
    this.tt = term
  }

}

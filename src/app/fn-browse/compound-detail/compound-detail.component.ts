import {Component, OnInit} from "@angular/core";
import gql from "graphql-tag";
import {ActivatedRoute, Params} from "@angular/router";
import {DataQueryService} from "../../services/data-query.service";
import {CompoundNode} from "../../dataType";

const myCompound = gql`
  query getCompound($id:ID!){
    compound(id:$id){
      id,
      englishName,
      chineseName,
      molImage,
      smiles,
      formula,
      molWeight,
      alogp,
      psa,
      hba,
      hbd,
      rtb,
      molFile,
      
      relatedCompounds {
        edges {
          node {
            id
          }
        }
      }
    }
  }
`;
@Component({
  templateUrl: './compound-detail.component.html',
  styleUrls: ['./compound-detail.component.css']
})
export class CompoundDetailComponent implements OnInit {
  compound: CompoundNode;

  constructor(private activatedRoute: ActivatedRoute,
              private dataqueryService: DataQueryService) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .switchMap((params: Params) => this.dataqueryService.dataSearch(myCompound, params['id']))
      .subscribe(({data}) => {
        console.log(data)
        this.compound = data['compound']
      })
  }

}

import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {DataQueryService} from "../../../services/data-query.service";
import gql from "graphql-tag";
import {CompoundNode} from "../../../dataType";

const myCompound = gql`
  query getCompound($id:ID!){
    compound(id:$id){
      id,
      englishName,
      formula,
      molImage
    }
  }
`;
@Component({
  templateUrl: './herb-ingredients.component.html',
  styleUrls: ['./herb-ingredients.component.css']
})
export class HerbIngredientsComponent implements OnInit {
  idObj: any;
  idString: string;
  idList: any[];
  compound: CompoundNode;
  compounds: CompoundNode[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private dataqueryService: DataQueryService,
              private router: Router) {
  }

  ngOnInit() {
    this.idObj = this.activatedRoute.snapshot.params;
    this.idString = this.idObj.IdList;
    this.idList = this.idString.split(',');
    for (let id of this.idList) {
      this.dataqueryService.dataSearch(myCompound, id)
        .subscribe(({data}) => {
          this.compound = data['compound'];
          this.compounds.push(this.compound)
        })
    }
  }

  gotoCompoundDetail(term: string) {
    this.router.navigate(['/browse/compound-detail', term])
  }

}

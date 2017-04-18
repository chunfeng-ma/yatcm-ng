import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import gql from "graphql-tag";
import {DataQueryService} from "../../../services/data-query.service";
import {CompoundNodeEdge, HerbNode} from "../../../dataType";
const myQuery = gql`
  query getHerb($id:ID!){
    herb(id:$id){
      id,
      name,
      chineseName,
      phoneticName,
      medicinalPart,
      imageUrl,
      wikiLink,
      wikiChinese,
      compounds {
        edges {
          node {
            id
          }
        }
      },
      prescription{
        edges{
          node{
            id
          }
        }
      }
    }
  }
  `;
@Component({
  templateUrl: './herb-detail.component.html',
  styleUrls: ['./herb-detail.component.css']
})
export class HerbDetailComponent implements OnInit {
  selectedHerb: HerbNode;

  constructor(private activatedRoute: ActivatedRoute,
              private dataqueryService: DataQueryService,
              private router: Router) {
  }

  dataInit() {
    this.activatedRoute.params
      .switchMap((params: Params) => this.dataqueryService.dataSearch(myQuery, params['id']))
      .subscribe(({data}) => {
        this.selectedHerb = data['herb'];
      });
  }

  ngOnInit() {
    this.dataInit()
  }

  gotoIngre(terms: CompoundNodeEdge[]) {
    let idList = [];
    for (let term of terms) {
      idList.push(term.node.id)
    }
    this.router.navigate(['/browse/herb-ingredients', {IdList: idList}])

  }


}

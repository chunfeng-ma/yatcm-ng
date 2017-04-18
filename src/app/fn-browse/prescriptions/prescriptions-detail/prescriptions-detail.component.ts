import {Component, OnInit} from "@angular/core";
import gql from "graphql-tag";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {DataQueryService} from "../../../services/data-query.service";
import {PrescriptionNode} from "../../../dataType";

const myPrescription = gql`
    query myPrescription($id:ID!){
		prescription(id:$id) {
		  id,
      chineseName,
      englishName,
      zucheng,
      fangjie,
      yongfa,
      traditionUsage,
      modernUsage,
      modernUsageEn,
      mainPrescription {
        id,
        chineseName
      },
      herbs {
        edges {
          node {
            id,
            chineseName
          }
        }
      }
		}
  }
`;

@Component({
  selector: 'app-prescriptions-detail',
  templateUrl: './prescriptions-detail.component.html',
  styleUrls: ['./prescriptions-detail.component.css']
})
export class PrescriptionsDetailComponent implements OnInit {
  prescription: PrescriptionNode;

  constructor(private activatedRoute: ActivatedRoute,
              private dataqueryService: DataQueryService,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .switchMap((params: Params) => this.dataqueryService.dataSearch(myPrescription, params['id']))
      .subscribe(({data}) => {
        this.prescription = data['prescription'];
      })
  }

  gotoHerb(term: string) {
    this.router.navigate(['/browse/herb-detail', term])
  }

  gotoPresc(term: string) {
    this.dataqueryService.dataSearch(myPrescription, term)
      .subscribe(({data}) => {
        this.prescription = data['prescription'];
      })
  }
}

/**
 * Created by ayoub on 11/20/2016.
 */
import {Component} from '@angular/core';
import {routes} from "../../app.routing";
import {RouterModule} from "@angular/router";
import {SocieteService} from "./societe.service";
import {IDictionary} from "./hoverTable/hoverTable.component";
import {Infos, Societe} from "./societe";

@Component({
  selector: 'societe',
  template: require('./societe.template.html')
})
export class SocieteComponent {
  private columns: Array<IDictionary> = [
    {key: 'code', value: 'Code'},
    {key: 'name', value: 'Nom'},
  ];
  private code: string;
  private societes: Array<Societe>;
  private infos: Infos = {
    "totalVente": 0,
    "totalAchat": 0,
    "AVGVente": 0,
    "AVGAchat": 0,
    "estimation": 0
  };
  private totalPages;
  private searchCode: string;
  private defaultSize = 3;


  constructor(private societeService: SocieteService) {
    this.societeService.getSocietes(0, this.defaultSize).subscribe(result => {
      this.societes = result;
      this.totalPages = this.societeService.totalPages;
    });
  }

  loadPage(page: Number) {
    this.societeService.getSocietes(page, this.defaultSize).subscribe(result => {
      this.societes = result;
    });
  }

  loadOrdres(code: string) {
    this.code = code;
    this.societeService.getInfos(code).subscribe(result => {
      this.infos = result;
    });
  }

  search() {
    this.societeService.getSociete(this.searchCode).subscribe(societe => {
      this.societes = [];
      this.societes.push(societe);
      this.loadOrdres(this.searchCode);
    });
  }

}

export const routing = RouterModule.forChild(routes);

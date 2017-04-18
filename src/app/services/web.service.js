"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
/**
 * Created by zyf on 11/29/16.
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var WebService = (function () {
  function WebService(http) {
    this.http = http;
    this.WebUrl = 'http://172.16.41.178:8000/api/';
    this.WebUrl_Compounds = 'http://172.16.41.178:8000/api/compounds/';
    this.headers = new http_1.Headers({'Content-Type': 'application/json'});
    this.options = new http_1.RequestOptions({headers: this.headers}); //预请求
  }

  WebService.prototype.getDbRoots = function () {
    return this.http.get(this.WebUrl, this.options)
      .map(function (res) {
        return res.json();
      });
  };
  WebService.prototype.getContent = function (url_part) {
    return this.http.get(this.WebUrl + url_part)
      .map(function (res) {
        return res.json();
      });
  };
  WebService.prototype.getDetail = function (url) {
    return this.http.get(url)
      .map(function (res) {
        return res.json();
      });
  };
  // search(param:string){
  //   return this.http.get(this.WebUrl_Compounds+`?smiles=${param}`)
  //     .map((res:Response)=>res.json())
  // }
  WebService.prototype.getCompounds = function () {
    return this.http.get(this.WebUrl_Compounds)
      .map(function (res) {
        return res.json();
      });
  };
  WebService = __decorate([
    core_1.Injectable()
  ], WebService);
  return WebService;
}());
exports.WebService = WebService;

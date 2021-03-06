"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var BookListComponent = (function () {
    function BookListComponent(router, postService) {
        this.router = router;
        this.postService = postService;
    }
    BookListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postService.getPosts().subscribe(function (books) {
            _this.books = books;
        });
    };
    BookListComponent.prototype.onSelect = function (selected) {
        this.router.navigate(["books", selected.name]);
    };
    BookListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "books-list",
            templateUrl: "books-list.component.html",
            styleUrls: ["books-list.component.css"]
        })
    ], BookListComponent);
    return BookListComponent;
}());
exports.BookListComponent = BookListComponent;

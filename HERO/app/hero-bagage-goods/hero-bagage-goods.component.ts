import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {Goods} from "../shared/goodsClass";
import {GoodsService} from "../shared/goods.service";
import {HeroService} from "../hero/hero.service";


@Component ({
    moduleId: module.id,
    selector: 'bagage-goods',
    templateUrl: 'hero-bagage-goods.component.html',
    styleUrls:['hero-bagage-goods.component.css'],
})

export class HeroBagageGoodsComponent implements OnInit {
    goods: Goods[];
    // @Output() heroUpdated = new EventEmitter();

    constructor(private goodsService: GoodsService,
                private heroService: HeroService) {
        this.goods = [];
    }

    ngOnInit() {
        this.goods = this.goodsService.goods;
    }

    addNewThing(thing: any) {
        this.heroService.hero[thing.type] = thing;
    }

    onHeroUpdated(things: any) {
        // this.heroService.hero.addNewGoods(things)
    }

}



import {Component} from '@angular/core';
import {productsMock} from '../../../shared/products/products.mock';

@Component({
    selector: 'app-card-item',
    templateUrl: './card-item.component.html',
    styleUrls: ['./card-item.component.css'],
})
export class CardItemComponent {
    readonly product = productsMock[0];

    onProductBuy(event: Event) {
        event.stopPropagation();

        // eslint-disable-next-line no-console
        console.log('Buy product');
    }

    isStarActive(starIndex: number): boolean {
        return this.product.rating >= starIndex;
    }
}

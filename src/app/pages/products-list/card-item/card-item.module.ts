import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {CardItemComponent} from './card-item.component';

@NgModule({
    declarations: [CardItemComponent],
    imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
    exports: [CardItemComponent],
})
export class CardItemModule {}

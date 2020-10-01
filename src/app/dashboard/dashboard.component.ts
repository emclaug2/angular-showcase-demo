import {Component, ViewEncapsulation} from '@angular/core';
import * as PXBColors from '@pxblue/colors';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent {
    colors = PXBColors;
}

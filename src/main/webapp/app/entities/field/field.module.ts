import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuscSharedModule } from '../../shared';
import {
    FieldService,
    FieldPopupService,
    FieldComponent,
    FieldDetailComponent,
    FieldDialogComponent,
    FieldPopupComponent,
    FieldDeletePopupComponent,
    FieldDeleteDialogComponent,
    fieldRoute,
    fieldPopupRoute,
    FieldResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...fieldRoute,
    ...fieldPopupRoute,
];

@NgModule({
    imports: [
        FuscSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        FieldComponent,
        FieldDetailComponent,
        FieldDialogComponent,
        FieldDeleteDialogComponent,
        FieldPopupComponent,
        FieldDeletePopupComponent,
    ],
    entryComponents: [
        FieldComponent,
        FieldDialogComponent,
        FieldPopupComponent,
        FieldDeleteDialogComponent,
        FieldDeletePopupComponent,
    ],
    providers: [
        FieldService,
        FieldPopupService,
        FieldResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FuscFieldModule {}

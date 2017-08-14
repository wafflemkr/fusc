import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuscSharedModule } from '../../shared';
import {
    ClubService,
    ClubPopupService,
    ClubComponent,
    ClubDetailComponent,
    ClubDialogComponent,
    ClubPopupComponent,
    ClubDeletePopupComponent,
    ClubDeleteDialogComponent,
    clubRoute,
    clubPopupRoute,
    ClubResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...clubRoute,
    ...clubPopupRoute,
];

@NgModule({
    imports: [
        FuscSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        ClubComponent,
        ClubDetailComponent,
        ClubDialogComponent,
        ClubDeleteDialogComponent,
        ClubPopupComponent,
        ClubDeletePopupComponent,
    ],
    entryComponents: [
        ClubComponent,
        ClubDialogComponent,
        ClubPopupComponent,
        ClubDeleteDialogComponent,
        ClubDeletePopupComponent,
    ],
    providers: [
        ClubService,
        ClubPopupService,
        ClubResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FuscClubModule {}

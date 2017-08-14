import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FuscClubModule } from './club/club.module';
import { FuscFieldModule } from './field/field.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        FuscClubModule,
        FuscFieldModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FuscEntityModule {}

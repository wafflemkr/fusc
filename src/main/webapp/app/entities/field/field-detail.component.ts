import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager  } from 'ng-jhipster';

import { Field } from './field.model';
import { FieldService } from './field.service';

@Component({
    selector: 'jhi-field-detail',
    templateUrl: './field-detail.component.html'
})
export class FieldDetailComponent implements OnInit, OnDestroy {

    field: Field;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private fieldService: FieldService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInFields();
    }

    load(id) {
        this.fieldService.find(id).subscribe((field) => {
            this.field = field;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInFields() {
        this.eventSubscriber = this.eventManager.subscribe(
            'fieldListModification',
            (response) => this.load(this.field.id)
        );
    }
}

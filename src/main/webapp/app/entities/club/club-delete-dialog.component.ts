import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { Club } from './club.model';
import { ClubPopupService } from './club-popup.service';
import { ClubService } from './club.service';

@Component({
    selector: 'jhi-club-delete-dialog',
    templateUrl: './club-delete-dialog.component.html'
})
export class ClubDeleteDialogComponent {

    club: Club;

    constructor(
        private clubService: ClubService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.clubService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'clubListModification',
                content: 'Deleted an club'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-club-delete-popup',
    template: ''
})
export class ClubDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private clubPopupService: ClubPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.clubPopupService
                .open(ClubDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}

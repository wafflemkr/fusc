/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { FuscTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { FieldDetailComponent } from '../../../../../../main/webapp/app/entities/field/field-detail.component';
import { FieldService } from '../../../../../../main/webapp/app/entities/field/field.service';
import { Field } from '../../../../../../main/webapp/app/entities/field/field.model';

describe('Component Tests', () => {

    describe('Field Management Detail Component', () => {
        let comp: FieldDetailComponent;
        let fixture: ComponentFixture<FieldDetailComponent>;
        let service: FieldService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [FuscTestModule],
                declarations: [FieldDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    FieldService,
                    JhiEventManager
                ]
            }).overrideTemplate(FieldDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(FieldDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(FieldService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new Field(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.field).toEqual(jasmine.objectContaining({id: 10}));
            });
        });
    });

});

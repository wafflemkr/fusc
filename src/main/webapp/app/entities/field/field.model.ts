import { BaseEntity } from './../../shared';

const enum FieldStatusType {
    'CLOSED',
    'OPEN',
    'PARTIALLY_OPEN'
}

export class Field implements BaseEntity {
    constructor(
        public id?: number,
        public fieldName?: string,
        public status?: FieldStatusType,
        public mapLink?: string,
        public ownerId?: number,
    ) {
    }
}

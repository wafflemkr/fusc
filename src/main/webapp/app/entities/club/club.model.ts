import { BaseEntity } from './../../shared';

export class Club implements BaseEntity {
    constructor(
        public id?: number,
        public clubName?: string,
        public link?: string,
    ) {
    }
}

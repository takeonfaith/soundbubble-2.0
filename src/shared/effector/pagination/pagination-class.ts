import {
    DocumentData,
    QueryDocumentSnapshot,
    QuerySnapshot,
    QueryStartAtConstraint,
    startAfter,
} from 'firebase/firestore';

export class Pagination {
    lastVisible: QueryDocumentSnapshot<DocumentData, DocumentData> | null =
        null;
    constraints: QueryStartAtConstraint[] = [];

    constructor() {}

    saveLastVisible(docs: QuerySnapshot<DocumentData, DocumentData>) {
        this.lastVisible = docs.docs[docs.docs.length - 1];
    }

    initialize() {
        if (this.lastVisible) {
            this.constraints.push(startAfter(this.lastVisible));
        }
    }
}

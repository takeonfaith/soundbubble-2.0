import { DocumentData, QuerySnapshot } from "firebase/firestore";

export const getDataFromDoc = <T>(
  snapshot: QuerySnapshot<DocumentData, DocumentData>
) => {
  return snapshot.docs.map((doc) => doc.data()) as T[];
};

import { Document, Model } from "mongoose";

export default function sanitizeModel<T extends Document>(document: T | null | undefined): T | undefined {
    if (!document) return undefined;

    // Delete _id and __v from top-level document
    const doc = document.toObject();
    delete doc._id;
    delete doc.__v;

    // Delete _id and __v from subdocuments
    const traverse = (obj: Record<string, any>) => {
        for (const key in obj) {
            const val = obj[key];
            if (val instanceof Document) {
                obj[key] = sanitizeModel(val);
            } else if (Array.isArray(val)) {
                val.forEach((item, i) => {
                if (item instanceof Document) {
                    val[i] = sanitizeModel(item);
                }
                });
            } else if (typeof val === 'object' && val !== null) {
                traverse(val);
            }
        }
    };

    traverse(doc);

    return doc as T;
}

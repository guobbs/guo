export function toString(arg: unknown): string {
    return typeof arg === "string" ? arg : "null";
}

export function toObject(arg: unknown):string {
    return typeof arg === "object" ? arg : Object();
}

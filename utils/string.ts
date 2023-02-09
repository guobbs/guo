export function toString(arg: unknown): string {
    return typeof arg === "string" ? arg : "null";
}


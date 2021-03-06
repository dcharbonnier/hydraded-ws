export class Dict<K extends string, T> {

    private data: { [key: string]: T } = {};

    public get(key: K): T {
        return key === void 0  || key === null ? void 0 : this.data[key.toString()];
    }

    public clear() {
        return this.data = {};
    }

    public set(key: K, value: T) {
        if (key === void 0 || key === null) {
            return;
        }
        this.data[key.toString()] = value;
    }

    public has(key: K): boolean {
        return key !== void 0  && key !== null && this.data[key.toString()] !== void 0;
    }

    public delete(key: K) {
        if (key === void 0 || key === null) {
            return;
        }
        delete this.data[key.toString()];
    }

    public keys() {
        return Object.keys(this.data);
    }

    public size() {
        return Object.keys(this.data).length;
    }

    public values(): T[] {
        return this.keys().map((key) => this.data[key]);
    }

}

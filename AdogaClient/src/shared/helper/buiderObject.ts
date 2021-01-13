class ObjectBuilder {
    private instant: Object

    constructor(object: Object = {}) {
        this.instant = object
    }

    getInstant() {
        return this.instant
    }

    add(key: string, value: any) {
        this.instant[ key ] = value
        return this
    }

    convert(key: string, callback) {
        if (!key || !this.instant[ key ]) {
            throw new Error(`${ key } does not exist in object`)
        } else {
            try {
                this.instant[ key ] = callback(this.instant[ key ])
                return this
            } catch (error) {
                this.instant[ key ] = callback
                return this
            }
        }
    }
}

export default ObjectBuilder
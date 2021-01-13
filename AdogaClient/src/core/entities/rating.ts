import BaseEntity from "."

class Rating extends BaseEntity {
    ratingId: string
    robotId: string
    star: number
    userId: string
    nameDisplay: string
    createdAt: string

    constructor(article?) {
        super()
        this.setProperties(article)
        super.setInstance(this.getProperties())
    }

    private getProperties() {
        return {
            ratingId: this.ratingId,
            robotId: this.robotId,
            star: this.star,
            userId: this.userId,
            nameDisplay: this.nameDisplay,
            createdAt: this.createdAt,
        }
    }

    private setProperties(article) {
        if (!article) return
        Object.keys(this.getProperties()).forEach(key => {
            if (!article[ key ]) return
            this[ key ] = article[ key ]
        })
    }
}

export default Rating
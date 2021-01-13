import Rating from "@entities/rating"

const useListRating = (listRating: Array<Rating> = []) => {

    const getNumberUserOfStar = (_listRating) => {
        let numberUserOfStar = {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
        };
        let employee = 0;
        _listRating.map((item) => {
            if (item.userId != "") {
                employee++;
            }
            if (typeof numberUserOfStar[ Math.round(item.star) ] != "undefined") {
                numberUserOfStar[ Math.round(item.star) ] =
                    numberUserOfStar[ Math.round(item.star) ] + 1;
            }
        })
        return numberUserOfStar
    }

    const getAverageStar = (totalUsers) => {
        const numberUserOfStar = getNumberUserOfStar(listRating)
        let total = 0;
        Object.keys(numberUserOfStar).forEach((key) => {
            total = total + +key * numberUserOfStar[ key ];
        });
        return Math.round((total / totalUsers) * 100) / 100 || 0;
    }

    const getNumberUserOfTopStar = () => {
        const numberUserOfStar = getNumberUserOfStar(listRating)
        let numberUserOfTopStar = 0
        Object.keys(numberUserOfStar).forEach(key => {
            if (numberUserOfStar[ key ] > numberUserOfTopStar) {
                numberUserOfTopStar = numberUserOfStar[ key ]
            }
        })
        return numberUserOfTopStar
    }

    const getEmployee = (_listRating) => {
        let employee = 0;
        _listRating.map((item) => {
            if (item.userId != "") {
                employee++;
            }
        })
        return employee
    }

    return {
        numberUserOfStar: getNumberUserOfStar(listRating),
        numberUserOfTopStar: getNumberUserOfTopStar(),
        getAverageStar,
        employee: getEmployee(listRating),
    }

}

export default useListRating
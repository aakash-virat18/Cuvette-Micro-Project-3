const data = require('./food.json')

/***********************************************QUESTION 1************************************************** */

const listALL = (foods)=>{
    const foodname=foods.map((food)=>{
        return food.foodname
    });
    return foodname;
}

/***********************************************QUESTION 2,3,4,5,6,7************************************************** */

const vegetables = (foods,category)=>{
    const foodname=foods.filter((food)=>{
        return food.category===category;
    })
    return foodname;
}

/***********************************************QUESTION 8************************************************** */

const moreCalorie = (foods)=>{
    const foodname=foods.filter((food)=>{
        return food.calorie>100;
    })
    return foodname;
}

/***********************************************QUESTION 9************************************************** */

const lessCalorie = (foods)=>{
    const foodname=foods.filter((food)=>{
        return food.calorie<100;
    })
    return foodname;
}

/***********************************************QUESTION 10************************************************** */

const highProtein = (foods)=>{
    const data=foods.sort((a,b)=>{
        return b.protiens - a.protiens;
    })
    return data;
}

/***********************************************QUESTION 11************************************************** */

const lowCab = (foods)=>{
    const data=foods.sort((a,b)=>{
        return a.cab - b.cab;
    })
    return data;
}

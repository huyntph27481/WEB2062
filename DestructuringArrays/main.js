const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fre: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery: function({starterIndex,mainIndex,time,address}){
        console.log('Order recevied!');
    },

};

restaurant.orderDelivery({
    time: '12:34',
    address : 'Nam Dinh',
    mainIndex : 2,
    starterIndex : 2,
});
// 1
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
// 2
const { 
    name: restaurantName,
    openingHours: hours,
    categories: tag,
} = restaurant;
 console.log(restaurantName,hours,tag);
// Các giá trị mặc định
 const {menu , starterMenu:staters = []} = restaurant;
 console.log(menu,staters);

 let a  =111;
 let b = 999;
 const obj = {a:23 , b: 7 , c:14};
 ({a,b} = obj);
 console.log(a,b);

// const arr = [2,3,4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// const [x,y,z] = arr;
// console.log(x,y,z);
// console.log(arr);

// 1
// const [main, ,secondary] = restaurant.categories;
// console.log(main, secondary);
// const temp = main;
// main = secondary;
// console = temp;
// console.log(main,secondary);

// 2
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);
// [main, secondary] = [main, secondary]
// console.log(main, secondary);

// // Nhận 2 giá trị trả về 1 hàm
// const [stater, mainCourse] = restaurant.order(2, 0);
// console.log(stater, mainCourse);


// const nested = [2, 4, [5, 6]];
// // const [i, ,j] = nested;
// // console.log(i,j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);
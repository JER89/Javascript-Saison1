// 07-classes/01-instances/script.js - 7.1: instances


(() => {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    // your code here
    

    console.log(new Cat("Skinny", 9));
    console.log(new Cat("Pixel", 6));

})();
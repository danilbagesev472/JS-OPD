class ProductS{
    constructor(id, title, category_id, brand_id, salers_id){
        this.id = id;
        this.title = title;
        this.category_id = category_id;
        this.brand_id = brand_id;
        this.salers_id = salers_id;
    }
}

class CategoryS{
    constructor(id, title){
        this.id = id;
        this.title = title;
    }
}

class SalerS{
    constructor(id, title) {
        this.id = id;
        this.title = title;
    }
}

class Brand{
    constructor(id, title){
        this.id = id;
        this.title = title;
    }
}

let products = []
let category = []
let salers = []
let brand = [] 

    products.push(
        new ProductS(1, "Рюкзак с каркасом Multicam", 1, 1, 2), 
        new ProductS(2, "Рюкзак Protector Plus S424 Marpat", 1, 1, 1), 
        new ProductS(3, "Тактические перчатки чёрные", 2, 2, 3),
        new ProductS(4, "Перчатки беспалые черные", 2, 2, 2), 
        new ProductS(5, "Перчатки беспалые зелёные", 3, 2, 1), 
        new ProductS(6, "Рюкзак Protector Plus S413 Степ", 3, 2, 3)
        )

    category.push(
        new CategoryS(1, "Рюкзаки"), 
        new CategoryS(2, "Перчатки"), 
        new CategoryS(3, "Спец.Предложение")
        )

    brand.push(
        new Brand(1,"MS-Backpacks"), 
        new Brand(2,"LV-Gloves")
        )

    salers.push(
        new SalerS(1, "Денчик"), 
        new SalerS(2, "ДимASS"), 
        new SalerS(3, "Ашотя")
        )
    
let search = prompt("Введите ID продукта от 1 до 6");

for(let i = 0; i < products.length; i++){
    if(search == products[i].id){  
          let e = products[i] 
        for(let j = 0; j < category.length; j++){
            if(e.category_id == category[j].id){
        for(let h = 0; h < salers.length; h++){
            if(e.salers_id == salers[h].id){
        for(let g = 0; g < brand.length; g++){
             if(e.brand_id == brand[g].id){
        console.log(`Название: ${e.title} 
Категория: ${category[j].title}
Покупатель: ${salers[h].title}
Бренд: ${brand[g].title}`)
                    }
                }
            }
          }
        }
      }
   }
}
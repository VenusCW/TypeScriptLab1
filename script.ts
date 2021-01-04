interface Mountain {
    name: string;
    height: number;
}
let mountains:Mountain[] = [
    {
    name:'Kilimanjaro',
    height: 19341,
    },
    {
    name:'Everest',
    height: 29029,
    },
    {
    name: 'Denali',
    height: 20310,
    }
];
function findNameOfTallestMountain(mountains: Mountain[]): string{
    let nameOfTallestMountain: string = "";
    let tallestHeight: number = 0;
    for (const Mountain of mountains) {
        if (Mountain.height > tallestHeight){
            tallestHeight = Mountain.height;
            nameOfTallestMountain = Mountain.name;
    };
};
     return nameOfTallestMountain;
};
let tallestMountain: string = findNameOfTallestMountain(mountains);
console.log(tallestMountain);

 interface Product { 
    name: string ; 
    price:number; 
 }
    let products:Product[] = [
    {
    name:"telescope",
    price: 5.00,
    },
    {
    name:"skiBoots",
    price: 20.00,
    },
    {
    name: 'scraper',
    price: 13.00,
    },
];

function calcAverageProductPrice(products: Product[]): string {
     let averageProductPrice: number = [5.00 + 1.00 +2.00 / 3]; 
   } 
return averageProductPrice;

let averagePrice: number = calcAverageProductPrice(products);
    console.log(averagePrice);


interface  InventoryItem{ 
    product: Product[]; 
    quantity:number; 
}

let inventory:InventoryItem[]= [
{
    // const product.name = (inventory: InventoryItem.Product): string,
    product.name: 'motor',
    product.price: 10.00,    
    quantity: 10
},
{
    product.name: 'sensor',
    product.price: 12.50;
    quantity: 4
},
{
    product.name:LED;
    product.price: 1.00;
    quantity: 20
},
]
let newValue: number = calcInventoryValue(inventory): number;
console.log(newValue);
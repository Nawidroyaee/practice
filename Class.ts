import { isMethodSignature, isThrowStatement } from "typescript";


// class House {
//     owner: string;
//     street:string;
//     city: string;
//     zipcode: number
//     isrental: string;
//     rent: string
 
//     constructor (owner: string, street:string, city:string, zipcode:number, isrental:string, rent:string){
//         this.owner = owner;
//         this.street = street;
//         this.city = city;
//         this.zipcode = zipcode;
//         this.isrental=isrental;
//         this.rent = rent
//     }
// }
// const Samims = new House ("Samim", "39 33rd street", "Astoria", 10014, "Is Rental", "$5000" );
// const Nawids = new House ("apon", "420 Kent Ave", "Brooklyn", 11249, "Is Rental", "$4000");
// const Akmals = new House ("Akmal", "33 Rue Des Plantanes", "Ostricourt", 393939, "Is Rental", "$3000")
 
// let newHouse: House [] = [Samims, Nawids, Akmals]
 
// console.log(newHouse[0],newHouse[1], newHouse[2])

// class Apt {
//     rooms:string;
//     floor:string;
//     location:string;
//     WC:number;
//     area: string;
//     rent:string;
//     avail:string;
//     shortterm: false;

//     constructor (rooms: string, floor: string, location: string, WC: number, area: string, rent: string, avail: string, shortterm: false ){
//         this.rooms = rooms;
//         this.floor = floor;
//         this.location = location;
//         this.WC = WC;
//         this.area = area;
//         this.rent = rent;
//         this.avail = avail;
//         this.shortterm = shortterm;
//     }
// }
//     const Kentave = new Apt ("3 Bed Rooms", "20th fl", "Bushwick", 1.5, "300 SF", "$2500", "10.10.2023", false)
//     const Berry = new Apt ("3 Bed Rooms", "21th fl", "Bushwick", 1.5, "500 SF", "$3500", "01.01.2023", false)
//     const N6th = new Apt ("2 Bed Rooms", "10th fl", "Bushwick", 1, "200 SF", "$1500", "01.01.2023", false)

//     let newapt: Apt []= [Kentave, Berry, N6th]
//     console.log(newapt[0], newapt[1], newapt[2])
    

//     class User {
//         name:string;
//         age:number;
//         occupation:string;
//         smart:boolean;

//         constructor (name:string, age:number, occupation:string, smart:boolean){
//             this.name = name;
//             this.age = age;
//             this.occupation = occupation;
//             this.smart = smart;
//         }
//     }
//     const Samim = new User ("Sam", 29, "Enginaar", true)
//     const Akmal = new User ("Bula", 39, "Monejaar", false)
//     const Nawid = new User ("Apon", 49, "Najaar", true)

//     let newUser: User [] = [Samim, Akmal, Nawid]
    
//     console.log(Samim)
//     console.log(Akmal)
//     console.log(Nawid)

//     class City {
//         naam:string;
//         location:string;
//         area:string

//         constructor (naam:string, location:string, area:string) {
//             this.naam = naam;
//             this.location = location;
//             this.area = area
//         }
//     }
//     let NYC = new City ("New York City", "New York", "1M MSQ")
//     let Kabul = new City ("KabulJan", "Afghanistan", "10000SqM")
//     let Berlin = new City ("Berlin", "Germany", "1000SqM")

//     let cities: City[] = [ NYC, Kabul, Berlin]
//     Berlin.location = "Brandenburg";

//     console.log(Berlin)

//     class Family {
//         Bros:string;
//         Sis:string;
//         Pets:string;

//         constructor (Bros:string, Sis:string, Pets:string) {
//             this.Bros = Bros;
//             this.Sis = Sis;
//             this.Pets = Pets;
//         }
//     }
//         const Akhmad= new Family("Makhmad", "Laila", "Cat")
//         const Kalbir = new Family( "Maqsod", "Farzana", "Dog")
//         const Masod = new Family("Husaini", "Freshta", "Horse")

//         let fam:Family []= [Akhmad, Kalbir, Masod]

//         console.log (Akhmad)

//         Akhmad.Bros = "Tom"
//         Kalbir.Pets = "Camel"
//         Masod.Sis = "Jabar"

        // a realistic class of user, with realistic methods that we could call on a user. and make those methods 
        //at least five of them and make use of all data types. 
        //matrix 4 x 4, make a class that takes the number between 1 to 16. methods should say go left, go right, go up and go down. 
        // call the class a buggy = 3


        // class Car {
        //     make:string;
        //     model:string;
        //     price:number;

        //     constructor (make:string, model:string, price:number) {
        //         this.make = make;
        //         this.model = model;
        //         this.price = price;
        //     }

        //     addPrice(increasePrice:number){
        //         this.price += increasePrice;
        //     }

        //     newPrice(newValue:number){
        //         this.price = newValue;
        //     }

        // }
        // const myCar = new Car ("Tesla", "Plaide", 50000);
        // myCar.addPrice(1000);
        // console.log(myCar);
        // myCar.newPrice(70000);
        // console.log(myCar)

        
        

    

        
    
        



    

    

    
use dataSource;

db.dropDatabase();

db.phonenumbers.insertMany([
    {phoneNo: "0141"},
    {phoneNo: "0151"},
    {phoneNo: "0161"},
    {phoneNo: "01506"},
    {phoneNo: "0113"},
    {phoneNo: "0114"},
    {phoneNo: "0115"},
    {phoneNo: "0116"},
    {phoneNo: "0117"},
    {phoneNo: "01200"},
    {phoneNo: "01202"},
    {phoneNo: "01234"},
    {phoneNo: "01389"},
    {phoneNo: "01526"},
    {phoneNo: "01528"},
    {phoneNo: "01702"},
    {phoneNo: "01792"},
    {phoneNo: "01865"},
    {phoneNo: "01872"},
    {phoneNo: "01952"},
    {phoneNo: "020"},

])

db.languages.insertMany([
    {language: "English"},
    {language: "Scottish"},
    {language: "British Sign Language"},
    {language: "Welsh"},
    {language: "Gaelic"},
    {language: "Irish"},
    {language: "Cornish"},
    {language: "Manx"},
    {language: "Angloromani"},
    {language: "Shelta"}

])


db.cars.insertMany([
    {car: "Ford Focus ST"},
    {car: "Ford Fiesta ST"},
    {car: "Ford Galaxy"},
    {car: "Ford Ka"},
    {car: "Vauxhall Corsa"},
    {car: "Vauxhall Astra"},
    {car: "Vauxhall Insignia"},
    {car: "Vauxhall Adam"},
    {car: "Mercedes-Benz A Class AMG"},
    {car: "Mercedes-Benz C Class AMG"},
    {car: "Mercedes-Benz C Class Coupe"},
    {car: "Mercedes-Benz AMG GT"},
    {car: "Audi A1"},
    {car: "Audi A3"},
    {car: "Audi A4"},
    {car: "Audi R8"},
    {car: "Range Rover Sport"},
    {car: "Range Rover Evoque"},
    {car: "Range Rover Vogue"},
    {car: "Land Rover Discovery"},

])

db.vans.insertMany([
    {van: "Peugeot Boxer"},
    {van: "Peugeot Expert"},
    {van: "Peugeot Partner"},
    {van: "Peugeot J5"},
    {van: "Vauxhall Corsa"},
    {van: "Vauxhall Astra"},
    {van: "Vauxhall Insignia"},
    {van: "Vauxhall Adam"},
    {van: "Mercedes-Benz Vaneo"},
    {van: "Mercedes-Benz Vario"},
    {van: "Mercedes-Benz Vito"},
    {van: "Mercedes-Benz Sprinter"},
    {van: "Volkswagon Caddy"},
    {van: "Volkswagon Routan"},
    {van: "Volkswagon LT"},
    {van: "Volkswagon Crafter"},
    {van: "Ford Transit"},
    {van: "Ford Transit Connect"},
    {van: "Ford Toureno Custom"},
    {van: "Ford Model T"},

])


db.address.insertMany([
    {address: "22, Glendale Road, stirling FK11 5TY"},
    {address: "98 Edinburgh Road, Livingston, EH54 3RE"},
    {address: "123 Fake Lane, Fakeland, G12 3RE"},
    {address: "1, Glasgow Road, Edinburgh, EH56 4RE"},
    {address: "10, Pinetree Avenue, Lenzie, G66 7YU"},
    {address: "44, Anfield road, Liverpool, L12 7TY"},
    {address: "Grand Arcade, Lisington lane, London, W1 6TY"},
    {address: "32, Man Street, Leeds, LS1 2EE"},
    {address: "150, Inglewood Avenue, Bradford,BD45 3RE"},
    {address: "64, Busy Street, London, W2 3RT"}
    

])

db.email.insertMany([
    {email: "@hotmail.com"},
    {email: "@hotmail.co.uk"},
    {email: "@live.com"},
    {email: "@live.co.uk"},
    {email: "@gmail.com"},
    {email: "@googlemail.com"},
    {email: "@helloworld.com"},
    {email: "@aol.com"},
    {email: "@outlook.com"},
    {email: "@example.com"}
    

])

db.lastName.insertMany([
    {lastName: "Smith"},
    {lastName: "Baxter"},
    {lastName: "Anderson"},
    {lastName: "Martin"},
    {lastName: "Jenkins"},
    {lastName: "Barry"},
    {lastName: "Lescott"},
    {lastName: "Owen"},
    {lastName: "James"},
    {lastName: "Brown"},
    {lastName: "McGregor"},
    {lastName: "Murray"},
    {lastName: "Norman"},
    {lastName: "Montgomery"},
    {lastName: "Weir"},
    {lastName: "Hayes"},

])


db.firstName.insertMany([
    {firstName: "Raymond"},
    {firstName: "James"},
    {firstName: "Robert"},
    {firstName: "John"},
        {
        firstName: "William"
        },
        {
        
        firstName: "David"
        },
        {
        
        firstName: "Richard"
        },
        {
        
        firstName: "Joseph"
        },
        {
       
        firstName: "Thomas"
        },
        {
       
        firstName: "Charles"
        },
        {
        
        firstName: "Daniel"
        },
        {
        
        firstName: "Matthew"
        },
        {
        
        firstName: "Anthony"
        },
        {
        
        firstName: "Mark"
        },
        {
       
        firstName: "Donald"
        },
        {
        
        firstName: "Steven"
        },
        {
        
        firstName: "Stephen"
        },
        {
        
        firstName: "Paul"
        },
        {
        
        firstName: "Andrew"
        },
        {
        
        firstName: "Joshua"
        },
        {
      
        firstName: "Kenneth"
        },
        {
        
        firstName: "Dorothy"
        },
        {
       
        firstName: "Michelle"
        },
        {
        
        firstName: "Donna"
        },
        {
        
        firstName: "Emily"
        },
        {
       
        firstName: "Kimberly"
        },
        {
        
        firstName: "Ashley"
        },
        {
        
        firstName: "Sandra"
        },
        {
        
        firstName: "Margaret"
        },
        {
        
        firstName: "Betty"
        },
        {
        
        firstName: "Lisa"
        },
        {
        
        firstName: "Karen"
        },
        {
        
        firstName: "Sarah"
        },
        {
        
        firstName: "Jessica"
        },
        {
       
        firstName: "Susan"
        },
        {
        
        firstName: "Barbara"
        },
        {
        
        firstName: "Elizabeth"
        },
        {
        
        firstName: "Linda"
        },
        {
       
        firstName: "Jennifer"
        },
        {
        
        firstName: "Patricia"
        },
        {
        
        firstName: "Mary"
        },
        {
        
        firstName: "Carol"
        },
        {firstName: "Oscar"},
        {firstName: "Joanna"},
        {firstName: "Bernard"},
        {firstName: "Bobby"},
        {firstName: "Michael"},
        {firstName: "Christopher"},
        {firstName: "Nancy"},
        {firstName: "Martin"}
])
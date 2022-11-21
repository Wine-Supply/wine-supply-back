let user = [
    {
        name: "", //*String
        lastName: "", //* String
        isAdmin: "", //*Boolean
        phone: "", //* String // tengo un regex para numeros de USA
        hashedPass: "", //! ???
        //TODO autenticación de terceros
        membership_id: [ //!! ACLARAR USER HISTORY
            {
                isPremiun: "", //* Boolean
            }
        ],
        reviews: "", //* F-KEY
        adress: 
        [
            {
                ifDefault: "", //*Boolean
                country: "", //*string
                region: "", //*string
                city: "", //*string
                postalCode: "", //*NUMBER
                adressLine1: "", //*string
                adressLine2: "", //*string
                adressNumber: "", //* NUMBER
                floor: "", //!opcional NUMBER
                flatNumber: "", //!opcional NUMBER
                
            }
        ] //* array limit = 3
    }
]
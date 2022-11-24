let users = [
  {
    name: "Simon Jose",
    lastName: "Bolivar",
    userName: "simonbolivar",
    email: "simonbolivar@gmail.com",
    isAdmin: false,
    isActive: true,
    phone: "555-5555",
    hashedPass: "soysimonBol1v@r",
    membership_id: [
      { isMember: { type: Boolean, required: true } },
      { type: mongoose.Types.ObjectId, ref: "Membership", required: true },
    ],
    adress: [
      { type: mongoose.Types.ObjectId, ref: "Adress", required: true },
      { type: mongoose.Types.ObjectId, ref: "Adress", required: false },
      { type: mongoose.Types.ObjectId, ref: "Adress", required: false },
    ], //* array limit = 3
    review_id: [],
  },
  {
    name: "Galileo di Vincenzo",
    lastName: "Bonaiuti de' Galilei",
    userName: "simonbolivar",
    email: "simonbolivar@gmail.com",
    isAdmin: false,
    isActive: true,
    phone: "555-5555",
    hashedPass: "soysimonBol1v@r",
    membership_id: [
      { isMember: { type: Boolean, required: true } },
      { type: mongoose.Types.ObjectId, ref: "Membership", required: true },
    ],
    adress: [
      { type: mongoose.Types.ObjectId, ref: "Adress", required: true },
      { type: mongoose.Types.ObjectId, ref: "Adress", required: false },
      { type: mongoose.Types.ObjectId, ref: "Adress", required: false },
    ], //* array limit = 3
    review_id: [],
  },
  {
    name: "Johannes Wolfgannus",
    lastName: "Mozart",
    userName: "TheBestComposer",
    email: "Mozart@gmail.com",
    isAdmin: false,
    isActive: true,
    phone: "555-5555",
    hashedPass: "requiemdeMozart",
    membership_id: [
      { isMember: { type: Boolean, required: true } },
      { type: mongoose.Types.ObjectId, ref: "Membership", required: true },
    ],
    adress: [
      { type: mongoose.Types.ObjectId, ref: "Adress", required: true },
      { type: mongoose.Types.ObjectId, ref: "Adress", required: false },
      { type: mongoose.Types.ObjectId, ref: "Adress", required: false },
    ], //* array limit = 3
    review_id: [],
  },
  {
    name: "Joshep",
    lastName: "Stalin",
    userName: "theComunnistParty",
    email: "stalin@gmail.com",
    isAdmin: false,
    isActive: false,
    phone: "555-5555",
    hashedPass: "noFunciono",
    membership_id: [
      { isMember: { type: Boolean, required: true } },
      { type: mongoose.Types.ObjectId, ref: "Membership", required: true },
    ],
    adress: [
      { type: mongoose.Types.ObjectId, ref: "Adress", required: true },
      { type: mongoose.Types.ObjectId, ref: "Adress", required: false },
      { type: mongoose.Types.ObjectId, ref: "Adress", required: false },
    ], //* array limit = 3
    review_id: [],
  },
  {
    name: "Bad",
    lastName: "Buny",
    userName: "nosedeMus1ca",
    email: "asco@gmail.com",
    isAdmin: false,
    isActive: false,
    phone: "555-5555",
    hashedPass: "ojalasUPIERACANTAR",
    membership_id: [
      { isMember: { type: Boolean, required: true } },
      { type: mongoose.Types.ObjectId, ref: "Membership", required: true },
    ],
    adress: [
      { type: mongoose.Types.ObjectId, ref: "Adress", required: true },
      { type: mongoose.Types.ObjectId, ref: "Adress", required: false },
      { type: mongoose.Types.ObjectId, ref: "Adress", required: false },
    ], //* array limit = 3
    review_id: [],
  },
  {
    name: "Hideo",
    lastName: "Kojima",
    userName: "metalgear",
    email: "kojimaisgod@gmail.com",
    isAdmin: false,
    isActive: true,
    phone: "555-5555",
    hashedPass: "solidsnake",
    membership_id: [
      { isMember: { type: Boolean, required: true } },
      { type: mongoose.Types.ObjectId, ref: "Membership", required: true },
    ],
    adress: [
      { type: mongoose.Types.ObjectId, ref: "Adress", required: true },
      { type: mongoose.Types.ObjectId, ref: "Adress", required: false },
      { type: mongoose.Types.ObjectId, ref: "Adress", required: false },
    ], //* array limit = 3
    review_id: [],
  },
  {
    name: "Soy",
    lastName: "Henry",
    userName: "soyHenry",
    email: "soyhenry@gmail.com",
    isAdmin: false,
    isActive: true,
    phone: "555-5555",
    hashedPass: "solidsnake",
    membership_id: [
      { isMember: { type: Boolean, required: true } },
      { type: mongoose.Types.ObjectId, ref: "Membership", required: true },
    ],
    adress: [
      { type: mongoose.Types.ObjectId, ref: "Adress", required: true },
      { type: mongoose.Types.ObjectId, ref: "Adress", required: false },
      { type: mongoose.Types.ObjectId, ref: "Adress", required: false },
    ], //* array limit = 3
    review_id: [],
  },
	{
    name: "Igor",
    lastName: "Stravinsky",
    userName: "stravinsky",
    email: "stravinsky@gmail.com",
    isAdmin: false,
    isActive: true,
    phone: "555-5555",
    hashedPass: "riteofthespring",
    membership_id: [
      { isMember: { type: Boolean, required: true } },
      { type: mongoose.Types.ObjectId, ref: "Membership", required: true },
    ],
    adress: [
      { type: mongoose.Types.ObjectId, ref: "Adress", required: true },
      { type: mongoose.Types.ObjectId, ref: "Adress", required: false },
      { type: mongoose.Types.ObjectId, ref: "Adress", required: false },
    ], //* array limit = 3
    review_id: [],
  },
	{
    name: "Bjarne",
    lastName: "Stroustrup",
    userName: "BStroustrup",
    email: "cplusplus@gmail.com",
    isAdmin: false,
    isActive: true,
    phone: "555-5555",
    hashedPass: "nullIsBad",
    membership_id: [
      { isMember: { type: Boolean, required: true } },
      { type: mongoose.Types.ObjectId, ref: "Membership", required: true },
    ],
    adress: [
      { type: mongoose.Types.ObjectId, ref: "Adress", required: true },
      { type: mongoose.Types.ObjectId, ref: "Adress", required: false },
      { type: mongoose.Types.ObjectId, ref: "Adress", required: false },
    ], //* array limit = 3
    review_id: [],
  },
	{
    name: "Graydon",
    lastName: "Hoare",
    userName: "FirstRustacean",
    email: "rustlang@gmail.com",
    isAdmin: false,
    isActive: true,
    phone: "555-5555",
    hashedPass: "rustIsTheFuture",
    membership_id: [
      { isMember: { type: Boolean, required: true } },
      { type: mongoose.Types.ObjectId, ref: "Membership", required: true },
    ],
    adress: [
      { type: mongoose.Types.ObjectId, ref: "Adress", required: true },
      { type: mongoose.Types.ObjectId, ref: "Adress", required: false },
      { type: mongoose.Types.ObjectId, ref: "Adress", required: false },
    ], //* array limit = 3
    review_id: [],
  },
	{
    name: "Niklaus Emil",
    lastName: "Wirth",
    userName: "ImadePascal",
    email: "pascal@gmail.com",
    isAdmin: false,
    isActive: false,
    phone: "555-5555",
    hashedPass: "remeberPascal?",
    membership_id: [
      { isMember: { type: Boolean, required: true } },
      { type: mongoose.Types.ObjectId, ref: "Membership", required: true },
    ],
    adress: [
      { type: mongoose.Types.ObjectId, ref: "Adress", required: true },
      { type: mongoose.Types.ObjectId, ref: "Adress", required: false },
      { type: mongoose.Types.ObjectId, ref: "Adress", required: false },
    ], //* array limit = 3
    review_id: [],
  },
	{
    name: "Taylor",
    lastName: "Swift",
    userName: "tSwift",
    email: "tSwift@gmail.com",
    isAdmin: false,
    isActive: true,
    phone: "555-5555",
    hashedPass: "iNotLoveTtSwift",
    membership_id: [
      { isMember: { type: Boolean, required: true } },
      { type: mongoose.Types.ObjectId, ref: "Membership", required: true },
    ],
    adress: [
      { type: mongoose.Types.ObjectId, ref: "Adress", required: true },
      { type: mongoose.Types.ObjectId, ref: "Adress", required: false },
      { type: mongoose.Types.ObjectId, ref: "Adress", required: false },
    ], //* array limit = 3
    review_id: [],
  },
	{
    name: "Michael",
    lastName: "Jackson",
    userName: "mJackson",
    email: "billieJ@gmail.com",
    isAdmin: false,
    isActive: false,
    phone: "555-5555",
    hashedPass: "annieAreYou0k?",
    membership_id: [
      { isMember: { type: Boolean, required: true } },
      { type: mongoose.Types.ObjectId, ref: "Membership", required: true },
    ],
    adress: [
      { type: mongoose.Types.ObjectId, ref: "Adress", required: true },
      { type: mongoose.Types.ObjectId, ref: "Adress", required: false },
      { type: mongoose.Types.ObjectId, ref: "Adress", required: false },
    ], //* array limit = 3
    review_id: [],
  },
	{
    name: "Bruno",
    lastName: "Mars",
    userName: "bMars",
    email: "magicK24@gmail.com",
    isAdmin: false,
    isActive: true,
    phone: "555-5555",
    hashedPass: "pinkyringstomoon",
    membership_id: [
      { isMember: { type: Boolean, required: true } },
      { type: mongoose.Types.ObjectId, ref: "Membership", required: true },
    ],
    adress: [
      { type: mongoose.Types.ObjectId, ref: "Adress", required: true },
      { type: mongoose.Types.ObjectId, ref: "Adress", required: false },
      { type: mongoose.Types.ObjectId, ref: "Adress", required: false },
    ], //* array limit = 3
    review_id: [],
  },
	{
    name: "Sigmund",
    lastName: "Freud",
    userName: "incouncious",
    email: "dasich@gmail.com",
    isAdmin: false,
    isActive: false,
    phone: "555-5555",
    hashedPass: "youHateYourMom",
    membership_id: [
      { isMember: { type: Boolean, required: true } },
      { type: mongoose.Types.ObjectId, ref: "Membership", required: true },
    ],
    adress: [
      { type: mongoose.Types.ObjectId, ref: "Adress", required: true },
      { type: mongoose.Types.ObjectId, ref: "Adress", required: false },
      { type: mongoose.Types.ObjectId, ref: "Adress", required: false },
    ], //* array limit = 3
    review_id: [],
  },
	{
    name: "Carl",
    lastName: "Jung",
    userName: "Alchemy",
    email: "cincouncius@gmail.com",
    isAdmin: false,
    isActive: false,
    phone: "555-5555",
    hashedPass: "animaMundi",
    membership_id: [
      { isMember: { type: Boolean, required: true } },
      { type: mongoose.Types.ObjectId, ref: "Membership", required: true },
    ],
    adress: [
      { type: mongoose.Types.ObjectId, ref: "Adress", required: true },
      { type: mongoose.Types.ObjectId, ref: "Adress", required: false },
      { type: mongoose.Types.ObjectId, ref: "Adress", required: false },
    ], //* array limit = 3
    review_id: [],
  },
	{
    name: "Jacques",
    lastName: "lacan",
    userName: "Phalus",
    email: "rsi-psy@gmail.com",
    isAdmin: false,
    isActive: false,
    phone: "555-5555",
    hashedPass: "theReal",
    membership_id: [
      { isMember: { type: Boolean, required: true } },
      { type: mongoose.Types.ObjectId, ref: "Membership", required: true },
    ],
    adress: [
      { type: mongoose.Types.ObjectId, ref: "Adress", required: true },
      { type: mongoose.Types.ObjectId, ref: "Adress", required: false },
      { type: mongoose.Types.ObjectId, ref: "Adress", required: false },
    ], //* array limit = 3
    review_id: [],
  },
];

interface User{
    name?: string; /* in interface if you have ? after a propety it's not a must don't forget this */
    email: string;
    password: string
}

export const users: User[] = [
    {name: "Ilan" , email: "ilanyagotilov01@gmail.com", password: "z123789456"},
    {name: "Dom" , email: "dom191@gmail.com", password: "z456789123"}
];
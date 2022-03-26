let sname = prompt("Name...");
let age = prompt('Your age..');
let gender = prompt("gender..");

let lifetime = 0;
let address = '';

switch (gender) {
    case "Male":
        lifetime = 76;
        address = 'Gentleman';
        break;

    case "Female":
        lifetime = 70;
        address = 'Gentlewoman';
        break;
}

if (age >= lifetime){
    console.log(`
      Hi ${sname} ${address}, Congratualation! You have crossed your normal lifetime in Bangladesh.
    `);
}
else{
    console.log(`
    Hi ${sname} ${address}, Congratualation! You have crossed ${age} years of your lifetime.
    `);
}


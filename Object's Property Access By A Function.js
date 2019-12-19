var User = {
    first_name : 'Ram',
    last_name : 'Sharma'
};
console.log(User);

function fullName(){
    return User.first_name + ' ' + User.last_name;
}
console.log(fullName());
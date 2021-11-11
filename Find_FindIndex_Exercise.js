function findUserByUserName(usersArray, username) {
    return usersArray.find(function(user) {
        return user.username === username;
    })
}

function removeUser(usersArray, str) {
    let foundIndex = usersArray.findIndex(function(user) {
        return user.username === username;
    })
    if(foundIndex === -1) return;

    return usersArray.splice(foundIndex, 1)[0];
}
// Honestly I couldn't even figure out what this one was asking for and the answer isn't helping. Maybe I'd understand the answer better if I understood the question better.
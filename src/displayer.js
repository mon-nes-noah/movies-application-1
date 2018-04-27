module.exports = (title, rating,genre, id) =>{
    return`<h3>${title} <br> Rating: ${rating}<br> Genre: ${genre} <br> <button data-id="${id}" class="deletebutton">Delete</button><button class="editbutton" data-id="${id}">Edit</button></h3>`;
};



module.exports = (title, rating, id) => {
    return `<h3> ${title} <br> rating: ${rating}<br><button data-id="${id}" class="deletebutton">Delete</button><button class="editbutton" data-id="${id}">Edit</button></h3>`;
};


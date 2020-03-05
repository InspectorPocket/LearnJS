const list = document.querySelector('ul');

const addRecipe = recipe => {
    console.log(recipe.created_at.toDate());
    
    let time = recipe.created_at.toDate();
    let html = `
        <li>
            <div>${recipe.title}</div>
            <div>${time}</div>
        </li>
    `;
    
    list.innerHTML += html;
};

db.collection('recipies').get().then(snapshot => {
    // when we have the data
    snapshot.docs.forEach(doc => {
        console.log(doc.data());
        addRecipe(doc.data());
    });
}).catch(err => {
    console.log(err);
});
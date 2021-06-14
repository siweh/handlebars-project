document.addEventListener('DOMContentLoaded', function(){
    console.log('DOM fully loaded and parse');
    //Get reference to the template script tag
    var userDataElement = document.querySelector(".userTemplate").innerHTML;
        console.log(userDataElement);
    //Compile the template
    var theTemplate = Handlebars.compile(userDataElement);
    console.log(theTemplate);
    //Pass the data into the template and get the HTML back
    var valuesObj = { users: [
        {username: 'Mirah', firstName: 'Amirah', lastName: 'Coetze', email: "mirahcoetze@gmail.com", city: "Johannesburg"},
        {username: 'Zandie', firstName: 'Zandile', lastName: 'Ngulube', email: "ngulubezandie@gmail.com", city: "Cape Town"},
        {username: 'Busie', firstName: 'Busisiwe', lastName: 'Khanyisile', email: "khanyisilebusie@gmail.com", city: "Durban"}
    ]};

    //Get reference to the element in the DOM where we would like to display data
    var compiledData = theTemplate(valuesObj);
    console.log(compiledData);

    //Put the resulting HTML into the target innerHTML elements.
    document.querySelector(".userData").innerHTML = compiledData;
});

// document.addEventListener('DOMContentLoaded', function(){
//     console.log('DOM fully loaded and parse');
//     var myInfo = "<p>My name is {{name}}, I am {{age}} years old and I live in {{city}} in {{country}}.</p>";
//     console.log(myInfo);
//     var template = Handlebars.compile(myInfo);
//         console.log(template);
//     var data = template({name: 'Sanelisiwe', age: 23, city: 'Johannesburg', country: 'South Africa'});
//         console.log(data);
//     document.querySelector(".userData").innerHTML = data;
// });

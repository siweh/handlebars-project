document.addEventListener('DOMContentLoaded', function(){
    console.log('DOM fully loaded and parsed');

    //Get a reference to the template srcipt tag.
    var theScriptHTML = document.querySelector(".userTemplate").innerHTML;
    //Compile the template
    var theTemplate = Handlebars.compile(theScriptHTML);
    // //Pass the data into the template and get the HTML back
    var valuesObj = {username: 'Mandy', firstName: "Mandisa", lastName: "Khonayo", email: "mandykhony@gmail.com", city: "Johannesburg"};
    //Get reference to the element in the DOM where we would like to display data
    var compileddData = theTemplate(valuesObj);

    //Put the resulting HTML into the target innerHTML elements.
    document.querySelector(".userData").innerHTML = compileddData;
});
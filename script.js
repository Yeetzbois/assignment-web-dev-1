function showContent(section) {
    // get all sections that has class="content"
    const sections = document.querySelectorAll('.content');
    // hide all
    sections.forEach(section => {
        section.classList.remove('active');
    });
    // show the desired element
    document.getElementById(section).classList.add('active');
}

function calculateFootprint() {
    // check if the input is it empty or not, if it is then 0 if not will have "value"
    const electricity = parseFloat(document.getElementById("electricity").value) || 0;
    const car = parseFloat(document.getElementById("car").value) || 0;
    const meat = parseFloat(document.getElementById("meat").value) || 0;

    //times the value by the end of the number <star symbol is times>
    const electricityEmissions = electricity * 0.45;
    const carEmissions = car * 0.21;
    const meatEmissions = meat * 7;

    // after times plus all the value
    const totalEmissions = electricityEmissions + carEmissions + meatEmissions;

    //give conclusion according to the user input 
    let recommendations = "<strong>Recommendations:</strong><ul>";

    //if the input is higher or equal to the standard then give its recommendations for it by section and section making it a list item
    let temp = ""
    if (electricity >= 300) temp += "<li>Reduce electricity usage by switching to energy-efficient appliances.</li>";
    if (car >= 100) temp += "<li>Consider carpooling or using public transport.</li>";
    if (meat >= 7) temp += "<li>Try replacing some meat meals with plant-based alternatives.</li>";
    
    //confirming is my conclusion correct or wrong to give out
    console.log(`temp.length : ${temp.length}`)
    //check whether the value is empty, if it is then give the standard recommendations
    if (temp.length == 0){
        temp += "<li>Your carbon emissions looks fine.</li>";
    }
    temp += "</ul>";
    recommendations += temp;
    
    // get element: get resultDiv by "result" id
    // gather & format: totalEmissions & recommendations then format them to be pretty
    // inject: inject the full formatted HTML code into resultDiv
    const resultDiv = document.getElementById("result");
    resultDiv.style.display = "block";
    resultDiv.innerHTML = `
        <p>Your estimated monthly carbon footprint is <strong>${totalEmissions.toFixed(2)} kg CO2</strong>.</p>
        ${recommendations}
    `;
}

function feedbackSubmit() {
    // Get form elements
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const feedbackResponse = document.getElementById('feedback-response');

    // Validate inputs
    if (!nameInput.value.trim()) {
        feedbackResponse.textContent = 'Please enter your name.';
        feedbackResponse.style.color = 'red';
        nameInput.focus();
        return;
    }

    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        feedbackResponse.textContent = 'Please enter a valid email address.';
        feedbackResponse.style.color = 'red';
        emailInput.focus();
        return;
    }

    if (!messageInput.value.trim()) {
        feedbackResponse.textContent = 'Please enter a message.';
        feedbackResponse.style.color = 'red';
        messageInput.focus();
        return;
    }

    // Construct mailto link
    const subject = encodeURIComponent("Feedback from Everyday Eco-Wins");
    const body = encodeURIComponent(`
        Name: ${nameInput.value.trim()}
        Email: ${emailInput.value.trim()}

        Message:
        ${messageInput.value.trim()}
    `);

    // Open default email client
    window.location.href = `mailto:koayjiale999@gmail.com?subject=${subject}&body=${body}`;

    // Clear form inputs
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';

    // Show success message
    feedbackResponse.textContent = 'Your email client should now open. Please send the message.';
    feedbackResponse.style.color = 'green';
}




// function navSubMenu(submenu){
//     elem = document.getElementById("target")
//     if (submenu == "Home"){
//         elem.innerHTML = `
//             '] <section id="home" class="content active">
//                 <h2>🌍Welcome to Everyday Eco-Wins: Simple Actions for a Greener Tomorrow</h2>
//                 <p>Learn about climate change and how to take urgent action to combat it.</p>
//                 <a href="https://sdgs.un.org/goals/goal13#overview" target="_blank">
//                     <img src="image.jpg" alt="Earth" class="transparent-image" width="60%">
//                 </a>
//                 <h3>Please click for more information:</h3>

//             </section>
//         `
//     }
//     else if (submenu == "Cause"){
//         elem.innerHTML = `
//             <section id="causes" class="content">
//                 <h2>🔥Causes of Climate Change</h2>
//                 <p>Human activities like deforestation and burning fossil fuels contribute to climate change.</p>
//                 <a href="https://medium.com/@zohaibbinaslam/climate-change-causes-effects-and-solutions-1a566603f263" target="_blank"> 
//                     <img src="image.png" alt="Causes" class="transparent-image" width="60%">
//                 </a>
//             </section>
//         `
//     }

    
// }
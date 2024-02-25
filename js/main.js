let togglerClick = document.getElementById('toggler-click');
let toggler = document.getElementById('toggler-click-two');
let nav = document.querySelector(".nav");
let bodym = document.getElementById("bodym");
       
 

togglerClick.onclick =  function (){
      console.log("nih");
      nav.style.display = 'none';
      bodym.style.opacity = "100%";
     
 };

toggler.onclick = function () {
      nav.style.display = 'flex';
      bodym.style.opacity = "50%";
      nav.style.opacity = '100%';
};

function killNav(){
      nav.style.display = 'none';
      bodym.style.opacity = "100%";
}


// About

function aboutShow(){
document.getElementById('about').style.display = 'block';

document.querySelector('#read').style.display = 'block';
document.querySelector('#read-more').style.display = 'none';
}

function aboutKill(){
      document.getElementById('about').style.display = 'none';
      document.querySelector("#read-more").style.display = 'block';
      document.querySelector('#read').style.display = 'none';
}

function testmonialbring(){
      document.querySelector(".Testimonial-section").style.display ='none';
      document.querySelector(".Testimonial-section2").style.display ='flex';

}

function testmonialkill(){
      document.querySelector(".Testimonial-section").style.display ='flex';
      document.querySelector(".Testimonial-section2").style.display ='none';

}

function sendMessage() {
            
            var phoneNumber = '08131130472';
            var message = 'Hi Techbium my name is...';

            window.open('https://wa.me/' + phoneNumber + '?text=' + message, '_blank');
        }

function sendEmail() {
            // Replace 'your-email@example.com' with your email address
            var emailAddress = 'raufolatunji2@gmail.com';

            // Replace 'Subject' with the subject of your email
            var subject = document.getElementById("eSubject").value;

            // Replace 'Body' with the body of your email
            var body = document.getElementById("emessage").value;

            // Create the mailto link
            var mailtoLink = 'mailto:' + emailAddress + '?subject=' + subject + '&body=' + body;

            // Open the default email client with the mailto link
            window.location.href = mailtoLink;
        }

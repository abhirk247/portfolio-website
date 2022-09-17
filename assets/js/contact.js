window.onload = function() {
  document.getElementById('contactEmail').addEventListener('submit', function(event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = Math.random() * 100000 | 0;
      // these IDs from the previous steps
      emailjs.sendForm('service_bbqf6al', 'template_pcaiqqy','#contactEmail',)
          .then(function() {
              console.log('SUCCESS!');
              alert("Message Sent..");
          }, function(error) {
              console.log('FAILED...', error);
              alert("Message Failed..");
          });
          document.getElementById('contactEmail').reset();
  });
 
}
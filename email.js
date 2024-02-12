var shown = false;
var emailAddress = "okaiso@mail.uc.edu";

function showhideEmail() {
  var emailSpan = document.getElementById('email');
  if (!shown) {
    var encodedEmail = encodeURI(emailAddress);
    var myemail = "<a href='mailto:" + encodedEmail + "'>" + encodedEmail + "</a>";
    emailSpan.innerHTML = myemail;
    shown = true;
  } else {
    emailSpan.textContent = "Show my email";
    shown = false;
  }
}

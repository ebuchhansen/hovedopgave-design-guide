function myFunction() {
  let amount = document.getElementById('amount');
  let defaultAmount = amount.defaultValue;
  let currentAmount = amount.value;

  let number = document.getElementById('number');
  let defaultNumber = number.defaultValue;
  let currentNumber = number.value;

  let name = document.getElementById('name');
  let defaultName = name.defaultValue;
  let currentName = name.value;

  let phone = document.getElementById('phone');
  let defaultPhone = phone.defaultValue;
  let currentPhone = phone.value;

  let email = document.getElementById('email');
  let defaultEmail = email.defaultValue;
  let currentEmail = email.value;

  let post = document.getElementById('post');
  let defaultPost = post.defaultValue;
  let currentPost = post.value;

  if (defaultAmount == currentAmount || defaultNumber == currentNumber || defaultName == currentName || defaultPhone == currentPhone || defaultEmail == currentEmail || defaultPost == currentPost) {
    alert('Udfyld alt!');
  }


  else {
    alert('Velkommen til! Du er nu tilmeldt som medlem hos Bronx');
  }
}

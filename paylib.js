var myform = document.getElementById('payform');


paylib.inlineForm({
  'key': '-- Your client key --',
  'form': myform,
  'autoSubmit': true,
  'callback': function(response) 
  {
    document.getElementById('paymentErrors').innerHTML = 'adfasdfasdfasdf';
    if (response.error) {             
      paylib.handleError(document.getElementById('paymentErrors'), response); 
    }
  }
});


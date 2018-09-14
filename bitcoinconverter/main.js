function cryptoCurrency()
        {
            var from = document.getElementById("from").value;
            var to = document.getElementById("to").value;
            var xmlhttp = new XMLHttpRequest();
            var endpoint = 'latest';
            var access_key = '3679ab9e0d062e090ad82a2c81b35bb5';
            var url = 'http://data.fixer.io/api/' + endpoint+ '?access_key=' + access_key+ '&from=' + from + "," + to;
    
    
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
            xmlhttp.onreadystatechange = function(){
                if(xmlhttp.readyState==4 && xmlhttp.status ==200)
                {
                    var result = xmlhttp.responseText;
                    var cryptoResult = JSON.parse(result);
                    var oneUnit = cryptoResult.rates[to]/cryptoResult.rates[from];
                    var amt = document.getElementById("fromAmount").value;
                    document.getElementById("toAmount").value = (oneUnit* amt).toFixed(2);
                }
            }
        }






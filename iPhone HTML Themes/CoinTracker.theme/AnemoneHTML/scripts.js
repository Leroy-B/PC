$(document).ready(function(){
    
    function reload_js(src) {
        $('script[src="' + src + '"]').remove();
        $('<script>').attr('src', src).appendTo('head');
    }
	
	var delayInMilliseconds = 5000;
	
	setTimeout(function() {
	    
	    reload_js('scripts.js');
	
	}, delayInMilliseconds);

});

$(document).ready(function(){

    var priceBTC;
    var percentage;
    $.ajax({
        url: 'https://api.coinbase.com/v2/prices/BTC-CHF/spot',
        dataType: 'json',
        success: function(json) {

	        priceBTC = json.data.amount;
			
			if(priceBTC) { 
	            console.log(priceBTC);
	            $("#bitcoin").html('Fr. '+priceBTC);
            }
        }
    });
	
	function getYesterdaysDate() {
	    var date = new Date();
	    date.setDate(date.getDate()-1);
	    var theMonth = (date.getMonth()+1);
	    return date.getFullYear() + '-'+ (theMonth < 10 ? '0' : '') + theMonth + '-' + (date.getDate() < 10 ? '0' : '') + date.getDate();
	}
	
	var yesterday = getYesterdaysDate();
	
    $.ajax({
        url: 'https://api.coinbase.com/v2/prices/BTC-CHF/spot?date='+yesterday,
        dataType: 'json',
        success: function(json) {
						
		    yesterdayPriceBTC = json.data.amount;
			var delayInMilliseconds = 800;
			setTimeout(function() {
				
				if(yesterdayPriceBTC) {
		            
		            console.log(yesterday+': '+yesterdayPriceBTC);
	            
					priceChangeBTC = ( (100 - (yesterdayPriceBTC / priceBTC) * 100) );
					var priceChangeBTC = Math.round( priceChangeBTC * 10 ) / 10;
		            
		            if (priceChangeBTC > 0) {
			            $("#arrowBTC").addClass('arrowUpBTC');
			            console.log(priceChangeBTC);
			            $("#arrowBTC").html(priceChangeBTC);
			            $("#arrowBTC").append('%');
		            } else if (priceChangeBTC < 0) {
			            $("#arrowBTC").addClass('arrowDownBTC');
						priceChangeBTC = priceChangeBTC * (-1);
			            console.log(priceChangeBTC);
			            $("#arrowBTC").html(priceChangeBTC);
			            $("#arrowBTC").append('%');
		            } else {
			            //do nothing
		            }
		            
		        }
        	}, delayInMilliseconds);
        }
    });
});


$(document).ready(function(){

    var priceETH;
    var percentage;
    $.ajax({
        url: 'https://api.coinbase.com/v2/prices/ETH-CHF/spot',
        dataType: 'json',
        success: function(json) {

	        priceETH = json.data.amount;
			
			if(priceETH) { 
	            console.log(priceETH);
	            $("#ethereum").html('Fr. '+priceETH);
            }
        }
    });
	
	function getYesterdaysDate() {
	    var date = new Date();
	    date.setDate(date.getDate()-1);
	    var theMonth = (date.getMonth()+1);
	    return date.getFullYear() + '-'+ (theMonth < 10 ? '0' : '') + theMonth + '-' + (date.getDate() < 10 ? '0' : '') + date.getDate();
	}
	
	var yesterday = getYesterdaysDate();
	
    $.ajax({
        url: 'https://api.coinbase.com/v2/prices/ETH-CHF/spot?date='+yesterday,
        dataType: 'json',
        success: function(json) {
						
		    yesterdayPriceETH = json.data.amount;
	
			var delayInMilliseconds = 800;
			
			setTimeout(function() {
				
				if(yesterdayPriceETH) { 
		            
		            console.log(yesterday+': '+yesterdayPriceETH);
	            
					priceChangeETH = ( (100 - (yesterdayPriceETH / priceETH) * 100) );
					var priceChangeETH = Math.round( priceChangeETH * 10 ) / 10;
		            
		            if (priceChangeETH > 0) {
			            $("#arrowETH").addClass('arrowUpETH');
			            console.log(priceChangeETH);
			            $("#arrowETH").html(priceChangeETH);
			            $("#arrowETH").append('%');
		            } else if (priceChangeETH < 0) {
			            $("#arrowETH").addClass('arrowDownETH');
						priceChangeETH = priceChangeETH * (-1);
			            console.log(priceChangeETH);
			            $("#arrowETH").html(priceChangeETH);
			            $("#arrowETH").append('%');
		            } else {
			            //do nothing
		            }
		            
		        }
        	}, delayInMilliseconds);
        }
    });
});

/*
$(document).ready(function(){

    var priceLTC;
    var percentage;
    $.ajax({
        url: 'https://api.coinbase.com/v2/prices/LTC-CHF/spot',
        dataType: 'json',
        success: function(json) {

	        priceLTC = json.data.amount;
			
			if(priceLTC) { 
	            console.log(priceLTC);
	            $("#litecoin").html('Fr. '+priceLTC);
            }
        }
    });
	
	function getYesterdaysDate() {
	    var date = new Date();
	    date.setDate(date.getDate()-1);
	    var theMonth = (date.getMonth()+1);
	    return date.getFullYear() + '-'+ (theMonth < 10 ? '0' : '') + theMonth + '-' + (date.getDate() < 10 ? '0' : '') + date.getDate();
	}
	
	var yesterday = getYesterdaysDate();
	
    $.ajax({
        url: 'https://api.coinbase.com/v2/prices/LTC-CHF/spot?date='+yesterday,
        dataType: 'json',
        success: function(json) {
						
		    yesterdayPriceLTC = json.data.amount;
	
			var delayInMilliseconds = 8000;
			
			setTimeout(function() {
				
				if(yesterdayPriceLTC) { 
		            
		            console.log(yesterday+': '+yesterdayPriceLTC);
	            
					priceChangeLTC = ( (100 - (yesterdayPriceLTC / priceLTC) * 100) );
					var priceChangeLTC = Math.round( priceChangeLTC * 10 ) / 10;
		            
		            if (priceChangeLTC > 0) {
			            $("#arrowLTC").addClass('arrowUpLTC');
			            console.log(priceChangeLTC);
			            $("#arrowLTC").html(priceChangeLTC);
			            $("#arrowLTC").append('%');
		            } else if (priceChangeLTC < 0) {
			            $("#arrowLTC").addClass('arrowDownLTC');
						priceChangeLTC = priceChangeLTC * (-1);
			            console.log(priceChangeLTC);
			            $("#arrowLTC").html(priceChangeLTC);
			            $("#arrowLTC").append('%');
		            } else {
			            //do nothing
		            }
		            
		        }
        	}, delayInMilliseconds);
        }
    });
}); */
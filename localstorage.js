//This page logs the data in client side *********currently it is in development version ***********************
//LocalStorage has a storage size limit of 5MB data for almost all browsers (Tested in Chrome, Firefox and Safari). So, if the data stored is more than 5 MB, then use testscinetversion2 : which uses SessionStorage which has unlimited storage for Safari and Firefox but not for Chrome

var Myvalue;
var dummyid;
var CopiedKey;
var CopiedTime;

function display(){

	if(typeof(Storage)!=="undefined")
  	{
		try {  
       
			var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
			if(existingEntries == null) existingEntries = [];

			var entry = {
                        	        "display results": JSON.parse(localStorage.getItem("display")),
                                	"Semi-localKeywordDetails": JSON.parse(localStorage.getItem("DetailedKeyword")),
                                	"Searched query": localStorage.getItem("Query"),
                                	"DisplayResultsTimestamp": localStorage.getItem("testTime"),
                                	"Keyword moved": localStorage.getItem("MovedKeyword")

                        		};

			localStorage.setItem("entry", JSON.stringify(entry));
			// Save allEntries back to local storage
			existingEntries.push(entry);

			localStorage.setItem("allEntries", JSON.stringify(existingEntries));

		      } catch (e) {
                         if (e == QUOTA_EXCEEDED_ERR) {
                                document.write("Data wasn't successfully saved due to quota exceed")
                                //alert('Quota exceeded!'); //data wasn't successfully saved due to quota exceed so throw an error
                        	}
                	}

  	}

	else
  	{
  		document.write("Sorry, your browser does not support web storage..." + "<br>");
  	}
   }


function MySelectedArticle(Seid){
	
	if(typeof(Storage)!=="undefined")
  	{ 

		var Mytime2 = new Date();
		var MyMonth2 = Mytime2.getMonth()+1
        	var TotalTime2 = Mytime2.getFullYear() + "-" + MyMonth2 + "-" + Mytime2.getDate() + " " + Mytime2.getHours() + ":" + Mytime2.getMinutes() + ":" + Mytime2.getSeconds();


		var SelexistingEntries = JSON.parse(localStorage.getItem("SelallEntries"));
		if(SelexistingEntries == null) SelexistingEntries = [];


		var NewSeArticle = {
                          "SelectedArticleId": Seid,
                          "SelectedArticleTimestamp": TotalTime2
                         }


		localStorage.setItem("NewSeArticle", JSON.stringify(NewSeArticle));
		// Save allEntries back to local storage
		SelexistingEntries.push(NewSeArticle);

		localStorage.setItem("SelallEntries", JSON.stringify(SelexistingEntries));
		}

	else
  	{
  		document.write("Sorry, your browser does not support web storage..." + "<br>");
  	}
   }


	

function MyDeSelectedArticle(Deid){

	if(typeof(Storage)!=="undefined")
  	{ 
		var Mytime3 = new Date();
		var MyMonth3 = Mytime3.getMonth()+1
                var TotalTime3 = Mytime3.getFullYear() + "-" + MyMonth3 + "-" + Mytime3.getDate() + " " + Mytime3.getHours() + ":" + Mytime3.getMinutes() + ":" + Mytime3.getSeconds();

		var TesexistingEntries = JSON.parse(localStorage.getItem("TesallEntries"));
		if(TesexistingEntries == null) TesexistingEntries = [];


		var NewDeArticle = {
                          "DeSelectedArticleId": Deid,
                          "DeSelectedArticleTimestamp": TotalTime3
                         }


		localStorage.setItem("NewDeArticle", JSON.stringify(NewDeArticle));
		// Save allEntries back to local storage
		TesexistingEntries.push(NewDeArticle);

		localStorage.setItem("TesallEntries", JSON.stringify(TesexistingEntries));
		}

	else
  	{
  		document.write("Sorry, your browser does not support web storage..." + "<br>");
  	}
   }


function KeywordViewed(d){

	if(typeof(Storage)!=="undefined")
  	{ 
		var Mytime4 = new Date();
		var MyMonth4 = Mytime4.getMonth()+1
		var TotalTime4 = Mytime4.getFullYear() + "-" + MyMonth4 + "-" + Mytime4.getDate() + " " + Mytime4.getHours() + ":" + Mytime4.getMinutes() + ":" + Mytime4.getSeconds();


		if((CopiedKey !== d.keyword) || (CopiedTime !== TotalTime4)){

			var KeyexistingEntries = JSON.parse(localStorage.getItem("KeyallEntries"));
                	if(KeyexistingEntries == null) KeyexistingEntries = [];

                        var NewKeyRoll = {
                          "KeywordRoll": d.keyword,
                          "x-coordinate": Math.floor(d.x),
                          "y-coordinate": Math.floor(d.y),
                          "RollTimestamp": TotalTime4
                         }

                	localStorage.setItem("NewKeyRoll", JSON.stringify(NewKeyRoll));
                	// Save allEntries back to local storage
                	KeyexistingEntries.push(NewKeyRoll);

                	localStorage.setItem("KeyallEntries", JSON.stringify(KeyexistingEntries));
			}
		CopiedKey = d.keyword
		CopiedTime = TotalTime4
		}

	else
  	{
  		document.write("Sorry, your browser does not support web storage..." + "<br>");
  	}
   }

      

function AbstractViewed(Aid){

	if(typeof(Storage)!=="undefined")
  	{ 

	 var Mytime5 = new Date();
	 var MyMonth5 = Mytime5.getMonth()+1
         var TotalTime5 = Mytime5.getFullYear() + "-" + MyMonth5 + "-" + Mytime5.getDate() + " " + Mytime5.getHours() + ":" + Mytime5.getMinutes() + ":" + Mytime5.getSeconds();

	localStorage.setItem("IdofAbstract", Aid);
	Myvalue = "article-" + localStorage.getItem("IdofAbstract")
	//console.log("Value of Myvaolue is: " +Myvalue)

	 $('article').each(function(){
        	var position = $(this).offset();
        	var MyNew = this.id;
        	//console.log("id's are: " +MyNew)

        	if (MyNew == Myvalue) {
		//console.log("top (y): " + position.top + " left (x): " + position.left);
       

			if(Aid == dummyid){
			var viewStatus = "close";
			}
			else{
			var viewStatus = "open";
			}
 
			var AbstractexistingEntries = JSON.parse(localStorage.getItem("AbstractallEntries"));
        		if(AbstractexistingEntries == null) AbstractexistingEntries = [];

         		var NewAbstractView = {
                          	"AbstractViewedId": Aid,
                          	"x-coordinate": position.left,
                          	"y-coordinate": position.top,
				"AbstractViewStatus": viewStatus,
                          	"AbstractViewTimestamp": TotalTime5
                         }

         		localStorage.setItem("NewAbstractView", JSON.stringify(NewAbstractView));
         		// Save allEntries back to local storage
         		AbstractexistingEntries.push(NewAbstractView);
         		localStorage.setItem("AbstractallEntries", JSON.stringify(AbstractexistingEntries));
			dummyid = Aid

			}      

		});
	}

	else
  	{
  		document.write("Sorry, your browser does not support web storage..." + "<br>");
  	}
   }




function Finaldisplay(){

	if(typeof(Storage)!=="undefined")
  	{ 
		try {
        		var MyFinalDisplay = {
        			"FinalDisplayResult": JSON.parse(localStorage.getItem("allEntries")),
       				"FinalKeywordsRolled": JSON.parse(localStorage.getItem("KeyallEntries")),
        			"FinalArticlesSelected": JSON.parse(localStorage.getItem("SelallEntries")),
        			"FinalArticlesDe-Selected": JSON.parse(localStorage.getItem("TesallEntries")),
        			"FinalArticlesViewed": JSON.parse(localStorage.getItem("AbstractallEntries"))
		       		}

        		document.write(JSON.stringify(MyFinalDisplay) + "<br>");
		} catch (e) {
	 		 if (e == QUOTA_EXCEEDED_ERR) {
	 	 	 	document.write("Data wasn't successfully saved due to quota exceed")
				//alert('Quota exceeded!'); //data wasn't successfully saved due to quota exceed so throw an error
			}
		}
	}

	else
  	{
  		document.write("Sorry, your browser does not support web storage..." + "<br>");
  	}
   }







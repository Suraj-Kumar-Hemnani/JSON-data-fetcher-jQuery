$(document).ready(function(){
	/* $("#selectDd") */
	$.getJSON("data/json1.json", function(data){
		$("#search").on("click",function(){
			var extnNumber=$("#extn-number").val();
			for(var i=0;i<data.employeeDetails.length;i++){
				if(data.employeeDetails[i].extnNumber==extnNumber)
				{
					$(".info-container").show();
					$("#empId").html(data.employeeDetails[i].id);
					$("#name").html(data.employeeDetails[i].name);
				}
			}
		}); 
	});
});

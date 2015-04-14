var myApp=angular.module('myApp',[]);
			var count=0;
			var statusComplete=false;
			var playEnabled=true;
			myApp.controller("playController",function($scope, $interval){
			
				$scope.myInterval = function(action){
					
					var inter=$interval(function(){
						if(action=="play"){
								count=count+1;
								$scope.PlayHead=count;
						if(count>=0 && count<30){
							$scope.color="red";
						}
						else if(count>=30 && count<50){
							$scope.color="yellow";
						}
						else if(count>=50 && count<=99){
							$scope.color="green";
						}else if(count>=100){
							$interval.cancel(inter);
							statusComplete =true;
						}
					}else if(action=="pause"){
							$interval.cancel(inter);
							alert("else");
						}
					
				},100);
				}
				
				$scope.stop = function(){
					$scope.myInterval("pause");
					playEnabled=true;
				};
				$scope.start = function(){
					if(playEnabled){
						playEnabled=false;
						if(!statusComplete){
							$scope.myInterval("play");
						}else{
							$scope.myInterval("pause");
						}
					}
				};
			});
			
		

$(document).ready(function(){
	/* $("#selectDd") */
	$.getJSON("data/json1.json", function(data){
		var imagePath=data.pathForImages;
		for(var i=0;i<data.categories.length;i++){
			var options="<option>"+data.categories[i].name+"</option>"
			$("#selectDd").append(options);
			var tableData="<tr><td>"+data.categories[i].name+"</td><td>&#8377 "+data.categories[i].price+"</td></tr>"
			 $("#table1").append(tableData);
		}
		$("#selectDd").change(function(){
			var selectedItem = $("#selectDd").val();
			for(var i=0;i<data.categories.length;i++){
				if(data.categories[i].name==selectedItem){
					$("#heading").html(data.categories[i].name);
					$("#DescContainer").html("Price of "+selectedItem+" is <span class='blinkingText'>Rs. "+data.categories[i].price+"</span><div><img class='itemImg' src='"+imagePath+data.categories[i].image+"'/>"+data.categories[i].Description+"</div>");
					$("#alertContainer").show();
					}
			}
		});
	});
	$("#closeBtn").on("click",function(){
		$("#alertContainer").hide();
	});
	
	function allowDrag(ev){
		alert("dragStart");
		ev.preventDefault();
	}
});


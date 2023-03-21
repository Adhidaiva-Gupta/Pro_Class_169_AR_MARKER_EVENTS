AFRAME.RegisterComponent("marker-handler", {    
    init: async function() {    
        this.el.addEventListener("markerFound", () => {   
            console.log("Marker is found")
            this.handleMarkerFound();
        });

        this.el.addEventListener("markerLost", () => {
                console.log("Marker lost")
                this.handleMarkerLost();
        });
    },

    handleMarkerFound: function() { 
        var buttonDiv = document.getElementById("button-div")
        buttonDiv.style.display = "flex";

        var ratingButton = document.getElementById("rating-button");
        var orderButton = document.getElementById("order-button");

        //Click Events
        ratingButton.addEventListener("click", function (){    
            swal({
                    icon: "warning",
                    title: "Rating Dish",
                    text: "Work in Progress"
            });
        });

        orderButton.addEventListener("click", () => {
                swal({
                    icon: "https://i.imgur.com/4NZ6uLY.jpg",
                    title: "Thanks for the Order",
                    text: "You order will be served soon at your table!"
                });
        });
    },

    handleMarkerLost: function() {  
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "none";
    }
});
$(document).ready(function(){
	
	$(".fa-ellipsis-v").click(function(){

		$("#wrapper #sidebar").toggleClass("menu-height");
	});
});
function preloader(){

	$(window).on("load", function(){

		$("#preloader").css({
			"visibility":"hidden",
			"opacity":"0",
			"transition":"0.5s"
		});
	});
}

let isRequested = false;

function toggleAddRequested() {
  const addButton = document.getElementById('addButton');

  if (isRequested) {
    // Change to "Requested" when already requested
    addButton.innerText = 'Requested';
    addButton.classList.add('requested');
  } else {
    // Change back to "add" when not requested
    addButton.innerText = 'Add';
    addButton.classList.remove('requested');
  }

  // Toggle the state
  isRequested = !isRequested;
}

$(document).ready(function () {
    $("#projectForm").submit(function (event) {
        event.preventDefault();

        // Get the input values
        const projectName = $("#projectName").val();
        const description = $("#description").val();
        const githubLink = $("#githubLink").val();
        const techUsed = $("#techUsed").val();
        const members = $("#members").val();

        // Create a new project card
        const projectCard = `
            <div class="col-md-4">
                <div class="card" style="width: 100%;">
                    <a href="${githubLink}">
                        <img class="card-img-top d-block w-100" src="img/placeholder-image.jpg" alt="Card image cap" height="150px" width="60px">
                    </a>
                    <div class="card-body ">
                        <h5 class="card-text text-truncate">
                            ${projectName}
                        </h5>
                        <p>${description}</p>
                        <p>Tech Used: ${techUsed}</p>
                        <p>Members: ${members}</p>
                    </div>
                </div>
            </div>
        `;

        // Append the project card to the content section
        $(".carousel-inner").append(projectCard);

        // Clear the form inputs
        $("#projectName").val("");
        $("#description").val("");
        $("#githubLink").val("");
        $("#techUsed").val("");
        $("#members").val();
    });
});

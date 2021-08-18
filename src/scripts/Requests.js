import { getRequests, deleteRequest, getCompletions, sendCompletion, getPlumbers, sendPlumber } from "./dataAccess.js"



const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})





mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "plumbers") {
            const [requestId, plumberId] = event.target.value.split("--")
            /*
                This object should have 3 properties
                   1. requestId
                   2. plumberId
                   3. date_created
                   */
                  const completions = getCompletions()
                  const completion = { 
                      requestId: parseInt(requestId),
                      plumberId: parseInt(plumberId),
                      isCompleted: function() {
                        
                            for (completion of completions) {
                                if (completion.plumberId > 0) {
                                    return true
                                } else {
                                    return false
                                }
                            }
                        },
                        date_completed: new Date()
                    }
                
                    

            /*
                Invoke the function that performs the POST request
                to the `completions` resource for your API. Send the
                completion object as a parameter.
             */
            sendCompletion(completion)
        }
    }
)






// isComplete: jobCompleted(),


// In the following code, you will need to define the function that will be passed to the map() method.



// The function you write will convert each service request object into HTML representations. 
// Since it is wrapped with a <ul> element, make each one an <li> element showing only the description of the request to start.


const convertRequestToListElement = (request) => {
    const plumbers = getPlumbers()
    return ` 
        <li class="request__list">&#128736; 	
        &#128119;
        <select class="plumbers" id="plumbers">
    <option value="">Choose</option>
    ${
        plumbers.map(
            plumber => {
                return `<option value="${request.id}--${plumber.id}">${plumber.name}</option>`
            }
        ).join("")
    }
</select>

            ${request.description}
            <button class="request__delete"
                    id="request--${request.id}">
                Delete
            </button>
        </li>
    `
}


// For example, if you write a function named convertRequestToListElement, 
// then you would update the code below to requests.map(convertRequestToListElement).







export const Requests = () => {
    const requests = getRequests()

    let html = `
        <ul class="request__container">
            ${
                requests.map(convertRequestToListElement).join("")
            }
        </ul>
    `

    return html
}









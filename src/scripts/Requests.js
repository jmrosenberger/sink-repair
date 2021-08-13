import { getRequests } from "./dataAccess.js"







// In the following code, you will need to define the function that will be passed to the map() method.



// The function you write will convert each service request object into HTML representations. 
// Since it is wrapped with a <ul> element, make each one an <li> element showing only the description of the request to start.


const convertRequestToListElement = (request) => {
    return ` <li>
            ${request.description}
            </li>
            `
}


// For example, if you write a function named convertRequestToListElement, 
// then you would update the code below to requests.map(convertRequestToListElement).




export const Requests = () => {
    const requests = getRequests()

    let html = `
        <ul>
            ${
                requests.map(convertRequestToListElement)
            }
        </ul>
    `

    return html
}









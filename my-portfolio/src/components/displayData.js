/* 
For easy edit of static data
Data will be in a list. 
*/

export function getExperiences() {
    const experiences = [
    // id is added so that html does not complain when displaying the list
        {
            id: '0',
            title: "My first experience",
            body: "My explanation goes here"
        },
        {
            id: '1',
            title: "My second experience",
            body: "My explanation goes here 2"
        }
    ]
    return experiences;
}


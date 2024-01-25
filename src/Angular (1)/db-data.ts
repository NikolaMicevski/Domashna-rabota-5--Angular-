

export const DRIVERS: any = [

    //undefined,

    {
        id: 1,
        name: "Max Verstappen",
        team: "Red Bull",
        category: "ADVANCED",
        iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcAiAmuCCDqN40RyE5BcKfByh0ONjo8xLLLUNzSxgLK4UwBRpJW8wViUGmv2ElsfHsRu4&usqp=CAU',
        points: 410
    },
    {
        id: 2,
        name: "Sergio Perez",
        iconUrl: 'https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/perez.jpg.img.1920.medium.jpg/1677069773437.jpg',
        category: 'BEGINNER',
        team: "Red Bull",
        points: 310,
    },

    {
        id: 3,
        name: "Lewis Hamilton",
        team: "Red Bull Racing",
        category: 'ADVANCED',
        points: 210,
        iconUrl: 'https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/hamilton.jpg.img.1920.medium.jpg/1677069594164.jpg',
    }

];


export function findCourseById(courseId:number) {
    return DRIVERS.find((course: { id: number; }) => course.id === courseId);
}
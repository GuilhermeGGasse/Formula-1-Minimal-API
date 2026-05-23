let lastId = 0;

interface IdGenerator {
    id: number;
}

interface Team extends IdGenerator {
    name: string;
}

function createTeam(data: Omit<Team, 'id'>): Team {
    lastId++;
    return {
        id: lastId,
        ...data
    };
}

let teams = [
    createTeam({ name: "Ferrari" }),
    createTeam({ name: "Red Bull Racing" }),
    createTeam({ name: "Mercedes" }),
    createTeam({ name: "McLaren" }),
    createTeam({ name: "Aston Martin" }),
    createTeam({ name: "Alpine" }),
    createTeam({ name: "Williams" }),
    createTeam({ name: "Lamborghini" })
];

/*
const teamNames = [
  "Ferrari",
  "Red Bull Racing",
  "Mercedes",
  "McLaren",
  "Aston Martin",
  "Alpine",
  "Williams"
];
const teams = teamNames.map(name => createTeam({ name }));

console.log(teams);
*/


export { teams };
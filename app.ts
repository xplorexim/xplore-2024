interface TeamMember {
    name: string;
    department: string;
    role: string;
    imageUrl: string;
}

const teamMembers: TeamMember[] = [
    { name: "Harshit Singh", department: "ELE", role: "Operations Team member", imageUrl: "image1.jpg" },
    { name: "Anurag Yadav", department: "IT", role: "Content & Creative Team member", imageUrl: "image2.jpg" },
    { name: "Aryan Bral", department: "MEC", role: "Operations Team member", imageUrl: "image3.jpg" },
    // Add more team members here...
];

function createTeamMemberCard(member: TeamMember): string {
    return `
        <div class="team-member">
            <img src="${member.imageUrl}" alt="${member.name}">
            <h2>${member.name}</h2>
            <p>(${member.department})</p>
            <p>${member.role}</p>
        </div>
    `;
}

function renderTeamMembers() {
    const teamContainer = document.getElementById("team");
    if (teamContainer) {
        teamContainer.innerHTML = teamMembers.map(createTeamMemberCard).join('');
    }
}

document.addEventListener("DOMContentLoaded", renderTeamMembers);

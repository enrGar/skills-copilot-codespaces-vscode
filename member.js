function skillsMember()
{
    // Get the member's skills
    var memberSkills = member.skills;
    // Iterate over the skills
    for(var i = 0; i < memberSkills.length; i++)
    {
        // Get the skill
        var skill = memberSkills[i];
        // Print the skill
        console.log(skill);
    }
}


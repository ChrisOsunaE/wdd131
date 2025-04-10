const mentalHealthResources = {
  discordServers: [
    {
      name: "ChillCorner | Mental Health",
      description: "One of the leading Discord servers dedicated to mental health, offering a comprehensive guide to mental wellness and an active, supportive community.",
      url: "https://discord.com/servers/chillcorner-mental-health-961371951748767797"
    },
    {
      name: "Adult Mental Health",
      description: "Geared toward adults seeking an environment to discuss mental health issues, this server provides a space to share experiences and connect with others facing similar challenges.",
      url: "https://discord.me/adultmentalhealth"
    }
  ],
  onlineSupportGroups: [
    {
      name: "Anxiety and Depression Association of America (ADAA) Online Support Group",
      description: "Free online communities where people suffering from mental health disorders can find support and share their stories.",
      url: "https://adaa.org/find-help/support"
    },
    {
      name: "By My Side",
      description: "Offers free emotional support and counseling from trained listeners through online text chats.",
      url: "https://bymyside.support/"
    }
  ],
  informativeWebsites: [
    {
      name: "Centers for Disease Control and Prevention (CDC) - Providing Support for Worker Mental Health",
      description: "Guidance on how employers can support workers' mental health, including strategies for managing stress and preventing burnout.",
      url: "https://www.cdc.gov/mental-health/caring/providing-support-for-workers-and-professionals.html"
    },
    {
      name: "American Psychological Association (APA) - Workplace Burnout",
      description: "Information about workplace burnout, its causes, consequences, and strategies to effectively prevent and address it.",
      url: "https://www.apa.org/topics/healthy-workplaces/workplace-burnout"
    },
    {
      name: "Workplace Mental Health - Infographic: Beating Burnout at Work",
      description: "Infographic with practical steps employees can take to reduce burnout and improve their mental wellbeing in the work environment.",
      url: "https://www.workplacementalhealth.org/employer-resources/infographics/infographic-beating-burnout-at-work"
    },
    {
      name: "U.S. Department of Health and Human Services - Workplace Mental Health & Well-Being",
      description: "Resources and strategies for organizations to promote mental health and wellbeing in the workplace.",
      url: "https://www.hhs.gov/surgeongeneral/reports-and-publications/workplace-well-being/index.html"
    },
    {
      name: "Center for Workplace Mental Health",
      description: "Informational resources for employers looking to improve mental health in the workplace, including tools to address burnout.",
      url: "https://www.workplacementalhealth.org/"
    }
  ]
};


const mentalHealthResourcesContainer = document.getElementById('mental-health-resources');

const discordServersTitle = document.createElement('div');
discordServersTitle.classList.add('resource-category-title');
discordServersTitle.innerHTML = '<span class="iconify" data-icon="mdi:discord" data-width="25" data-height="25"></span><h2>Discord Servers</h2>'
mentalHealthResourcesContainer.appendChild(discordServersTitle);

const discordServersContainer = document.createElement('div');
discordServersContainer.classList.add('resource-category');
mentalHealthResourcesContainer.appendChild(discordServersContainer);

const onlineSupportGroupsTitle = document.createElement('div');
onlineSupportGroupsTitle.classList.add('resource-category-title');
onlineSupportGroupsTitle.innerHTML = '<span class="iconify" data-icon="mdi:group" data-width="25" data-height="25"></span><h2>Online Support Groups</h2>';
mentalHealthResourcesContainer.appendChild(onlineSupportGroupsTitle);

const onlineSupportGroupsContainer = document.createElement('div');
onlineSupportGroupsContainer.classList.add('resource-category');
mentalHealthResourcesContainer.appendChild(onlineSupportGroupsContainer);

const informativeWebsitesTitle = document.createElement('div');
informativeWebsitesTitle.classList.add('resource-category-title');
informativeWebsitesTitle.innerHTML = '<span class="iconify" data-icon="mdi:info" data-width="25" data-height="25"></span><h2>Informative Websites</h2>';
mentalHealthResourcesContainer.appendChild(informativeWebsitesTitle);

const informativeWebsitesContainer = document.createElement('div');
informativeWebsitesContainer.classList.add('resource-category');
mentalHealthResourcesContainer.appendChild(informativeWebsitesContainer);

mentalHealthResources.discordServers.forEach(resource => {
  const card = document.createElement('div');
  card.classList.add('resource-card');
  card.innerHTML = `
    <h3>${resource.name}</h3>
    <p>${resource.description}</p>
    <a href="${resource.url}" target="_blank">Join Now</a>
  `;
  discordServersContainer.appendChild(card);
});
mentalHealthResources.onlineSupportGroups.forEach(resource => {
  const card = document.createElement('div');
  card.classList.add('resource-card');
  card.innerHTML = `
    <h3>${resource.name}</h3>
    <p>${resource.description}</p>
    <a href="${resource.url}" target="_blank">Join Now</a>
  `;
  onlineSupportGroupsContainer.appendChild(card);
});
mentalHealthResources.informativeWebsites.forEach(resource => {
  const card = document.createElement('div');
  card.classList.add('resource-card');
  card.innerHTML = `
    <h3>${resource.name}</h3>
    <p>${resource.description}</p>
    <a href="${resource.url}" target="_blank">Visit Now</a>
  `;
  informativeWebsitesContainer.appendChild(card);
});

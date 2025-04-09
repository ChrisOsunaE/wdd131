const stats = [
  {
    icon: 'mdi:fire-alert',
    title: 'Programmer Burnout',
    description: '58% of programmers report burnout due to workload and constant pressure.',
    // link: 'https://techmonitor.ai/leadership/workforce/burnout-tech-workers'
  },
  {
    icon: 'ph:chart-line-down',
    title: 'Impact on Productivity',
    description: 'Stress can reduce productivity by up to 68%, increasing errors and fatigue.',
    // link: 'https://thrivemyway.com/burnout-statistics/'
  },
  {
    icon: 'mdi:meditation',
    title: 'Solutions Sought',
    description: '50% of developers use mindfulness tools to manage stress.',
    // link: 'https://www.itpro.com/business/strategy/359546/developer-burnout-reaches-record-levels'
  }
];


const container = document.getElementById('cards-container');

stats.forEach(stat => {
  const card = document.createElement('div');
  card.classList.add('card');
  
  card.innerHTML = `
    <span class="iconify" data-icon="${stat.icon}" data-width="50" data-height="50"></span>
    <h3>${stat.title}</h3>
    <p>${stat.description}</p>
    `;
    // <a href="${stat.link}" target="_blank">Go to stduy</a>
  
  container.appendChild(card);
});
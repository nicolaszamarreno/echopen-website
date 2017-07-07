import Vue from 'vue';
import Issues from './issues.js';


export default {
  name: 'lab',
  data() {
    return {
      issues: Issues,
      contributors: [
        {
          name: '@nowami',
        },
        {
          name: 'Clement Le Couedic',
        },
        {
          name: 'GG23800',
        },
      ],
      meetups: [
        {
          title: 'Lasik surgery frequently asked questions',
          date: '12/05/17',
          location: '62 Lazaro Trail',
        },
        {
          title: 'Diabete cause and prevention',
          date: '24/07/17',
          location: '62 Lazaro Trail',
        },
        {
          title: 'Croup an infection affecting the young',
          date: '09/09/17',
          location: '62 Lazaro Trail',
        },
      ],
    };
  },
  mounted() {
    this.getIssues();
    this.getProject();
    this.getContributors();
  },
  methods: {
    getProject() {
      fetch('https://api.github.com/repos/echopen/PRJ-medtec_androidapp')
      .then(r => r.json())
      .then((r) => {
      });
    },
    getIssues() {
      fetch('https://api.github.com/repos/echopen/PRJ-medtec_androidapp/issues')
      .then(r => r.json())
      .then((r) => {
        this.issues = r;
      });
    },
    getContributors() {
      fetch('https://api.github.com/repos/echopen/PRJ-medtec_androidapp/contributors')
      .then(r => r.json())
      .then((r) => {
        r.forEach((user) => {
          fetch(`https://api.github.com/users/${user.login}`)
          .then(r => r.json())
          .then((r) => {
            if (this.contributors.length < 3) {
              this.contributors.push(r);
            }
          });
        });
        // this.issues = r;
      });
    },
  },
};

Vue.filter('format', date => new Date(date).toLocaleDateString('fr-FR'));

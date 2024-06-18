import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutMeComponent } from '../../components/about-me/about-me.component';
import { FloatMenuComponent } from '../../components/float-menu/float-menu.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProjectComponent } from '../../components/project/project.component';
import { SkillsComponent } from '../../components/skills/skills.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    ProjectComponent,
    NgFor,
    FloatMenuComponent,
    AboutMeComponent,
    FooterComponent,
    SkillsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  skills = [
    {
      icon: 'assets/images/java-icon.svg',
      skillName: 'Java',
    },
    {
      icon: 'assets/images/springio-icon.svg',
      skillName: 'Spring Framework',
    },
    {
      icon: 'assets/images/nodejs-icon.svg',
      skillName: 'Node.js',
    },
    {
      icon: 'assets/images/reactjs-icon.svg',
      skillName: 'React.js',
    },
    {
      icon: 'assets/images/angular-icon.svg',
      skillName: 'Angular',
    },
    {
      icon: 'assets/images/javascript-svgrepo-com.svg',
      skillName: 'JavaScript',
    },
    {
      icon: 'assets/images/typescript-official-svgrepo-com.svg',
      skillName: 'TypeScript',
    },
    {
      icon: 'assets/images/python-svgrepo-com.svg',
      skillName: 'Python',
    },
    {
      icon: 'assets/images/kubernetes-svgrepo-com.svg',
      skillName: 'Kubernetes',
    },
    {
      icon: 'assets/images/gcp-svgrepo-com.svg',
      skillName: 'Google Cloud Platform',
    },
    {
      icon: 'assets/images/aws-svgrepo-com.svg',
      skillName: 'Amazon Web Services',
    },
    {
      icon: 'assets/images/git-svgrepo-com.svg',
      skillName: 'Git',
    },
  ];

  projects = [
    {
      projectLogo: 'assets/images/java-icon.svg',
      projectName: 'Venus Framework',
      projectDescription:
        'A Java framework for building microservices and web applications. It provides a set of common libraries and utilities for building enterprise applications. It also includes a set of best practices and guidelines for building scalable and maintainable applications',
      projectLink: 'https://www.project3.com',
      projectGithub: 'https://github.com/joyned/venus-framework',
      projectStatus: 'In Progress',
    },
    {
      projectLogo: 'assets/images/reactjs-icon.svg',
      projectName: 'Venus IAM Portal',
      projectDescription:
        'A IAM Portal built with React.js. It provides a set of tools for managing users, roles, and permissions in a multi-tenant environment. It also includes a set of best practices and guidelines for building scalable and maintainable applications.',
      projectLink: 'https://www.project1.com',
      projectGithub: 'https://github.com/joyned/venus-iam-portal',
      projectStatus: 'In Progress (Functional)',
    },
    {
      projectLogo: 'assets/images/nodejs-icon.svg',
      projectName: 'Venus IAM API',
      projectDescription:
        'A RESTful API built with Node.js and Express.js. It provides a set of endpoints for managing users, roles, and permissions in a multi-tenant environment. It also includes a set of best practices and guidelines for building scalable and maintainable applications.',
      projectLink: 'https://www.project2.com',
      projectGithub: 'https://github.com/joyned/venus-iam-api',
      projectStatus: 'In Progress (Functional)',
    },
    {
      projectLogo: 'assets/images/reactjs-icon.svg',
      projectName: 'Venus Data Center Portal',
      projectDescription:
        'A Data Center Portal built with React.js. It provides a set of tools for managing data centers, servers, and storage in a multi-tenant environment. It also includes a set of best practices and guidelines for building scalable and maintainable applications.',
      projectLink: 'https://www.project4.com',
      projectGithub: 'https://github.com/joyned/venus-data-center-portal',
      projectStatus: 'In Progress (Functional)',
    },
    {
      projectLogo: 'assets/images/springio-icon.svg',
      projectName: 'Venus Data Center API',
      projectDescription:
        'A RESTful API built with Spring Boot. It provides a set of endpoints for managing data centers, servers, and storage in a multi-tenant environment. It also includes a set of best practices and guidelines for building scalable and maintainable applications.',
      projectLink: 'https://www.project5.com',
      projectGithub: 'https://github.com/joyned/venus-data-center-api',
      projectStatus: 'In Progress (Functional)',
    },
  ];
}

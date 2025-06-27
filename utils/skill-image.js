
import html from '../app/assets/svg/skills/html.svg';
import css from '../app/assets/svg/skills/css.svg';
import javascript from '../app/assets/svg/skills/javascript.svg';
import typescript from '../app/assets/svg/skills/typescript.svg';
import react from '../app/assets/svg/skills/react.svg';
import nextJS from '../app/assets/svg/skills/nextJS.svg';
import nodejs from '../app/assets/svg/skills/nodejs.svg'; // You may need to add this if not already imported
import express from '../app/assets/svg/skills/express.svg'; // You may need to add this too
import mongoDB from '../app/assets/svg/skills/mongoDB.svg';
import mysql from '../app/assets/svg/skills/mysql.svg';
import postgresql from '../app/assets/svg/skills/postgresql.svg';
import prisma from '../app/assets/svg/skills/prisma.svg';
import drizzle from '../app/assets/svg/skills/drizzle.svg'; // Add this if SVG exists
import redis from '../app/assets/svg/skills/redis.svg';       // Add this if SVG exists
import tailwind from '../app/assets/svg/skills/tailwind.svg';
import bootstrap from '../app/assets/svg/skills/bootstrap.svg';
import git from '../app/assets/svg/skills/git.svg';
import github from '../app/assets/svg/skills/github.svg';     // Add this if SVG exists
import docker from '../app/assets/svg/skills/docker.svg';
import firebase from '../app/assets/svg/skills/firebase.svg';
import clerk from '../app/assets/svg/skills/clerk.svg';       // Add this if SVG exists

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return html;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'typescript':
      return typescript;
    case 'react':
      return react;
    case 'next js':
      return nextJS;
    case 'node js':
      return nodejs;
    case 'express':
      return express;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'postgresql':
      return postgresql;
    case 'prisma':
      return prisma;
    case 'drizzle':
      return drizzle;
    case 'redis':
      return redis;
    case 'tailwind':
      return tailwind;
    case 'bootstrap':
      return bootstrap;
    case 'git':
      return git;
    case 'github':
      return github;
    case 'docker':
      return docker;
    case 'firebase':
      return firebase;
    case 'clerk':
      return clerk;
    default:
      return null;
  }
};

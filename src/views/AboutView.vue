<!--
  AboutView Component

  A Vue view component that serves as the about page/route in the
  application. This view displays information about the project itself,
  its purpose and goals.

  Features:
    - Displays project overview and purpose
    - Links to Pinia information page and Resources page
    - Responsive layout consistent with other views

  Usage:
    This component is typically used as a route view in Vue Router.
-->
<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="about">
    <div class="about-content">
      <h1>About This Project</h1>

      <div class="description">
        <p>
          Train Pinia is a learning project focused on exploring state management with Pinia in Vue
          3 applications using TypeScript.
        </p>
        <p>
          This project demonstrates practical examples of Pinia stores, state management patterns,
          and best practices for building scalable Vue applications.
        </p>
      </div>

      <div class="goals">
        <h3>Project Goals</h3>
        <ul>
          <li>Learn Pinia state management fundamentals</li>
          <li>Understand TypeScript integration with Pinia</li>
          <li>Explore store patterns and best practices</li>
          <li>Build practical examples and use cases</li>
        </ul>
      </div>

      <div class="links">
        <h3>Learn More</h3>
        <ul>
          <li>
            <RouterLink to="/pinia">About Pinia</RouterLink>
            - Information about Pinia state management
          </li>
          <li>
            <RouterLink to="/resources">Resources</RouterLink>
            - Technologies and tools used in this project
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  max-width: 1024px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.about-content h1 {
  font-weight: 500;
  font-size: 2.6rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

h3 {
  font-size: 1.4rem;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}

.description {
  margin-top: 1rem;
}

.description p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.goals ul,
.links ul {
  list-style-type: disc;
  padding-left: 1.5rem;
  line-height: 1.8;
}

.goals li,
.links li {
  margin-bottom: 0.3rem;
}

.links a {
  color: var(--color-text);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s;
}

.links a:hover {
  border-bottom-color: var(--color-text);
}

.about-content h1,
.about-content h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 2rem;
  }

  .about-content h1,
  .about-content h3 {
    text-align: left;
  }

  .description p {
    font-size: 1.2rem;
  }
}
</style>

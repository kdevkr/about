<script setup>
import Git from '../Git.vue'
import Backend from '../Backend.vue'
import CodeEditor from '../CodeEditor.vue'
import BuildTool from '../BuildTool.vue'
import Frontend from '../Frontend.vue'
import Docker from '../Docker.vue'
import Etc from '../Etc.vue'
import StaticAnalysis from '../StaticAnalysis.vue'
import OperatingSystem from '../OperatingSystem.vue'
import Database from '../Database.vue'
import Learning from '../Learning.vue'
</script>
<template>
    <div id="skills-container" style="margin-top: 2rem;">
        <template v-if="all">
            <div class="hexagon-container">
                <Git />
                <BuildTool />

                <Backend />
                <Frontend />

                <CodeEditor />

                <Database />
                <Docker />
                <Etc />

                <OperatingSystem />
                <Learning />
            </div>
        </template>
        <template v-else>
            <Badge text="Core Stack" />
            <Badge type="default" text="⭐⭐⭐⭐" />
            <div class="hexagon-container">
                <Backend />
                <Frontend />
                <Database />
            </div>
            <div class="description">
                <hr />
                <ul>
                    <li>Spring Boot: Experience in developing applications based on Spring Boot</li>
                    <li>Vue: Experience in developing frontend applications based on Vue</li>
                    <li>PostgreSQL: Experience with scalable open-source relational database</li>
                    <li>Elasticsearch: Experience with NoSQL-based unstructured log storage</li>
                    <li>Redis: Experience with single-threaded cache storage</li>
                    <li>KDB+: Experience with single-threaded time-series database</li>
                </ul>
            </div>

            <Badge text="Code Quality Management" style="margin-top: 25px;" />
            <Badge type="default" text="⭐⭐⭐" />
            <div class="hexagon-container">
                <Git />
                <StaticAnalysis />
                <CodeEditor />
            </div>
            <div class="description">
                <hr />
                <ul>
                    <li>Git: Capable of working with branches created per GitHub issue, including rebase and cherry-pick</li>
                    <li>Github: Project management through issues and PR reviews</li>
                    <li>Sonarlint: Using Sonarlint for maintaining minimum clean code standards</li>
                    <li>ESLint: Code quality analysis based on Checkstyle and ESLint</li>
                    <li>Intellij IDEA: Application and database management based on IntelliJ</li>
                    <li>Visual Studio Code: Used for frontend code management</li>
                </ul>
            </div>

            <Badge text="Build and Deployment Management" style="margin-top: 25px;" />
            <Badge type="default" text="⭐⭐⭐" />
            <div class="hexagon-container">
                <BuildTool />
            </div>
            <div class="description">
                <hr />
                <ul>
                    <li>Gradle: Capable of building backend applications with Gradle</li>
                    <li>Webpack: Web frontend asset packaging based on Webpack</li>
                    <li>Jenkins: Release build and deployment automation configuration based on Git tags</li>
                    <li>Github Actions: Workflow implementation for GitHub PR review and quality checks</li>
                </ul>
            </div>

            <Badge text="DevOps" style="margin-top: 25px;" />
            <Badge type="default" text="⭐⭐⭐" />
            <div class="hexagon-container">
                <OperatingSystem />
                <Docker />
            </div>
            <div class="description">
                <hr />
                <ul>
                    <li>Windows: Set up personal local development environment using Windows Terminal and WSL2</li>
                    <li>Ubuntu: Experience with various Linux distributions including Ubuntu and AlmaLinux</li>
                    <li>Docker: Local development environment configuration based on Docker containers</li>
                </ul>
            </div>

            <Badge text="Others" type="info" style="margin-top: 25px;" />
            <Badge type="default" text="⭐⭐" />
            <div class="hexagon-container">
                <Etc />
            </div>
            <div class="description">
                <hr />
                <ul>
                    <li>Nginx: Experience with web server for load balancing and reverse proxy</li>
                    <li>Mosquitto: Experience with MQTT message broker for IoT integration</li>
                    <li>k6: Experience with Go-based load testing tool for quality testing</li>
                    <li>Uptime Kuma: Experience with monitoring through service status checks</li>
                    <li>Sentry: Experience with error tracking from user perspective</li>
                </ul>
            </div>

            <Badge text="Learning" type="warning" style="margin-top: 25px;" />
            <Badge type="default" text="⭐" />
            <div class="hexagon-container">
                <Learning />
            </div>
            <div class="description">
                <hr />
                <ul>
                    <li>Go: Learning language suitable for web distributed environments and various language paradigms</li>
                    <li>SQLite: Learning file-based relational database</li>
                    <li>TimescaleDB: Learning PostgreSQL-based time-series database</li>
                    <li>RabbitMQ or Kafka: Learning message streaming queue solutions</li>
                    <li>Vite: Learning modern web frontend technology stack</li>
                </ul>
            </div>
        </template>
    </div>
</template>
<style lang="scss">
@use "../../scss/hexagon.scss" as *;

$breakpoint-mobile: 335px;
$breakpoint-tablet: 758px;
$breakpoint-desktop: 1024px;

@mixin mobile {
    @media (max-width: #{$breakpoint-tablet - 1px}) {
        @content;
    }
}

@mixin tablet {
    @media (min-width: #{$breakpoint-tablet}) and (max-width: #{$breakpoint-desktop - 1px}) {
        @content;
    }
}

@mixin desktop {
    @media (min-width: #{$breakpoint-desktop}) {
        @content;
    }
}

@include mobile {
    :root {
        --hex-width: 75px;
        --hex-between: 10px;
    }
}

.toggle-button {
    background-color: #333;
    border: none;
    color: white;
    padding: 10px 12px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
}
</style>

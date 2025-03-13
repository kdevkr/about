<script setup>
import Git from './Git.vue'
import Backend from './Backend.vue'
import CodeEditor from './CodeEditor.vue'
import BuildTool from './BuildTool.vue'
import Frontend from './Frontend.vue'
import Docker from './Docker.vue'
import Etc from './Etc.vue'
import StaticAnalysis from './StaticAnalysis.vue'
import OperatingSystem from './OperatingSystem.vue'
import Database from './Database.vue'
import Learning from './Learning.vue'
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
            <Badge text="기본 스택" />
            <Badge type="default" text="⭐⭐⭐⭐" />
            <div class="hexagon-container">
                <Backend />
                <Frontend />
                <Database />
            </div>
            <div class="description">
                <hr />
                <ul>
                    <li>Spring Boot: 스프링 부트 기반의 애플리케이션 개발 경험</li>
                    <li>Vue: 뷰 기반의 프론트엔드 애플리케이션 개발 경험</li>
                    <li>PostgreSQL: 확장성이 용이한 오픈소스 관계형 데이터베이스 활용 경험</li>
                    <li>Elasticsearch: NoSQL 기반의 비정형 로그 저장소 활용 경험</li>
                    <li>Redis: 싱글 스레드 기반의 캐시 저장소 활용 경험</li>
                    <li>KDB+: 싱글 스레드 기반의 시계열 데이터베이스 활용 경험</li>
                </ul>
            </div>

            <Badge text="코드 품질 관리" style="margin-top: 25px;" />
            <Badge type="default" text="⭐⭐⭐" />
            <div class="hexagon-container">
                <Git />
                <StaticAnalysis />
                <CodeEditor />
            </div>
            <div class="description">
                <hr />
                <ul>
                    <li>Git: 깃허브 이슈 단위로 브랜치를 생성하여 작업하며 리베이스 및 체리픽이 가능</li>
                    <li>Github: 이슈 및 PR 리뷰를 통해 프로젝트 관리</li>
                    <li>Sonarlint: 최소한의 클린 코드를 위한 소나린트 활용</li>
                    <li>ESLint: Checkstyle 및 ESLint 기반의 코드 품질 분석 수행</li>
                    <li>Intellij IDEA: 인텔리제이 기반의 애플리케이션 및 데이터베이스 관리</li>
                    <li>Visual Studio Code: 프론트엔드 코드 관리를 위해 사용</li>
                </ul>
            </div>

            <Badge text="빌드 및 배포 관리" style="margin-top: 25px;" />
            <Badge type="default" text="⭐⭐⭐" />
            <div class="hexagon-container">
                <BuildTool />
            </div>
            <div class="description">
                <hr />
                <ul>
                    <li>Gradle: 그래들 기반의 백엔드 애플리케이션 빌드 가능</li>
                    <li>Webpack: 웹팩 기반의 웹 프론트엔드 에셋 패키징</li>
                    <li>Jenkins: 깃 태그 기반의 릴리즈 빌드 및 배포 자동화 구성</li>
                    <li>Github Actions: 깃허브 PR 리뷰 및 품질 체크를 위한 워크플로우 적용</li>
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
                    <li>Windows: 윈도우 터미널과 WSL2를 사용하여 개인 로컬 개발 환경을 구축</li>
                    <li>Ubuntu: Ubuntu 또는 AlmaLinux와 같은 다양한 리눅스 경험 보유</li>
                    <li>Docker: 도커 컨테이너 기반의 로컬 개발 환경 구성</li>
                </ul>
            </div>

            <Badge text="기타" type="info" style="margin-top: 25px;" />
            <Badge type="default" text="⭐⭐" />
            <div class="hexagon-container">
                <Etc />
            </div>
            <div class="description">
                <hr />
                <ul>
                    <li>Nginx: 로드 밸런싱 및 리버스 프록시를 위한 웹 서버 활용 경험</li>
                    <li>Mosquitto: IoT 연계를 위한 MQTT 메시지 브로커 활용 경험</li>
                    <li>k6: 품질 테스트를 위한 Go 기반의 부하테스트 도구 경험</li>
                    <li>Uptime Kuma: 서비스 상태 체크를 통한 모니터링 경험</li>
                    <li>Sentry: 사용자 관점의 오류 트래킹 경험</li>
                </ul>
            </div>

            <Badge text="학습중" type="warning" style="margin-top: 25px;" />
            <Badge type="default" text="⭐" />
            <div class="hexagon-container">
                <Learning />
            </div>
            <div class="description">
                <hr />
                <ul>
                    <li>Go: 다양한 언어 패러다임 경험과 웹 분산 환경에 적합한 언어 학습</li>
                    <li>SQLite: 파일 기반의 관계형 데이터베이스 학습</li>
                    <li>TimescaleDB: PostgreSQL 기반의 시계열 데이터베이스 학습</li>
                    <li>RabbitMQ 또는 Kafka: 메시지 스트리밍 큐 솔루션 학습</li>
                    <li>Vite: 최신 웹 프론트엔드 기술 스택 학습</li>
                </ul>
            </div>
        </template>
    </div>
</template>
<style lang="scss">
@use "../scss/hexagon.scss" as *;

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

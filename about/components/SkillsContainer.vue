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
        <Badge text="기본 도구" />
        <div class="hexagon-container">
            <Git />
            <CodeEditor />
        </div>

        <Badge text="빌드 및 정적 분석 도구" style="margin-top: 25px;"/>
        <div class="hexagon-container">
            <BuildTool />
            <StaticAnalysis />
        </div>

        <Badge text="프레임워크 및 데이터베이스" style="margin-top: 25px;"/>
        <div class="hexagon-container">
            <Backend />
            <Frontend />
            <Database />
        </div>

        <Badge text="컨테이너 및 운영체제" style="margin-top: 25px;"/>
        <div class="hexagon-container">
            <Docker />
            <OperatingSystem />
        </div>

        <Badge text="기타" type="info" style="margin-top: 25px;"/>
        <div class="hexagon-container">
            <Etc />
        </div>

        <Badge text="학습중" type="warning" style="margin-top: 25px;" />
        <div class="hexagon-container">
            <Learning />
        </div>
    </template>
</div>
</template>
<style lang="scss">
@import "../scss/hexagon";

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

---
title: Activities & Technical Contributions
---

# 기술 활동 및 오픈소스 기여

::: tip 활동 방향성
실무에서 발견한 오류와 개선사항을 적극적으로 제보하고, 문서화 품질 향상에 기여함으로써 다른 개발자들의 경험을 개선하는 데 초점을 맞추고 있습니다. 사소한 번역 오류나 코드 하이라이팅과 같은 작은 부분까지도 세심하게 살피며, 이러한 디테일이 개발자 경험을 크게 향상시킬 수 있다고 믿습니다. 또한, 경험한 내용을 블로그와 커뮤니티를 통해 공유하여 다른 개발자들에게 도움이 되고자 합니다.
:::

## 개인 기술 활동

### 기술 문서 및 경험 공유

- OKKY [초보가 이해하는 스프링 시큐리티](https://okky.kr/articles/382738) 가이드 작성
- 인텔리제이 [Optimize imports 자동화](https://okky.kr/articles/1134690) 팁 공유
- [AWS Beanstalk Java SE 플랫폼을 활용한 애플리케이션 배포 자동화](https://kdevkr.github.io/deploy-application-to-the-aws-elastic-beanstalk-java-se-platform-enviroment/) 방법 정리
- [SonarQube 및 Github Actions를 활용한 정적 분석](https://kdevkr.github.io/static-analysis-performed-by-sonarqube-and-github-action/) 방법 소개
- Apache Commons Pool을 활용한 [KDB+ 커넥션 풀](https://kdevkr.github.io/kdb-connection-pool/) 구현 사례 공유
- Uptime Kuma의 Synthetic Monitoring을 활용한 트러블 슈팅 경험 정리

::: tip 개인 블로그
[kdevkr.github.io](https://kdevkr.github.io/)를 통해 개발 경험과 지식을 정리하여 공유하고 있습니다.
:::

## 오픈소스 기여 활동

### 오류 및 개선사항 제보

#### Eclipse Paho Java Client - MQTT 클라이언트 안정성 개선

- WebSocket 연결 해제 시 발생하는 메모리 누수 현상 발견
- 클라이언트 라이브러리의 안정성 향상을 위한 이슈 제기
- [Issue #960](https://github.com/eclipse-paho/paho.mqtt.java/issues/960)

#### Reviewdog - Github Actions 파이프라인 안정화

- Github Actions 환경에서 ESLint 실행 시 발생하는 오류 보고
- CI/CD 파이프라인의 안정성 향상에 기여
- [Issue #162](https://github.com/reviewdog/action-eslint/issues/162)

### 코드 및 문서 개선

#### AWS IoT Device SDK - MQTT 가이드 문서 개선

- MQTT 프로토콜 가이드 문서의 잘못된 정보 수정
- 개발자들의 더 나은 이해를 위한 문서 품질 개선
- [Pull Request #614](https://github.com/aws/aws-iot-device-sdk-java-v2/pull/614)

#### Uptime Kuma - 한국어 사용자 경험 개선

- 한국어 번역의 오탈자 수정 및 일관성 개선
- 모니터링 도구의 한국어 사용자 경험 향상
- [Pull Request #2070](https://github.com/louislam/uptime-kuma/pull/2070)

#### Sublime Text 4 - KDB+ 개발 환경 개선

- KDB+ 언어를 위한 코드 하이라이팅 규칙 보완
- 개발자의 코드 가독성 향상에 기여
- [Pull Request #33](https://github.com/komsit37/sublime-q/pull/33)

import{_ as t,c as o,o as r,a2 as e}from"./chunks/framework.4BXl9M-z.js";const h=JSON.parse('{"title":"문제 해결 경험","description":"","frontmatter":{},"headers":[],"relativePath":"troubleshooting.md","filePath":"troubleshooting.md","lastUpdated":1686406790000}'),s={name:"troubleshooting.md"},a=e('<h1 id="문제-해결-경험" tabindex="-1">문제 해결 경험 <a class="header-anchor" href="#문제-해결-경험" aria-label="Permalink to &quot;문제 해결 경험&quot;">​</a></h1><p>웹 개발자에게 시스템에서 발생하는 <strong>다양한 문제들의 원인을 분석하고 해결하는 과정을 경험</strong>하는 것은 생각보다 중요한 부분에 해당합니다. 소프트웨어 공학 관점에서는 <strong>명확한 요구사항을 토대로 분석과 설계가 이루어진다</strong>고 이야기하지만 현실적인 관점에서는 해당 도메인 영역에서 전문적으로 일하고 있는 고객 조차도 원하는 바가 정리되지 않는 경우가 상당히 많습니다. 그로 인해 명확하지 않은 것들을 토대로 만들어지는 상황이 있다보니 내재된 결함은 언제든지 시스템에 문제를 일으킬 가능성을 만들게 됩니다.</p><div class="tip custom-block"><p class="custom-block-title">비즈니스 도메인의 이해</p><p>개발 관련 지식 뿐만 아니라 비즈니스 도메인에 대한 이해가 반드시 필요합니다. 고객의 요구사항을 이해하기 위해서는 <strong>도메인 영역의 배경 지식을 알고 있어야</strong>하는 경우가 상당히 많습니다. 고객이 전달한 요구사항 중에서 <strong>확실하지 않거나 생략된 부분을 고려해야</strong>하고 그에 따라 작업에 대한 여러가지 방향과 대안을 만들어두고 제안하여 <strong>시스템에 문제를 일으킬 가능성을 최소화 해야</strong>합니다.</p></div><p>현재 시스템에서 경험하지 못하는 문제들은 수 많은 개발자와 IT 회사에서 공유하는 <strong>트러블슈팅에 대한 글이나 영상</strong>을 보고 참고하는 행위가 필요합니다. 백엔드와 프론트엔드 영역을 나누어서 더 전문적으로 일하더라도 본인이 담당하는 영역의 정문성을 위해 깊게 파고드는 것도 중요하지만 시스템에서 발생할 수 있는 여러가지 문제들을 가장 최선의 방법으로 해결하기 위해서는 <strong>백엔드와 프론트엔드 개발자 모두 인프라에 대한 지식까지 골고루 갖추고 있어야</strong> 합니다.</p><hr><div class="info custom-block"><p class="custom-block-title"><a href="https://github.com/kdevkr/mambo-box/blob/main/errors/2023-03-21.md" target="_blank" rel="noreferrer">빌드 정보 API가 등록되지 않은 이유</a></p><p>스프링 부트 애플리케이션에서 빌드 정보를 제공하는 API가 만들어지도록 하였으나 스프링 부트의 자동 구성과 함께 빈을 등록하는 방법을 제공하는 어노테이션의 동작 순서 문제로 인해서 의도한대로 동작하지 않았던 문제를 해결한 경험입니다.</p></div><div class="danger custom-block"><p class="custom-block-title"><a href="https://github.com/kdevkr/mambo-box/blob/main/errors/2022-12-08.md" target="_blank" rel="noreferrer">TCP 소켓 핸들 누수 문제</a></p><p>특정 시계열 데이터베이스를 위한 커넥션 풀 기능을 구현하는 과정에서 라이브러리에서 구현을 요구하는 인터페이스를 자세히 살펴보지 않아서 미흡하게 구현된 부분으로 인해 TCP 소켓 연결에 대한 누수 문제가 발생하였고 원인 분석을 통해 조치하게된 경험입니다.</p></div><div class="danger custom-block"><p class="custom-block-title"><a href="https://github.com/kdevkr/mambo-box/blob/main/errors/2022-11-30.md" target="_blank" rel="noreferrer">레디스 메모리 사용량이 조금씩 증가하는 현상</a></p><p>스프링에 대한 일반적인 지식과 다양하게 동작하는 시스템을 제대로 이해하지 못하고 스프링에서 제공하는 유틸 클래스를 사용하면서 발생한 메모리 누수 문제에 대한 원인 분석과 조치에 대한 경험입니다. 레디스에 대해서도 운영적인 측면의 옵션 설정하는 것을 알게 되었습니다.</p></div><div class="info custom-block"><p class="custom-block-title"><a href="https://kdevkr.github.io/archive/not-support-ebs-modify-volume" target="_blank" rel="noreferrer">탄력적 볼륨을 지원하지 않음</a></p><p>최신 EC2 인스턴스 유형으로 교체함으로써 인프라 비용을 줄일 수 있는 것과 함께 Amazon EBS 탄력적 볼륨이 일부 인스턴스 유형에 대해서는 볼륨의 크기 또는 IOPS를 조정할 수 없는 제약 사항으로 인해 변경했던 EC2 인스턴스 유형을 롤백한 경험입니다.</p></div><div class="info custom-block"><p class="custom-block-title"><a href="https://github.com/kdevkr/mambo-box/blob/main/errors/2022-02-14.md" target="_blank" rel="noreferrer">NLB의 ALPN 정책이 VDI 환경에서 적용되지 않음</a></p><p>보안 사유로 인해 VDI 환경을 구성하여 사용하는 과정에서 인프라 구성에 따라 ALPN 정책으로 인해 HTTPS 및 HTTP/2 연결이 정상적으로 되지 않는 문제를 경험하고 인프라 레벨에서 조치하게 된 경험입니다. 대기업인 고객 측 인프라 팀에서 실마리를 찾아서 대안을 제공해주었기에 어떻게 찾았는가를 궁금한 부분입니다.</p></div><div class="warning custom-block"><p class="custom-block-title"><a href="https://kdevkr.github.io/archive/mqtt-connection-lost" target="_blank" rel="noreferrer">MQTT Connection Lost</a></p><p>특정 버전 이상의 Paho Java Client 라이브러리를 사용하면서 웹 소켓 방식으로 연결을 시도하는 경우 정상적으로 연결되었던 커넥션이 해지되는 증상에 대한 이슈를 등록한 경험입니다. 많은 자바 개발자가 사용하는 라이브러리임에도 불구하고 해당 현상에 대해 조치를 시도하지 않는 것으로 보입니다.</p></div><div class="warning custom-block"><p class="custom-block-title"><a href="https://kdevkr.github.io/archive/why-fail-deploy-application" target="_blank" rel="noreferrer">갑자기 애플리케이션 배포에 실패한 이유</a></p><p>아마존 웹 서비스의 SDK 버전을 전환하고 도입하는 과정에서 라이브러리 패키지에 따른 용량을 신경쓰지 않아서 AWS Elastic Beanstalk 서비스의 제약사항을 넘어서는 문제를 경험하고 원인을 분석하고 처리하게 된 기록입니다.</p></div><div class="danger custom-block"><p class="custom-block-title"><a href="https://kdevkr.github.io/archive/distrust-symantec-ca-in-jdk" target="_blank" rel="noreferrer">시만텍 CA 인증서를 신뢰하지 않음</a></p><p>개발자의 사소한 실수로 인해 AWS IoT Core 기반의 외부 인터페이스 연동을 수행하느 과정에서 ATS 엔드포인트를 사용하던 것을 레거시 엔드포인트를 사용하게 되어 시만텍 인증서를 신뢰하지 않는다는 오류가 발생한 상황에 대한 경험입니다.</p></div><p>웹 개발자로써 사소한 것들로 인해 만들어지는 문제들을 경험하는 것도 기록하는게 중요하다고 생각되어 개인 블로그나 기록하는 공간을 통해 문제 해결 과정에 대해 남기고 있습니다.</p>',14),l=[a];function c(i,n,p,b,d,m){return r(),o("div",null,l)}const g=t(s,[["render",c]]);export{h as __pageData,g as default};

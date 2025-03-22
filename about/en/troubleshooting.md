---
title: Troubleshooting
---

# Problem Solving Experience

I believe that for developers, **the process of analyzing and solving various system problems** is more important than one might think. While software engineering states that **analysis and design are based on clear requirements**, in reality, even domain experts often have unclear information. The more unclear the domain and requirements are, the greater the possibility that unsafe defects will be inherent in the system.

::: tip Understanding Business Domains
Development knowledge alone is not enough; understanding of the business domain is essential. To properly understand customer requirements, **background knowledge of the domain area** is often necessary. We must **consider uncertain or omitted parts** of customer requirements and **minimize the possibility of system problems** by proposing various directions and alternatives.
:::

To respond to various system problems, knowledge of not only backend but also frontend and infrastructure is necessary, and you need to know related keywords to analyze the root cause of problems and select optimal solutions. Therefore, for many problems that I don't experience in my current organization, I try to refer to **troubleshooting materials and videos** shared by various developers and IT companies.

---

To become a developer who builds better systems, or to complement areas that I can't organize sufficiently through my work, I record problem-solving and root cause analysis content on [GitHub](https://github.com/kdevkr) or my [personal blog](https://kdevkr.github.io).

Here are some representative troubleshooting cases I've experienced:

::: danger [TCP Socket Handle Leak Issue](https://github.com/kdevkr/mambo-box/blob/main/errors/2022-12-08.md)
During the implementation of a connection pool for time series database communication, I inadequately implemented it due to insufficient review of the Apache Commons Pool2 library interfaces and documentation. This resulted in TCP socket connection leaks, which I resolved through root cause analysis.
:::

::: danger [Gradual Increase in Redis Memory Usage](https://github.com/kdevkr/mambo-box/blob/main/errors/2022-11-30.md)
Memory leaks occurred when using Spring utility classes due to insufficient understanding of general Spring knowledge and various system operations. Through the root cause analysis and resolution of this issue, I also learned about operational aspects of Redis configuration.
:::

::: warning [WebSocket Connection Issues on Browser Refresh](https://github.com/kdevkr/mambo-box/blob/main/errors/2023-11-30.md)
In a STOMP + SockJS based WebSocket configuration, connection issues occurred when users refreshed their browsers. While analyzing and resolving this issue, I learned that symptoms can vary depending on the position of Nginx directive declarations.
:::

::: info [NLB ALPN Policy Not Applied in VDI Environment](https://github.com/kdevkr/mambo-box/blob/main/errors/2022-02-14.md)
I experienced HTTPS and HTTP/2 connection issues due to ALPN policies in Company S's AWS VDI environment (configured for security reasons). While I didn't implement the solution directly, the customer's infrastructure team found clues and provided alternative solutions.
:::

::: info [Cause of Build Information API Not Being Registered](https://github.com/kdevkr/mambo-box/blob/main/errors/2023-03-21.md)
I resolved an issue where the build information API through Spring Actuator endpoints wasn't working as intended. This was due to the execution order of Spring Boot's auto-configuration and bean registration annotations, which I analyzed and resolved.
::: 

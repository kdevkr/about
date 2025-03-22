# Problem Solving Experience

I believe that for developers, **experiencing the process of analyzing and solving various system problems** is more important than one might think. While software engineering perspective states that **analysis and design are based on clear requirements**, in reality, even domain experts with extensive experience often have unclear information. The more unclear the domain and requirements are, the higher the possibility that the system will have inherent unsafe defects.

::: tip Understanding Business Domain
Knowledge of development alone is not enough; understanding of the business domain is essential. To understand customer requirements, **background knowledge of the domain area is often necessary**. We need to **consider uncertain or omitted parts** of the customer's requirements and **minimize the possibility of system problems** by creating and suggesting various directions and alternatives.
:::

Knowledge of not only backend but also frontend and infrastructure is necessary to respond minimally to various system problems, and knowing relevant keywords is essential to analyze the cause of problems and select optimal solutions. Therefore, for many problems that I don't experience in my current organization, I try to refer to **troubleshooting posts and videos** shared by numerous developers and IT companies.

---

To become a developer who creates better systems, or to complement areas that I can't properly organize through work, I document problem-solving and cause analysis content on [GitHub](https://github.com/kdevkr) or my [personal blog](https://kdevkr.github.io).

Here are some representative troubleshooting records:

::: danger [TCP Socket Handle Leak Issue](https://github.com/kdevkr/mambo-box/blob/main/errors/2022-12-08.md)
While implementing a connection pool for time-series database communication, there was insufficient implementation due to not thoroughly examining the interface and documentation required by the Apache Commons Pool2 library. This led to TCP socket connection leaks, which were resolved through root cause analysis.
:::

::: danger [Gradual Increase in Redis Memory Usage](https://github.com/kdevkr/mambo-box/blob/main/errors/2022-11-30.md)
A memory leak issue occurred due to using Spring utility classes without proper understanding of general Spring knowledge and various system operations. This experience includes the root cause analysis and resolution. Through this, I also learned about setting operational aspects of Redis.
:::

::: warning [WebSocket Connection Issue on Web Page Refresh](https://github.com/kdevkr/mambo-box/blob/main/errors/2023-11-30.md)
Experience with analyzing and resolving WebSocket connection issues in STOMP + SockJS setup when users refresh their browsers. Through this issue, I learned that symptoms can vary depending on the location of Nginx directive declarations.
:::

::: info [NLB ALPN Policy Not Applied in VDI Environment](https://github.com/kdevkr/mambo-box/blob/main/errors/2022-02-14.md)
Experience with HTTPS and HTTP/2 connection issues due to ALPN policy in Company S's AWS VDI environment, set up for security reasons. While I didn't directly implement the fix, the customer's infrastructure team found the clue and provided an alternative solution.
:::

::: info [Reason for Build Info API Not Being Registered](https://github.com/kdevkr/mambo-box/blob/main/errors/2023-03-21.md)
Experience resolving an issue where the build information API through Spring Actuator endpoints wasn't working as intended due to the order of Spring Boot's auto-configuration and bean registration annotations.
::: 

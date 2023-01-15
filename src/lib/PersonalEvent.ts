export interface PersonalEvent {
    date: Date;
    title: string;
    subtitle?: string;
    description?: string;
    tags: string[];
    link?: string | { [name: string]: string };
    isBreakingEvent: boolean;
}


const history: PersonalEvent[] = [
    {
        isBreakingEvent: false,
        date: new Date(),
        title: "I'm working on something right now :-)",
        tags: []
    },
    {
        isBreakingEvent: false,
        date: new Date("2022-12"),
        title: "Speaker: Testing Kubernetes Controller",
        subtitle: "if(kakao)dev 2022, KakaoCorp",
        description: "Kakao is developing and using various controllers that operate on Kubernetes. These controllers enable Kubernetes to handle various resources such as Loadbalancer, DNS, ACLs, and Vault, but a bug in the controller can have fatal consequences for all services operating in the same cluster, requiring simple logic and high reliability. This session will cover how this controller can be developed testably.",
        link: {
            "Session": "https://if.kakao.com/2022/session/51",
        },
        tags: ["KakaoCorp", "Speaker"]
    },
    {
        isBreakingEvent: false,
        date: new Date("2022-11-01"),
        title: "Speaker: Addressing On-Call Issues Coming from over 7,000 Clusters",
        subtitle: "OpenInfra & Cloud Native Days Korea",
        description: "Korean session of 'Surviving From Endless Issues Coming From 7K+ Kubernetes Clusters'",
        link: {
            "Session": "https://2022.openinfradays.kr/session/21",
        },
        tags: ["KakaoCorp", "Speaker"]
    },
    {
        isBreakingEvent: false,
        date: new Date("2022-10"),
        title: "Speaker: Surviving From Endless Issues Coming From 7K+ Kubernetes Clusters",
        subtitle: "KubeCon + CloudNativeCon North America 2022, Linux Foundation",
        description: "Kakao is the 'mobile life platform' company dedicated to renewing daily lives and the leading player in the mobile messenger market in South Korea. As a member of the private Kubernetes as a Service team at Kakao Corp, we have seen an impressive expansion of the service which was 2K clusters with 20K nodes last year to be a 7K+ clusters with 100K+ nodes. With an unprecedented growing number of the clusters in our service, we have faced several problems never met before. One of them is an ever-growing number of on-call issues that are barely manageable with a DevOps team consisting of a small group of developers. In this session, we are going to reveal the secret of how the small team could successfully survive from endless issues generated from 7K+ Kubernetes clusters. We will also illustrate what tools we have made and why we opensource some of them.",
        link: {
            "Session": "https://kccncna2022.sched.com/event/182G8/surviving-from-endless-issues-coming-from-7k-kubernetes-clusters-wanhae-lee-seok-yong-hong-kakao-corp",
            "Credly": "https://www.credly.com/badges/134bfd64-f30c-487f-aa86-259184e9415d/linked_in_profile",
        },
        tags: ["KakaoCorp", "Speaker"]
    },
    {
        isBreakingEvent: false,
        date: new Date("2022-04"),
        title: "Exploring the Community of Older Adult Viewers on YouTube",
        subtitle: "Universal Access in the Information Society Sep 2022",
        description: "Jihyun Lee, Suin Gwak, Joonho Gwon, Jihyeon Park, Sowon Eom, Seoyoung Hong, Gahyun Ku, Wanhae Lee, and Hyunggu Jung",
        link: {
            "Springer Link": "https://link.springer.com/article/10.1007/s10209-022-00918-3"
        },
        tags: ["HCAIL", "Publication"],
    },
    {
        isBreakingEvent: false,
        date: new Date("2021-04"),
        title: "CKA: Certified Kubernetes Administrator",
        subtitle: "Issued by The Linux Foundation",
        description: "Earners of this designation demonstrated the skills, knowledge and competencies to perform the responsibilities of a Kubernetes Administrator. Earners demonstrated proficiency in Application Lifecycle Management, Installation, Configuration & Validation, Core Concepts, Networking, Scheduling, Security, Cluster Maintenance, Logging / Monitoring, Storage, and Troubleshooting",
        link: {
            "Credly": "https://www.credly.com/badges/3b00811d-2ff7-429a-8460-94c54c685519?source=linked_in_profile",
        },
        tags: ["KakaoCorp", "Certification"]
    },
    {
        isBreakingEvent: false,
        date: new Date("2021-04"),
        title: "University Innovation Support Project Scholarship",
        subtitle: "by conducting a research project in the winter 2020.",
        tags: ["Univ of Seoul", "Project", "Scholarship"]
    },
    {
        isBreakingEvent: false,
        date: new Date("2020-08"),
        title: "DALT: Deep Learning Assisted Labeling Task",
        subtitle: "In Proceedings of the 2020 Summer Conference of the Korea Multimedia Society Aug 2020",
        description: "Wanhae Lee, and Hyunggu Jung",
        link: {
            "PDF": "https://hcail.uos.ac.kr/assets/pdf/papers/2020/kmms20-wlee.pdf",
        },
        tags: ["HCAIL", "Publication"],
    },
    {
        isBreakingEvent: false,
        date: new Date("2020-07"),
        title: "Uncovering CHI Reviewers Needs and Barriers",
        subtitle: "In Proceedings of the 2020 Symposium on Emerging Research from Asia and on Asian Contexts and Cultures Apr 2020",
        description: "Wanhae Lee, Minji Kwon, Yewon Hyun, Jihyun Lee, Joonho Gwon, and Hyunggu Jung",
        link: {
            "ACM DL": "https://dl.acm.org/doi/10.1145/3391203.3391218",
        },
        tags: ["HCAIL", "Publication"],
    },
    {
        isBreakingEvent: false,
        date: new Date("2020-07"),
        title: "BYE-TAL: Designing a Smartphone App for Sustainable Self-Healthcare through Design Thinking Process",
        subtitle: "In Proceedings of the 2020 Symposium on Emerging Research from Asia and on Asian Contexts and Cultures Apr 2020",
        description: "Minji Kwon, Jihyun Lee, Wanhae Lee, and Hyunggu Jung",
        link: {
            "ACM DL": "https://dl.acm.org/doi/10.1145/3391203.3391204",
        },
        tags: ["HCAIL", "Publication"],
    },
    {
        isBreakingEvent: false,
        date: new Date("2020-02"),
        title: "Academic Excellence Award",
        subtitle: "issed by University of Seoul",
        tags: ["Univ of Seoul", "Awards", "Scholarship"]
    },
    {
        isBreakingEvent: false,
        date: new Date("2017-08"),
        title: "Academic Excellence Award",
        subtitle: "issed by University of Seoul",
        tags: ["Univ of Seoul", "Awards", "Scholarship"]
    },
    {
        isBreakingEvent: false,
        date: new Date("2017-02"),
        title: "Academic Excellence Award",
        subtitle: "issed by University of Seoul",
        tags: ["Univ of Seoul", "Awards", "Scholarship"]
    },
    {
        isBreakingEvent: false,
        date: new Date("2016-11"),
        title: "Top Award, SemTeulJe (Software Competition)",
        subtitle: "issued by the Department of Computer Science and Engineering, University of Seoul",
        description: "Developed a web service called KeyworD that won a top award. The service, which is targeted at English learners, utilizes data collected from sources such as CNET, CNN, and BBC to visualize the usage of specific vocabulary. It displays information such as how words are used, how often they are used, and which other terms are commonly used with them.",
        tags: ["Univ of Seoul", "Awards", "Project"]
    },
    {
        isBreakingEvent: false,
        date: new Date("2016-08"),
        title: "Seoul Mayor's Award for Excellent Achievement",
        subtitle: "issued by the Seoul Metropolitan City",
        tags: ["Univ of Seoul", "Awards", "Scholarship"]
    },
]

export default history
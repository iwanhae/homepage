export interface PersonalEvent {
    date: Date;
    title: string;
    subtitle?: string;
    description?: string;
    tags: string[];
    link?: string;
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
        isBreakingEvent: true,
        date: new Date("2023-02"),
        title: "Quited from the KakaoCorp",
        subtitle: "as a Software Engineer",
        tags: ["Industrial"]
    },
    {
        isBreakingEvent: true,
        date: new Date("2022-11"),
        title: "Started Research Intern",
        subtitle: "at Human-Centered Artificial Intelligence Lab (HCAIL), under supervision of Prof. Hyunggu Jung.",
        tags: ["Academic"]
    },
    {
        isBreakingEvent: false,
        date: new Date("2022-11"),
        title: "Speaker: KubeCon + CloudNativeCon North America 2022",
        subtitle: "Surviving From Endless Issues Coming From 7K+ Kubernetes Clusters. Issued by The Linux Foundation",
        description: "Earners of this badge are speakers, selected by the KubeCon + CloudNativeCon North America Co-Chairs, who have provided thought-leadership and shared best practices with attendees during their talk(s) at KubeCon + CloudNativeCon North America. They are Open Source and Cloud Native Technology Subject Matter Experts on the topic(s) they presented. Learn more about KubeCon + CloudNativeCon North America at https://bit.ly/2SB8jrk",
        link: "https://www.credly.com/badges/134bfd64-f30c-487f-aa86-259184e9415d/linked_in_profile",
        tags: ["Industrial", "Certification"]
    },
    {
        isBreakingEvent: false,
        date: new Date("2022-04"),
        title: "Exploring the Community of Older Adult Viewers on YouTube",
        subtitle: "Universal Access in the Information Society Sep 2022",
        description: "Jihyun Lee, Suin Gwak, Joonho Gwon, Jihyeon Park, Sowon Eom, Seoyoung Hong, Gahyun Ku, Wanhae Lee, and Hyunggu Jung",
        tags: ["Publication"],
    },
    {
        isBreakingEvent: true,
        date: new Date("2022-02"),
        title: "Graduated from the University of Seoul",
        subtitle: "Bachelor's degree. Computer Science and Engineering",
        tags: []
    },
    {
        isBreakingEvent: false,
        date: new Date("2021-04"),
        title: "CKA: Certified Kubernetes Administrator",
        subtitle: "Issued by The Linux Foundation",
        description: "Earners of this designation demonstrated the skills, knowledge and competencies to perform the responsibilities of a Kubernetes Administrator. Earners demonstrated proficiency in Application Lifecycle Management, Installation, Configuration & Validation, Core Concepts, Networking, Scheduling, Security, Cluster Maintenance, Logging / Monitoring, Storage, and Troubleshooting",
        link: "https://www.credly.com/badges/3b00811d-2ff7-429a-8460-94c54c685519?source=linked_in_profile",
        tags: ["Industrial", "Certification"]
    },
    {
        isBreakingEvent: false,
        date: new Date("2021-04"),
        title: "University Innovation Support Project Scholarship",
        subtitle: "by conducting a research project in the winter 2020.",
        tags: ["Project", "Scholarship"]
    },
    {
        isBreakingEvent: true,
        date: new Date("2020-09"),
        title: "Quited Undergraduate Research Intern",
        subtitle: "at Human-Centered Artificial Intelligence Lab (HCAIL), under supervision of Prof. Hyunggu Jung.",
        tags: ["Academic"]
    },
    {
        isBreakingEvent: true,
        date: new Date("2020-09"),
        title: "Converted to Full-Time Employment at KakaoCorp",
        subtitle: "as a Software Engineer",
        tags: ["Industrial"]
    },
    {
        isBreakingEvent: false,
        date: new Date("2022-04"),
        title: "DALT: Deep Learning Assisted Labeling Task",
        subtitle: "In Proceedings of the 2020 Summer Conference of the Korea Multimedia Society Aug 2020",
        description: "Wanhae Lee, and Hyunggu Jung",
        tags: ["Publication"],
    },
    {
        isBreakingEvent: true,
        date: new Date("2020-07"),
        title: "Started Internship at KakaoCorp",
        subtitle: "Tech Developers. Full-time",
        tags: ["Industrial"]
    },
    {
        isBreakingEvent: false,
        date: new Date("2022-04"),
        title: "Uncovering CHI Reviewers Needs and Barriers",
        subtitle: "In Proceedings of the 2020 Symposium on Emerging Research from Asia and on Asian Contexts and Cultures Apr 2020",
        description: "Wanhae Lee, Minji Kwon, Yewon Hyun, Jihyun Lee, Joonho Gwon, and Hyunggu Jung",
        tags: ["Publication"],
    },
    {
        isBreakingEvent: false,
        date: new Date("2022-04"),
        title: "BYE-TAL: Designing a Smartphone App for Sustainable Self-Healthcare through Design Thinking Process",
        subtitle: "In Proceedings of the 2020 Symposium on Emerging Research from Asia and on Asian Contexts and Cultures Apr 2020",
        description: "Minji Kwon, Jihyun Lee, Wanhae Lee, and Hyunggu Jung",
        tags: ["Publication"],
    },
    {
        isBreakingEvent: false,
        date: new Date("2022-03"),
        title: "Teaching Assistant - Discrete Mathematics",
        subtitle: "Mar 2020 - Jun 2020",
        tags: ["TA"],
    },
    {
        isBreakingEvent: false,
        date: new Date("2020-02"),
        title: "Academic Excellence Award",
        subtitle: "issed by University of Seoul",
        tags: ["Awards", "Scholarship"]
    },
    {
        isBreakingEvent: true,
        date: new Date("2019-11"),
        title: "Started Undergraduate Research Intern",
        subtitle: "at Human-Centered Artificial Intelligence Lab (HCAIL), under supervision of Prof. Hyunggu Jung.",
        tags: ["Academic"]
    },
    {
        isBreakingEvent: true,
        date: new Date("2019-04"),
        title: "Fulfilled My Duty in Military Service",
        subtitle: "as a sergeant",
        tags: []
    },
    {
        isBreakingEvent: false,
        date: new Date("2017-08"),
        title: "Academic Excellence Award",
        subtitle: "issed by University of Seoul",
        tags: ["Awards", "Scholarship"]
    },
    {
        isBreakingEvent: true,
        date: new Date("2017-07"),
        title: "Began Military Service in the Republic of Korea Army (ROKA)",
        subtitle: "as Tactical C4I Operator",
        link: "https://en.wikipedia.org/wiki/Conscription_in_South_Korea#Establishment",
        tags: []
    },
    {
        isBreakingEvent: false,
        date: new Date("2017-02"),
        title: "Academic Excellence Award",
        subtitle: "issed by University of Seoul",
        tags: ["Awards", "Scholarship"]
    },
    {
        isBreakingEvent: false,
        date: new Date("2016-11"),
        title: "Top Award, SemTeulJe (Software Competition)",
        subtitle: "issued by the Department of Computer Science and Engineering, University of Seoul",
        description: "Developed a web service called KeyworD that won a top award. The service, which is targeted at English learners, utilizes data collected from sources such as CNET, CNN, and BBC to visualize the usage of specific vocabulary. It displays information such as how words are used, how often they are used, and which other terms are commonly used with them.",
        tags: ["Awards", "Project"]
    },
    {
        isBreakingEvent: false,
        date: new Date("2016-08"),
        title: "Seoul Mayor's Award for Excellent Achievement",
        subtitle: "issued by the Seoul Metropolitan City",
        tags: ["Awards", "Scholarship"]
    },
    {
        isBreakingEvent: true,
        date: new Date("2016-03"),
        title: "Entered the University of Seoul",
        subtitle: "Major: Computer Science and Engineering",
        tags: []
    }
]

export default history
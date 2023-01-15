import type { TimelineEvent } from "./TimelineEvent";

export interface PersonalExperience {
    startDate: Date;
    endDate?: Date;

    title: string;
    subtitle?: string;
    organization?: string;
    description?: string;

    tags: string[];
    link?: string | { [name: string]: string };
}

export function toTimelineEvent(e: PersonalExperience): TimelineEvent[] {
    const tmp =
    {
        date: e.startDate,
        isBreakingEvent: true,
        title: `[START] ${e.title}`,
        subtitle: `${e.subtitle}, ${e.organization}`,
        description: e.description,
        link: e.link,
        tags: e.tags,
    }
    if (e.endDate !== undefined) {
        return [tmp,
            {
                date: e.endDate,
                isBreakingEvent: true,
                title: `[END] ${e.title}`,
                subtitle: `${e.subtitle}, ${e.organization}`,
                description: e.description,
                link: e.link,
                tags: e.tags,
            },
        ]
    } else {
        return [tmp]
    }

}

const PersonalExperiences: PersonalExperience[] = [
    {
        startDate: new Date("2022-11-23"),

        title: "Research Intern",
        organization: "Human-Centered Artificial Intelligence Lab (HCAIL)",
        subtitle: "Under supervision of Prof. Hyunggu Jung.",


        tags: []
    },
    {
        startDate: new Date("2020-09"),
        endDate: new Date("2023-02"),

        title: "Software Engineer",
        organization: "KakaoCorp",
        subtitle: "Member of Cloud Platform Team",


        tags: []
    },
    {
        startDate: new Date("2020-07"),
        endDate: new Date("2020-08"),

        title: "Tech Developers Internship",
        subtitle: "2020 Kakao Internship",
        organization: "KakaoCorp",

        tags: []
    },
    {
        startDate: new Date("2020-03"),
        endDate: new Date("2020-07"),

        title: "Teaching Assistant",
        organization: "University of Seoul",
        subtitle: "Discrete Mathematics",


        tags: []
    },
    {
        startDate: new Date("2019-10"),
        endDate: new Date("2020-08"),

        title: "Undergraduate Research Intern",
        organization: "Human-Centered Artificial Intelligence Lab (HCAIL)",
        subtitle: "Under supervision of Prof. Hyunggu Jung.",


        tags: []
    },
    {
        startDate: new Date("2017-07"),
        endDate: new Date("2019-04"),

        title: "Tactical C4I Operator",
        organization: "Republic of Korea Army (ROKA)",
        subtitle: "Sergeant",
        description: "Operated Unix and Apache Tomcat based ATCIS(Army Tactical Command Infomation System) server",

        tags: []
    },
    {
        startDate: new Date("2016-03"),
        endDate: new Date("2022-02"),

        title: "Bachelor's degree",
        subtitle: "in Computer Science and Engineering",
        organization: "University of Seoul",

        tags: []
    },
]


export default PersonalExperiences
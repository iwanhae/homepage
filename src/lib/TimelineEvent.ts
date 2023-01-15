export interface TimelineEvent {
    date: Date;
    title: string;
    subtitle?: string;
    description?: string;
    tags: string[];
    link?: string | { [name: string]: string };
    isBreakingEvent: boolean;
}
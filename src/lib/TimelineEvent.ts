export interface TimelineEvent {
    date: Date;
    title: string;
    subtitle?: string;
    description?: string;
    tags: string[];
    link?: string | { [name: string]: string };
    isBreakingEvent: boolean;
}

export const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];

export function toMonthString(d: Date): string {
    return `${monthNames[d.getMonth()]}, ${d.getFullYear()}`
}
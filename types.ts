export type JobProvider = {
    jobProvider: string;
    url: string;
};

export type Job = {
    id: string;
    title: string;
    company: string;
    description: string;
    image: string;
    location: string;
    employmentType: string;
    datePosted: string;
    salaryRange: string;
    jobProviders: JobProvider[];
    type: 'Full-time' | 'Part-time' | 'Contractor';
    category: 'Nearby' | 'Popular';
};
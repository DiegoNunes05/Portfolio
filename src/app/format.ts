import { Experience } from "./components/experience/type";

export const calculateDuration = (startDate: Date, endDate: Date) => {
    const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + 
                  (endDate.getMonth() - startDate.getMonth());
    
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    
    let duration = '';
    if (years > 0) {
        duration += `${years} year${years > 1 ? 's' : ''}`;
        if (remainingMonths > 0) {
            duration += ` ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`;
        }
    } else {
        duration = `${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`;
    }
    return duration;
};

export const formatDates = (experienceData: Experience[]) => {
    const dates: { [key: string]: string } = {};
    experienceData.forEach((exp) => {
        const startDate = new Date(exp.startDate);
        
        if (exp.position) {
            const now = new Date();
            const duration = calculateDuration(startDate, now);
            dates[exp.id] = `Current Position • ${duration}`;
        } else if (exp.endDate) {
            const endDate = new Date(exp.endDate);
            const duration = calculateDuration(startDate, endDate);
            dates[exp.id] = `Past Position • ${duration}`;
        }
    });
    return dates;
};
import { formatDate } from '@angular/common';
export class Doctors {
    constructor(doctors) {
        {
            this.id = doctors.id || this.getRandomID();
            this.img = doctors.avatar || 'assets/images/user/user1.jpg';
            this.name = doctors.name || '';
            this.email = doctors.email || '';
            this.date = formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
            this.specialization = doctors.specialization || '';
            this.mobile = doctors.mobile || '';
            this.department = doctors.department || '';
            this.degree = doctors.degree || '';
        }
    }
    getRandomID() {
        const S4 = () => {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return S4() + S4();
    }
}
//# sourceMappingURL=doctors.model.js.map